import { img, imgGroup3 } from '../constants/images';
import Image from './Image';

function Header() {
  return (
    <div className="w-full  bg-white">
      <div className="w-full mx-auto">
        <div className="bg-white  flex flex-row h-16 sm:h-20 md:h-24 lg:h-[100px] items-center justify-between px-4 sm:px-6 md:px-10 lg:px-[80px] py-3 sm:py-4 md:py-5 lg:py-[20px] rounded-bl-[10px] rounded-br-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
          {/* Right side (start in RTL): Logo + Navigation links */}
          <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-[40px] items-center">
            {/* Logo - Far right */}
            <div className="flex  gap-1 sm:gap-1.5 md:gap-2 lg:gap-[5.085px] items-center justify-center">
              <p className="font-gulzar leading-normal text-[#0a4875] text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
                منصة وّكل
              </p>
              <div className="relative w-7 h-6 sm:w-9 sm:h-7 md:w-11 md:h-9 lg:w-[43.449px] lg:h-[36.41px]">
                <Image 
                  alt="منصة وّكل logo" 
                  className="block w-full h-full object-contain" 
                  src={imgGroup3}
                />
              </div>
            </div>
            {/* Navigation Links - To the left of logo, hidden on mobile */}
            <div className="hidden md:flex flex-row gap-2 sm:gap-3 lg:gap-[10px] items-center">
            <div className="border-[#0a4875] border-b-2 border-l-0 border-r-0 border-solid border-t-0 flex items-center justify-center p-1.5 sm:p-2 lg:p-[8px]">
                <div className="font-cairo font-bold text-[#0a4875] text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                  <p className="leading-normal">الرئيسية</p>
                </div>
              </div>
              
              <a className="cursor-pointer flex items-center justify-center p-1.5 sm:p-2 lg:p-[8px]">
                <div className="font-cairo font-semibold text-[#1c1c1c] text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                  <p className="leading-normal">المحاميون</p>
                </div>
              </a>
              <a className="cursor-pointer flex items-center justify-center p-1.5 sm:p-2 lg:p-[8px]">
                <div className="font-cairo font-semibold text-[#1c1c1c] text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                  <p className="leading-normal"> اتصل بنا </p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Left side (end in RTL): Language selector + Buttons */}
          <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[20px] items-center">
            {/* Language Selector - Far left, hidden on small mobile */}
            <div className="hidden sm:flex bg-[#f3f3f3] gap-1 sm:gap-2 lg:gap-[4px] h-9 sm:h-10 md:h-11 lg:h-[52px] items-center justify-center px-2 sm:px-2.5 md:px-3 lg:px-[12px] py-1.5 sm:py-2 md:py-2.5 lg:py-[10px] rounded-[10px]">
              <div className="relative w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 lg:w-[20px] lg:h-[20px]">
                <Image 
                  alt="Language selector" 
                  className="block w-full h-full object-contain" 
                  src={img}
                />
              </div>
              <p className="font-cairo font-medium leading-[22px] text-[#2e2e2e] text-xs sm:text-[13px] md:text-sm lg:text-[14px]">
                العربية
              </p>
            </div>
            {/* Buttons - To the right of language selector */}
            <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-[10px] items-center">
              <a className="border border-[#0a4875] border-solid flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-[10px] h-9 sm:h-10 md:h-12 lg:h-[60px] items-center justify-center px-2 sm:px-3 md:px-4 lg:px-[20px] py-1.5 sm:py-2 md:py-2.5 lg:py-[10px] rounded-[10px] w-20 sm:w-24 md:w-28 lg:w-[155px]">
                <p className="font-cairo font-bold leading-normal text-[#0a4875] text-xs sm:text-[13px] md:text-sm lg:text-[16px] text-end">
                  سجل دخول
                </p>
              </a>
              <a className="bg-[#0a4875] flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-[10px] h-9 sm:h-10 md:h-12 lg:h-[60px] items-center justify-center px-2 sm:px-3 md:px-4 lg:px-[20px] py-1.5 sm:py-2 md:py-2.5 lg:py-[10px] rounded-[10px] w-24 sm:w-28 md:w-32 lg:w-[179px]">
                <p className="font-cairo font-bold leading-normal text-xs sm:text-[13px] md:text-sm lg:text-[16px] text-end text-white">
                  سجل كمحامي
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
