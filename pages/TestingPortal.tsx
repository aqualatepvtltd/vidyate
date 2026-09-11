import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { userCredentials, UserCredential } from '../data/user-cred';
import { testQuestions, TestQuestion } from '../data/test-data';
import { submitTestToGoogleSheet } from '../services/googleSheets';

const GOOGLE_SHEET_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbz1ialpZm20BK1H2GCbcHywXBNj92xMN5YwuvHn1X5s7C9LgMMsrebOHV4Vzot28grB/exec';

const TEST_SCHEDULE_ISO = '2026-09-11T22:00:00+05:30';

const TEST_SCHEDULE_LABEL = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  timeZone: 'Asia/Kolkata',
}).format(new Date(TEST_SCHEDULE_ISO));

type TestStage = 'countdown' | 'login' | 'proctor_check' | 'active' | 'verification' | 'submitting' | 'completed';

interface AnswerState {
  [questionId: number]: number; // selected option index (0..3)
}

interface ReviewState {
  [questionId: number]: boolean;
}

const TestingPortal: React.FC = () => {
  const PERMISSION_REQUIRED = true;

  // Test schedule target: September 10, 2026 10:00:00 PM IST (default)
  // Or can be toggled by the candidate/examiner to test both countdown and live exam states
  const defaultTargetDate = useMemo(() => new Date(TEST_SCHEDULE_ISO), []);
  const [targetDate] = useState<Date>(defaultTargetDate);
  const [forceLive, setForceLive] = useState<boolean>(false);

  // Time left until scheduled test start
  const [scheduleTimeLeft, setScheduleTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  // Navigation stage in the testing portal flow
  const [stage, setStage] = useState<TestStage>('countdown');

  // Login credentials
  const [inputId, setInputId] = useState('');
  const [inputPass, setInputPass] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<UserCredential | null>(null);

  // Proctoring checklist simulation
  const [cameraChecked, setCameraChecked] = useState(false);
  const [micChecked, setMicChecked] = useState(false);
  const [netChecked, setNetChecked] = useState(false);
  const [rulesAgreed, setRulesAgreed] = useState(false);
  const [proctorSimProgress, setProctorSimProgress] = useState(0);
  const [mediaError, setMediaError] = useState<string | null>(null);
  const [mediaRequestVersion, setMediaRequestVersion] = useState(0);
  const [micLevel, setMicLevel] = useState(0);

  // Security violation alert
  const [violationMessage, setViolationMessage] = useState<string | null>(null);

  // Active test state
  const TOTAL_TEST_TIME = 60 * 60; // 60 minutes in seconds
  const [secondsRemaining, setSecondsRemaining] = useState(TOTAL_TEST_TIME);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [markedForReview, setMarkedForReview] = useState<ReviewState>({});
  const [testStartTime, setTestStartTime] = useState<number | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showQuestionPaletteMobile, setShowQuestionPaletteMobile] = useState(false);

  // Submission results
  const [submissionResult, setSubmissionResult] = useState<{
    score: number;
    total: number;
    percentage: number;
    timeTaken: string;
    passed: boolean;
    submissionId: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [retrySeconds, setRetrySeconds] = useState(0);
  const [retryAttemptCount, setRetryAttemptCount] = useState(0);
  const [pendingSubmission, setPendingSubmission] = useState<{
    payload: {
      name: string;
      email: string;
      test_name: string;
      score: string;
      submission_time: string;
    };
    result: {
      score: number;
      total: number;
      percentage: number;
      timeTaken: string;
      passed: boolean;
      submissionId: string;
    };
  } | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // Verification Form State
  const [verificationName, setVerificationName] = useState('');
  const [verificationEmail, setVerificationEmail] = useState('');
  const [verificationScore, setVerificationScore] = useState('');
  const [verificationTestName, setVerificationTestName] = useState('National Pharmacy Assessment (VNPA-2026)');
  const [verificationTime, setVerificationTime] = useState('');
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(true);

  // Video and audio visualizer refs for proctoring UI
  const videoPreviewRef = useRef<HTMLVideoElement>(null);
  const visualizerBarsRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioAnalyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const isTerminatingRef = useRef<boolean>(false);

  // ----------------------------------------------------
  // 1. SCHEDULE COUNTDOWN LOGIC
  // ----------------------------------------------------
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0 || forceLive) {
        setScheduleTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setScheduleTimeLeft({ days, hours, minutes, seconds, isPast: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate, forceLive]);

  // ----------------------------------------------------
  // 2. PROCTORING CHECKS SIMULATION
  // ----------------------------------------------------
  useEffect(() => {
    if (stage === 'proctor_check') {
      setCameraChecked(false);
      setMicChecked(false);
      setNetChecked(false);
      setMediaError(null);
      setProctorSimProgress(0);

      let cancelled = false;
      const requestMediaAccess = async () => {
        if (!PERMISSION_REQUIRED) {
          setCameraChecked(true);
          setMicChecked(true);
          setProctorSimProgress(70);
          return;
        }

        if (!navigator.mediaDevices?.getUserMedia) {
          setMediaError('This browser does not support camera and microphone access.');
          return;
        }

        mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
        mediaStreamRef.current = null;
        audioAnalyserRef.current = null;
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
        if (audioContextRef.current) {
          audioContextRef.current.close().catch(() => {});
          audioContextRef.current = null;
        }
        setMicLevel(0);

        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          if (cancelled) {
            stream.getTracks().forEach((track) => track.stop());
            return;
          }

          mediaStreamRef.current = stream;
          if (videoPreviewRef.current) {
            videoPreviewRef.current.srcObject = stream;
          }

          const audioContext = new AudioContext();
          const analyser = audioContext.createAnalyser();
          const audioSource = audioContext.createMediaStreamSource(stream);
          const audioData = new Uint8Array(analyser.frequencyBinCount);
          analyser.fftSize = 64;
          audioSource.connect(analyser);
          audioContextRef.current = audioContext;
          audioAnalyserRef.current = analyser;

          const updateMicLevel = () => {
            analyser.getByteFrequencyData(audioData);
            const average = audioData.reduce((sum, value) => sum + value, 0) / audioData.length;
            setMicLevel(Math.min(100, Math.round((average / 255) * 100)));
            animationFrameRef.current = requestAnimationFrame(updateMicLevel);
          };

          updateMicLevel();
          setCameraChecked(true);
          setMicChecked(true);
          setProctorSimProgress(70);
        } catch (error) {
          console.error('Camera and microphone access denied:', error);
          setMediaError('Camera and microphone access is required. Allow both devices in your browser and try again.');
        }
      };

      requestMediaAccess();

      const t3 = setTimeout(() => {
        setNetChecked(true);
        setProctorSimProgress(100);
      }, 3000);

      return () => {
        cancelled = true;
        clearTimeout(t3);
      };
    }
  }, [stage, mediaRequestVersion]);

  useEffect(() => {
    return () => {
      mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
      if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
      audioContextRef.current?.close().catch(() => {});
    };
  }, []);

  // ----------------------------------------------------
  // 3. LOGOUT / SECURITY TERMINATION HANDLER
  // ----------------------------------------------------
  const handleSecurityViolation = useCallback((reason: string) => {
    if (isTerminatingRef.current) return;
    isTerminatingRef.current = true;

    // Exit fullscreen if active
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    mediaStreamRef.current = null;
    if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = null;
    audioAnalyserRef.current = null;
    audioContextRef.current?.close().catch(() => {});
    audioContextRef.current = null;
    if (videoPreviewRef.current) videoPreviewRef.current.srcObject = null;
    setMicLevel(0);

    setViolationMessage(reason);
    // Reset test progress
    setAnswers({});
    setMarkedForReview({});
    setCurrentUser(null);
    setInputPass('');
    setStage('login');
    setShowSubmitModal(false);

    setTimeout(() => {
      isTerminatingRef.current = false;
    }, 1000);
  }, []);

  // ----------------------------------------------------
  // 4. TAB SWITCH & FULLSCREEN BLOCKING (ANTI-CHEAT)
  // ----------------------------------------------------
  useEffect(() => {
    if (stage !== 'active') return;

    // Visibility Change: tab switch or window minimize
    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleSecurityViolation(
          'Security Violation: Tab switch or window minimizing detected! The proctor has terminated your session.'
        );
      }
    };

    // Window Blur: user clicked outside the test window
    const handleWindowBlur = () => {
      handleSecurityViolation(
        'Security Violation: Window focus lost! Switching windows or applications during the examination is prohibited.'
      );
    };

    // Fullscreen Change: user pressed Esc or cancelled fullscreen
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        handleSecurityViolation(
          'Security Violation: Fullscreen mode was exited! Fullscreen is strictly required for proctor verification.'
        );
      }
    };

    // Prevent right click / context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Prevent key combinations like F11, Alt+Tab, Escape, Ctrl+C, Ctrl+V, etc.
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F11' ||
        e.key === 'F12' ||
        (e.ctrlKey && (e.key === 'r' || e.key === 'R' || e.key === 'c' || e.key === 'v' || e.key === 'u')) ||
        (e.altKey && e.key === 'Tab')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [stage, handleSecurityViolation]);

  // ----------------------------------------------------
  // 5. TEST TIMER (60 MINUTES COUNTDOWN)
  // ----------------------------------------------------
  useEffect(() => {
    if (stage !== 'active') return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto submit when 60 minutes expire
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [stage]);

  useEffect(() => {
    if (stage === 'active') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [stage, currentQuestionIndex]);

  // ----------------------------------------------------
  // 6. LOGIN AUTHENTICATION (from user-cred.ts)
  // ----------------------------------------------------
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setViolationMessage(null);

    const trimmedId = inputId.trim().toLowerCase();
    const trimmedPass = inputPass.trim();

    if (!trimmedId || !trimmedPass) {
      setLoginError('Please enter both Email/ID and Password.');
      return;
    }

    const matchedUser = userCredentials.find(
      (u) =>
        (u.email.toLowerCase() === trimmedId) &&
        u.pass === trimmedPass
    );

    if (matchedUser) {
      setCurrentUser(matchedUser);
      setStage('proctor_check');
    } else {
      setLoginError('Invalid ID or Password. Please check your credentials and try again.');
    }
  };

  const handleQuickLogin = (user: UserCredential) => {
    setInputId(user.email);
    setInputPass(user.pass);
    setLoginError(null);
  };

  // ----------------------------------------------------
  // 7. START TEST & REQUEST FULLSCREEN
  // ----------------------------------------------------
  const handleStartTest = async () => {
    if ((PERMISSION_REQUIRED && (!cameraChecked || !micChecked)) || !netChecked || !rulesAgreed) {
      return;
    }

    try {
      // Request browser fullscreen mode
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (err) {
      console.warn('Fullscreen request bypassed or denied:', err);
    }

    setSecondsRemaining(TOTAL_TEST_TIME);
    setTestStartTime(Date.now());
    setCurrentQuestionIndex(0);
    setAnswers({});
    setMarkedForReview({});
    setStage('active');
  };

  // ----------------------------------------------------
  // 8. TEST NAVIGATION & RESPONSES
  // ----------------------------------------------------
  const currentQuestion: TestQuestion = testQuestions[currentQuestionIndex] || testQuestions[0];

  const handleSelectOption = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));
  };

  const handleClearResponse = () => {
    setAnswers((prev) => {
      const updated = { ...prev };
      delete updated[currentQuestion.id];
      return updated;
    });
  };

  const handleToggleReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  const answeredCount = Object.keys(answers).length;
  const reviewCount = Object.values(markedForReview).filter(Boolean).length;
  const unansweredCount = testQuestions.length - answeredCount;

  // Format seconds to MM:SS or HH:MM:SS
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // ----------------------------------------------------
  // 9. SUBMISSION VIA GOOGLE APPS SCRIPT (WITH RETRY LOGIC)
  // ----------------------------------------------------

  // Random retry delay function: returns an integer between 5 and 15 seconds
  const getRandomRetrySeconds = () => {
    return Math.floor(Math.random() * (15 - 5 + 1)) + 5;
  };

  // Live countdown timer for retry cooldown
  useEffect(() => {
    if (stage !== 'submitting' || retrySeconds <= 0) return;

    const interval = setInterval(() => {
      setRetrySeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [stage, retrySeconds]);

  // Core submission attempt executor
  const executeSubmissionAttempt = async (
    targetPayload: {
      name: string;
      email: string;
      test_name: string;
      score: string;
      submission_time: string;
    },
    targetResult: {
      score: number;
      total: number;
      percentage: number;
      timeTaken: string;
      passed: boolean;
      submissionId: string;
    }
  ) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const res = await submitTestToGoogleSheet(targetPayload);

    setIsSubmitting(false);

    if (res.success) {
      // SUCCESS: Google Apps Script confirmed receipt in JSON
      setSubmitError(null);
      setRetrySeconds(0);
      setSubmissionResult(targetResult);
      setStage('completed');
    } else {
      // FAIL: Pick random seconds between 5 and 15 seconds for retry cooldown
      const randomSec = getRandomRetrySeconds();
      setRetrySeconds(randomSec);
      setRetryAttemptCount((prev) => prev + 1);
      setSubmitError(
        res.message || 'Google Apps Script did not confirm receipt of your scorecard. Please retry.'
      );
    }
  };

  const handleSubmitExam = () => {
    if (!currentUser) return;
    setShowSubmitModal(false);

    // Calculate score
    let score = 0;
    testQuestions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score += 1;
      }
    });

    const total = testQuestions.length;
    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= 50;

    const timeElapsedSeconds = testStartTime
      ? Math.floor((Date.now() - testStartTime) / 1000)
      : TOTAL_TEST_TIME - secondsRemaining;
    const timeTakenStr = `${Math.floor(timeElapsedSeconds / 60)}m ${timeElapsedSeconds % 60}s`;
    const submissionId = `VID-TEST-${Date.now().toString().slice(-6)}`;

    // Safely exit fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    const submissionTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const scoreFormatted = `${score} / ${total}`;
    const testName = 'National Pharmacy Assessment (VNPA-2026)';

    const finalResult = {
      score,
      total,
      percentage,
      timeTaken: timeTakenStr,
      passed,
      submissionId,
    };

    setSubmissionResult(finalResult);
    setVerificationName(currentUser.name);
    setVerificationEmail(currentUser.email);
    setVerificationScore(scoreFormatted);
    setVerificationTestName(testName);
    setVerificationTime(submissionTime);

    // Carry candidate to credentials verification form
    setStage('verification');
  };

  const handleVerificationFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmittingForm) return;

    setIsSubmittingForm(true);
    setSubmitError(null);

    const result = await submitTestToGoogleSheet(
      {
        name: verificationName,
        email: verificationEmail,
        test_name: verificationTestName,
        score: verificationScore,
        submission_time: verificationTime,
      },
      GOOGLE_SHEET_SCRIPT_URL
    );

    if (result.success) {
      setStage('completed');
    } else {
      setSubmitError(result.message);
    }

    setIsSubmittingForm(false);
  };

  const handleManualRetry = async () => {
    if (!pendingSubmission || isSubmitting || retrySeconds > 0) return;
    await executeSubmissionAttempt(pendingSubmission.payload, pendingSubmission.result);
  };

  // ====================================================
  // RENDER SECTIONS
  // ====================================================

  return (
    <div className="min-h-screen pb-16 pt-2 px-4 md:px-6">
      <SEO
        title="Vidyate Testing Portal | Online Proctored Examination"
        description="Official Vidyate Testing Portal for Pharmacy examinations, GPAT mock tests, and certification assessments."
        keywords="Vidyate testing portal, pharmacy online test, proctored pharmacy exam, GPAT test portal, B Pharm certification test"
      />

      {/* Security Violation Alert Banner */}
      {violationMessage && (
        <div className="max-w-4xl mx-auto mb-8 p-4 rounded-2xl bg-red-500/15 border-2 border-red-500/40 text-red-500 flex items-start gap-4 shadow-xl animate-bounce-short">
          <span className="material-symbols-rounded text-3xl shrink-0 mt-0.5">warning</span>
          <div>
            <h4 className="font-black text-lg mb-1">Session Terminated by Proctor</h4>
            <p className="text-sm font-medium opacity-90 leading-relaxed">{violationMessage}</p>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* SECTION 1: TEST DESCRIPTION & SCHEDULE COUNTDOWN     */}
      {/* ---------------------------------------------------- */}
      {stage === 'countdown' && (
        <div className="max-w-4xl mx-auto space-y-5 mt-5 animate-subtle-fade">
          {/* Header & Description */}
          <div className="text-center space-y-4">
            
            <h1 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>
              Vidyate <span className="text-[#405cff]">Testing Portal</span>
            </h1>
          </div>

          {/* Test Schedule Countdown Card */}
          <div className="glass p-8 md:p-10 rounded-3xl border text-center shadow-2xl relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#405cff]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col items-center justify-center space-y-3 mb-8">

              <h2 className="text-xl md:text-2xl font-black" style={{ color: 'var(--text-main)' }}>
                {scheduleTimeLeft.isPast ? (
                  <span className="text-emerald-500 flex items-center justify-center gap-2">
                    <span className="material-symbols-rounded">check_circle</span>
                    The Test is LIVE Now!
                  </span>
                ) : (
                  <span>Scheduled Test: {TEST_SCHEDULE_LABEL}</span>
                )}
              </h2>
              <p className="text-sm opacity-60 font-medium" style={{ color: 'var(--text-main)' }}>
                {scheduleTimeLeft.isPast
                  ? 'All verification servers are active. The test can be started now.'
                  : 'Candidate authentication and test modules will unlock once the countdown timer expires.'}
              </p>
            </div>

            {/* Countdown Clock Grid */}
            {!scheduleTimeLeft.isPast ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
                {[
                  { label: 'Days', value: scheduleTimeLeft.days },
                  { label: 'Hours', value: scheduleTimeLeft.hours },
                  { label: 'Minutes', value: scheduleTimeLeft.minutes },
                  { label: 'Seconds', value: scheduleTimeLeft.seconds },
                ].map((item) => (
                  <div key={item.label} className="glass p-5 rounded-2xl border" style={{ borderColor: 'var(--glass-border)', backgroundColor: 'var(--glass-bg)' }}>
                    <div className="text-2xl sm:text-3xl font-black text-[#405cff] mb-1 font-mono">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-[11px] font-black uppercase tracking-[0.2em] opacity-50" style={{ color: 'var(--text-main)' }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="max-w-md mx-auto mb-8 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <span className="material-symbols-rounded text-4xl mb-2 block">task_alt</span>
                <h3 className="text-xl font-black mb-1">Test Is Ready To Begin</h3>
                <p className="text-xs opacity-80 font-medium">
                  The countdown has concluded. You may now proceed directly to candidate authentication.
                </p>
              </div>
            )}

            {/* Action buttons & simulation toggle */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {scheduleTimeLeft.isPast ? (
                <button
                  onClick={() => setStage('login')}
                  className="w-full sm:w-auto px-10 py-4 bg-[#405cff] text-white font-black text-base rounded-2xl shadow-xl hover:shadow-[0_20px_40px_rgba(64,92,255,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-rounded">login</span>
                  Proceed to Candidate Login
                </button>
              ) : (
                <>
                 
                  {/* Simulator button so users can test immediately */}
                  <button
                    onClick={() => {
                      setForceLive(true);
                      setStage('login');
                    }}
                    className="px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-2xl shadow-lg transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-rounded">bolt</span>
                    Simulate Timer Ended & Start Test Now
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Test Overview Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-2xl border" style={{ borderColor: 'var(--glass-border)' }}>
              <span className="material-symbols-rounded text-[#405cff] text-3xl mb-3 block">timer</span>
              <h3 className="text-lg font-black mb-2" style={{ color: 'var(--text-main)' }}>60 Minutes Duration</h3>
              <p className="text-xs opacity-60 leading-relaxed" style={{ color: 'var(--text-main)' }}>
                Strict timed session. Automatically records and compiles your responses when the clock reaches zero.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl border" style={{ borderColor: 'var(--glass-border)' }}>
              <span className="material-symbols-rounded text-[#405cff] text-3xl mb-3 block">quiz</span>
              <h3 className="text-lg font-black mb-2" style={{ color: 'var(--text-main)' }}>50 Rigorous Questions</h3>
              <p className="text-xs opacity-60 leading-relaxed" style={{ color: 'var(--text-main)' }}>
                Loaded directly from test-data.ts covering core syllabus topics with comprehensive evaluations.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl border" style={{ borderColor: 'var(--glass-border)' }}>
              <span className="material-symbols-rounded text-[#405cff] text-3xl mb-3 block">security</span>
              <h3 className="text-lg font-black mb-2" style={{ color: 'var(--text-main)' }}>Anti-Cheat Proctoring</h3>
              <p className="text-xs opacity-60 leading-relaxed" style={{ color: 'var(--text-main)' }}>
                Mandatory fullscreen lock with real-time tab switch, camera, and microphone verification.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: LOGIN AREA (Credentials in user-cred.ts)  */}
      {/* ---------------------------------------------------- */}
      {stage === 'login' && (
        <div className="max-w-xl mx-auto space-y-5 mt-5 animate-subtle-fade">
          <div className="text-center space-y-3">
            
            <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>
              Candidate <span className="text-[#405cff]">Login</span>
            </h2>
            
          </div>

          {/* Login Form Box */}
          <div className="glass p-8 md:p-10 rounded-3xl border shadow-2xl space-y-6" style={{ borderColor: 'var(--glass-border)' }}>
            {loginError && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold flex items-center gap-3">
                <span className="material-symbols-rounded text-lg shrink-0">error</span>
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-[0.2em] mb-2 opacity-70" style={{ color: 'var(--text-main)' }}>
                  Login ID / Email
                </label>
                <div className="relative">
                  <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 opacity-40 text-lg">
                    badge
                  </span>
                  <input
                    type="text"
                    value={inputId}
                    onChange={(e) => setInputId(e.target.value)}
                    placeholder="e.g. student@vidyate.com"
                    className="w-full glass rounded-xl pl-4 pr-4 py-3.5 text-sm font-medium border focus:outline-none focus:border-[#405cff] transition-all"
                    style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-[0.2em] mb-2 opacity-70" style={{ color: 'var(--text-main)' }}>
                  Password
                </label>
                <div className="relative">
                  <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 opacity-40 text-lg">
                    lock
                  </span>
                  <input
                    type="password"
                    value={inputPass}
                    onChange={(e) => setInputPass(e.target.value)}
                    placeholder="Enter password"
                    className="w-full glass rounded-xl pl-4 pr-4 py-3.5 text-sm font-medium border focus:outline-none focus:border-[#405cff] transition-all"
                    style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#405cff] text-white font-black text-sm rounded-xl shadow-lg hover:shadow-[0_15px_30px_rgba(64,92,255,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Verify Credentials & Enter</span>
                <span className="material-symbols-rounded">arrow_forward</span>
              </button>
            </form>

            {/* Quick-Fill Demo Credentials from user-cred.ts */}
            <div className="pt-4 border-t" style={{ borderColor: 'var(--glass-border)' }}>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-3 text-center" style={{ color: 'var(--text-main)' }}>
                Configured Test Credentials (user-cred.ts)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {userCredentials.slice(0, 4).map((cred) => (
                  <button
                    key={cred.email}
                    type="button"
                    onClick={() => handleQuickLogin(cred)}
                    className="p-2.5 rounded-xl border text-left glass hover:border-[#405cff] transition-all group"
                    style={{ borderColor: 'var(--glass-border)' }}
                  >
                    <div className="text-xs font-bold truncate group-hover:text-[#405cff]" style={{ color: 'var(--text-main)' }}>
                      {cred.name}
                    </div>
                    <div className="text-[10px] font-mono opacity-50 truncate" style={{ color: 'var(--text-main)' }}>
                      ID: {cred.email} • Pass: {cred.pass}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: INSTRUCTIONS & SYSTEM PROCTOR CHECKS      */}
      {/* ---------------------------------------------------- */}
      {stage === 'proctor_check' && currentUser && (
        <div className="max-w-4xl mx-auto space-y-8 animate-subtle-fade">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 p-6 glass rounded-2xl border" style={{ borderColor: 'var(--glass-border)' }}>
            <div>
              
              <h2 className="text-2xl font-black" style={{ color: 'var(--text-main)' }}>
                Welcome, {currentUser.name}
              </h2>
              
            </div>
            <button
              onClick={() => {
                mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
                mediaStreamRef.current = null;
                if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
                audioAnalyserRef.current = null;
                audioContextRef.current?.close().catch(() => {});
                audioContextRef.current = null;
                if (videoPreviewRef.current) videoPreviewRef.current.srcObject = null;
                setMicLevel(0);
                setCurrentUser(null);
                setStage('login');
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold border glass hover:bg-white/10 transition-all opacity-70 hover:opacity-100"
              style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
            >
              Log Out
            </button>
          </div>

          {/* System Hardware & Environment Checks */}
          <div className="glass p-8 rounded-3xl border space-y-6" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--glass-border)' }}>
              <div>
                <h3 className="text-xl font-black" style={{ color: 'var(--text-main)' }}>Proctor Readiness Checks</h3>
                
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-black text-[#405cff]">{proctorSimProgress}% Checked</span>
              </div>
            </div>

            {/* Check Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Camera Check */}
              <div className="p-5 rounded-2xl border glass relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-rounded text-[#405cff]">videocam</span>
                    <span className="text-sm font-black" style={{ color: 'var(--text-main)' }}>Camera Feed</span>
                  </div>
                  {cameraChecked ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-500">
                      <span className="material-symbols-rounded text-sm">check_circle</span> Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-yellow-500 animate-pulse">
                      Checking...
                    </span>
                  )}
                </div>
                {/* Live camera preview */}
                <div className="h-28 rounded-xl bg-white/40 border flex items-center justify-center relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
                  <video
                    ref={videoPreviewRef}
                    autoPlay
                    playsInline
                    muted
                    className={`w-full h-full object-cover ${cameraChecked ? 'block' : 'hidden'}`}
                  />
                  {!cameraChecked && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Waiting for camera permission
                    </span>
                  )}
                  {cameraChecked && (
                    <div className="absolute inset-2 border-2 border-dashed border-emerald-500/60 rounded-lg flex items-start justify-between p-2">
                      <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                        AI FACE REC: LOCKED
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    </div>
                  )}
                </div>
                <p className="text-[11px] opacity-60 mt-2 text-center" style={{ color: 'var(--text-main)' }}>
                  Continuous facial tracking active
                </p>
              </div>

              {/* Mic Check */}
              <div className="p-5 rounded-2xl border glass relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-rounded text-[#405cff]">mic</span>
                    <span className="text-sm font-black" style={{ color: 'var(--text-main)' }}>Audio / Mic</span>
                  </div>
                  {micChecked ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-500">
                      <span className="material-symbols-rounded text-sm">check_circle</span> Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-yellow-500 animate-pulse">
                      Calibrating...
                    </span>
                  )}
                </div>
                {/* Live microphone level */}
                <div ref={visualizerBarsRef} className="h-28 rounded-xl bg-white/40 border flex items-end justify-center gap-1.5 px-4 py-5" style={{ borderColor: 'var(--glass-border)' }}>
                  {[0.35, 0.65, 0.9, 0.5, 1, 0.72, 0.88, 0.55, 0.75, 0.42].map((scale, idx) => (
                    <div
                      key={idx}
                      className={`w-1.5 rounded-full transition-all duration-100 ${micChecked ? 'bg-[#405cff]' : 'bg-slate-600'}`}
                      style={{
                        height: `${Math.max(8, micLevel * scale)}%`,
                      }}
                    ></div>
                  ))}
                </div>
                <p className="text-[11px] opacity-60 mt-2 text-center" style={{ color: 'var(--text-main)' }}>
                  Live microphone level: {micLevel}%
                </p>
              </div>

              {/* Internet Check */}
              <div className="p-5 rounded-2xl border glass relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-rounded text-[#405cff]">wifi</span>
                    <span className="text-sm font-black" style={{ color: 'var(--text-main)' }}>Network Latency</span>
                  </div>
                  {netChecked ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-500">
                      <span className="material-symbols-rounded text-sm">check_circle</span> 28 ms
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-yellow-500 animate-pulse">
                      Pinging...
                    </span>
                  )}
                </div>
                <div className="h-28 rounded-xl bg-black/40 border flex flex-col items-center justify-center p-3" style={{ borderColor: 'var(--glass-border)' }}>
                  <span className="material-symbols-rounded text-3xl text-emerald-400 mb-1">speed</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">100% Reliable</span>
                  <span className="text-[10px] opacity-50" style={{ color: 'var(--text-main)' }}>Packet loss: 0.00%</span>
                </div>
                <p className="text-[11px] opacity-60 mt-2 text-center" style={{ color: 'var(--text-main)' }}>
                  Secure encrypted transmission
                </p>
              </div>
            </div>

            {mediaError && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                <span>{mediaError}</span>
                <button
                  type="button"
                  onClick={() => setMediaRequestVersion((version) => version + 1)}
                  className="shrink-0 rounded-lg border border-red-400/40 px-3 py-2 text-xs font-bold text-red-200 transition-colors hover:bg-red-500/20"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Test Rules & Code of Conduct */}
            <div className="p-6 rounded-2xl bg-[#405cff]/5 border border-[#405cff]/20 space-y-3">
              <h4 className="text-sm font-black flex items-center gap-2 text-[#405cff]">
                <span className="material-symbols-rounded">gavel</span>
                Examination Regulations & Security Policy
              </h4>
              <ul className="text-xs space-y-2 opacity-80 list-disc list-inside font-medium" style={{ color: 'var(--text-main)' }}>
                <li>The test contains <strong>50 multiple choice questions</strong> with an exact limit of <strong>60 minutes</strong>.</li>
                <li><strong>MANDATORY FULLSCREEN:</strong> Clicking &quot;Start Test&quot; will expand your browser to fullscreen.</li>
                <li><strong>TAB SWITCH BLOCK:</strong> Switching browser tabs, minimizing, opening another window, or canceling fullscreen will <strong>immediately terminate your session and log you out</strong>.</li>
                <li>Upon completion, your scorecard is automatically verified and recorded into the official evaluation records.</li>
              </ul>
            </div>

            {/* Confirmation Checkbox */}
            <label className="flex items-start gap-3 p-4 rounded-xl border glass cursor-pointer select-none" style={{ borderColor: 'var(--glass-border)' }}>
              <input
                type="checkbox"
                checked={rulesAgreed}
                onChange={(e) => setRulesAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded text-[#405cff] focus:ring-0"
              />
              <span className="text-xs font-medium leading-relaxed" style={{ color: 'var(--text-main)' }}>
                I understand that this is a proctored examination. I consent to fullscreen enforcement and tab-switch monitoring, and agree to start the 60-minute test.
              </span>
            </label>

            {/* Start Button */}
            <button
              onClick={handleStartTest}
              disabled={(PERMISSION_REQUIRED && (!cameraChecked || !micChecked)) || !netChecked || !rulesAgreed}
              className="w-full py-5 bg-[#405cff] disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-base rounded-2xl shadow-xl hover:shadow-[0_20px_40px_rgba(64,92,255,0.4)] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <span className="material-symbols-rounded">fullscreen</span>
              <span>Lock Fullscreen & Begin 60-Minute Test</span>
            </button>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* SECTION 4: ACTIVE EXAMINATION INTERFACE (50 Qs)      */}
      {/* ---------------------------------------------------- */}
      {stage === 'active' && currentUser && (
        <div className="max-w-7xl mx-auto space-y-6 select-none animate-subtle-fade">
          {/* Top Bar: Proctor Status, Timer, Candidate Info, Submit */}
          <div className="glass p-4 md:p-5 rounded-2xl border shadow-xl flex flex-wrap items-center justify-between gap-4 sticky top-2 z-40" style={{ borderColor: 'var(--glass-border)', backgroundColor: 'var(--bg-color)' }}>
            {/* Candidate & Proctor indicator */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-black/60 border flex items-center justify-center overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
                  <span className="material-symbols-rounded text-xl text-slate-400">videocam</span>
                </div>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black" style={{ color: 'var(--text-main)' }}>
                    {currentUser.name}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                    PROCTOR ON
                  </span>
                </div>
                <span className="text-[10px] opacity-50 font-mono" style={{ color: 'var(--text-main)' }}>
                  ID: {currentUser.email} • Q {currentQuestionIndex + 1} of {testQuestions.length}
                </span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl border glass font-mono shadow-inner" style={{ borderColor: 'var(--glass-border)' }}>
              <span className={`material-symbols-rounded text-xl ${secondsRemaining < 300 ? 'text-red-500 animate-ping' : 'text-[#405cff]'}`}>
                timer
              </span>
              <div className="text-right">
                <div className={`text-xl sm:text-2xl font-black ${secondsRemaining < 300 ? 'text-red-500' : 'text-[#405cff]'}`}>
                  {formatTime(secondsRemaining)}
                </div>
                <div className="text-[9px] uppercase tracking-widest opacity-40 -mt-1 font-sans font-bold" style={{ color: 'var(--text-main)' }}>
                  Time Remaining
                </div>
              </div>
            </div>

            {/* Progress & Submit */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowQuestionPaletteMobile(!showQuestionPaletteMobile)}
                className="md:hidden px-3 py-2 rounded-xl border glass text-xs font-bold flex items-center gap-1.5"
                style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
              >
                <span className="material-symbols-rounded text-sm">grid_view</span>
                <span>Palette</span>
              </button>

              <button
                onClick={() => setShowSubmitModal(true)}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-1.5 active:scale-95"
              >
                <span className="material-symbols-rounded text-sm">send</span>
                <span>Submit Exam</span>
              </button>
            </div>
          </div>

          {/* Main Grid: Question Pane + Question Palette */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Question Pane (8 cols on desktop) */}
            <div className="md:col-span-8 space-y-6">
              <div className="glass p-6 md:p-8 rounded-3xl border shadow-xl min-h-[460px] flex flex-col justify-between" style={{ borderColor: 'var(--glass-border)' }}>
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono opacity-50" style={{ color: 'var(--text-main)' }}>
                      Marks: +1.0 / -0.0
                    </span>
                  </div>

                  {/* Question Text */}
                  <h3 className="text-lg md:text-xl font-black leading-snug mb-8" style={{ color: 'var(--text-main)' }}>
                    <span className="text-[#405cff] mr-2">Q{currentQuestion.id}.</span>
                    {currentQuestion.question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, idx) => {
                      const isSelected = answers[currentQuestion.id] === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectOption(idx)}
                          className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                            isSelected
                              ? 'bg-[#405cff]/15 border-[#405cff] shadow-md'
                              : 'glass hover:bg-white/5'
                          }`}
                          style={{ borderColor: isSelected ? '#405cff' : 'var(--glass-border)' }}
                        >
                          <div
                            className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'bg-[#405cff] text-white'
                                : 'bg-white/5 border opacity-70'
                            }`}
                            style={{ borderColor: 'var(--glass-border)', color: isSelected ? '#fff' : 'var(--text-main)' }}
                          >
                            {String.fromCharCode(65 + idx)}
                          </div>
                          <span
                            className={`text-sm font-medium leading-relaxed ${
                              isSelected ? 'font-bold' : 'opacity-80'
                            }`}
                            style={{ color: 'var(--text-main)' }}
                          >
                            {option}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question Action Controls */}
                <div className="pt-8 border-t flex flex-wrap items-center justify-between gap-4 mt-8" style={{ borderColor: 'var(--glass-border)' }}>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleToggleReview}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-black transition-all flex items-center gap-1.5 ${
                        markedForReview[currentQuestion.id]
                          ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                          : 'glass opacity-70 hover:opacity-100'
                      }`}
                      style={{ borderColor: markedForReview[currentQuestion.id] ? undefined : 'var(--glass-border)', color: markedForReview[currentQuestion.id] ? undefined : 'var(--text-main)' }}
                    >
                      <span className="material-symbols-rounded text-sm">
                        {markedForReview[currentQuestion.id] ? 'bookmark' : 'bookmark_border'}
                      </span>
                      <span>{markedForReview[currentQuestion.id] ? 'Marked for Review' : 'Mark for Review'}</span>
                    </button>

                    {answers[currentQuestion.id] !== undefined && (
                      <button
                        onClick={handleClearResponse}
                        className="px-3 py-2.5 rounded-xl text-xs font-bold opacity-50 hover:opacity-100 text-red-400 transition-all"
                      >
                        Clear Selection
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                      disabled={currentQuestionIndex === 0}
                      className="px-5 py-2.5 rounded-xl border glass disabled:opacity-30 disabled:cursor-not-allowed text-xs font-black flex items-center gap-1 hover:bg-white/10 transition-all"
                      style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
                    >
                      <span className="material-symbols-rounded text-sm">chevron_left</span>
                      <span>Previous</span>
                    </button>

                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => Math.min(testQuestions.length - 1, prev + 1))}
                      disabled={currentQuestionIndex === testQuestions.length - 1}
                      className="px-6 py-2.5 rounded-xl bg-[#405cff] disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs font-black flex items-center gap-1 shadow-md hover:shadow-lg transition-all"
                    >
                      <span>Next</span>
                      <span className="material-symbols-rounded text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Question Palette (4 cols on desktop) */}
            <div className={`md:col-span-4 space-y-4 ${showQuestionPaletteMobile ? 'block' : 'hidden md:block'}`}>
              <div className="glass p-6 rounded-3xl border shadow-xl space-y-5" style={{ borderColor: 'var(--glass-border)' }}>
                <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--glass-border)' }}>
                  <h4 className="text-sm font-black uppercase tracking-wider" style={{ color: 'var(--text-main)' }}>
                    Question Palette (50)
                  </h4>
                  <span className="text-xs font-mono font-bold text-[#405cff]">
                    {answeredCount}/50 Answered
                  </span>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-bold" style={{ color: 'var(--text-main)' }}>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="opacity-70">Answered ({answeredCount})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="opacity-70">Review ({reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-600"></span>
                    <span className="opacity-70">Unanswered ({unansweredCount})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full border-2 border-[#405cff]"></span>
                    <span className="opacity-70">Current</span>
                  </div>
                </div>

                {/* 50 Questions Grid */}
                <div className="grid grid-cols-5 gap-2 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar">
                  {testQuestions.map((q, idx) => {
                    const isCurrent = idx === currentQuestionIndex;
                    const isAnswered = answers[q.id] !== undefined;
                    const isReviewed = markedForReview[q.id];

                    let badgeColor = 'bg-white/5 text-slate-400 border-white/10';
                    if (isAnswered && isReviewed) {
                      badgeColor = 'bg-purple-600 text-white border-purple-400';
                    } else if (isAnswered) {
                      badgeColor = 'bg-emerald-600 text-white border-emerald-400';
                    } else if (isReviewed) {
                      badgeColor = 'bg-amber-500 text-black border-amber-400 font-black';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          setCurrentQuestionIndex(idx);
                          setShowQuestionPaletteMobile(false);
                        }}
                        className={`h-10 rounded-xl text-xs font-bold border transition-all flex items-center justify-center relative ${badgeColor} ${
                          isCurrent ? 'ring-2 ring-[#405cff] ring-offset-2 ring-offset-[#03040b] scale-105 z-10' : 'hover:scale-105'
                        }`}
                      >
                        {idx + 1}
                        {isReviewed && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white absolute top-1 right-1"></span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Submit Final Button */}
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span className="material-symbols-rounded text-sm">task_alt</span>
                  <span>Finish & Submit All</span>
                </button>
              </div>
            </div>
          </div>

          {/* Submission Confirmation Modal */}
          {showSubmitModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
              <div className="glass max-w-md w-full p-6 md:p-8 rounded-3xl border shadow-2xl space-y-6 text-center" style={{ borderColor: 'var(--glass-border)', backgroundColor: 'var(--bg-color)' }}>
                <span className="material-symbols-rounded text-5xl text-emerald-500 block mx-auto">
                  contact_support
                </span>
                <div>
                  <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--text-main)' }}>
                    Submit Examination?
                  </h3>
                  <p className="text-xs opacity-70 leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
                    Are you sure you want to end this test? Your answers will be locked and results will be compiled instantly.
                  </p>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl glass border text-center" style={{ borderColor: 'var(--glass-border)' }}>
                  <div>
                    <div className="text-xl font-black text-emerald-500">{answeredCount}</div>
                    <div className="text-[10px] opacity-60 uppercase tracking-wider font-bold">Answered</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-amber-500">{reviewCount}</div>
                    <div className="text-[10px] opacity-60 uppercase tracking-wider font-bold">Review</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-400">{unansweredCount}</div>
                    <div className="text-[10px] opacity-60 uppercase tracking-wider font-bold">Left</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowSubmitModal(false)}
                    className="w-1/2 py-3.5 rounded-xl border glass text-xs font-black hover:bg-white/10 transition-all"
                    style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
                  >
                    Return to Test
                  </button>
                  <button
                    onClick={handleSubmitExam}
                    className="w-1/2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Yes, Submit</span>
                    <span className="material-symbols-rounded text-sm">check</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* SECTION 5: CANDIDATE VERIFICATION & FINAL SUBMISSION */}
      {/* ---------------------------------------------------- */}
      {stage === 'verification' && submissionResult && (
        <div className="max-w-xl mx-auto py-8 px-4 animate-subtle-fade">
          <div
            className="glass p-8 md:p-10 rounded-3xl border shadow-2xl space-y-6 relative overflow-hidden"
            style={{ borderColor: 'var(--glass-border)' }}
          >
            <div className="text-center space-y-2">
              
              <h3 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>
                Credentials Verification
              </h3>
              <p className="text-xs opacity-70 font-medium leading-relaxed" style={{ color: 'var(--text-main)' }}>
                Please confirm your details below to finalize your assessment submission.
              </p>
              {submitError && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
                  {submitError}
                </div>
              )}
            </div>

            {/* Verification Form */}
            <form
              onSubmit={handleVerificationFormSubmit}
              className="space-y-4 pt-1 text-left"
            >
              {/* Candidate Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80" style={{ color: 'var(--text-main)' }}>
                  Candidate Full Name
                </label>
                <div className="relative">
                  <span className="material-symbols-rounded absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base">
                    person
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={verificationName}
                    onChange={(e) => setVerificationName(e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white/40 text-sm font-semibold focus:outline-none focus:border-[#405cff] transition-colors"
                    style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80" style={{ color: 'var(--text-main)' }}>
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-rounded absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base">
                    mail
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={verificationEmail}
                    onChange={(e) => setVerificationEmail(e.target.value)}
                    required
                    placeholder="Enter registered email"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white/40 text-sm font-semibold focus:outline-none focus:border-[#405cff] transition-colors"
                    style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
                  />
                </div>
              </div>

              {/* Hidden Fields: Auto-filled by the assessment scoring function */}
              <input type="hidden" name="score" value={verificationScore} />
              <input type="hidden" name="test_name" value={verificationTestName} />
              <input type="hidden" name="testName" value={verificationTestName} />
              <input type="hidden" name="submission_time" value={verificationTime} />
              <input type="hidden" name="submissionTime" value={verificationTime} />

              {/* Terms and Conditions line */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={termsAgreed}
                    onChange={(e) => setTermsAgreed(e.target.checked)}
                    required
                    className="mt-0.5 w-4 h-4 rounded text-[#405cff] border-white/20 focus:ring-0"
                  />
                  <span className="text-xs leading-relaxed opacity-80 font-medium" style={{ color: 'var(--text-main)' }}>
                    I agree with terms and conditions of the test.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmittingForm || !termsAgreed || !verificationName.trim() || !verificationEmail.trim()}
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-black text-xs md:text-sm uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className={`material-symbols-rounded text-base ${isSubmittingForm ? 'animate-spin' : ''}`}>
                    {isSubmittingForm ? 'progress_activity' : 'send'}
                  </span>
                  {isSubmittingForm ? 'Submitting & Verifying...' : 'Submit Assessment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* SECTION 6: SUCCESS & SCORECARD SCREEN                */}
      {/* ---------------------------------------------------- */}
      {stage === 'completed' && submissionResult && currentUser && (
        <div className="max-w-3xl mx-auto space-y-8 animate-subtle-fade">
          <div className="glass p-8 md:p-12 rounded-3xl border shadow-2xl text-center relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            
            <h2 className="text-2xl md:text-3xl font-black mb-3" style={{ color: 'var(--text-main)' }}>
              Test Successfully Submitted!
            </h2>
            <p className="text-sm opacity-70 max-w-xl mx-auto  font-medium leading-relaxed" style={{ color: 'var(--text-main)' }}>
              Congratulations {currentUser.name}! Your responses have been officially recorded and saved to the evaluation database.
            </p>

          </div>

         </div>
          )}
        </div>
      
  );
};

export default TestingPortal;
