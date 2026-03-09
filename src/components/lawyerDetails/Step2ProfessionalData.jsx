import {
  imgLawyerDetailsArrowDown3,
  imgLawyerDetailsCalendar2
} from '../../constants/images';
import Image from '../Image';

function Step2ProfessionalData({ formData, onInputChange, errors }) {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-col gap-[20px] items-start w-full">
        <p className="font-cairo font-bold leading-[28px] text-[#1c1c1c] text-[20px] text-right">
          بيانات المحامي المهنية
        </p>
        <div className="flex gap-[20px] items-center justify-end w-full">
          {/* Registration Date */}
          <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                تاريخ القيد<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
              
              <label className="w-full relative cursor-pointer">
                <input
                  type="date"
                  value={formData.registrationDate || ''}
                  onChange={(e) => onInputChange('registrationDate', e.target.value)}
                  className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent cursor-pointer text-right font-cairo font-normal text-[16px]"
                  style={{ color: formData.registrationDate ? '#1c1c1c' : 'transparent' }}
                  dir="rtl"
                />
                {!formData.registrationDate && (
                  <span className="absolute right-[34px] top-1/2 -translate-y-1/2 pointer-events-none font-cairo font-normal leading-[22px] text-[#c3c3c3] text-[16px]">
                    يوم/شهر/سنه
                  </span>
                )}
              </label>
              <div className="relative w-[24px] h-[24px]">
                <Image alt="Calendar" className="block w-full h-full object-contain" src={imgLawyerDetailsCalendar2} />
              </div>
            </div>
          </div>
          {/* Registration Number */}
          <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                رقم القيد بنقابة المحامين<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
              <div className="flex items-center opacity-0 relative">
                <div className="relative w-[24px] h-[24px]"></div>
                <div className="relative w-[24px] h-[24px]"></div>
              </div>
              <input
                type="text"
                value={formData.registrationNumber || ''}
                onChange={(e) => onInputChange('registrationNumber', e.target.value)}
                placeholder="رقم القيد بنقابة المحامين"
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.registrationNumber ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] items-center justify-end w-full">
          {/* Specializations */}
          <div className="flex flex-col gap-[8px] h-[98px] items-start justify-center w-[402px]">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                التخصصات القانونية<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
              <div className="relative w-[24px] h-[24px]">
                <Image alt="Arrow down" className="block w-full h-full object-contain" src={imgLawyerDetailsArrowDown3} />
              </div>
              <select
                value={formData.specializations || ''}
                onChange={(e) => onInputChange('specializations', e.target.value)}
                className="w-full h-full px-[14px] py-[5px] border-0 outline-0 bg-transparent appearance-none cursor-pointer text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.specializations ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              >
                <option value="">أحوال شخصية، تجاري، جنائي، مدني، عقاري، شركات</option>
                <option value="personal">أحوال شخصية</option>
                <option value="commercial">تجاري</option>
                <option value="criminal">جنائي</option>
                <option value="civil">مدني</option>
                <option value="real-estate">عقاري</option>
                <option value="companies">شركات</option>
              </select>
            </div>
          </div>
          {/* Registration Degree */}
          <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                درجة القيد<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
              <div className="relative w-[24px] h-[24px]">
                <Image alt="Arrow down" className="block w-full h-full object-contain" src={imgLawyerDetailsArrowDown3} />
              </div>
              <select
                value={formData.registrationDegree || ''}
                onChange={(e) => onInputChange('registrationDegree', e.target.value)}
                className="w-full h-full px-[14px] py-[5px] border-0 outline-0 bg-transparent appearance-none cursor-pointer text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.registrationDegree ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              >
                <option value="">جدول عام، ابتدائي، استئناف، نقض</option>
                <option value="general">جدول عام</option>
                <option value="primary">ابتدائي</option>
                <option value="appeal">استئناف</option>
                <option value="cassation">نقض</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] items-center justify-end w-full">
          {/* Registered Address */}
          <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                العنوان المسجل في نقابة المحامين<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
              <div className="flex items-center opacity-0 relative">
                <div className="relative w-[24px] h-[24px]"></div>
                <div className="relative w-[24px] h-[24px]"></div>
              </div>
              <input
                type="text"
                value={formData.registeredAddress || ''}
                onChange={(e) => onInputChange('registeredAddress', e.target.value)}
                placeholder="العنوان المسجل في نقابة المحامين"
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.registeredAddress ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              />
            </div>
          </div>
          {/* Tax Number */}
          <div className="flex flex-col gap-[8px] h-[98px] items-start justify-center w-[402px]">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                الرقم الضريبي<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
              <div className="flex items-center opacity-0 relative">
                <div className="relative w-[24px] h-[24px]"></div>
                <div className="relative w-[24px] h-[24px]"></div>
              </div>
              <input
                type="text"
                value={formData.taxNumber || ''}
                onChange={(e) => onInputChange('taxNumber', e.target.value)}
                placeholder="الرقم الضريبي"
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.taxNumber ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] items-center justify-end w-full">
          {/* Office Address */}
          <div className="flex flex-col gap-[8px] h-[98px] items-start justify-center w-[402px]">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                عنوان المكتب القانوني<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
              <div className="flex items-center opacity-0 relative">
                <div className="relative w-[24px] h-[24px]"></div>
                <div className="relative w-[24px] h-[24px]"></div>
              </div>
              <input
                type="text"
                value={formData.officeAddress || ''}
                onChange={(e) => onInputChange('officeAddress', e.target.value)}
                placeholder="عنوان المكتب القانوني"
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.officeAddress ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              />
            </div>
          </div>
          {/* Region/Neighborhood */}
          <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
              <p className="leading-normal">
                المنطقه ، الحي<span className="text-[#cc1024]">*</span>
              </p>
            </div>
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
              <div className="flex items-center opacity-0 relative">
                <div className="relative w-[24px] h-[24px]"></div>
                <div className="relative w-[24px] h-[24px]"></div>
              </div>
              <input
                type="text"
                value={formData.region || ''}
                onChange={(e) => onInputChange('region', e.target.value)}
                placeholder="المنطقه ، الحي"
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: formData.region ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2ProfessionalData;
