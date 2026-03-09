import {
  imgLawyerDetailsArrowDown4
} from '../../constants/images';
import Image from '../Image';

function Step3Documents({ formData, onFileChange, errors }) {
  return (
    <div className="flex flex-col gap-[20px] items-end w-full">
      <div className="flex gap-[20px] items-center justify-end w-full">
        {/* Tax Card Image */}
        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
            <p className="leading-normal">
              صورة من البطاقة الضريبية<span className="text-[#cc1024]">*</span>
            </p>
          </div>
          <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
            <div className="flex items-center opacity-0 relative">
              <div className="relative w-[24px] h-[24px]"></div>
              <div className="relative w-[24px] h-[24px]"></div>
            </div>
            <label className="w-full h-full cursor-pointer relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onFileChange('taxCard', e.target.files[0])}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                dir="rtl"
              />
              <span className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none font-cairo font-normal leading-[22px] text-[#c3c3c3] text-[16px]">
                {formData.taxCard ? formData.taxCard.name : 'صورة من كارنيه النقابة'}
              </span>
            </label>
          </div>
        </div>
        {/* Union Card Image */}
        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
            <p className="leading-normal">
              صورة من كارنيه النقابة<span className="text-[#cc1024]">*</span>
            </p>
          </div>
          <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
            <div className="flex items-center opacity-0 relative">
              <div className="relative w-[24px] h-[24px]"></div>
              <div className="relative w-[24px] h-[24px]"></div>
            </div>
            <label className="w-full h-full cursor-pointer relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onFileChange('unionCard', e.target.files[0])}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                dir="rtl"
              />
              <span className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none font-cairo font-normal leading-[22px] text-[#c3c3c3] text-[16px]">
                {formData.unionCard ? formData.unionCard.name : 'صورة من كارنيه النقابة'}
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end w-full">
        {/* National ID Image (Both Sides) */}
        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
            <p className="leading-normal">
              صورة من البطاقة الشخصية (الوجهين)<span className="text-[#cc1024]">*</span>
            </p>
          </div>
          <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
            <div className="opacity-0 relative w-[24px] h-[24px]">
              <Image alt="Arrow down" className="block w-full h-full object-contain" src={imgLawyerDetailsArrowDown4} />
            </div>
            <label className="w-full h-full cursor-pointer relative">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => onFileChange('nationalIdImages', Array.from(e.target.files))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                dir="rtl"
              />
              <span className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none font-cairo font-normal leading-[22px] text-[#c3c3c3] text-[16px]">
                {formData.nationalIdImages && formData.nationalIdImages.length > 0 
                  ? `${formData.nationalIdImages.length} ملف` 
                  : 'صورة من البطاقة الشخصية (الوجهين)'}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3Documents;
