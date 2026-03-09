import React from 'react';
import {
  imgDashboardProfile,
  imgDashboardVerify,
  imgDashboardDocumentText,
  imgDashboardStar,
  imgDashboardBriefcase,
  imgDashboardEye,
  imgDashboardCall,
  imgDashboardSms,
  imgDashboardEyeOutline,
  imgDashboardFacebook
} from '../../constants/images';
import Image from '../Image';

function DashboardSidebar() {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-center w-full lg:w-[428px] lg:sticky lg:top-4 lg:self-start">
      {/* Profile Card */}
      <div className="bg-white flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center px-2 sm:px-3 md:px-4 lg:px-[10px] py-4 sm:py-5 md:py-6 lg:py-[20px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
        {/* Profile Picture */}
        <div className="bg-white border-[#1c1c1c] border-2 sm:border-[2.5px] md:border-[2.8px] lg:border-[3px] border-solid flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[8px] rounded-[100px] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[80px] lg:h-[80px] relative">
          <div className="aspect-[184/184] relative rounded-[300px] w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[300px]">
              <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[300px] to-[rgba(0,0,0,0.2)]"></div>
              <img alt="Profile" className="absolute max-w-none object-contain rounded-[300px] w-full h-full" src={imgDashboardProfile} />
            </div>
          </div>
          <div className="absolute bg-white bottom-[-2px] sm:bottom-[-2.5px] md:bottom-[-2.8px] lg:bottom-[-3px] right-[-2px] sm:right-[-2.5px] md:right-[-2.8px] lg:right-[-3px] rounded-[300px] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]">
            <Image alt="Verify" className="block w-full h-full object-contain" src={imgDashboardVerify} />
          </div>
        </div>

        {/* Name */}
        <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[17px] lg:text-[18px] text-right whitespace-nowrap">
          <p className="leading-normal">الأستاذ / حسنين حسونة</p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-between w-full gap-2 sm:gap-3 md:gap-4 lg:gap-0">
          <div className="flex flex-col items-center justify-center w-[90px]">
            <div className="flex flex-col gap-[4px] items-center">
              <div className="relative w-[16px] h-[16px]">
                <Image alt="Document" className="block w-full h-full object-contain" src={imgDashboardDocumentText} />
              </div>
              <div className="flex flex-col font-cairo font-medium h-[20px] justify-center leading-[0] text-[#626262] text-[13px] text-center w-[89px]">
                <p className="leading-[28px] whitespace-pre-wrap">طلبات الاستشارة</p>
              </div>
            </div>
            <div className="flex flex-col font-cairo font-bold h-[24px] justify-center leading-[0] text-[#1c1c1c] text-[16px] text-center w-[36px]">
              <p className="leading-[28px] whitespace-pre-wrap">+100</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[90px]">
            <div className="flex flex-col gap-[4px] items-center">
              <div className="relative w-[16px] h-[16px]">
                <Image alt="Star" className="block w-full h-full object-contain" src={imgDashboardStar} />
              </div>
              <div className="flex flex-col font-cairo font-medium h-[20px] justify-center leading-[0] text-[#626262] text-[13px] text-center w-[51px]">
                <p className="leading-[28px] whitespace-pre-wrap">التعليقات</p>
              </div>
            </div>
            <div className="flex flex-col font-cairo font-bold h-[24px] justify-center leading-[0] text-[#1c1c1c] text-[16px] text-center w-[36px]">
              <p className="leading-[28px] whitespace-pre-wrap">+100</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[90px]">
            <div className="flex flex-col gap-[4px] items-center">
              <div className="relative w-[16px] h-[16px]">
                <Image alt="Briefcase" className="block w-full h-full object-contain" src={imgDashboardBriefcase} />
              </div>
              <div className="flex flex-col font-cairo font-medium h-[20px] justify-center leading-[0] text-[#626262] text-[13px] text-center w-[66px]">
                <p className="leading-[28px] whitespace-pre-wrap">طلبات الإنابة</p>
              </div>
            </div>
            <div className="flex flex-col font-cairo font-bold h-[24px] justify-center leading-[0] text-[#1c1c1c] text-[16px] text-center w-[36px]">
              <p className="leading-[28px] whitespace-pre-wrap">+100</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[90px]">
            <div className="flex flex-col gap-[4px] items-center">
              <div className="relative w-[16px] h-[16px]">
                <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEye} />
              </div>
              <div className="flex flex-col font-cairo font-medium h-[20px] justify-center leading-[0] text-[#626262] text-[13px] text-center w-[38px]">
                <p className="leading-[28px] whitespace-pre-wrap">الزيارات</p>
              </div>
            </div>
            <div className="flex flex-col font-cairo font-bold h-[24px] justify-center leading-[0] text-[#1c1c1c] text-[16px] text-center w-[36px]">
              <p className="leading-[28px] whitespace-pre-wrap">+100</p>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-start justify-center w-full">
          <div className="flex gap-[10px] items-center justify-center">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#626262] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[28px]">رقم الهاتف</p>
            </div>
            <div className="relative w-[20px] h-[20px]">
              <Image alt="Call" className="block w-full h-full object-contain" src={imgDashboardCall} />
            </div>
          </div>
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[28px]">+20 01000000000</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col items-start justify-center w-full">
          <div className="flex gap-[10px] items-center justify-center">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#626262] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[28px]">البريد الالكتروني</p>
            </div>
            <div className="relative w-[20px] h-[20px]">
              <Image alt="SMS" className="block w-full h-full object-contain" src={imgDashboardSms} />
            </div>
          </div>
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[28px]">hossinhasonaa30@gmail.com</p>
          </div>
        </div>

        {/* Logout */}
        <div className="flex flex-col font-cairo font-bold h-[22px] justify-center leading-[0] text-[#cc1024] text-[14px] text-right w-[77px] cursor-pointer">
          <p className="[text-underline-position:from-font] decoration-solid leading-[28px] underline whitespace-pre-wrap">
            تسجيل خروج
          </p>
        </div>
      </div>

      {/* Notifications Card */}
      <div className="bg-white flex flex-col gap-[10px] items-center p-[10px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
        <div className="flex flex-col items-start justify-center w-full">
          <div className="flex items-center justify-between w-full">
          <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-center whitespace-nowrap">
              <p className="leading-[28px]">الاشعارات</p>
            </div>
            <div className="bg-[#f3f3f3] flex h-[28px] items-center justify-center px-[8px] py-[4px] rounded-[8px] w-[90px]">
              <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#4c4c4c] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[28px]">10 إشعار جديد</p>
              </div>
            </div>
            
          </div>
          <div className="flex flex-col font-cairo font-medium h-[22px] justify-center leading-[0] text-[#626262] text-[14px] text-center w-[190px]">
            <p className="leading-[28px] whitespace-pre-wrap">يتم عرض جميع الاشعارات الجديده</p>
          </div>
        </div>

        {/* Notification Items */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="border border-[#d9d9d9] border-solid flex flex-col items-start leading-[0] p-[10px] rounded-[10px] w-full">
            <div className="flex flex-col font-cairo font-bold h-[23px] justify-center relative text-[#1c1c1c] text-[14px] text-right w-[85px]">
              <p className="leading-[28px] whitespace-pre-wrap">عنوان الاشعار</p>
            </div>
            <div className="flex flex-col font-cairo font-normal justify-center min-w-full relative text-[#626262] text-[13px] text-right w-[min-content]">
              <p className="leading-[20px] whitespace-pre-wrap">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
              </p>
            </div>
            <div className="flex flex-col font-cairo font-medium h-[19px] justify-center relative text-[#626262] text-[12px] w-full">
              <p className="leading-[28px] whitespace-pre-wrap">12 نوفمبر 2025</p>
            </div>
          </div>
        ))}

        {/* View All Notifications */}
        <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#0a4875] text-[14px] text-right whitespace-nowrap cursor-pointer">
          <p className="[text-underline-position:from-font] decoration-solid leading-[28px] underline">
            عرض جميع الاشعارات
          </p>
        </div>
      </div>

      {/* Social Media Card */}
      <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col gap-[16px] items-start px-[10px] py-[20px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-[428px]">
        <div className="flex items-center justify-between w-full">
        <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[28px]">مواقع التواصل الاجتماعي</p>
          </div>
          <button className="bg-[#0a4875] flex gap-[10px] items-center justify-center p-[8px] rounded-[10px]">
            <div className="relative w-[24px] h-[24px]">
              <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutline} />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#e8f4fd] text-[16px] text-right whitespace-nowrap">
                <p className="leading-normal">اظهار</p>
              </div>
            </div>
          </button>
          
        </div>
        <div className="flex gap-[16px] items-start">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative w-[40px] h-[40px]">
              <Image alt="Facebook" className="block w-full h-full object-contain" src={imgDashboardFacebook} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardSidebar;
