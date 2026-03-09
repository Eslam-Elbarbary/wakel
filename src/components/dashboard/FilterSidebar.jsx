import React, { useState } from 'react';
import {
  imgDashboardVector9,
  imgDashboardArrowDownFilter,
  imgDashboardUnion,
  imgOrderVector9,
  imgOrderArrowDown,
  imgOrderUnion
} from '../../constants/images';
import Image from '../Image';

function FilterSidebar() {
  const [serviceType, setServiceType] = useState('');
  const [client, setClient] = useState('');
  const [city, setCity] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [priceRange, setPriceRange] = useState([140, 700]);

  return (
    <div className="bg-[#fbfbfb] flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] items-end p-4 sm:p-5 md:p-6 lg:p-[24px] rounded-[8px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] w-full lg:w-[384px] lg:sticky lg:top-4 lg:self-start">
      <p className="font-cairo font-semibold leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-lg sm:text-xl md:text-[19px] lg:text-[20px] text-right w-full whitespace-pre-wrap">
        التصفية
      </p>

      <div className="h-0 relative w-full">
        <div className="absolute inset-[-0.5px_0]">
          <Image alt="Divider" className="block w-full h-full object-contain" src={imgOrderVector9 || imgDashboardVector9} />
        </div>
      </div>

      {/* Service Type */}
      <div className="flex flex-col gap-[16px] items-end w-full">
        <p className="font-cairo font-medium leading-[28px] text-[#1c1c1c] text-[20px] text-right w-full whitespace-pre-wrap">
          نوع الخدمة
        </p>
        <div className="border border-[#ddd] border-solid flex gap-[10px] h-[56px] items-center justify-end px-[16px] py-[10px] rounded-[8px] w-full">
          <div className="overflow-clip relative w-[20px] h-[20px]">
            <div className="absolute inset-[34.37%_17.71%_34.38%_17.71%]">
              <Image alt="Arrow down" className="block w-full h-full object-contain" src={imgOrderArrowDown || imgDashboardArrowDownFilter} />
            </div>
          </div>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="capitalize flex-1 font-cairo leading-normal min-h-px min-w-px text-[#626262] text-[16px] text-right outline-none border-none bg-transparent appearance-none cursor-pointer"
            dir="rtl"
          >
            <option value="">اختر نوع الخدمة</option>
            <option value="consultation">استشارة</option>
            <option value="delegation">انابة</option>
            <option value="attendance">حضور</option>
          </select>
        </div>
      </div>

      {/* Client */}
      <div className="flex flex-col gap-[16px] items-end w-full">
        <p className="font-cairo font-medium leading-[28px] text-[#1c1c1c] text-[20px] text-right w-full whitespace-pre-wrap">
          طالب الخدمة
        </p>
        <div className="border border-[#ddd] border-solid flex gap-[10px] h-[56px] items-center justify-end px-[16px] py-[10px] rounded-[8px] w-full">
          <div className="overflow-clip relative w-[20px] h-[20px]">
            <div className="absolute inset-[34.37%_17.71%_34.38%_17.71%]">
              <Image alt="Arrow down" className="block w-full h-full object-contain" src={imgOrderArrowDown || imgDashboardArrowDownFilter} />
            </div>
          </div>
          <select
            value={client}
            onChange={(e) => setClient(e.target.value)}
            className="capitalize flex-1 font-cairo leading-normal min-h-px min-w-px text-[#626262] text-[16px] text-right outline-none border-none bg-transparent appearance-none cursor-pointer"
            dir="rtl"
          >
            <option value="">اختر طالب الخدمة</option>
          </select>
        </div>
      </div>

      {/* City */}
      <div className="flex flex-col gap-[16px] items-end w-full">
        <p className="font-cairo font-medium leading-[28px] text-[#1c1c1c] text-[20px] text-right w-full whitespace-pre-wrap">
          المدينة
        </p>
        <div className="border border-[#ddd] border-solid flex gap-[10px] h-[56px] items-center justify-end px-[16px] py-[10px] rounded-[8px] w-full">
          <div className="overflow-clip relative w-[20px] h-[20px]">
            <div className="absolute inset-[34.37%_17.71%_34.38%_17.71%]">
              <Image alt="Arrow down" className="block w-full h-full object-contain" src={imgOrderArrowDown || imgDashboardArrowDownFilter} />
            </div>
          </div>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="capitalize flex-1 font-cairo leading-normal min-h-px min-w-px text-[#626262] text-[16px] text-right outline-none border-none bg-transparent appearance-none cursor-pointer"
            dir="rtl"
          >
            <option value="">اسم المدينة</option>
          </select>
        </div>
      </div>

      {/* Governorate */}
      <div className="flex flex-col gap-[16px] items-end w-full">
        <p className="font-cairo font-medium leading-[28px] text-[#1c1c1c] text-[20px] text-right w-full whitespace-pre-wrap">
          المحافظة
        </p>
        <div className="border border-[#ddd] border-solid flex gap-[10px] h-[56px] items-center justify-end px-[16px] py-[10px] rounded-[8px] w-full">
          <div className="overflow-clip relative w-[20px] h-[20px]">
            <div className="absolute inset-[34.37%_17.71%_34.38%_17.71%]">
              <Image alt="Arrow down" className="block w-full h-full object-contain" src={imgOrderArrowDown || imgDashboardArrowDownFilter} />
            </div>
          </div>
          <select
            value={governorate}
            onChange={(e) => setGovernorate(e.target.value)}
            className="capitalize flex-1 font-cairo leading-normal min-h-px min-w-px text-[#626262] text-[16px] text-right outline-none border-none bg-transparent appearance-none cursor-pointer"
            dir="rtl"
          >
            <option value="">اسم المحافظة</option>
          </select>
        </div>
      </div>

      {/* Price Range */}
      <div className="flex flex-col gap-[16px] items-end w-full">
        <p className="font-cairo font-medium leading-[28px] text-[#1c1c1c] text-[20px] text-right w-full whitespace-pre-wrap">
          السعر
        </p>
        <div className="flex flex-col gap-[4px] items-end w-full">
          <div className="flex gap-[40px] items-center justify-end">
            <div className="bg-[#e8e8e8] flex items-center justify-center px-[8px] py-[2px] rounded-[23px]">
              <p className="capitalize font-cairo leading-normal text-[#1c1c1c] text-[12px] text-right">
                700 جنية
              </p>
            </div>
            <div className="bg-[#e8e8e8] flex items-center justify-center px-[8px] py-[2px] rounded-[23px]">
              <p className="capitalize font-cairo leading-normal text-[#1c1c1c] text-[12px] text-right">
                140 جنية
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
              <div className="h-[14px] relative w-full">
                <div className="absolute bg-[#ddd] inset-[42.86%_0] rounded-[40px]"></div>
                <div className="absolute inset-[0_63.68%_0_0]">
                  <Image alt="Slider" className="block w-full h-full object-contain" src={imgOrderUnion || imgDashboardUnion} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <button className="bg-[#e8e8e8] flex h-[56px] items-center justify-center p-[10px] rounded-[10px] w-full">
        <p className="font-cairo font-bold leading-normal text-[#1c1c1c] text-[18px] text-right">
          مسح التصنيف
        </p>
      </button>
    </div>
  );
}

export default FilterSidebar;
