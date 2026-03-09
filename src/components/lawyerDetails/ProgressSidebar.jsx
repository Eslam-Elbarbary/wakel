import {
  imgLawyerDetailsTickSquare,
  imgLawyerDetailsTickSquare2,
  imgLawyerDetailsTickSquare3,
  imgLawyerDetailsTickSquare4
} from '../../constants/images';
import Image from '../Image';

function ProgressSidebar({ currentStep }) {
  const steps = [
    { number: '01', title: 'البيانات الشخصية/الاتصال', completed: currentStep > 1, active: currentStep === 1 },
    { number: '02', title: 'البيانات المهنية', completed: currentStep > 2, active: currentStep === 2 },
    { number: '03', title: 'المستندات المطلوبة', completed: currentStep > 3, active: currentStep === 3 },
    { number: '04', title: 'الشهادات العلمية والخبرات', completed: currentStep > 4, active: currentStep === 4 },
    { number: '05', title: 'معرض صور/فيديوهات (اختياري)', completed: currentStep > 5, active: currentStep === 5 }
  ];

  return (
    <div className="bg-white flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center p-4 sm:p-5 md:p-6 lg:p-[20px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full lg:w-auto lg:sticky lg:top-4 lg:self-start">
    {steps.map((step, index) => (
      <div
        key={index}
        className={`flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] min-h-[48px] sm:min-h-[52px] md:min-h-[54px] lg:h-[56px] items-center justify-start p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[8px] w-full ${
          step.active
            ? 'bg-[#e8f4fd]'
            : step.completed
            ? 'bg-[#f3f3f3]'
            : 'bg-white border border-[#d9d9d9] border-solid'
        }`}
      >
        {/* الرقم أو علامة الصح */}
        {step.completed ? (
          <div className="relative w-[24px] h-[24px]">
            <Image
              alt="Tick"
              className="block w-full h-full object-contain"
              src={
                index === 0 ? imgLawyerDetailsTickSquare :
                index === 1 ? imgLawyerDetailsTickSquare2 :
                index === 2 ? imgLawyerDetailsTickSquare3 :
                imgLawyerDetailsTickSquare4
              }
            />
          </div>
        ) : (
          <div
            className={`flex flex-col font-cairo font-bold h-[26px] justify-center leading-[0] text-[24px] text-center w-[27px] ${
              step.active ? 'text-[#a1d3f7]' : 'text-[#d9d9d9]'
            }`}
          >
            <p className="leading-[38px]">{step.number}</p>
          </div>
        )}
  
        {/* النص */}
        <p
          className={`font-cairo font-medium leading-normal text-sm sm:text-base md:text-[17px] lg:text-[18px] text-right ${
            step.active
              ? 'text-[#0a4875]'
              : step.completed
              ? 'text-[#4c4c4c]'
              : 'text-[#1c1c1c]'
          }`}
        >
          {step.title}
        </p>
      </div>
    ))}
  </div>
  
  );
}

export default ProgressSidebar;
