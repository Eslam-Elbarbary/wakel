import { img18 } from '../constants/images';
import Image from './Image';

function FAQSection() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[40px] items-center justify-center w-full px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px] items-center justify-center w-full">
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] items-center justify-center leading-[0] text-center w-full">
          <div className="font-cairo font-bold text-[#1c1c1c] text-xl sm:text-2xl lg:text-[32px] w-full max-w-2xl">
            <p className="leading-tight sm:leading-snug lg:leading-[42px] whitespace-pre-wrap">
              أسئلة عامة حول المنصة
            </p>
          </div>
          <div className="font-cairo font-medium text-[#626262] text-sm sm:text-base lg:text-[18px] w-full max-w-3xl">
            <p className="leading-normal whitespace-pre-wrap">يهدف هذا القسم إلى الإجابة على استفساراتكم المتكررة حول كيفية عمل منصة "توّكل" وكيفية الاستفادة من خدماتها، سواء كنتم محامين أو تبحثون عن استشارة قانونية</p>
          </div>
        </div>
        <div className="bg-white border border-[#0a4875] border-solid flex gap-2 sm:gap-3 lg:gap-[10px] h-12 sm:h-14 lg:h-[60px] items-center justify-center p-2 sm:p-3 lg:p-[10px] rounded-[10px] w-full sm:w-auto lg:w-[268px]">
          <p className="font-cairo font-bold leading-normal text-[#0a4875] text-sm sm:text-base lg:text-[18px] text-end">
            عرض المزيد
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[20px] items-center justify-center w-full max-w-5xl">
        <div className="bg-[#f3f3f3] flex gap-3 sm:gap-4 lg:gap-[20px] h-16 sm:h-20 lg:h-[80px] items-center justify-end p-3 sm:p-4 lg:p-[20px] rounded-[10px] w-full">
          <div className="font-cairo font-bold leading-[0] w-10 h-10 sm:w-12 sm:h-12 lg:w-[46px] lg:h-[46px] text-[#a1d3f7] text-2xl sm:text-3xl lg:text-[40px] text-center">
            <p className="leading-tight sm:leading-snug lg:leading-[42px] whitespace-pre-wrap">01</p>
          </div>
          <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[10px] items-start justify-center min-h-px min-w-px">
            <div className="font-cairo font-bold leading-[0] text-[#0a4875] text-base sm:text-lg lg:text-[20px] text-center whitespace-nowrap">
              <p className="leading-normal sm:leading-snug lg:leading-[28px]">ما هي منصة "توّكل"؟</p>
            </div>
          </div>
          <div className="bg-white border border-[#0a4875] border-solid flex flex-col items-center justify-center overflow-clip px-1.5 sm:px-2 lg:px-[6px] py-2 sm:py-2.5 lg:py-[9px] rounded-[10px] w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px]">
            <div className="h-1.5 sm:h-2 lg:h-[6px] w-3 sm:w-4 lg:w-[12px] relative">
              <div className="absolute inset-[-16.67%_-8.33%_-13.21%_-8.33%]">
                <img alt="" className="block w-full h-full" src={img18} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#d9d9d9] border-solid flex gap-3 sm:gap-4 lg:gap-[20px] items-center justify-start p-3 sm:p-4 lg:p-[20px] rounded-[10px] w-full">
          <div className="font-cairo font-bold leading-[0] w-10 h-10 sm:w-12 sm:h-12 lg:w-[46px] lg:h-[46px] text-[#a1d3f7] text-2xl sm:text-3xl lg:text-[40px] text-start flex items-center justify-center">
            <p className="leading-tight sm:leading-snug lg:leading-[42px] whitespace-pre-wrap">02</p>
          </div>
          <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[10px] items-start justify-center leading-[0] min-h-px min-w-px">
            <div className="font-cairo font-bold text-[#0a4875] text-base sm:text-lg lg:text-[20px] text-start whitespace-nowrap">
              <p className="leading-normal sm:leading-snug lg:leading-[28px]">هل "توّكل" تقدم استشارات قانونية مباشرة؟</p>
            </div>
            <div className="font-cairo font-medium min-w-full text-[#4c4c4c] text-sm sm:text-base lg:text-[16px] text-start w-[min-content]">
              <p className="leading-normal sm:leading-snug lg:leading-[28px] whitespace-pre-wrap">
                لا، "توّكل" هي منصة للربط. نحن نوفر لك الأدوات للعثور على المحامي المناسب والتواصل معه، والمحامي هو من يقدم لك الاستشارة أو الخدمة القانونية مباشرة.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="scale-y-[-100%]">
              <div className="bg-[#e8f4fd] flex flex-col items-center justify-center overflow-clip px-1.5 sm:px-2 lg:px-[6px] py-2 sm:py-2.5 lg:py-[9px] rounded-[10px] w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px]">
                <div className="h-1.5 sm:h-2 lg:h-[6px] w-3 sm:w-4 lg:w-[12px] relative">
                  <div className="absolute inset-[-16.67%_-8.33%_-13.21%_-8.33%]">
                    <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#d9d9d9] border-solid flex gap-3 sm:gap-4 lg:gap-[20px] items-center justify-start p-3 sm:p-4 lg:p-[20px] rounded-[10px] w-full">
          <div className="font-cairo font-bold leading-[0] w-10 h-10 sm:w-12 sm:h-12 lg:w-[46px] lg:h-[46px] text-[#a1d3f7] text-2xl sm:text-3xl lg:text-[40px] text-start flex items-center justify-center">
            <p className="leading-tight sm:leading-snug lg:leading-[42px] whitespace-pre-wrap">03</p>
          </div>
          <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[10px] items-start justify-center leading-[0] min-h-px min-w-px">
            <div className="font-cairo font-bold text-[#0a4875] text-base sm:text-lg lg:text-[20px] text-start whitespace-nowrap">
              <p className="leading-normal sm:leading-snug lg:leading-[28px]">كيف يمكنني التسجيل كمحامٍ في "توّكل"؟</p>
            </div>
            <div className="font-cairo font-medium leading-[28px] min-w-full text-[#4c4c4c] text-sm sm:text-base lg:text-[16px] text-start w-[min-content] whitespace-pre-wrap">
              <p className="mb-0">اضغط على زر "سجل كمحامٍ" في الصفحة الرئيسية أو في قسم "للمحامين"، ثم اتبع الخطوات لإدخال بياناتك المهنية والشخصية وتوثيق حسابك.</p>
              <p>س: ما هي المستندات المطلوبة للتسجيل كمحامٍ؟</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="scale-y-[-100%]">
              <div className="bg-[#e8f4fd] flex flex-col items-center justify-center overflow-clip px-1.5 sm:px-2 lg:px-[6px] py-2 sm:py-2.5 lg:py-[9px] rounded-[10px] w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px]">
                <div className="h-1.5 sm:h-2 lg:h-[6px] w-3 sm:w-4 lg:w-[12px] relative">
                  <div className="absolute inset-[-16.67%_-8.33%_-13.21%_-8.33%]">
                    <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#d9d9d9] border-solid flex gap-3 sm:gap-4 lg:gap-[20px] items-center justify-start p-3 sm:p-4 lg:p-[20px] rounded-[10px] w-full">
          <div className="font-cairo font-bold leading-[0] w-10 h-10 sm:w-12 sm:h-12 lg:w-[46px] lg:h-[46px] text-[#a1d3f7] text-2xl sm:text-3xl lg:text-[40px] text-start flex items-center justify-center">
            <p className="leading-tight sm:leading-snug lg:leading-[42px] whitespace-pre-wrap">04</p>
          </div>
          <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[10px] items-start justify-center leading-[0] min-h-px min-w-px">
            <div className="font-cairo font-bold text-[#0a4875] text-base sm:text-lg lg:text-[20px] text-start whitespace-nowrap">
              <p className="leading-normal sm:leading-snug lg:leading-[28px]">ما هي المستندات المطلوبة للتسجيل كمحامٍ؟</p>
            </div>
            <div className="font-cairo font-medium min-w-full text-[#4c4c4c] text-sm sm:text-base lg:text-[16px] text-start w-[min-content]">
              <p className="leading-normal sm:leading-snug lg:leading-[28px] whitespace-pre-wrap">
                ستحتاج إلى تقديم إثبات شخصية، رقم القيد بنقابة المحامين، ووثائق تثبت مؤهلاتك وخبراتك.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="scale-y-[-100%]">
              <div className="bg-[#e8f4fd] flex flex-col items-center justify-center overflow-clip px-1.5 sm:px-2 lg:px-[6px] py-2 sm:py-2.5 lg:py-[9px] rounded-[10px] w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px]">
                <div className="h-1.5 sm:h-2 lg:h-[6px] w-3 sm:w-4 lg:w-[12px] relative">
                  <div className="absolute inset-[-16.67%_-8.33%_-13.21%_-8.33%]">
                    <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img18} />
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

export default FAQSection;
