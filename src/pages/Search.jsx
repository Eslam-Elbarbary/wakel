import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  imgSearchLawyer1,
  imgSearchLawyer2,
  imgSearchLawyer3,
  imgSearchStarFilled,
  imgSearchStarEmpty,
  imgSearchLocation,
  imgSearchArrowDown,
  imgSearchRatingStars,
  imgSearchSliderHandle,
  imgSearchVector9
} from '../constants/images';
import Image from '../components/Image';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Search() {
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedGovernorate, setSelectedGovernorate] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);

  const lawyers = [
    { id: 1, image: imgSearchLawyer1, name: 'اسم المحامي', specialization: 'اسم التخصص', location: 'مدينه نصر, مكرم عبيد', rating: 2, experience: '+3 سنوات' },
    { id: 2, image: imgSearchLawyer2, name: 'اسم المحامي', specialization: 'اسم التخصص', location: 'مدينه نصر, مكرم عبيد', rating: 2, experience: '+3 سنوات' },
    { id: 3, image: imgSearchLawyer3, name: 'اسم المحامي', specialization: 'اسم التخصص', location: 'مدينه نصر, مكرم عبيد', rating: 2, experience: '+3 سنوات' },
    { id: 4, image: imgSearchLawyer1, name: 'اسم المحامي', specialization: 'اسم التخصص', location: 'مدينه نصر, مكرم عبيد', rating: 2, experience: '+3 سنوات' },
    { id: 5, image: imgSearchLawyer2, name: 'اسم المحامي', specialization: 'اسم التخصص', location: 'مدينه نصر, مكرم عبيد', rating: 2, experience: '+3 سنوات' },
    { id: 6, image: imgSearchLawyer3, name: 'اسم المحامي', specialization: 'اسم التخصص', location: 'مدينه نصر, مكرم عبيد', rating: 2, experience: '+3 سنوات' },
    { id: 7, image: imgSearchLawyer1, name: 'اسم المحامي', specialization: 'اسم التخصص', location: 'مدينه نصر, مكرم عبيد', rating: 2, experience: '+3 سنوات' },
    { id: 8, image: imgSearchLawyer2, name: 'اسم المحامي', specialization: 'اسم التخصص', location: 'مدينه نصر, مكرم عبيد', rating: 2, experience: '+3 سنوات' },
    { id: 9, image: imgSearchLawyer3, name: 'اسم المحامي', specialization: 'اسم التخصص', location: 'مدينه نصر, مكرم عبيد', rating: 2, experience: '+3 سنوات' },
  ];

  // Render lawyer card component - matching Figma exactly with responsive sizing
  const LawyerCard = ({ lawyer }) => (
    <div className="bg-white flex flex-col gap-[20px] h-[500px] items-center justify-center p-[12px] rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] w-full max-w-[350px] md:max-w-none lg:max-w-[288px] relative overflow-hidden">
      <div className="flex flex-1 flex-col gap-[8px] items-center min-h-px min-w-px w-full">
        <div className="flex flex-1 flex-col items-end justify-between min-h-px min-w-px p-[8px] rounded-[10px] w-full relative overflow-hidden">
          <Image 
            alt="Lawyer profile" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] w-full h-full" 
            src={lawyer.image} 
          />
          <div className="flex gap-[4px] h-[20px] items-center w-full relative z-[1]">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="relative w-[20px] h-[20px] flex-shrink-0">
                <Image
                  alt={star <= lawyer.rating ? 'Star filled' : 'Star empty'}
                  className="block max-w-none w-full h-full object-contain"
                  src={star <= lawyer.rating ? imgSearchStarFilled : imgSearchStarEmpty}
                />
              </div>
            ))}
          </div>
          <div className="bg-[#e8f4fd] flex items-center justify-center px-[12px] py-[8px] rounded-[8px] relative z-[1]">
            <p className="font-cairo font-bold leading-[28px] text-[#0a4875] text-[20px] text-right">
              {lawyer.experience}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start w-full">
          <div className="font-cairo font-bold min-w-full text-[#1c1c1c] text-[24px] text-right w-[min-content]">
            <p className="leading-[38px] whitespace-pre-wrap">{lawyer.name}</p>
          </div>
          <div className="font-cairo font-normal min-w-full text-[#4c4c4c] text-[18px] text-right w-[min-content]">
            <p className="leading-[28px] whitespace-pre-wrap">{lawyer.specialization}</p>
          </div>
          <div className="flex gap-[8px] items-start justify-start">
          <div className="relative w-[16px] h-[16px] flex-shrink-0">
              <Image
                alt="Location"
                className="block max-w-none w-full h-full object-contain"
                src={imgSearchLocation}
              />
            </div>
            <div className="font-cairo font-medium h-[24px] text-[#041d2f] text-[16px] text-start w-[156px]">
              <p className="leading-normal whitespace-pre-wrap">{lawyer.location}</p>
            </div>
            
          </div>
        </div>
      </div>
      <Link 
        to="/lawyer-profile" 
        className="bg-[#0a4875] cursor-pointer flex gap-[10px] h-[52px] items-center justify-center p-[10px] rounded-[8px] w-full hover:opacity-90 transition-opacity"
      >
        <p className="font-cairo font-bold leading-normal text-[16px] text-right text-white">
          تحقق من الملف الشخصي
        </p>
      </Link>
    </div>
  );

  const handleClearFilters = () => {
    setSelectedSpecialization('');
    setSelectedGovernorate('');
    setSelectedRegion('');
    setSelectedRating(0);
  };

  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content - Matching Figma structure exactly */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[42px] items-start justify-center max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[80px] pt-4 sm:pt-6 md:pt-8 lg:pt-[68px] pb-4 sm:pb-6 md:pb-8 lg:pb-[40px]">
        {/* Right Side - Filter Sidebar */}
        <div className="bg-[#fbfbfb] flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] items-end p-4 sm:p-5 md:p-6 lg:p-[24px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] w-full lg:w-[384px] lg:sticky lg:top-[120px] h-fit flex-shrink-0">
          {/* Filter Title */}
          <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#1c1c1c] text-lg sm:text-xl md:text-[19px] lg:text-[20px] text-right w-full">
            <p className="leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] whitespace-pre-wrap">التصفية</p>
          </div>

          {/* Divider */}
          <div className="h-0 w-full relative">
            <div className="absolute inset-[-0.5px_0]">
              <Image
                alt="Divider"
                className="block max-w-none w-full h-full object-contain"
                src={imgSearchVector9}
              />
            </div>
          </div>

          {/* Specialization Filter */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[16px] items-end w-full">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-base sm:text-lg md:text-[19px] lg:text-[20px] text-right w-full">
              <p className="leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] whitespace-pre-wrap">مجالات التخصص</p>
            </div>
            <div className="border border-[#ddd] border-solid flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[56px] items-center justify-end px-3 sm:px-4 md:px-5 lg:px-[16px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[8px] w-full cursor-pointer hover:border-[#0a4875] transition-colors">
              <div className="overflow-clip relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[20px] lg:h-[20px] flex-shrink-0">
                <div className="absolute inset-[34.37%_17.71%_34.38%_17.71%]">
                  <Image
                    alt="Arrow down"
                    className="block max-w-none w-full h-full object-contain"
                    src={imgSearchArrowDown}
                  />
                </div>
              </div>
              <input
                type="text"
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                placeholder="اسم التخصص"
                className="flex-1 px-2 py-0 border-0 outline-0 bg-transparent text-right capitalize font-cairo font-normal text-[#626262] text-sm sm:text-base md:text-[15px] lg:text-[16px] placeholder:text-[#626262] placeholder:font-cairo placeholder:capitalize"
                dir="rtl"
              />
            </div>
          </div>

          {/* Governorate Filter */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[16px] items-end w-full">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-base sm:text-lg md:text-[19px] lg:text-[20px] text-right w-full">
              <p className="leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] whitespace-pre-wrap">المحافظة</p>
            </div>
            <div className="border border-[#ddd] border-solid flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[56px] items-center justify-end px-3 sm:px-4 md:px-5 lg:px-[16px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[8px] w-full cursor-pointer hover:border-[#0a4875] transition-colors">
              <div className="overflow-clip relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[20px] lg:h-[20px] flex-shrink-0">
                <div className="absolute inset-[34.37%_17.71%_34.38%_17.71%]">
                  <Image
                    alt="Arrow down"
                    className="block max-w-none w-full h-full object-contain"
                    src={imgSearchArrowDown}
                  />
                </div>
              </div>
              <input
                type="text"
                value={selectedGovernorate}
                onChange={(e) => setSelectedGovernorate(e.target.value)}
                placeholder="اسم المحافظة"
                className="flex-1 px-2 py-0 border-0 outline-0 bg-transparent text-right capitalize font-cairo font-normal text-[#626262] text-sm sm:text-base md:text-[15px] lg:text-[16px] placeholder:text-[#626262] placeholder:font-cairo placeholder:capitalize"
                dir="rtl"
              />
            </div>
          </div>

          {/* Region Filter */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[16px] items-end w-full">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-base sm:text-lg md:text-[19px] lg:text-[20px] text-right w-full">
              <p className="leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] whitespace-pre-wrap">المنطقة</p>
            </div>
            <div className="border border-[#ddd] border-solid flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[56px] items-center justify-end px-3 sm:px-4 md:px-5 lg:px-[16px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[8px] w-full cursor-pointer hover:border-[#0a4875] transition-colors">
              <div className="overflow-clip relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[20px] lg:h-[20px] flex-shrink-0">
                <div className="absolute inset-[34.37%_17.71%_34.38%_17.71%]">
                  <Image
                    alt="Arrow down"
                    className="block max-w-none w-full h-full object-contain"
                    src={imgSearchArrowDown}
                  />
                </div>
              </div>
              <input
                type="text"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                placeholder="اسم المنطقة"
                className="flex-1 px-2 py-0 border-0 outline-0 bg-transparent text-right capitalize font-cairo font-normal text-[#626262] text-sm sm:text-base md:text-[15px] lg:text-[16px] placeholder:text-[#626262] placeholder:font-cairo placeholder:capitalize"
                dir="rtl"
              />
            </div>
          </div>

          {/* Ratings Filter */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[16px] items-start w-full">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-base sm:text-lg md:text-[19px] lg:text-[20px] text-right w-full">
              <p className="leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] whitespace-pre-wrap">التقييمات</p>
            </div>
            <div className="h-4 sm:h-5 md:h-6 lg:h-[16px] relative w-20 sm:w-24 md:w-28 lg:w-[112px]">
              <Image
                alt="Rating stars"
                className="block max-w-none w-full h-full object-contain"
                src={imgSearchRatingStars}
              />
            </div>
          </div>

          {/* Fees Filter */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[16px] items-end w-full">
            <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-base sm:text-lg md:text-[19px] lg:text-[20px] text-right w-full">
              <p className="leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] whitespace-pre-wrap">الرسوم</p>
            </div>
            <div className="flex flex-col gap-[4px] items-end w-full">
              <div className="flex items-center justify-between w-[122px]">
                <div className="bg-[#e8e8e8] flex items-center justify-center px-[8px] py-[2px] rounded-[23px]">
                  <p className="font-cairo font-normal leading-normal text-[#1c1c1c] text-[12px] text-right capitalize">
                    700
                  </p>
                </div>
                <div className="bg-[#e8e8e8] flex items-center justify-center px-[8px] py-[2px] rounded-[23px]">
                  <p className="font-cairo font-normal leading-normal text-[#1c1c1c] text-[12px] text-right capitalize">
                    140
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center relative w-full">
                <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
                  <div className="h-[14px] relative w-full">
                    <div className="absolute bg-[#ddd] inset-[42.86%_0] rounded-[40px]"></div>
                    <div className="absolute inset-[0_63.68%_0_0]">
                      <Image
                        alt="Slider handle"
                        className="block max-w-none w-full h-full object-contain"
                        src={imgSearchSliderHandle}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clear Filter Button */}
          <button
            type="button"
            onClick={handleClearFilters}
            className="bg-[#e8e8e8] cursor-pointer flex h-12 sm:h-14 md:h-16 lg:h-[56px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-full hover:opacity-80 transition-opacity"
          >
            <p className="font-cairo font-bold leading-tight sm:leading-normal md:leading-[26px] lg:leading-normal text-[#1c1c1c] text-base sm:text-lg md:text-[17px] lg:text-[18px] text-right">
              مسح التصنيف
            </p>
          </button>
        </div>
        {/* Left Side - Lawyer Cards Grid */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-center w-full lg:w-[854px]">
          {/* Responsive Grid: Mobile 1, Tablet 2, Desktop 3 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-[10px] w-full items-start justify-items-center">
            {lawyers.map((lawyer) => (
              <LawyerCard key={lawyer.id} lawyer={lawyer} />
            ))}
          </div>

          {/* Show More Button */}
          <button className="bg-white border border-[#0a4875] border-solid cursor-pointer flex gap-[10px] h-[60px] items-center justify-center p-[10px] rounded-[10px] w-full max-w-[268px] hover:opacity-90 transition-opacity">
            <p className="font-cairo font-bold leading-normal text-[#0a4875] text-[18px] text-right">
              عرض المزيد
            </p>
          </button>
        </div>

        
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Search;