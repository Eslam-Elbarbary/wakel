import { imgSignUpQemaa1, imgSignUpQemaa2, imgSignUpQemaa3 } from '../constants/images';
import Image from './Image';

function SignUpFooter() {
  return (
    <div className="fixed bg-[#0a4875] bottom-0 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-[12px] min-h-[70px] sm:min-h-[80px] md:min-h-[85px] lg:h-[90px] items-center justify-center left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-0 w-full z-10">
      <p className="font-alexandria font-normal leading-normal text-[#e7e7ee] text-xs sm:text-sm md:text-base lg:text-[18px] text-center order-2 sm:order-1">
        حقوق الطبع والنشر © 2025
      </p>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative order-1 sm:order-2">
        <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[10.58%] mt-[93.51%] relative row-[1]">
          <div className="col-[1] h-[2px] sm:h-[2.2px] md:h-[2.4px] lg:h-[2.595px] ml-0 mt-0 relative row-[1] w-[40px] sm:w-[50px] md:w-[55px] lg:w-[60.81px]">
            <Image alt="Qemaa logo part 1" className="block w-full h-full object-contain" src={imgSignUpQemaa1} />
          </div>
        </div>
        <div className="col-[1] h-[14px] sm:h-[16px] md:h-[18px] lg:h-[19.922px] ml-[22.21%] mt-0 relative row-[1] w-[28px] sm:w-[34px] md:w-[37px] lg:w-[40.887px]">
          <Image alt="Qemaa logo part 2" className="block w-full h-full object-contain" src={imgSignUpQemaa2} />
        </div>
        <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-0 mt-[63.18%] relative row-[1]">
          <div className="col-[1] h-[7px] sm:h-[8px] md:h-[9px] lg:h-[9.827px] ml-0 mt-0 relative row-[1] w-[50px] sm:w-[60px] md:w-[67px] lg:w-[73.627px]">
            <Image alt="Qemaa logo part 3" className="block w-full h-full object-contain" src={imgSignUpQemaa3} />
          </div>
        </div>
      </div>
      <p className="font-alexandria font-normal leading-normal text-[#e7e7ee] text-xs sm:text-sm md:text-base lg:text-[18px] text-center order-3 hidden sm:block">
        | جميع الحقوق محفوظة
      </p>
      <p className="font-alexandria font-normal leading-normal text-[#e7e7ee] text-xs sm:text-sm md:text-base lg:text-[18px] text-center order-3 sm:hidden">
        جميع الحقوق محفوظة
      </p>
    </div>
  );
}

export default SignUpFooter;
