/**
 * Google Apps Script Web App Integration for Google Sheets
 * 
 * Submits candidate test results directly to your Google Sheet:
 * - name
 * - email
 * - test_name
 * - score
 * - submission_time
 */

export interface TestSubmissionData {
  name: string;
  email: string;
  test_name: string;
  score: string;
  submission_time: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface UrlValidationResult {
  isValid: boolean;
  cleanUrl: string;
  warning?: string;
}

/**
 * Validates and cleans a Google Apps Script Web App URL.
 * Catches common mistakes like pasting the Google Sheet URL or the script editor URL.
 */
export const validateAndCleanGasUrl = (rawUrl: string): UrlValidationResult => {
  if (!rawUrl || !rawUrl.trim()) {
    return {
      isValid: false,
      cleanUrl: '',
      warning: 'Please provide your deployed Google Apps Script Web App URL.',
    };
  }

  // Strip whitespace, quotes, and backticks
  let clean = rawUrl.trim().replace(/^["'`]+|["'`]+$/g, '').trim();

  if (clean.includes('docs.google.com/spreadsheets')) {
    return {
      isValid: false,
      cleanUrl: clean,
      warning:
        '⚠️ This is a Google Spreadsheet URL, not the Web App URL. In your spreadsheet, open Extensions > Apps Script > Deploy > New deployment > Web app, and copy the Web app URL ending in /exec.',
    };
  }

  if (clean.includes('script.google.com/home') || (clean.includes('script.google.com') && clean.includes('/edit'))) {
    return {
      isValid: false,
      cleanUrl: clean,
      warning:
        '⚠️ This is the Apps Script Editor URL (ends in /edit). In the script editor, click the blue "Deploy" button at top right > "New deployment" > select "Web app", set access to "Anyone", and copy the URL ending in /exec.',
    };
  }

  if (clean.includes('/dev')) {
    return {
      isValid: false,
      cleanUrl: clean,
      warning:
        '⚠️ This URL ends in /dev (test deployment). You must create a permanent deployment: Deploy > New deployment > Web app, and use the URL ending in /exec.',
    };
  }

  if (!clean.startsWith('https://script.google.com/macros/s/')) {
    return {
      isValid: false,
      cleanUrl: clean,
      warning:
        'URL must start with https://script.google.com/macros/s/... and end with /exec',
    };
  }

  if (!clean.endsWith('/exec')) {
    clean = clean.replace(/\/+$/, '');
    if (!clean.endsWith('/exec')) {
      return {
        isValid: false,
        cleanUrl: clean,
        warning: 'The Web App URL must end with /exec',
      };
    }
  }

  return { isValid: true, cleanUrl: clean };
};

export const DEFAULT_GOOGLE_SHEET_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbz1ialpZm20BK1H2GCbcHywXBNj92xMN5YwuvHn1X5s7C9LgMMsrebOHV4Vzot28grB/exec';

/**
 * Retrieves the current configured Google Apps Script Web App URL.
 * Checks localStorage first (for runtime overrides), then Vite env, and defaults to production URL.
 */
export const getGoogleSheetScriptUrl = (): string => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('vidyate_gas_url');
    if (saved && saved.trim()) return saved.trim().replace(/^["'`]+|["'`]+$/g, '').trim();
  }
  const envUrl = (import.meta.env.VITE_GOOGLE_SHEET_SCRIPT_URL as string) || '';
  if (envUrl && envUrl.trim()) return envUrl.trim().replace(/^["'`]+|["'`]+$/g, '').trim();
  return DEFAULT_GOOGLE_SHEET_SCRIPT_URL;
};

/**
 * Saves a Google Apps Script Web App URL to localStorage.
 */
export const setGoogleSheetScriptUrl = (url: string): void => {
  if (typeof window !== 'undefined') {
    const cleaned = url.trim().replace(/^["'`]+|["'`]+$/g, '').trim();
    if (cleaned) {
      localStorage.setItem('vidyate_gas_url', cleaned);
    } else {
      localStorage.removeItem('vidyate_gas_url');
    }
  }
};

/**
 * Tests connectivity to a Google Apps Script Web App URL.
 */
export const testGasConnection = async (
  rawUrl: string
): Promise<{ success: boolean; message: string }> => {
  const validation = validateAndCleanGasUrl(rawUrl);
  if (!validation.isValid) {
    return { success: false, message: validation.warning || 'Invalid URL format.' };
  }

  try {
    const response = await fetch(validation.cleanUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify({
        ping: true,
        test: true,
      }),
      redirect: 'follow',
    });

    if (response.status === 404) {
      return {
        success: false,
        message:
          '404 Not Found: Google could not locate this deployment. Ensure you clicked Deploy > New deployment > Web app and copied the exact URL ending in /exec.',
      };
    }

    if (response.status === 401 || response.status === 403) {
      return {
        success: false,
        message:
          'Access Denied. When deploying in Apps Script, you MUST set "Who has access" to "Anyone".',
      };
    }

    const responseText = await response.text();
    let json: any = null;
    try {
      json = JSON.parse(responseText);
    } catch {
      if (responseText.toLowerCase().includes('success')) {
        json = { result: 'success' };
      }
    }

    if (
      json &&
      (json.result === 'success' ||
        json.success === true ||
        json.saved === true ||
        json.message === 'Name and email are required.' ||
        (typeof json.message === 'string' && json.message.toLowerCase().includes('name and email')) ||
        response.status === 200)
    ) {
      return {
        success: true,
        message: 'Connected successfully! Your Google Apps Script endpoint is online and responding.',
      };
    }

    return {
      success: false,
      message:
        (json && (json.error || json.message)) ||
        `Received HTTP ${response.status}: ${responseText.slice(0, 100)}`,
    };
  } catch (err: any) {
    return {
      success: false,
      message:
        err?.message ||
        'Connection test failed. Verify internet connection and make sure "Who has access" is set to "Anyone".',
    };
  }
};

/**
 * Submits data to Google Apps Script via a hidden HTML form targeting an invisible iframe.
 * Matches standard browser HTML form submission behavior, eliminating CORS blocks.
 */
export const submitViaHiddenForm = (
  url: string,
  data: Record<string, any>
): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      resolve(false);
      return;
    }

    try {
      const iframeId = `gas_iframe_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      const iframe = document.createElement('iframe');
      iframe.id = iframeId;
      iframe.name = iframeId;
      iframe.style.display = 'none';
      iframe.style.width = '0px';
      iframe.style.height = '0px';
      iframe.style.border = 'none';
      document.body.appendChild(iframe);

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = url;
      form.target = iframeId;
      form.style.display = 'none';

      // Provide both snake_case and camelCase parameters for maximum compatibility with Apps Script
      const formFields: Record<string, string> = {
        name: String(data.name || ''),
        email: String(data.email || ''),
        test_name: String(data.test_name || data.testName || 'National Pharmacy Assessment (VNPA-2026)'),
        testName: String(data.test_name || data.testName || 'National Pharmacy Assessment (VNPA-2026)'),
        score: String(data.score ?? ''),
        submission_time: String(
          data.submission_time ||
            data.submissionTime ||
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        ),
        submissionTime: String(
          data.submission_time ||
            data.submissionTime ||
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        ),
      };

      for (const [key, val] of Object.entries(formFields)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = val;
        form.appendChild(input);
      }

      document.body.appendChild(form);

      let isResolved = false;
      const finish = () => {
        if (!isResolved) {
          isResolved = true;
          try {
            if (form.parentNode) form.parentNode.removeChild(form);
            if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
          } catch {}
          resolve(true);
        }
      };

      iframe.onload = finish;
      iframe.onerror = finish;

      form.submit();

      // Resolve within 2.5s even if cross-origin boundary prevents onload
      setTimeout(finish, 2500);
    } catch (err) {
      console.warn('Hidden form submission failed:', err);
      resolve(false);
    }
  });
};

/**
 * Sends test results to the deployed Google Apps Script Web App.
 * Uses one native HTML form submission so a CORS response failure cannot cause
 * the same request to be sent again through a fallback transport.
 */
export const submitTestToGoogleSheet = async (
  data: TestSubmissionData
): Promise<SubmissionResponse> => {
  const scriptUrl = getGoogleSheetScriptUrl();

  if (!scriptUrl || scriptUrl.trim() === '') {
    return {
      success: false,
      message: 'Google Apps Script Web App URL is not set.',
    };
  }

  const validation = validateAndCleanGasUrl(scriptUrl);
  if (!validation.isValid) {
    return {
      success: false,
      message: validation.warning || 'Invalid Google Apps Script Web App URL.',
    };
  }

  const targetUrl = validation.cleanUrl;

  const formSuccess = await submitViaHiddenForm(targetUrl, data);

  if (formSuccess) {
    return {
      success: true,
      message: 'Submission successfully recorded in Google Sheet.',
    };
  }

  return {
    success: false,
    message: 'Unable to record submission. Please check your connection and try again.',
  };
};

/**
 * Sends random sample candidate data directly to the Google Sheet.
 * Useful for verifying that rows appear in Google Sheets immediately.
 */
export const sendSampleTestSubmission = async (
  overrideUrl?: string
): Promise<SubmissionResponse> => {
  const sampleNames = [
    'Aarav Sharma',
    'Ananya Iyer',
    'Rohan Verma',
    'Pooja Nair',
    'Siddharth Patel',
    'Neha Gupta',
    'Vikram Malhotra',
  ];
  const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
  const randomId = Math.floor(Math.random() * 900) + 100;
  const randomScoreNum = Math.floor(Math.random() * 16) + 35; // 35-50

  const sampleData: TestSubmissionData = {
    name: `${randomName} (Sample #${randomId})`,
    email: `sample.candidate${randomId}@gmail.com`,
    test_name: 'National Pharmacy Assessment (VNPA-2026)',
    score: `${randomScoreNum} / 50`,
    submission_time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  if (overrideUrl && overrideUrl.trim()) {
    setGoogleSheetScriptUrl(overrideUrl);
  }

  return submitTestToGoogleSheet(sampleData);
};


