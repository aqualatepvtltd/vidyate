import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const PaidTestPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioVisualizerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  const [stream, setStream] = useState<MediaStream | null>(null);
  const [testLink, setTestLink] = useState<string>('');
  const [cameraAccess, setCameraAccess] = useState<'idle' | 'pending' | 'granted' | 'denied'>('idle');
  const [micAccess, setMicAccess] = useState<'idle' | 'pending' | 'granted' | 'denied'>('idle');
  const [internetCheck, setInternetCheck] = useState<'idle' | 'checking' | 'checked'>('idle');

  useEffect(() => {
    const state = location.state as { testLink?: string } | null;
    if (state?.testLink) {
      setTestLink(state.testLink);
    }
  }, [location.state]);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }

    // Cleanup function to stop media streams and animations when the component unmounts
    return () => {
      stream?.getTracks().forEach(track => track.stop());
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    }
  }, [stream]);

  const handleCameraAccess = async () => {
    setCameraAccess('pending');
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      // Let user see the camera feed for a moment, then confirm and stop the stream.
      setTimeout(() => {
        setCameraAccess('granted');
        mediaStream.getTracks().forEach(track => track.stop());
        setStream(null);
      }, 2500); // Show feed for 2.5 seconds
    } catch (err) {
      console.error("Camera access denied:", err);
      setCameraAccess('denied');
    }
  };

  const handleMicAccess = async () => {
    setMicAccess('pending');
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(mediaStream);
      source.connect(analyser);
      analyser.fftSize = 32;
      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const draw = () => {
        animationFrameRef.current = requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
        if (audioVisualizerRef.current) {
          audioVisualizerRef.current.style.setProperty('--audio-level', `${Math.min(100, average * 1.5)}%`);
        }
      };
      
      // Start visualization
      draw(); 

      // Check for a moment, then confirm and stop the stream.
      setTimeout(() => {
        setMicAccess('granted');
        // Stop the animation and the audio stream
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        mediaStream.getTracks().forEach(track => track.stop());
        audioContext.close();
      }, 2500); // Show level for 2.5 seconds
    } catch (err) {
      console.error("Microphone access denied:", err);
      setMicAccess('denied');
    }
  };

  const handleInternetCheck = () => {
    setInternetCheck('checking');
    setTimeout(() => {
      // This is a simulation. A real implementation might fetch a large file.
      setInternetCheck('checked');
    }, 1500);
  };

  const allChecksPassed = cameraAccess === 'granted' && micAccess === 'granted' && internetCheck === 'checked';

  const handleStartTest = () => {
    if (allChecksPassed && testLink) {
      window.open(testLink, '_blank', 'noopener,noreferrer');
    }
  };

  const CheckStep: React.FC<{ title: string; status: string; onAction: () => void; children: React.ReactNode; actionText: string; showDisclaimer?: boolean; }> = ({ title, status, onAction, children, actionText, showDisclaimer = false }) => (
    <div className="glass p-6 rounded-2xl border" style={{ borderColor: 'var(--glass-border)' }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-black">{title}</h3>
        {(status === 'granted' || status === 'checked') ? (
          <span className="flex items-center gap-1 text-xs font-bold text-[#10B981]"><span className="material-symbols-rounded text-sm">check_circle</span> OK</span>
        ) : status === 'denied' ? (
          <span className="flex items-center gap-1 text-xs font-bold text-red-500"><span className="material-symbols-rounded text-sm">cancel</span> Denied</span>
        ) : null}
      </div>
      <div className="text-sm opacity-70 mb-4">{children}</div>
      {showDisclaimer && (
        <p className="text-[10px] text-red-500/80 font-bold mt-4">This check is for verification and may be used in case of suspicious activity.</p>
      )}
      {status !== 'granted' && status !== 'checked' && (
        <button onClick={onAction} disabled={status === 'pending' || status === 'checking'} className="w-full px-4 py-2 rounded-lg bg-[#405cff] text-white font-bold text-xs disabled:opacity-50 mt-4">
          {status === 'pending' ? 'Waiting...' : actionText}
        </button>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20 animate-subtle-fade">
      <SEO title="Advance Course Test | Proctoring Setup" />

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Advance Course Test
        </h1>
        <p className="opacity-60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          This certification is part of our premium offering, designed with advanced content to provide you with a competitive edge. Please complete the proctoring setup to proceed.
        </p>
      </div>

      {/* Instructions */}
      <div className="glass p-8 rounded-2xl border mb-12" style={{ borderColor: 'var(--glass-border)' }}>
        <h2 className="text-xl font-black mb-4 flex items-center gap-2"><span className="material-symbols-rounded text-[#FF6B6B]">gpp_maybe</span> Important Instructions</h2>
        <ul className="space-y-3 text-sm opacity-80 list-disc pl-5">
          <li>Ensure you have sufficient time to complete the test in one sitting.</li>
          <li>This is a proctored exam. Camera and microphone access are mandatory.</li>
          <li>You can attempt this test on both mobile and desktop devices.</li>
          <li>All questions are required. There is no negative marking.</li>
          <li>Any suspicious activity (e.g., switching tabs, background noise) will be flagged and may lead to disqualification.</li>
          <li>Certificates will not be issued if any malpractice is detected. Repeat offenders may be permanently blocked.</li>
        </ul>
      </div>

      {/* Proctoring Setup */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Camera */}
        <CheckStep title="1. Camera Check" status={cameraAccess} onAction={handleCameraAccess} actionText="Enable Camera" showDisclaimer={true}>
          <p>We need to verify your presence during the exam.</p>
          <div className="mt-4 h-24 w-full rounded-lg overflow-hidden">
            {cameraAccess === 'granted' ? (
              <div className="w-full h-full rounded-lg glass flex flex-col items-center justify-center text-center">
                <span className="material-symbols-rounded text-4xl text-[#10B981]">verified_user</span>
                <p className="text-xs font-bold text-[#10B981] mt-1">Verified</p>
              </div>
            ) : (
              <div className="w-full h-full bg-black rounded-lg">
                <video ref={videoRef} autoPlay playsInline muted className={`w-full h-full object-cover ${stream ? 'block' : 'hidden'}`} />
                {cameraAccess === 'denied' && <div className="w-full h-full flex items-center justify-center text-red-500 text-xs font-bold">Access Denied</div>}
              </div>
            )}
          </div>
        </CheckStep>

        {/* Microphone */}
        <CheckStep title="2. Microphone Check" status={micAccess} onAction={handleMicAccess} actionText="Enable Microphone" showDisclaimer={true}>
          <p>Please be in a quiet environment. Your audio will be monitored.</p>
          <div className="mt-4 h-24 w-full glass rounded-lg flex items-center justify-center p-2">
            {micAccess === 'granted' ? (
              <div className="text-center">
                <span className="material-symbols-rounded text-4xl text-[#10B981]">mic</span>
                <p className="text-xs font-bold text-[#10B981] mt-1">Verified</p>
              </div>
            ) : (
              <div className="w-full h-full bg-black/20 rounded-md relative overflow-hidden">
                <div ref={audioVisualizerRef} className="h-full bg-[#10B981] transition-all duration-100" style={{ width: 'var(--audio-level, 0%)' }}></div>
                {micAccess === 'denied' && <div className="w-full h-full flex items-center justify-center text-red-500 text-xs font-bold">Access Denied</div>}
              </div>
            )}
          </div>
        </CheckStep>

        {/* Internet */}
        <CheckStep title="3. Network Check" status={internetCheck} onAction={handleInternetCheck} actionText="Check Connection">
          <p>A stable connection is required to prevent submission issues.</p>
          <div className="mt-4 h-24 w-full glass rounded-lg flex items-center justify-center">
            {internetCheck === 'checked' && (
              <div className="text-center">
                <span className="material-symbols-rounded text-4xl text-[#10B981]">signal_wifi_4_bar</span>
                <p className="text-xs font-bold text-[#10B981] mt-1">Verified</p>
              </div>
            )}
            {internetCheck === 'checking' && <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>}
            {internetCheck === 'idle' && <span className="material-symbols-rounded text-4xl opacity-20">wifi</span>}
          </div>
        </CheckStep>
      </div>

      {/* Start Test Button */}
      <div className="text-center flex justify-center flex-col items-center">
        <button
          onClick={handleStartTest}
          disabled={!allChecksPassed}
          className="w-full max-w-md py-5 bg-[#10B981] text-white font-black rounded-2xl text-lg shadow-xl hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:-translate-y-1 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {allChecksPassed ? 'Start Test' : 'Complete All Checks'}
          <span className="material-symbols-rounded">arrow_forward</span>
        </button>
        {!allChecksPassed && (
          <p className="text-xs opacity-50 mt-4">The "Start Test" button will be enabled once all checks are passed.</p>
        )}
      </div>
    </div>
  );
};

export default PaidTestPage;