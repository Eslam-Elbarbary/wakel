import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  imgSignUpUnsplash, 
  imgSignUpTickSquare, 
  imgSignUpProfile,
  imgSignUpCall,
  imgSignUpSms,
  imgSignUpApple,
  imgSignUpGoogle,
  imgSignUpLogoText,
  imgLawyerSignUpUnsplash,
  imgLawyerSignUpLogoText,
  imgLawyerSignUpApple,
  imgLawyerSignUpGoogle
} from '../constants/images';
import Image from '../components/Image';
import SignUpHeader from '../components/SignUpHeader';
import SignUpFooter from '../components/SignUpFooter';
import { useAuth } from '../context/AuthContext';

function SignUp() {
  const navigate = useNavigate();
  const { updateUserData, userRole } = useAuth();
  const isLawyer = userRole === 'lawyer';
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'يرجى إدخال الاسم الكامل';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'الاسم يجب أن يكون 3 أحرف على الأقل';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'يرجى إدخال رقم الهاتف';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'يرجى إدخال رقم هاتف صحيح';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'يرجى إدخال البريد الإلكتروني';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'يرجى إدخال بريد إلكتروني صحيح';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'يجب الموافقة على الشروط والأحكام';
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

  const handleCheckboxChange = () => {
    setFormData(prev => ({
      ...prev,
      agreeToTerms: !prev.agreeToTerms
    }));
    if (errors.agreeToTerms) {
      setErrors(prev => ({
        ...prev,
        agreeToTerms: ''
      }));
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save user data to context
      updateUserData({
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        agreeToTerms: formData.agreeToTerms
      });
      
      // Navigate to country selection page
      navigate('/country');
    } catch (error) {
      console.error('Sign up error:', error);
      setErrors({ submit: 'حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Handle social login (Apple/Google)
    console.log(`Social login with ${provider}`);
    // In a real app, this would trigger OAuth flow
    // For now, navigate to country page
    navigate('/country');
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex flex-col">
      {/* Header */}
      <SignUpHeader />

      {/* Main Content - Responsive layout */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[60px] items-center justify-center flex-1 px-4 sm:px-6 md:px-8 lg:px-0 pt-20 sm:pt-24 md:pt-28 lg:pt-[120px] pb-20 sm:pb-24 md:pb-28 lg:pb-[120px] w-full max-w-[1280px] mx-auto">
       {/* Image Column with Overlay (627px width) - Left side in RTL */}
       <div className="relative flex-shrink-0 w-full max-w-[627px] mt-0 mb-0 lg:mt-[100px] lg:mb-[100px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] hidden lg:block">
          {/* Background Image */}
          <div className="absolute inset-0 h-[600px] w-[627px] rounded-[10px] overflow-hidden">
            <Image alt="Background" className="absolute inset-0 object-cover pointer-events-none rounded-[10px] w-full h-full" src={isLawyer ? imgLawyerSignUpUnsplash : imgSignUpUnsplash} />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-[10px]"></div>
          </div>
          
          {/* Overlay Content - Positioned at bottom with proper margins matching Figma */}
          <div className="absolute bottom-[100px] left-[42px] right-[21px] flex flex-col gap-[10px] items-center justify-center p-[8px]">
            <div className="h-[71px] relative w-[339px] flex-shrink-0 mb-1">
              <Image alt="منصة وّكل" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerSignUpLogoText : imgSignUpLogoText} />
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
            <p className="font-cairo font-bold leading-tight sm:leading-snug md:leading-[48px] lg:leading-[56px] text-[#2e2e2e] text-lg sm:text-xl md:text-2xl lg:text-[36px] w-full break-words">
              {isLawyer 
                ? 'مرحباً بك في منصة وّكل، يمكنك إنشاء حساب كمحامي بسهولة'
                : 'مرحباً بك في منصة وّكل، يمكنك إنشاء حساب بسهولة'
              }
            </p>
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#828282] text-sm sm:text-base md:text-[17px] lg:text-[18px] w-full mt-2 sm:mt-3">
              <p className="leading-normal">
                {isLawyer 
                  ? 'برجاء تحديد صفه التسجيل , من ثم ادخال البيانات المطلوبه'
                  : 'برجاء ادخال البيانات المطلوبه'
                }
              </p>
            </div>
          </div>

          {/* Form Fields Section */}
          <form onSubmit={handleCreateAccount} className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[32px] items-start w-full">
            {/* Input Fields */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-end justify-center w-full">
              {/* Full Name Input */}
              <div className="flex flex-col gap-1 w-full">
                <div className={`bg-[#fbfbfb] border border-solid flex h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-between px-3 sm:px-3.5 md:px-4 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[14px] w-full relative transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-[#d9d9d9]'
                }`}>
                  <div className="flex items-center opacity-0 relative pointer-events-none">
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]"></div>
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]"></div>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-[6px] items-center justify-center absolute right-3 sm:right-3.5 md:right-4 lg:right-[14px] pointer-events-none">
                    <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#c3c3c3] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-right whitespace-nowrap">
                      <p className="leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px]">{formData.fullName ? '' : 'الأسم رباعي'}</p>
                    </div>
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px] flex-shrink-0">
                      <Image alt="Profile icon" className="block w-full h-full object-contain" src={imgSignUpProfile} />
                    </div>
                  </div>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full h-full px-3 sm:px-3.5 md:px-4 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-sm sm:text-base md:text-[15px] lg:text-[16px]"
                    style={{ color: formData.fullName ? '#1c1c1c' : 'transparent' }}
                    dir="rtl"
                    required
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-xs sm:text-sm font-cairo text-right mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number Input */}
              <div className="flex flex-col gap-1 w-full">
                <div className={`bg-[#fbfbfb] border border-solid flex h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-between px-3 sm:px-3.5 md:px-4 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[14px] w-full relative transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-[#d9d9d9]'
                }`}>
                  <div className="flex items-center opacity-0 relative pointer-events-none">
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]"></div>
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]"></div>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-[6px] items-center justify-center absolute right-3 sm:right-3.5 md:right-4 lg:right-[14px] pointer-events-none">
                    <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#c3c3c3] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-right whitespace-nowrap">
                      <p className="leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px]">{formData.phone ? '' : 'رقم الهاتف'}</p>
                    </div>
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px] flex-shrink-0">
                      <Image alt="Call icon" className="block w-full h-full object-contain" src={imgSignUpCall} />
                    </div>
                  </div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full h-full px-3 sm:px-3.5 md:px-4 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-sm sm:text-base md:text-[15px] lg:text-[16px]"
                    style={{ color: formData.phone ? '#1c1c1c' : 'transparent' }}
                    dir="rtl"
                    required
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs sm:text-sm font-cairo text-right mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1 w-full">
                <div className={`bg-[#fbfbfb] border border-solid flex h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-between px-3 sm:px-3.5 md:px-4 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[14px] w-full relative transition-colors ${
                  errors.email ? 'border-red-500' : 'border-[#d9d9d9]'
                }`}>
                  <div className="flex items-center opacity-0 relative pointer-events-none">
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]"></div>
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]"></div>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-[6px] items-center justify-center absolute right-3 sm:right-3.5 md:right-4 lg:right-[14px] pointer-events-none">
                    <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#c3c3c3] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-right whitespace-nowrap">
                      <p className="leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px]">{formData.email ? '' : 'البريد الإلكتروني'}</p>
                    </div>
                    <div className="flex items-center justify-end relative">
                      <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px] flex-shrink-0">
                        <Image alt="Email icon" className="block w-full h-full object-contain" src={imgSignUpSms} />
                      </div>
                    </div>
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full h-full px-3 sm:px-3.5 md:px-4 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-sm sm:text-base md:text-[15px] lg:text-[16px]"
                    style={{ color: formData.email ? '#1c1c1c' : 'transparent' }}
                    dir="rtl"
                    required
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm font-cairo text-right mt-1">{errors.email}</p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="flex flex-col gap-1 w-full">
                <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-start justify-start text-start relative">
                  <button
                    type="button"
                    onClick={handleCheckboxChange}
                    className={`block cursor-pointer relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px] flex-shrink-0 transition-all mt-0.5 sm:mt-1 ${
                      formData.agreeToTerms ? '' : 'border border-[#d9d9d9] rounded-[4px] bg-white'
                    } ${errors.agreeToTerms ? 'border-red-500' : ''}`}
                  >
                    {formData.agreeToTerms && (
                      <div className="relative w-full h-full">
                        <Image alt="Checkbox checked" className="block w-full h-full object-contain" src={imgSignUpTickSquare} />
                      </div>
                    )}
                  </button>
                  <div className="flex flex-col font-cairo font-medium min-h-[30px] justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right flex-1">
                    <p className="leading-normal break-words">
                      <span>يجب الإطلاع و الموافقه علي </span>
                      <span className="underline decoration-solid font-cairo font-medium text-[#0a4875]">سياسيه الشروط</span>
                      <span> و</span>
                      <span className="underline decoration-solid font-cairo font-medium text-[#0a4875]"> الاحكام</span>
                    </p>
                  </div>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-red-500 text-xs sm:text-sm font-cairo text-right mt-1">{errors.agreeToTerms}</p>
                )}
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[12px] items-start w-full">
              <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-center justify-center w-full">
                 {/* Create Account Button */}
                 <button
                   type="button"
                   onClick={handleCreateAccount}
                   disabled={isLoading}
                   className="bg-[#0a4875] cursor-pointer flex flex-1 gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-center min-h-px min-w-px p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[14px] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                  <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-base sm:text-lg md:text-[19px] lg:text-[20px] text-right text-white">
                    {isLoading ? 'جاري الإنشاء...' : 'إنشاء حساب'}
                  </p>
                </button>
                {/* Apple Button */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('apple')}
                  className="bg-[#e8f4fd] flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[12px] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[56px] lg:h-[56px] flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]">
                    <Image alt="Apple" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerSignUpApple : imgSignUpApple} />
                  </div>
                </button>
                {/* Google Button */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('google')}
                  className="bg-[#e8f4fd] flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[12px] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[56px] lg:h-[56px] flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]">
                    <Image alt="Google" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerSignUpGoogle : imgSignUpGoogle} />
                  </div>
                </button>
              </div>
              {/* Login Link */}
              <Link to="/login" className="cursor-pointer flex flex-col font-cairo font-medium justify-center leading-[0] text-[#0a4875] text-sm sm:text-base md:text-[17px] lg:text-[18px] text-center w-full">
                <p className="underline decoration-solid leading-normal whitespace-pre-wrap">
                  هل تريد تسجيل دخول؟
                </p>
              </Link>
              {errors.submit && (
                <p className="text-red-500 text-xs sm:text-sm font-cairo text-center w-full">{errors.submit}</p>
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

export default SignUp;
