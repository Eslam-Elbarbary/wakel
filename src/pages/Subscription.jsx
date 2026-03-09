import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Subscription() {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-[80px] pb-8 sm:pb-10 md:pb-12 lg:pb-0 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[20px] items-center w-full">
          {/* Title Section */}
          <div className="flex flex-col items-center w-full px-4">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center leading-[0] text-center w-full">
              <div className="flex flex-col font-cairo font-bold justify-center relative text-[#1c1c1c] text-xl sm:text-2xl md:text-3xl lg:text-[32px] w-full max-w-[633px]">
                <p className="leading-tight sm:leading-normal md:leading-[38px] lg:leading-[42px] whitespace-pre-wrap">
                  اختَر خطة الاشتراك
                </p>
              </div>
              <div className="flex flex-col font-cairo font-medium justify-center relative text-[#626262] text-sm sm:text-base md:text-[17px] lg:text-[18px] w-full max-w-[765px]">
                <p className="leading-normal whitespace-pre-wrap">
                  استثمر في خدماتنا القانونية الذكية بمزايا حصرية!
                </p>
              </div>
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-center justify-center w-full px-4">
            {/* Annual Plan (Recommended) */}
            <div className="bg-[#e8f4fd] border border-[#0a4875] border-solid flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-center justify-center p-6 sm:p-8 md:p-10 lg:p-[40px] relative rounded-[10px] w-full max-w-[424px]">
              {/* Recommended Badge */}
              <button className="absolute bg-[#e8f4fd] border border-[#13264d] border-solid cursor-pointer flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center left-1/2 -translate-x-1/2 lg:left-[161.5px] lg:translate-x-0 px-4 sm:px-5 md:px-6 lg:px-[20px] py-1.5 sm:py-2 md:py-2.5 lg:py-[8px] rounded-[40px] top-[-20px] sm:top-[-22px] md:top-[-24px] lg:top-[-26px] hover:opacity-90 transition-opacity">
                <p className="font-cairo font-bold leading-normal text-[#13264d] text-sm sm:text-base md:text-[17px] lg:text-[18px] text-start">
                  مقترحة
                </p>
              </button>

              <div className="flex flex-col items-start leading-[1.2] text-start w-full">
                <p className="font-cairo font-medium relative text-[#1c1c1c] text-lg sm:text-xl md:text-2xl lg:text-[25px]">
                  الخطة السنوية
                </p>
                <p className="font-cairo font-bold relative text-[#0a4875] text-3xl sm:text-4xl md:text-5xl lg:text-[50px]">
                  2000 EGP
                </p>
              </div>
              <ul className="block font-cairo font-medium leading-[0] list-inside min-w-full text-[#1c1c1c] text-base sm:text-lg md:text-xl lg:text-[20px] text-right w-full whitespace-pre-wrap">
                <li className="mb-[13px] ms-[30px]">
                  <span className="leading-[1.2]">مثالية للمحامين الجدد أو أصحاب المكاتب الصغيرة.</span>
                </li>
                <li className="mb-[13px] ms-[30px]">
                  <span className="leading-[1.2]">الوصول إلى استشارات قانونية قصيرة ومتابعة الملفات.</span>
                </li>
                <li className="mb-[13px] ms-[30px]">
                  <span className="leading-[1.2]">استشارات قانونية شهرية</span>
                </li>
                <li className="mb-[13px] ms-[30px]">
                  <span className="leading-[1.2]">أولوية في الحصول على طلبات العملاء</span>
                </li>
                <li className="mb-[13px] ms-[30px]">
                  <span className="leading-[1.2]">دعم فني لحل المشكلات القانونية اليومية</span>
                </li>
                <li className="ms-[30px]">
                  <span className="leading-[1.2]">إمكانية إضافة عرض خدماتك عبر المنصة</span>
                </li>
              </ul>
              <button className="bg-[#0a4875] cursor-pointer flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-full hover:opacity-90 transition-opacity">
                <p className="font-cairo font-bold leading-normal text-white sm:text-[#e8e8e8] text-sm sm:text-base md:text-[17px] lg:text-[18px] text-right">
                  احصل على الخطة
                </p>
              </button>
            </div>
            {/* Monthly Plan */}
            <div className="border border-[#b9b9b9] border-solid flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-center justify-center p-6 sm:p-8 md:p-10 lg:p-[40px] rounded-[10px] w-full max-w-[424px]">
              <div className="flex flex-col items-start leading-[1.2] text-right w-full">
                <p className="font-cairo font-medium relative text-[#1c1c1c] text-lg sm:text-xl md:text-2xl lg:text-[25px]">
                  الخطة الشهرية
                </p>
                <p className="font-cairo font-bold relative text-[#0a4875] text-3xl sm:text-4xl md:text-5xl lg:text-[50px]">
                  500 EGP
                </p>
              </div>
              <ul className="block font-cairo font-medium leading-[0] list-inside text-[#1c1c1c] text-base sm:text-lg md:text-xl lg:text-[20px] text-right w-full whitespace-pre-wrap">
                <li className="mb-[13px] ms-[30px]">
                  <span className="leading-[1.2]">مثالية للمحامين الجدد أو أصحاب المكاتب الصغيرة.</span>
                </li>
                <li className="mb-[13px] ms-[30px]">
                  <span className="leading-[1.2]">الوصول إلى استشارات قانونية قصيرة ومتابعة الملفات.</span>
                </li>
                <li className="mb-[13px] ms-[30px]">
                  <span className="leading-[1.2]">استشارات قانونية شهرية</span>
                </li>
                <li className="mb-[13px] ms-[30px]">
                  <span className="leading-[1.2]">أولوية في الحصول على طلبات العملاء</span>
                </li>
                <li className="mb-[13px] ms-[30px]">
                  <span className="leading-[1.2]">دعم فني لحل المشكلات القانونية اليومية</span>
                </li>
                <li className="ms-[30px]">
                  <span className="leading-[1.2]">إمكانية إضافة عرض خدماتك عبر المنصة</span>
                </li>
              </ul>
              <button className="bg-[#0a4875] cursor-pointer flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-full hover:opacity-90 transition-opacity">
                <p className="font-cairo font-bold leading-normal text-white sm:text-[#e8e8e8] text-sm sm:text-base md:text-[17px] lg:text-[18px] text-right">
                  احصل على الخطة
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Subscription;
