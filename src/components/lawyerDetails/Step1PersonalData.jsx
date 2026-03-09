import { useState } from 'react';
import {
  imgLawyerDetailsEye,
  imgLawyerDetailsArrowDown,
  imgLawyerDetailsCalendar
} from '../../constants/images';
import Image from '../Image';

function Step1PersonalData({ formData, onInputChange, errors }) {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] items-start w-full">
      {/* Personal Data Section */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-start w-full">
        <p className="font-cairo font-bold leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-lg sm:text-xl md:text-[19px] lg:text-[20px] text-right">
          بيانات المحامي الشخصيه
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] items-start w-full">
          {/* Full Name */}
          <div className="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-start justify-center w-full">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                الاسم بالكامل<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-between px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full relative">
              <div className="flex items-center opacity-0 relative">
                <div className="relative w-[24px] h-[24px]"></div>
                <div className="relative w-[24px] h-[24px]"></div>
              </div>
              {!formData.fullName && (
                <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#c3c3c3] text-[16px] text-right whitespace-nowrap absolute right-[14px] pointer-events-none">
                  <p className="leading-[22px]">
                    <span className="text-[#1c1c1c]">الأستاذ/ة:</span>
                    <span>{` الاسم بالكامل`}</span>
                  </p>
                </div>
              )}
              <input
                type="text"
                value={formData.fullName || ''}
                onChange={(e) => onInputChange('fullName', e.target.value)}
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.fullName ? '#1c1c1c' : 'transparent' }}
                dir="rtl"
              />
            </div>
          </div>
          {/* Birth Date */}
          <div className="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-start justify-center w-full">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                تاريخ الميلاد<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-between px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full">
              
              <label className="w-full relative cursor-pointer">
                <input
                  type="date"
                  value={formData.birthDate || ''}
                  onChange={(e) => onInputChange('birthDate', e.target.value)}
                  className="w-full h-full px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] border-0 outline-0 bg-transparent cursor-pointer text-right font-cairo font-normal text-sm sm:text-base md:text-[15px] lg:text-[16px]"
                  style={{ color: formData.birthDate ? '#1c1c1c' : 'transparent' }}
                  dir="rtl"
                />
                {!formData.birthDate && (
                  <span className="absolute right-8 sm:right-9 md:right-10 lg:right-[34px] top-1/2 -translate-y-1/2 pointer-events-none font-cairo font-normal leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px] text-[#c3c3c3] text-xs sm:text-sm md:text-[15px] lg:text-[16px]">
                    يوم/شهر/سنه
                  </span>
                )}
              </label>
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px] flex-shrink-0">
                <Image alt="Calendar" className="block w-full h-full object-contain" src={imgLawyerDetailsCalendar} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] items-start w-full">
          {/* National ID */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] min-h-[70px] sm:min-h-[80px] md:min-h-[90px] lg:h-[98px] items-start justify-center w-full sm:w-auto lg:w-[402px]">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                رقم بطاقه الرقم القومي<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-between px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full">
              <div className="flex items-center opacity-0 relative">
                <div className="relative w-[24px] h-[24px]"></div>
                <div className="relative w-[24px] h-[24px]"></div>
              </div>
              <input
                type="text"
                value={formData.nationalId || ''}
                onChange={(e) => onInputChange('nationalId', e.target.value)}
                placeholder="رقم بطاقه الرقم القومي"
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.nationalId ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              />
            </div>
          </div>
          {/* Nationality */}
          <div className="flex flex-col gap-[8px] h-[98px] items-start justify-center w-[402px]">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                الجنسيه<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
              <div className="flex items-center opacity-0 relative">
                <div className="relative w-[24px] h-[24px]"></div>
                <div className="relative w-[24px] h-[24px]"></div>
              </div>
              <select
                value={formData.nationality || ''}
                onChange={(e) => onInputChange('nationality', e.target.value)}
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent appearance-none cursor-pointer text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.nationality ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              >
                <option value="">الجنسيه</option>
                <option value="egyptian">مصري</option>
                <option value="other">أخرى</option>
              </select>
              <div className="relative w-[24px] h-[24px] pointer-events-none">
                <Image alt="Arrow down" className="block w-full h-full object-contain" src={imgLawyerDetailsArrowDown} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Data Section */}
      <div className="flex flex-col gap-[20px] items-start w-full">
        <p className="font-cairo font-bold leading-[28px] text-[#1c1c1c] text-[20px] text-right">
          بيانات الاتصال الخاصه بالمحامي
        </p>
        <div className="flex gap-[20px] items-center justify-end w-full">
          {/* Additional Phone */}
          <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">{`رقم هاتف الاضافي او رقم المكتب (اختياري) `}</p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full relative">
              <div className="flex items-center opacity-0 relative">
                <div className="relative w-[24px] h-[24px]"></div>
                <div className="relative w-[24px] h-[24px]"></div>
              </div>
              {!formData.additionalPhone && (
                <div className="flex gap-[10px] items-center leading-[0] text-[#c3c3c3] text-[16px] text-right whitespace-nowrap absolute right-[14px] pointer-events-none">
                  <div className="flex flex-col font-cairo font-normal justify-center">
                    <p className="leading-[22px]">رقم الهاتف</p>
                  </div>
                  <div className="flex flex-col font-cairo font-bold justify-center">
                    <p className="leading-[22px]">+20</p>
                  </div>
                </div>
              )}
              <input
                type="tel"
                value={formData.additionalPhone || ''}
                onChange={(e) => onInputChange('additionalPhone', e.target.value)}
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.additionalPhone ? '#1c1c1c' : 'transparent' }}
                dir="rtl"
              />
            </div>
          </div>
          {/* Primary Phone */}
          <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                رقم الهاتف اساسي<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full relative">
              <div className="flex items-center opacity-0 relative">
                <div className="relative w-[24px] h-[24px]"></div>
                <div className="relative w-[24px] h-[24px]"></div>
              </div>
              {!formData.primaryPhone && (
                <div className="flex gap-[10px] items-center leading-[0] text-[#c3c3c3] text-[16px] text-right whitespace-nowrap absolute right-[14px] pointer-events-none">
                  <div className="flex flex-col font-cairo font-normal justify-center">
                    <p className="leading-[22px]">رقم الهاتف</p>
                  </div>
                  <div className="flex flex-col font-cairo font-bold justify-center">
                    <p className="leading-[22px]">+20</p>
                  </div>
                </div>
              )}
              <input
                type="tel"
                value={formData.primaryPhone || ''}
                onChange={(e) => onInputChange('primaryPhone', e.target.value)}
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.primaryPhone ? '#1c1c1c' : 'transparent' }}
                dir="rtl"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-full">
          {/* Email */}
          <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">البريد الإلكتروني</p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
              <div className="flex items-center opacity-0 relative">
                <div className="relative w-[24px] h-[24px]"></div>
                <div className="relative w-[24px] h-[24px]"></div>
              </div>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => onInputChange('email', e.target.value)}
                placeholder="البريد الإلكتروني"
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.email ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1PersonalData;
