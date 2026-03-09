import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  imgLoginUnsplash, 
  imgLoginCall,
  imgLoginApple,
  imgLoginGoogle,
  imgLoginLogoText,
  imgLawyerLoginUnsplash,
  imgLawyerLoginLogoText,
  imgLawyerLoginApple,
  imgLawyerLoginGoogle,
  imgLawyerLoginCall,
  img1
} from '../constants/images';
import Image from '../components/Image';
import SignUpHeader from '../components/SignUpHeader';
import SignUpFooter from '../components/SignUpFooter';
import { useAuth } from '../context/AuthContext';

function Login() {
  const navigate = useNavigate();
  const { updateUserData, userRole } = useAuth();
  const isLawyer = userRole === 'lawyer';
  const [formData, setFormData] = useState({
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'يرجى إدخال رقم الهاتف';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'يرجى إدخال رقم هاتف صحيح';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save phone to context for OTP page
      updateUserData({
        phone: formData.phone.trim()
      });
      
      // Navigate to OTP page for verification
      navigate('/otp');
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ submit: 'حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Handle social login (Apple/Google)
    console.log(`Social login with ${provider}`);
    // In a real app, this would trigger OAuth flow
    // For now, navigate to OTP page
    navigate('/otp');
  };

  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Header */}
      <SignUpHeader />

      {/* Main Content - Responsive layout */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[60px] items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6 md:px-8 lg:px-0 py-8 sm:py-10 md:py-12 lg:py-0 w-full max-w-[1280px] mx-auto">
        {/* Image Column with Overlay (627px width) - Left side in RTL */}
        <div className="relative flex-shrink-0 w-full max-w-[627px] mt-0 mb-0 lg:mt-[100px] lg:mb-[100px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] hidden lg:block">
          {/* Background Image */}
          <div className="absolute inset-0 h-[600px] w-[627px] rounded-[10px] overflow-hidden">
            <Image alt="Background" className="absolute inset-0 object-cover pointer-events-none rounded-[10px] w-full h-full" src={isLawyer ? imgLawyerLoginUnsplash : imgLoginUnsplash} />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-[10px]"></div>
          </div>
          
          {/* Overlay Content - Positioned at bottom with proper margins matching Figma */}
          <div className="absolute bottom-[100px] left-[42px] right-[21px] flex flex-col gap-[10px] items-center justify-center p-[8px]">
            <div className="h-[71px] relative w-[339px] flex-shrink-0 mb-1">
              <Image alt="منصة وّكل" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerLoginLogoText : imgLoginLogoText} />
            </div>
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#fbfbfb] text-[18px] text-center w-full max-w-[564px]">
              <p className="leading-normal whitespace-pre-wrap mt-1">
                نحن هنا لمساعدتك في العثور على المحامي المناسب. ابدأ بتحديد نوع الخدمة وسنساعدك في إتمام العملية بسهولة.
              </p>
            </div>
          </div>
        </div>
        {/* Form Column (520px width) */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-end justify-center relative w-full max-w-[520px] flex-shrink-0">
          {/* Title Section */}
          <div className="flex flex-col items-end text-right w-full">
            <p className="font-cairo font-bold leading-tight sm:leading-normal md:leading-[38px] lg:leading-[42px] text-[#2e2e2e] text-2xl sm:text-3xl md:text-[34px] lg:text-[36px] w-full">
              مرحباً بك! يمكنك تسجيل الدخول
            </p>
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#828282] text-sm sm:text-base md:text-[17px] lg:text-[18px] w-full mt-2 sm:mt-3">
              <p className="leading-normal whitespace-pre-wrap text-right">
                {isLawyer 
                  ? 'برجاء تحديد صفه التسجيل , من ثم ادخال البيانات المطلوبه'
                  : 'برجاء ادخال البيانات المطلوبه'
                }
              </p>
            </div>
          </div>

          {/* Form Fields Section */}
          <form onSubmit={handleLogin} className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[32px] items-start w-full">
            {/* Phone Number Input */}
            <div className="flex flex-col gap-1 items-start w-full">
              <div className={`bg-[#fbfbfb] border border-solid flex h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-between px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full relative transition-colors ${
                errors.phone ? 'border-red-500' : 'border-[#d9d9d9]'
              }`}>
                <div className="flex items-center opacity-0 relative pointer-events-none">
                  <div className="relative w-[24px] h-[24px]"></div>
                  <div className="relative w-[24px] h-[24px]"></div>
                </div>
                <div className="flex gap-[6px] items-center justify-center absolute right-[14px] pointer-events-none">
                  <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#c3c3c3] text-[16px] text-right whitespace-nowrap">
                    <p className="leading-[22px]">{formData.phone ? '' : 'رقم الهاتف'}</p>
                  </div>
                  <div className="relative w-[20px] h-[20px]">
                    <Image alt="Call icon" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerLoginCall : imgLoginCall} />
                  </div>
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                  style={{ color: formData.phone ? '#1c1c1c' : 'transparent' }}
                  dir="rtl"
                  required
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm font-cairo text-right">{errors.phone}</p>
              )}
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[12px] items-start w-full">
              <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-center justify-center w-full">
                {/* Apple Button */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('apple')}
                  className="bg-[#e8f4fd] flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[56px] lg:h-[56px] flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]">
                    <Image alt="Apple" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerLoginApple : imgLoginApple} />
                  </div>
                </button>
                {/* Google Button */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('google')}
                  className="bg-[#e8f4fd] flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[56px] lg:h-[56px] flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]">
                    <Image alt="Google" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerLoginGoogle : imgLoginGoogle} />
                  </div>
                </button>
                {/* Login Button */}
                <button
                  type="button"
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="bg-[#0a4875] cursor-pointer flex flex-1 gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-center min-h-px min-w-px p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-base sm:text-lg md:text-[19px] lg:text-[20px] text-right text-white">
                    {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل دخول'}
                  </p>
                </button>
              </div>
              {/* Sign Up Link */}
              <Link to="/signup" className="cursor-pointer flex flex-col font-cairo font-medium justify-center leading-[0] text-[#0a4875] text-sm sm:text-base md:text-[17px] lg:text-[18px] text-center w-full">
                <p className="underline decoration-solid leading-normal whitespace-pre-wrap">
                  هل تريد إنشاء حساب؟
                </p>
              </Link>
              {errors.submit && (
                <p className="text-red-500 text-sm font-cairo text-center w-full">{errors.submit}</p>
              )}
            </div>
          </form>
        </div>

      </div>

      {/* Footer */}
      <SignUpFooter />
    </div>
  );
}

export default Login;
