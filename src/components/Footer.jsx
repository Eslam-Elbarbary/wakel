import { img19, img20, img21, img22, img23, img24, img25, img26, img27, img28 } from '../constants/images';
import Image from './Image';

function Footer() {
  return (
    <div className="bg-[#0a4875] w-full overflow-clip relative text-white">

      {/* Decorative background - hidden on mobile */}
      <div className="hidden md:block absolute bottom-0 flex h-[1001px] items-center justify-center left-[836px] w-[604px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-[#083a5e] h-[1001px] rounded-tl-[381.5px] rounded-tr-[381.5px] w-[604px]" />
        </div>
      </div>
      <div className="hidden md:block absolute flex h-[1001px] items-center justify-center left-[91px] top-0 w-[604px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-[#083a5e] h-[1001px] rounded-tl-[381.5px] rounded-tr-[381.5px] w-[604px]" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 px-4 sm:px-6 md:px-10 lg:px-[80px] py-8 sm:py-10 md:py-12 lg:py-[80px]">

        {/* Top Columns */}
        <div className="
  grid 
  grid-cols-1 
  md:grid-cols-3 
  gap-y-8 
  md:gap-y-0 
  gap-x-10 
  lg:gap-x-[60px] 
  w-full
">

          {/* الشعار والوصف */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[10px] items-start">
            <div className="h-12 sm:h-16 md:h-20 lg:h-[71px] w-full  max-w-[339px]">
              <Image alt="منصة وّكل logo" className="block w-full h-full object-contain" src={img19} />
            </div>
            <div className="font-cairo font-medium text-[#fbfbfb] text-sm sm:text-base lg:text-[18px] text-right max-w-[590px]">
              <p className="leading-normal">
                نحن هنا لمساعدتك في العثور على المحامي المناسب. ابدأ بتحديد نوع الخدمة وسنساعدك في إتمام العملية بسهولة.
              </p>
            </div>
          </div>



          {/* الروابط */}
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] text-right">
            <div className="font-cairo font-bold text-[#f9f9f9] text-base sm:text-lg lg:text-[16px]">روابط مهمة</div>
            <div className="font-cairo font-semibold">الرئيسية</div>
            <div className="font-cairo font-semibold">أبحث عن محامي</div>
            <div className="font-cairo font-semibold">الأسئلة الشائعة</div>
            <div className="font-cairo font-semibold">آخر الأخبار القانونية</div>
          </div>

          {/* الخدمات */}
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] text-right">
            <div className="font-cairo font-bold text-[#f9f9f9] text-base sm:text-lg lg:text-[16px]">الخدمات</div>
            <div className="font-cairo font-semibold">اسم الخدمة</div>
            <div className="font-cairo font-semibold">اسم الخدمة</div>
            <div className="font-cairo font-semibold">اسم الخدمة</div>
            <div className="font-cairo font-semibold">اسم الخدمة</div>
          </div>


        </div>

        {/* Contact Info + Social */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 lg:gap-0 mt-10 w-full">
          {/* Social Media */}
          <div className="flex gap-2 sm:gap-3 lg:gap-[10px] items-center">
            {[img22, img23, img24, img25].map((icon, idx) => (
              <div key={idx} className="w-8 h-8 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px]">
                <Image alt="Social icon" src={icon} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <p className="font-cairo font-bold text-[#f9f9f9] text-sm sm:text-base lg:text-[16px] text-center mt-2 sm:mt-0">اتصل بنا</p>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <p className="font-cairo text-[#fbfbfb] text-sm sm:text-base lg:text-[16px]">+20 0100000000</p>
                <div className="w-5 h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Phone icon" src={img21} className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <p className="font-cairo text-[#fbfbfb] text-sm sm:text-base lg:text-[16px]">wakel-platform@gmail.com</p>
                <div className="w-5 h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Email icon" src={img20} className="w-full h-full object-contain" />
                </div>
              </div>

            </div>

          </div>


        </div>

        {/* Copyright + Terms */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-0 mt-10 w-full">
          <div className="flex gap-2 sm:gap-3 lg:gap-[10px] items-center justify-center text-[#fbfbfb]">
            <p className="font-cairo text-sm sm:text-base lg:text-[16px] whitespace-nowrap">الشروط والأحكام</p>
            <p className="font-cairo text-xl sm:text-2xl lg:text-[32px]">.</p>
            <p className="font-cairo text-sm sm:text-base lg:text-[16px] whitespace-nowrap">سياسة الخصوصية</p>
          </div>
          <p className="font-cairo text-white text-sm sm:text-base lg:text-[16px] text-center">
            <span>All Rights Reserved © Powered by Web Design Company | </span>
            <span className="text-[#d5cc1f]">Qemaa Tech</span>
          </p>

        </div>

        {/* Bottom Copyright with QG Logo - Centered Layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12 w-full">
          {/* Left: Copyright © 2025 */}
          <div className="flex-shrink-0">
            <p className="font-alexandria text-white text-sm sm:text-base lg:text-[18px] text-right whitespace-nowrap">
              حقوق الطبع والنشر © 2025
            </p>
          </div>
          
          {/* Center: QG Logo with Tagline and Company Name */}
          <div className="flex flex-col items-center justify-center flex-shrink-0">
            {/* QG Logo (img27 - minimized size) */}
            <div className="relative w-[30px] sm:w-[35px] md:w-[40px] lg:w-[50px] h-[15px] sm:h-[17px] md:h-[20px] lg:h-[25px] mb-0.5 sm:mb-1">
              <Image alt="QG Logo" src={img27} className="block w-full h-full object-contain" />
            </div>
           {/* QEEMATECH text (img28 - BELOW QG logo) */}
           <div className="relative w-[60px] sm:w-[70px] md:w-[80px] lg:w-[100px] h-[8px] sm:h-[10px] md:h-[12px] lg:h-[15px]">
              <Image alt="QEEMATECH" src={img28} className="block w-full h-full object-contain" />
            </div>
            
            
            
             {/* WE ADD A NEW VALUE tagline (ABOVE the logo) */}
             <p className="font-cairo font-bold text-white text-[8px] sm:text-xs md:text-sm lg:text-[8px] text-center uppercase whitespace-nowrap tracking-wide mb-0.5 sm:mb-1">
              WE ADD A NEW VALUE
            </p>
          </div>
          
          {/* Right: All Rights Reserved */}
          <div className="flex-shrink-0">
            <p className="font-alexandria text-white text-sm sm:text-base lg:text-[18px] text-left whitespace-nowrap">
              | جميع الحقوق محفوظة
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
