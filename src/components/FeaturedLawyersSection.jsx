import { img6, img7, img8, img9, img10, img11, img12 } from '../constants/images';
import Image from './Image';

function FeaturedLawyersSection() {
  return (
    <div className="bg-[#fbfbfb] flex flex-col gap-6 sm:gap-8 lg:gap-[40px] items-center justify-center p-4 sm:p-6 md:p-10 lg:p-[80px] w-full relative z-0 isolate">
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[24px] items-center w-full">
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] items-center leading-[0] text-center w-full">
          <div className="font-cairo font-bold text-[#1c1c1c] text-xl sm:text-2xl lg:text-[32px] w-full max-w-2xl">
            <p className="leading-tight sm:leading-snug lg:leading-[42px] whitespace-pre-wrap">
              محامون مميزون
            </p>
          </div>
          <div className="font-cairo font-medium text-[#626262] text-sm sm:text-base lg:text-[18px] w-full max-w-3xl">
            <p className="leading-normal whitespace-pre-wrap">
              أفضل المحامين بالقرب منك يعني اختيار المحامي الأنسب لمساعدتك في قضاياك. نحن هنا لنقدم لك الدعم القانوني الذي تحتاجه، مع استشارات موثوقة وفعالة.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-[10px] items-center justify-center w-full">
          <div className="bg-white border border-[#a3a3a3] border-solid flex items-center p-2 sm:p-3 lg:p-[12px] rounded-[10px]">
            <p className="font-cairo font-semibold leading-normal text-[#1c1c1c] text-xs sm:text-sm lg:text-[16px] text-end">
              قضايا جنايات
            </p>
          </div>
          <div className="bg-white border border-[#a3a3a3] border-solid flex items-center p-2 sm:p-3 lg:p-[12px] rounded-[10px]">
            <p className="font-cairo font-semibold leading-normal text-[#1c1c1c] text-xs sm:text-sm lg:text-[16px] text-end">
              قضايا جنح
            </p>
          </div>
          <div className="bg-white border border-[#a3a3a3] border-solid flex items-center p-2 sm:p-3 lg:p-[12px] rounded-[10px]">
            <p className="font-cairo font-semibold leading-normal text-[#1c1c1c] text-xs sm:text-sm lg:text-[16px] text-end">
              قضايا عقارية
            </p>
          </div>
          <div className="bg-[#e8f4fd] flex items-center p-2 sm:p-3 lg:p-[12px] rounded-[10px]">
            <p className="font-cairo font-bold leading-normal text-[#0a4875] text-xs sm:text-sm lg:text-[16px] text-end">
              قضايا تأسيس شركات
            </p>
          </div>
          <div className="bg-white border border-[#a3a3a3] border-solid flex items-center p-2 sm:p-3 lg:p-[12px] rounded-[10px]">
            <p className="font-cairo font-semibold leading-normal text-[#1c1c1c] text-xs sm:text-sm lg:text-[16px] text-end">
              قضايا أحوال شخصية
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 items-center justify-between w-full lg:justify-between">
        {/* Lawyer Card 1 */}
        <div className="bg-white flex flex-col gap-4 sm:gap-5 lg:gap-[20px] h-auto sm:h-[500px] items-center justify-center p-3 sm:p-4 lg:p-[12px] rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] w-full lg:w-[315px] relative overflow-hidden">
          <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[8px] items-center min-h-px min-w-px w-full">
            <div className="flex flex-1 flex-col items-end justify-between min-h-px min-w-px p-2 sm:p-3 lg:p-[8px] rounded-[10px] w-full relative overflow-hidden h-48 sm:h-64 lg:h-auto">
              <Image alt="Lawyer profile" className="absolute inset-0 object-cover pointer-events-none rounded-[10px] w-full h-full z-0" src={img6} />
              <div className="flex gap-1 sm:gap-2 lg:gap-[4px] h-4 sm:h-5 lg:h-[20px] items-center w-full relative z-[1]">
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating" className="block w-full h-full object-contain" src={img7} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating" className="block w-full h-full object-contain" src={img7} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating empty" className="block w-full h-full object-contain" src={img8} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating empty" className="block w-full h-full object-contain" src={img8} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating empty" className="block w-full h-full object-contain" src={img8} />
                </div>
              </div>
              <div className="bg-[#e8f4fd] flex items-center justify-center px-2 sm:px-3 lg:px-[12px] py-1.5 sm:py-2 lg:py-[8px] rounded-[8px] relative z-[1]">
                <p className="font-cairo font-bold leading-[28px] text-[#0a4875] text-sm sm:text-base lg:text-[20px] text-start">
                  +3 سنوات
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[8px] items-start w-full">
              <div className="font-cairo font-bold min-w-full text-[#1c1c1c] text-lg sm:text-xl lg:text-[24px] text-start w-[min-content]">
                <p className="leading-tight sm:leading-snug lg:leading-[38px] whitespace-pre-wrap">
                  اسم المحامي
                </p>
              </div>
              <div className="font-cairo font-normal min-w-full text-[#4c4c4c] text-sm sm:text-base lg:text-[18px] text-start w-[min-content]">
                <p className="leading-normal sm:leading-snug lg:leading-[28px] whitespace-pre-wrap">
                  اسم التخصص
                </p>
              </div>
              <div className="flex gap-2 sm:gap-3 lg:gap-[8px] items-center justify-center">
                <div className="relative w-3 h-3 sm:w-4 sm:h-4 lg:w-[16px] lg:h-[16px]">
                  <Image alt="Location pin" className="block w-full h-full object-contain" src={img9} />
                </div>
                <div className="font-cairo font-medium h-5 sm:h-6 lg:h-[24px] text-[#041d2f] text-xs sm:text-sm lg:text-[16px] text-start w-full sm:w-auto lg:w-[156px]">
                  <p className="leading-normal whitespace-pre-wrap">
                    مدينه نصر, مكرم عبيد
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0a4875] flex gap-2 sm:gap-3 lg:gap-[10px] h-10 sm:h-12 lg:h-[52px] items-center justify-center p-2 sm:p-3 lg:p-[10px] rounded-[8px] w-full">
            <p className="font-cairo font-bold leading-normal text-xs sm:text-sm lg:text-[16px] text-end text-white">
              تحقق من الملف الشخصي
            </p>
          </div>
        </div>

        {/* Lawyer Card 2 */}
        <div className="bg-white flex flex-col gap-4 sm:gap-5 lg:gap-[20px] h-auto sm:h-[500px] items-center justify-center p-3 sm:p-4 lg:p-[12px] rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] w-full lg:w-[315px] relative overflow-hidden">
          <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[8px] items-center min-h-px min-w-px w-full">
            <div className="flex flex-1 flex-col items-end justify-between min-h-px min-w-px p-2 sm:p-3 lg:p-[8px] rounded-[10px] w-full relative overflow-hidden h-48 sm:h-64 lg:h-auto">
              <Image alt="Lawyer profile" className="absolute inset-0 object-cover pointer-events-none rounded-[10px] w-full h-full z-0" src={img10} />
              <div className="flex gap-1 sm:gap-2 lg:gap-[4px] h-4 sm:h-5 lg:h-[20px] items-center w-full relative z-[1]">
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating" className="block w-full h-full object-contain" src={img7} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating" className="block w-full h-full object-contain" src={img7} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating empty" className="block w-full h-full object-contain" src={img8} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating empty" className="block w-full h-full object-contain" src={img8} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating empty" className="block w-full h-full object-contain" src={img8} />
                </div>
              </div>
              <div className="bg-[#e8f4fd] flex items-center justify-center px-2 sm:px-3 lg:px-[12px] py-1.5 sm:py-2 lg:py-[8px] rounded-[8px] relative z-[1]">
                <p className="font-cairo font-bold leading-[28px] text-[#0a4875] text-sm sm:text-base lg:text-[20px] text-end">
                  +3 سنوات
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[8px] items-start w-full">
              <div className="font-cairo font-bold min-w-full text-[#1c1c1c] text-lg sm:text-xl lg:text-[24px] text-start w-[min-content]">
                <p className="leading-tight sm:leading-snug lg:leading-[38px] whitespace-pre-wrap">
                  اسم المحامي
                </p>
              </div>
              <div className="font-cairo font-normal min-w-full text-[#4c4c4c] text-sm sm:text-base lg:text-[18px] text-start w-[min-content]">
                <p className="leading-normal sm:leading-snug lg:leading-[28px] whitespace-pre-wrap">
                  اسم التخصص
                </p>
              </div>
              <div className="flex gap-2 sm:gap-3 lg:gap-[8px] items-center justify-center">
                <div className="relative w-3 h-3 sm:w-4 sm:h-4 lg:w-[16px] lg:h-[16px]">
                  <Image alt="Location pin" className="block w-full h-full object-contain" src={img9} />
                </div>
                <div className="font-cairo font-medium h-5 sm:h-6 lg:h-[24px] text-[#041d2f] text-xs sm:text-sm lg:text-[16px] text-start w-full sm:w-auto lg:w-[156px]">
                  <p className="leading-normal whitespace-pre-wrap">
                    مدينه نصر, مكرم عبيد
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0a4875] flex gap-2 sm:gap-3 lg:gap-[10px] h-10 sm:h-12 lg:h-[52px] items-center justify-center p-2 sm:p-3 lg:p-[10px] rounded-[8px] w-full">
            <p className="font-cairo font-bold leading-normal text-xs sm:text-sm lg:text-[16px] text-end text-white">
              تحقق من الملف الشخصي
            </p>
          </div>
        </div>

        {/* Lawyer Card 3 */}
        <div className="bg-white flex flex-col gap-4 sm:gap-5 lg:gap-[20px] h-auto sm:h-[500px] items-center justify-center p-3 sm:p-4 lg:p-[12px] rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] w-full lg:w-[315px] relative overflow-hidden">
          <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[8px] items-center min-h-px min-w-px w-full">
            <div className="flex flex-1 flex-col items-end justify-between min-h-px min-w-px p-2 sm:p-3 lg:p-[8px] rounded-[10px] w-full relative overflow-hidden h-48 sm:h-64 lg:h-auto">
              <Image alt="Lawyer profile" className="absolute inset-0 object-cover pointer-events-none rounded-[10px] w-full h-full z-0" src={img11} />
              <div className="flex gap-1 sm:gap-2 lg:gap-[4px] h-4 sm:h-5 lg:h-[20px] items-center w-full relative z-[1]">
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating" className="block w-full h-full object-contain" src={img7} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating" className="block w-full h-full object-contain" src={img7} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating empty" className="block w-full h-full object-contain" src={img8} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating empty" className="block w-full h-full object-contain" src={img8} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating empty" className="block w-full h-full object-contain" src={img8} />
                </div>
              </div>
              <div className="bg-[#e8f4fd] flex items-center justify-center px-2 sm:px-3 lg:px-[12px] py-1.5 sm:py-2 lg:py-[8px] rounded-[8px] relative z-[1]">
                <p className="font-cairo font-bold leading-[28px] text-[#0a4875] text-sm sm:text-base lg:text-[20px] text-end">
                  +3 سنوات
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[8px] items-start w-full">
              <div className="font-cairo font-bold min-w-full text-[#1c1c1c] text-lg sm:text-xl lg:text-[24px] text-start w-[min-content]">
                <p className="leading-tight sm:leading-snug lg:leading-[38px] whitespace-pre-wrap">
                  اسم المحامي
                </p>
              </div>
              <div className="font-cairo font-normal min-w-full text-[#4c4c4c] text-sm sm:text-base lg:text-[18px] text-start w-[min-content]">
                <p className="leading-normal sm:leading-snug lg:leading-[28px] whitespace-pre-wrap">
                  اسم التخصص
                </p>
              </div>
              <div className="flex gap-2 sm:gap-3 lg:gap-[8px] items-center justify-center">
                <div className="relative w-3 h-3 sm:w-4 sm:h-4 lg:w-[16px] lg:h-[16px]">
                  <Image alt="Location pin" className="block w-full h-full object-contain" src={img9} />
                </div>
                <div className="font-cairo font-medium h-5 sm:h-6 lg:h-[24px] text-[#041d2f] text-xs sm:text-sm lg:text-[16px] text-start w-full sm:w-auto lg:w-[156px]">
                  <p className="leading-normal whitespace-pre-wrap">
                    مدينه نصر, مكرم عبيد
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a className="bg-[#0a4875] cursor-pointer flex gap-2 sm:gap-3 lg:gap-[10px] h-10 sm:h-12 lg:h-[52px] items-center justify-center p-2 sm:p-3 lg:p-[10px] rounded-[8px] w-full">
            <p className="font-cairo font-bold leading-normal text-xs sm:text-sm lg:text-[16px] text-end text-white">
              تحقق من الملف الشخصي
            </p>
          </a>
        </div>

        {/* Lawyer Card 4 */}
        <div className="bg-white flex flex-col gap-4 sm:gap-5 lg:gap-[20px] h-auto sm:h-[500px] items-center justify-center p-3 sm:p-4 lg:p-[12px] rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] w-full lg:w-[315px] relative overflow-hidden">
          <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[8px] items-center min-h-px min-w-px w-full">
            <div className="flex flex-1 flex-col items-end justify-between min-h-px min-w-px p-2 sm:p-3 lg:p-[8px] rounded-[10px] w-full relative overflow-hidden h-48 sm:h-64 lg:h-auto">
              <Image alt="Lawyer profile" className="absolute inset-0 object-cover pointer-events-none rounded-[10px] w-full h-full z-0" src={img12} />
              <div className="flex gap-1 sm:gap-2 lg:gap-[4px] h-4 sm:h-5 lg:h-[20px] items-center w-full relative z-[1]">
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating" className="block w-full h-full object-contain" src={img7} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating" className="block w-full h-full object-contain" src={img7} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating empty" className="block w-full h-full object-contain" src={img8} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating empty" className="block w-full h-full object-contain" src={img8} />
                </div>
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image alt="Star rating empty" className="block w-full h-full object-contain" src={img8} />
                </div>
              </div>
              <div className="bg-[#e8f4fd] flex items-center justify-center px-2 sm:px-3 lg:px-[12px] py-1.5 sm:py-2 lg:py-[8px] rounded-[8px] relative z-[1]">
                <p className="font-cairo font-bold leading-[28px] text-[#0a4875] text-sm sm:text-base lg:text-[20px] text-end">
                  +3 سنوات
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[8px] items-start w-full">
              <div className="font-cairo font-bold min-w-full text-[#1c1c1c] text-lg sm:text-xl lg:text-[24px] text-start w-[min-content]">
                <p className="leading-tight sm:leading-snug lg:leading-[38px] whitespace-pre-wrap">
                  اسم المحامي
                </p>
              </div>
              <div className="font-cairo font-normal min-w-full text-[#4c4c4c] text-sm sm:text-base lg:text-[18px] text-start w-[min-content]">
                <p className="leading-normal sm:leading-snug lg:leading-[28px] whitespace-pre-wrap">
                  اسم التخصص
                </p>
              </div>
              <div className="flex gap-2 sm:gap-3 lg:gap-[8px] items-center justify-center">
                <div className="relative w-3 h-3 sm:w-4 sm:h-4 lg:w-[16px] lg:h-[16px]">
                  <Image alt="Location pin" className="block w-full h-full object-contain" src={img9} />
                </div>
                <div className="font-cairo font-medium h-5 sm:h-6 lg:h-[24px] text-[#041d2f] text-xs sm:text-sm lg:text-[16px] text-start w-full sm:w-auto lg:w-[156px]">
                  <p className="leading-normal whitespace-pre-wrap">
                    مدينه نصر, مكرم عبيد
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a className="bg-[#0a4875] cursor-pointer flex gap-2 sm:gap-3 lg:gap-[10px] h-10 sm:h-12 lg:h-[52px] items-center justify-center p-2 sm:p-3 lg:p-[10px] rounded-[8px] w-full">
            <p className="font-cairo font-bold leading-normal text-xs sm:text-sm lg:text-[16px] text-end text-white">
              تحقق من الملف الشخصي
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedLawyersSection;
