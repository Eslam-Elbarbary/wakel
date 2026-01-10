import { img13, img14, img16, img17 } from '../constants/images';
import Image from './Image';

function TestimonialsSection() {
  return (
    <div className="bg-[#f9f9f9] flex flex-col gap-6 sm:gap-8 lg:gap-[40px] items-center justify-center px-4 sm:px-6 md:px-10 lg:px-[80px] py-6 sm:py-8 lg:py-[40px] w-full">
      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px] items-center justify-center w-full">
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] items-center justify-center leading-[0] text-center w-full">
          <div className="font-cairo font-bold text-[#1c1c1c] text-xl sm:text-2xl lg:text-[32px] w-full max-w-2xl">
            <p className="leading-tight sm:leading-snug lg:leading-[42px] whitespace-pre-wrap">ماذا يقول عملاؤنا عن "توّكل"؟</p>
          </div>
          <div className="font-cairo font-medium text-[#626262] text-sm sm:text-base lg:text-[18px] w-full max-w-3xl">
            <p className="leading-normal whitespace-pre-wrap">نحن نفخر بالثقة التي يضعها عملاؤنا في منصة "توّكل" وفي المحامين المتميزين الذين يجدونهم من خلالنا. استمع إلى قصص النجاح والتجارب الإيجابية التي شاركها معنا بعض من عملائنا الكرام</p>
          </div>
        </div>
        <div className="bg-[#0a4875] flex gap-2 sm:gap-3 lg:gap-[10px] h-12 sm:h-14 lg:h-[60px] items-center justify-center p-2 sm:p-3 lg:p-[10px] rounded-[10px] w-full sm:w-auto lg:w-[268px]">
          <p className="font-cairo font-bold leading-normal text-sm sm:text-base lg:text-[18px] text-end text-white">
            أضف شهادتك
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[20px] items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[20px] items-center justify-center w-full">
          {/* Testimonial 1 */}
          <div className="flex flex-1 flex-row items-start self-stretch">
            <div className="bg-white flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[10px] h-full items-start min-h-px min-w-px p-3 sm:p-4 lg:p-[14px] rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] w-full">
              <div className="flex gap-3 sm:gap-4 lg:gap-[20px] items-center justify-start">
                <div className="border-2 border-[#2b2b2b] border-solid flex items-center justify-center p-1 sm:p-1.5 lg:p-[4px] rounded-[300px] w-12 h-12 sm:w-16 sm:h-16 lg:w-[68px] lg:h-[68px]">
                  <div className="aspect-[84/84] flex-1 min-h-px min-w-px rounded-[300px]">
                    <Image
                      alt="Client profile"
                      className="inset-0 object-cover pointer-events-none rounded-[300px] w-full h-full"
                      src={img14}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2 lg:gap-[4px] items-start">
                  <div className="font-cairo font-bold leading-[0] text-[#1c1c1c] text-base sm:text-lg lg:text-[18px] text-start w-full sm:w-auto lg:w-[102px]">
                    <p className="leading-normal whitespace-pre-wrap">ليلى حمدي</p>
                  </div>
                  <div className="h-3 sm:h-4 lg:h-[16px] w-20 sm:w-24 lg:w-[96px]">
                    <Image
                      alt="Star rating"
                      className="block w-full h-full object-contain"
                      src={img13}
                    />
                  </div>
                  <div className="font-cairo font-normal h-3 sm:h-4 lg:h-[14px] leading-[0] text-[#656565] text-xs sm:text-xs lg:text-[12px] text-start w-16 sm:w-20 lg:w-[79px]">
                    <p className="leading-tight sm:leading-snug lg:leading-[22px] whitespace-pre-wrap">12 نوفمبر 2025</p>
                  </div>
                </div>
              </div>
              <div className="font-cairo font-medium leading-[0] min-w-full text-[#656565] text-xs sm:text-sm lg:text-[14px] text-start w-[min-content]">
                <p className="leading-tight sm:leading-snug lg:leading-[22px] whitespace-pre-wrap">
                  كنت بحاجة لاستشارة عاجلة بخصوص تأسيس شركة. استخدمت 'توّكل' ووجدت محامياً متخصصاً في قانون الشركات. سرعة الاستجابة وجودة الاستشارة كانت فوق التوقعات. أوصي بها بشدة لكل من يبحث عن محامٍ
                </p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="flex flex-1 flex-row items-start self-stretch">
            <div className="bg-white flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[10px] h-full items-start min-h-px min-w-px p-3 sm:p-4 lg:p-[14px] rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] w-full">
              <div className="flex gap-3 sm:gap-4 lg:gap-[20px] items-center justify-start">
                <div className="border-2 border-[#2b2b2b] border-solid flex items-center justify-center p-1 sm:p-1.5 lg:p-[4px] rounded-[300px] w-12 h-12 sm:w-16 sm:h-16 lg:w-[68px] lg:h-[68px]">
                  <div className="aspect-[84/84] flex-1 min-h-px min-w-px rounded-[300px]">
                    <Image
                      alt="Client profile"
                      className="inset-0 object-cover pointer-events-none rounded-[300px] w-full h-full"
                      src={img14}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2 lg:gap-[4px] items-start">
                  <div className="font-cairo font-bold leading-[0] text-[#1c1c1c] text-base sm:text-lg lg:text-[18px] text-start w-full sm:w-auto lg:w-[200px]">
                    <p className="leading-normal whitespace-pre-wrap">فاطمة الزهراء</p>
                  </div>
                  <div className="h-3 sm:h-4 lg:h-[16px] w-20 sm:w-24 lg:w-[96px]">
                    <Image
                      alt="Star rating"
                      className="block w-full h-full object-contain"
                      src={img13}
                    />
                  </div>
                  <div className="font-cairo font-normal h-3 sm:h-4 lg:h-[14px] leading-[0] text-[#656565] text-xs sm:text-xs lg:text-[12px] text-start w-16 sm:w-20 lg:w-[79px]">
                    <p className="leading-tight sm:leading-snug lg:leading-[22px] whitespace-pre-wrap">12 نوفمبر 2025</p>
                  </div>
                </div>
              </div>
              <div className="font-cairo font-medium leading-[0] min-w-full text-[#656565] text-xs sm:text-sm lg:text-[14px] text-start w-[min-content]">
                <p className="leading-tight sm:leading-snug lg:leading-[22px] whitespace-pre-wrap">
                  كنت بحاجة لاستشارة عاجلة بخصوص تأسيس شركة. استخدمت 'توّكل' ووجدت محامياً متخصصاً في قانون الشركات. سرعة الاستجابة وجودة الاستشارة كانت فوق التوقعات. أوصي بها بشدة لكل من يبحث عن محامٍ
                </p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="flex flex-1 flex-row items-start self-stretch">
            <div className="bg-white flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[10px] h-full items-start min-h-px min-w-px p-3 sm:p-4 lg:p-[14px] rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] w-full">
              <div className="flex gap-3 sm:gap-4 lg:gap-[20px] items-center justify-start">
                <div className="border-2 border-[#2b2b2b] border-solid flex items-center justify-center p-1 sm:p-1.5 lg:p-[4px] rounded-[300px] w-12 h-12 sm:w-16 sm:h-16 lg:w-[68px] lg:h-[68px]">
                  <div className="aspect-[84/84] flex-1 min-h-px min-w-px rounded-[300px]">
                    <Image
                      alt="Client profile"
                      className="inset-0 object-cover pointer-events-none rounded-[300px] w-full h-full"
                      src={img14}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2 lg:gap-[4px] items-start">
                  <div className="font-cairo font-bold leading-[0] text-[#1c1c1c] text-base sm:text-lg lg:text-[18px] text-start w-full sm:w-auto lg:w-[102px]">
                    <p className="leading-normal whitespace-pre-wrap">احمد محمد</p>
                  </div>
                  <div className="h-3 sm:h-4 lg:h-[16px] w-20 sm:w-24 lg:w-[96px]">
                    <Image
                      alt="Star rating"
                      className="block w-full h-full object-contain"
                      src={img13}
                    />
                  </div>
                  <div className="font-cairo font-normal h-3 sm:h-4 lg:h-[14px] leading-[0] text-[#656565] text-xs sm:text-xs lg:text-[12px] text-start w-16 sm:w-20 lg:w-[79px]">
                    <p className="leading-tight sm:leading-snug lg:leading-[22px] whitespace-pre-wrap">12 نوفمبر 2025</p>
                  </div>
                </div>
              </div>
              <div className="font-cairo font-medium leading-[0] min-w-full text-[#656565] text-xs sm:text-sm lg:text-[14px] text-start w-[min-content]">
                <p className="leading-tight sm:leading-snug lg:leading-[22px] whitespace-pre-wrap">
                  كنت بحاجة لاستشارة عاجلة بخصوص تأسيس شركة. استخدمت 'توّكل' ووجدت محامياً متخصصاً في قانون الشركات. سرعة الاستجابة وجودة الاستشارة كانت فوق التوقعات. أوصي بها بشدة لكل من يبحث عن محامٍ
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 sm:gap-4 lg:gap-[20px] items-center justify-center w-full max-w-4xl">
          <div className="flex items-center justify-center">
            <div className="rotate-180 scale-y-[-100%]">
              <div className="bg-[#ececec] flex items-center justify-center rounded-[10px] w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px]">
                <div className="overflow-clip relative w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px]">
                  <div className="absolute flex inset-[29.17%_16.67%] items-center justify-center">
                    <div className="flex-none h-3 sm:h-4 lg:h-[16px] rotate-90 scale-y-[-100%] w-2 sm:w-3 lg:w-[10px]">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-[-4.69%_-7.5%_-3.39%_-7.5%]">
                          <Image alt="Arrow left" className="block w-full h-full object-contain" src={img16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="rotate-180 scale-y-[-100%]">
              <div className="bg-white flex flex-col items-center justify-center overflow-clip px-1 sm:px-2 lg:px-[4px] py-1.5 sm:py-2 lg:py-[7px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px]">
                <div className="flex h-2 sm:h-3 lg:h-[10px] items-center justify-center w-4 sm:w-5 lg:w-[16px]">
                  <div className="flex-none rotate-90 scale-y-[-100%]">
                    <div className="h-3 sm:h-4 lg:h-[16px] w-2 sm:w-3 lg:w-[10px] relative">
                      <div className="absolute inset-[-3.39%_-7.5%_-4.69%_-7.5%]">
                        <Image alt="Arrow right" className="block w-full h-full object-contain" src={img17} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
