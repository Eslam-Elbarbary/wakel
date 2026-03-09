import { Link } from 'react-router-dom';
import { img1, imgSignUpLogo } from '../constants/images';
import Image from './Image';

function SignUpHeader() {
  return (
    <div className="fixed top-0 bg-white flex h-16 sm:h-20 md:h-24 lg:h-[100px] items-center justify-between left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-[80px] py-3 sm:py-4 md:py-5 lg:py-[20px] rounded-bl-[10px] rounded-br-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full z-10">
        <Link to="/" className="h-6 sm:h-7 md:h-8 lg:h-[30px] relative w-24 sm:w-28 md:w-32 lg:w-[143px]">
        <Image alt="منصة وّكل logo" className="block w-full h-full object-contain" src={imgSignUpLogo} />
      </Link>
      <div className="flex items-center relative">
        <div className="bg-[#f3f3f3] flex gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] h-10 sm:h-12 md:h-14 lg:h-[52px] items-center justify-center px-2 sm:px-3 md:px-4 lg:px-[12px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px]">
          <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[20px] lg:h-[20px]">
            <Image alt="Arrow down" className="block w-full h-full object-contain" src={img1} />
          </div>
          <p className="font-cairo font-medium leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px] text-[#2e2e2e] text-xs sm:text-sm md:text-[13px] lg:text-[14px]">
            العربية
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpHeader;
