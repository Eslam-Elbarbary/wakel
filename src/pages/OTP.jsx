import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { img1 } from '../constants/images';
import SignUpHeader from '../components/SignUpHeader';
import SignUpFooter from '../components/SignUpFooter';
import { useAuth } from '../context/AuthContext';

function OTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData, clearUserData, login, userRole } = useAuth();
  const isLawyer = userRole === 'lawyer';
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(150); // 2 minutes 30 seconds = 150 seconds
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    // Auto-focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    // Timer countdown
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins} : ${secs}`;
  };

  const handleInputChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtpValues = [...otpValues];
    // Update with the entered value (handle empty string for deletion)
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Auto-focus next input if value is entered
    if (value && index < 5) {
      setTimeout(() => {
        inputRefs.current[index + 1]?.focus();
      }, 10);
    } else if (value && index === 5) {
      // Last input - blur after entering
      setTimeout(() => {
        inputRefs.current[index]?.blur();
      }, 10);
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace') {
      if (!otpValues[index] && index > 0) {
        // If current field is empty, move to previous field
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
      } else if (otpValues[index]) {
        // If current field has value, clear it
        const newOtpValues = [...otpValues];
        newOtpValues[index] = '';
        setOtpValues(newOtpValues);
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtpValues = ['', '', '', '', '', ''];
    pastedData.split('').forEach((char, index) => {
      if (/^\d$/.test(char) && index < 6) {
        newOtpValues[index] = char;
      }
    });
    setOtpValues(newOtpValues);
    // Focus the last filled input or the last input
    const lastFilledIndex = Math.min(pastedData.length - 1, 5);
    if (inputRefs.current[lastFilledIndex]) {
      inputRefs.current[lastFilledIndex].focus();
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(150);
      setOtpValues(['', '', '', '', '', '']);
      if (inputRefs.current[2]) {
        inputRefs.current[2].focus();
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Check if OTP is complete (all 6 digits filled)
    const isOtpComplete = otpValues.every(value => value !== '');
    if (!isOtpComplete) {
      setError('يرجى إدخال كود التحقق الكامل');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // Simulate API call for OTP verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, verify OTP with backend
      const otpCode = otpValues.join('');
      console.log('Verifying OTP:', otpCode);
      console.log('User data:', userData);
      
      // Simulate verification (in real app, check with backend)
      // For demo, accept any 6-digit code
      if (otpCode.length === 6) {
        // Set user as authenticated
        login();
        // Navigate to lawyer details page for lawyers, home page for clients
        if (isLawyer) {
          navigate('/lawyer-details');
        } else {
          navigate('/');
        }
      } else {
        setError('كود التحقق غير صحيح');
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      setError('حدث خطأ أثناء التحقق. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#fbfbfb] relative w-full h-screen overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute bg-gradient-to-b bottom-[-134px] from-[#083a5e] h-[1001px] left-[-292px] opacity-10 rounded-tl-[381.5px] rounded-tr-[381.5px] to-[#0a4875] w-[604px] hidden lg:block overflow-hidden"></div>
      <div className="absolute bottom-[249px] flex h-[1001px] items-center justify-center left-[calc(66.67%-9px)] w-[604px] hidden lg:block overflow-hidden">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-gradient-to-b from-[#083a5e] h-[1001px] opacity-[0.12] rounded-tl-[381.5px] rounded-tr-[381.5px] to-[#0a4875] w-[604px]"></div>
        </div>
      </div>

      {/* Header */}
      <SignUpHeader />

      {/* Main Content - Centered */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-center justify-center min-h-[calc(100vh-200px)] w-full max-w-[520px] px-4 sm:px-6 md:px-8 mx-auto py-8 sm:py-10 md:py-12 overflow-hidden">
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center text-center w-full">
          <div className="flex flex-col font-cairo font-bold justify-center relative text-[#2e2e2e] text-xl sm:text-2xl md:text-3xl lg:text-[36px]">
            <p className="leading-tight sm:leading-normal md:leading-[38px] lg:leading-[42px] break-words">مرحباً بك! يمكنك تسجيل الدخول</p>
          </div>
          <div className="flex flex-col font-cairo font-medium justify-center text-[#828282] text-sm sm:text-base md:text-[17px] lg:text-[18px] w-full mt-2 sm:mt-3">
            <p className="leading-normal whitespace-pre-wrap">
              {isLawyer 
                ? 'برجاء تحديد صفه التسجيل , من ثم ادخال البيانات المطلوبه'
                : 'برجاء ادخال البيانات المطلوبه'
              }
            </p>
          </div>
        </div>

        {/* OTP Input Section */}
        <form onSubmit={handleLogin} className="flex flex-col gap-[10px] items-center w-full">
          {/* Show phone number if available */}
          {userData.phone && (
            <div className="flex flex-col items-center justify-center text-center w-full mb-2">
              <p className="font-cairo font-medium text-[#828282] text-sm sm:text-base md:text-[15px] lg:text-[16px] break-words">
                تم إرسال كود التحقق إلى: {userData.phone}
              </p>
            </div>
          )}
          {/* OTP Input Boxes */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] items-center w-full">
            <div className="flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-[10px] items-start justify-center w-full max-w-full overflow-x-auto px-2 sm:px-0">
              {/* OTP Input Boxes - 6 boxes total */}
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`border border-solid flex items-center justify-center rounded-[10px] shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] relative ${
                    otpValues[index] 
                      ? 'bg-white border-[#1c1c1c]' 
                      : index < 2
                      ? 'bg-white border-[#1c1c1c]'
                      : 'bg-[#fbfbfb] border-[#d9d9d9]'
                  }`}
                >
                  {/* Always render the input */}
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={otpValues[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={`w-full h-full text-center font-cairo font-semibold text-base sm:text-lg md:text-xl lg:text-[24px] border-0 outline-0 bg-transparent ${
                      otpValues[index] ? 'text-[#1c1c1c]' : 'text-transparent'
                    }`}
                    dir="ltr"
                  />
                  {/* Show placeholder when empty */}
                  {!otpValues[index] && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {index === 0 ? (
                        <p className="font-cairo font-semibold text-[#1c1c1c] text-base sm:text-lg md:text-xl lg:text-[24px] text-center">
                          *
                        </p>
                      ) : index === 1 ? (
                        <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#0a4875] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right whitespace-nowrap">
                          <p className="leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px]">|</p>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Login Button */}
            <button
              type="submit"
              className={`flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-full transition-all ${
                otpValues.every(value => value !== '') && !isLoading
                  ? 'bg-[#0a4875] cursor-pointer hover:opacity-90 active:opacity-80'
                  : 'bg-[#0a4875] opacity-50 cursor-not-allowed'
              }`}
              disabled={!otpValues.every(value => value !== '') || isLoading}
            >
              <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-base sm:text-lg md:text-[19px] lg:text-[20px] text-right text-white">
                {isLoading ? 'جاري التحقق...' : 'تسجيل دخول'}
              </p>
            </button>
            {error && (
              <p className="text-red-500 text-xs sm:text-sm font-cairo text-center w-full">{error}</p>
            )}
          </div>

          {/* Timer and Resend Link */}
          <div className="flex items-center justify-between text-center w-full gap-2 sm:gap-3 md:gap-4">
            <div className="flex flex-col font-cairo font-bold min-h-[24px] justify-center relative text-[#cc1024] text-base sm:text-lg md:text-[19px] lg:text-[20px] min-w-[50px] sm:min-w-[55px] md:min-w-[59px]">
              <p className="leading-normal whitespace-pre-wrap">
                {formatTimer(timer)}
              </p>
            </div>
            <button
              type="button"
              onClick={handleResend}
              disabled={timer > 0}
              className={`flex flex-col font-cairo font-medium justify-center relative whitespace-nowrap flex-1 text-right ${
                timer > 0 
                  ? 'text-[#828282] cursor-not-allowed opacity-50' 
                  : 'text-[#0a4875] cursor-pointer underline'
              } text-sm sm:text-base md:text-[17px] lg:text-[18px]`}
            >
              <p className="leading-normal">
                إعاده ارسال كود التحقق؟
              </p>
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <SignUpFooter />
    </div>
  );
}

export default OTP;
