import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  imgCountryUnsplash,
  imgCountryTickCircle,
  imgCountryTickCircle2,
  imgCountryEgypt,
  imgCountryAmericanSamoa,
  imgCountryAfghanistan,
  imgCountryLogoText,
  imgLawyerCountryUnsplash,
  imgLawyerCountryTickCircle,
  imgLawyerCountryTickCircle2,
  imgLawyerCountryEgypt,
  imgLawyerCountryAmericanSamoa,
  imgLawyerCountryAfghanistan,
  imgLawyerCountryLogoText
} from '../constants/images';
import Image from '../components/Image';
import SignUpHeader from '../components/SignUpHeader';
import SignUpFooter from '../components/SignUpFooter';
import { useAuth } from '../context/AuthContext';

function Country() {
  const navigate = useNavigate();
  const { updateUserData, userRole } = useAuth();
  const isLawyer = userRole === 'lawyer';
  const [selectedCountry, setSelectedCountry] = useState('egypt');

  const countries = [
    { 
      id: 'egypt', 
      name: 'مصر', 
      flag: isLawyer ? imgLawyerCountryEgypt : imgCountryEgypt 
    },
    { 
      id: 'bulgaria1', 
      name: 'بوالغاريا', 
      flag: isLawyer ? imgLawyerCountryAmericanSamoa : imgCountryAmericanSamoa 
    },
    { 
      id: 'wadongo', 
      name: 'وادونجو', 
      flag: isLawyer ? imgLawyerCountryAfghanistan : imgCountryAfghanistan 
    },
    { 
      id: 'bulgaria2', 
      name: 'بوالغاريا', 
      flag: isLawyer ? imgLawyerCountryAmericanSamoa : imgCountryAmericanSamoa 
    },
    { 
      id: 'wadongo2', 
      name: 'وادونجو', 
      flag: isLawyer ? imgLawyerCountryAfghanistan : imgCountryAfghanistan 
    }
  ];

  const handleCountrySelect = (countryId) => {
    setSelectedCountry(countryId);
    // Update country in context
    updateUserData({ country: countryId });
  };

  const handleNext = () => {
    // Save selected country and navigate to OTP
    updateUserData({ country: selectedCountry });
    navigate('/otp');
  };

  const handleSkip = () => {
    // Skip country selection and navigate to OTP
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
            <Image alt="Background" className="absolute inset-0 object-cover pointer-events-none rounded-[10px] w-full h-full" src={isLawyer ? imgLawyerCountryUnsplash : imgCountryUnsplash} />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-[10px]"></div>
          </div>
          
          {/* Overlay Content - Positioned at bottom with proper margins matching Figma */}
          <div className="absolute bottom-[100px] left-[42px] right-[21px] flex flex-col gap-[10px] items-center justify-center p-[8px]">
            <div className="h-[71px] relative w-[339px] flex-shrink-0 mb-1">
              <Image alt="منصة وّكل" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerCountryLogoText : imgCountryLogoText} />
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
          <div className="flex flex-col items-center justify-center text-center w-full">
            <p className="font-cairo font-bold text-center leading-tight sm:leading-normal md:leading-[38px] lg:leading-[42px] text-[#2e2e2e] text-xl sm:text-2xl md:text-3xl lg:text-[36px] w-full">
              برجاء إختيار البلد محل الاقامة
            </p>
            <div className="flex flex-col font-cairo text-center font-medium justify-center leading-[0] text-[#828282] text-sm sm:text-base md:text-[17px] lg:text-[18px] w-full mt-2 sm:mt-3">
              <p className="leading-normal whitespace-pre-wrap ">
                {isLawyer 
                  ? 'برجاء تحديد صفه التسجيل , من ثم ادخال البيانات المطلوبه'
                  : 'برجاء ادخال البيانات المطلوبه'
                }
              </p>
            </div>
          </div>

          {/* Country Selection Section */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[32px] items-start w-full">
            {/* Country List */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-start w-full">
              {countries.map((country) => {
                const isSelected = selectedCountry === country.id;
                return (
                  <button
                    key={country.id}
                    type="button"
                    onClick={() => handleCountrySelect(country.id)}
                    className={`border border-solid flex h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-between px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full relative cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#e8f4fd] border-[#0a4875]'
                        : 'bg-[#fbfbfb] border-[#d9d9d9] hover:border-[#0a4875]/50'
                    }`}
                  >
                    <div className="flex gap-[10px] items-start justify-start">
                    <div className="h-[18px] relative w-[24px] flex-shrink-0">
                        <Image alt={`${country.name} flag`} className="block w-full h-full object-contain" src={country.flag} />
                      </div>
                      <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[16px] text-start whitespace-nowrap">
                        <p className={`leading-[22px] ${isSelected ? 'text-[#0a4875]' : 'text-[#1c1c1c]'}`}>
                          {country.name}
                        </p>
                      </div>
                      
                    </div>
                    <div className="relative w-[20px] h-[20px] flex-shrink-0">
                      {isSelected ? (
                        <Image alt="Selected" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerCountryTickCircle2 : imgCountryTickCircle2} />
                      ) : (
                        <Image alt="Not selected" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerCountryTickCircle : imgCountryTickCircle} />
                      )}
                    </div>
                    
                  </button>
                );
              })}
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[12px] items-start w-full">
              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#0a4875] cursor-pointer flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-full hover:opacity-90 transition-opacity"
              >
                <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-base sm:text-lg md:text-[19px] lg:text-[20px] text-right text-white">
                  التالي
                </p>
              </button>
              {/* Skip Link */}
              <button
                type="button"
                onClick={handleSkip}
                className="cursor-pointer flex flex-col font-cairo font-medium justify-center leading-[0] text-[#0a4875] text-sm sm:text-base md:text-[17px] lg:text-[18px] text-center w-full hover:opacity-80 transition-opacity"
              >
                <p className="underline decoration-solid leading-normal whitespace-pre-wrap">
                  تخطي
                </p>
              </button>
            </div>
          </div>
        </div>

       

      </div>

      {/* Footer */}
      <SignUpFooter />
    </div>
  );
}

export default Country;
