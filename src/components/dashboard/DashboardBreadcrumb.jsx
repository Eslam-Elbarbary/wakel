import React from 'react';
import { Link } from 'react-router-dom';
import {
  imgDashboardArrowRight,
  imgDashboardArrowLeft
} from '../../constants/images';
import Image from '../Image';

function DashboardBreadcrumb({ title, subtitle }) {
  return (
    <div className="bg-white flex flex-col items-center justify-center overflow-clip p-2 sm:p-3 md:p-4 lg:p-[10px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full max-w-[1280px]">
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-end justify-center w-full">
        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center w-full">
          <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-lg sm:text-xl md:text-2xl lg:text-[26px] text-right flex-1">
            <p className="leading-tight sm:leading-normal md:leading-[38px] lg:leading-[42px] whitespace-pre-wrap">{title}</p>
          </div>
          <button className="border border-[#d9d9d9] border-solid flex items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[42px] lg:h-[42px] flex-shrink-0">
            <div className="overflow-clip relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px]">
              <div className="absolute flex inset-[29.17%_16.67%] items-center justify-center">
                <div className="flex-none rotate-[90deg] scale-y-[-100%] w-2 h-3 sm:w-2.5 sm:h-3.5 md:w-3 md:h-4 lg:w-[10px] lg:h-[16px]">
                  <div className="relative w-full h-full">
                    <Image alt="Arrow right" className="block w-full h-full object-contain" src={imgDashboardArrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] h-auto sm:h-10 md:h-12 lg:h-[48px] items-center justify-start px-3 sm:px-4 md:px-5 lg:px-[20px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full flex-wrap">
          <Link to="/">
            <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#828282] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
              <p className="leading-normal">الرئيسيه</p>
            </div>
          </Link>
         
          <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px] flex-shrink-0">
            <Image alt="Arrow left" className="block w-full h-full object-contain" src={imgDashboardArrowLeft} />
          </div>
          <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#2e2e2e] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
            <p className="leading-normal">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardBreadcrumb;
