import React, { useState } from 'react';
import {
  imgDashboardProfile,
  imgDashboardVerifyLarge,
  imgDashboardEdit,
  imgDashboardVector6,
  imgDashboardEyeOutline,
  imgDashboardEyeOutlineHide,
  imgDashboardSlash,
  imgDashboardFrame1171279284,
  imgDashboardUnsplashWnwK3EXzYo,
  imgDashboardFrame1171279337,
  imgDashboardFrame1171279340,
  imgDashboardFrame1171279341,
  imgDashboardCloseSquare,
  imgDashboardGalleryExport,
  imgDashboardPlayCircle
} from '../../constants/images';
import Image from '../Image';

function DashboardProfileView() {
  const [showBio, setShowBio] = useState(true);
  const [showLocation, setShowLocation] = useState(true);
  const [showDegree, setShowDegree] = useState(true);
  const [showSpecializations, setShowSpecializations] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showDelegation, setShowDelegation] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="flex flex-1 flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-start">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] items-center justify-center w-full">
        <div className="bg-white border-[#1c1c1c] border-2 sm:border-[2.5px] md:border-[3px] lg:border-[3.6px] border-solid flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[12px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[9.6px] rounded-[120px] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[96px] lg:h-[96px] relative flex-shrink-0">
          <div className="aspect-[184/184] relative rounded-[360px] w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[360px]">
              <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[360px] to-[rgba(0,0,0,0.2)]"></div>
              <img alt="Profile" className="absolute max-w-none object-contain rounded-[360px] w-full h-full" src={imgDashboardProfile} />
            </div>
          </div>
          <div className="absolute bg-white bottom-[-2px] sm:bottom-[-2.5px] md:bottom-[-3px] lg:bottom-[-3.6px] right-[-2px] sm:right-[-2.5px] md:right-[-3px] lg:right-[-3.6px] rounded-[360px] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[28.8px] lg:h-[28.8px]">
            <Image alt="Verify" className="block w-full h-full object-contain" src={imgDashboardVerifyLarge} />
          </div>
        </div>
        <div className="flex flex-col items-end w-full sm:w-auto lg:w-[438px]">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center w-full">
            <div className="flex items-start justify-between w-full">
              <p className="flex-1 font-cairo font-semibold leading-tight sm:leading-normal md:leading-[38px] lg:leading-[42px] text-[#1c1c1c] text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-center whitespace-pre-wrap">
                الأستاذ / حسنين حسونة
              </p>
            </div>
            <p className="font-cairo font-bold leading-normal text-[#0a4875] text-sm sm:text-base md:text-[17px] lg:text-[18px] text-center w-full whitespace-pre-wrap">
              مستشار قانوني معتمد
            </p>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-end w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 sm:gap-0">
          <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-[16px] items-center">
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]">
              <Image alt="Edit" className="block w-full h-full object-contain" src={imgDashboardEdit} />
            </div>
            <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-base sm:text-lg md:text-xl lg:text-[20px] text-right whitespace-nowrap">
              <p className="leading-normal">نبذة تعريفية</p>
            </div>
          </div>
          <button
            onClick={() => setShowBio(!showBio)}
            className={`${
              showBio ? 'bg-[#0a4875]' : 'bg-[#e8e8e8]'
            } flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[8px] rounded-[10px]`}
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]">
              <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutline} />
            </div>
            <div className="flex items-center">
              <div className={`flex flex-col font-cairo font-semibold justify-center leading-[0] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right whitespace-nowrap ${
                showBio ? 'text-[#e8f4fd]' : 'text-[#0a4875]'
              }`}>
                <p className="leading-normal">{showBio ? 'اظهار' : 'اخفاء'}</p>
              </div>
            </div>
          </button>
        </div>
        {showBio && (
          <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right w-full">
            <p className="leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px] whitespace-pre-wrap">
              مستشار قانوني تابع لشركة اسيسيور للمحاماة والاستشارات القانونية بخبرة تزيد عن 12 عامًا في تقديم الاستشارات القانونية للأفراد والشركات، متخصص في العقود التجارية، القضايا العمالية، وصياغة الاتفاقيات باحترافية عالية. قدم مئات الجلسات الناجحة وساعد العديد من العملاء في تحقيق أفضل النتائج القانونية .قديم الاستشارات القانونية للأفراد والشركات، متخصص في العقود التجارية، القضايا العمالية، وصياغة الاتفاقيات باحترافية عالية.
            </p>
          </div>
        )}
      </div>

      <div className="h-0 relative w-full">
        <div className="absolute inset-[-0.5px_0]">
          <Image alt="Divider" className="block w-full h-full object-contain" src={imgDashboardVector6} />
        </div>
      </div>

      {/* Location Section */}
      <div className="flex flex-col gap-[8px] items-end w-full">
        <div className="flex items-center justify-between w-full">
        <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
            <p className="leading-normal">الموقع</p>
          </div>
          <button
            onClick={() => setShowLocation(!showLocation)}
            className={`${
              showLocation ? 'bg-[#0a4875]' : 'bg-[#e8e8e8]'
            } flex gap-[10px] items-center justify-center p-[8px] rounded-[10px]`}
          >
            <div className="relative w-[24px] h-[24px]">
              <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutline} />
            </div>
            <div className="flex items-center">
              <div className={`flex flex-col font-cairo font-semibold justify-center leading-[0] text-[16px] text-right whitespace-nowrap ${
                showLocation ? 'text-[#e8f4fd]' : 'text-[#0a4875]'
              }`}>
                <p className="leading-normal">{showLocation ? 'اظهار' : 'اخفاء'}</p>
              </div>
            </div>
          </button>
          
        </div>
        {showLocation && (
          <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right w-full">
            <p className="leading-[22px] whitespace-pre-wrap">مدينة نصر</p>
          </div>
        )}
      </div>

      <div className="h-0 relative w-full">
        <div className="absolute inset-[-0.5px_0]">
          <Image alt="Divider" className="block w-full h-full object-contain" src={imgDashboardVector6} />
        </div>
      </div>

      {/* Degree Section */}
      <div className="flex flex-col gap-[8px] items-end w-full">
        <div className="flex items-center justify-between w-full">
        <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
            <p className="leading-normal">الدرجة العلمية</p>
          </div>
          <button
            onClick={() => setShowDegree(!showDegree)}
            className={`${
              showDegree ? 'bg-[#0a4875]' : 'bg-[#e8e8e8]'
            } flex gap-[10px] items-center justify-center p-[8px] rounded-[10px]`}
          >
            <div className="relative w-[24px] h-[24px]">
              <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutline} />
            </div>
            <div className="flex items-center">
              <div className={`flex flex-col font-cairo font-semibold justify-center leading-[0] text-[16px] text-right whitespace-nowrap ${
                showDegree ? 'text-[#e8f4fd]' : 'text-[#0a4875]'
              }`}>
                <p className="leading-normal">{showDegree ? 'اظهار' : 'اخفاء'}</p>
              </div>
            </div>
          </button>
          
        </div>
        {showDegree && (
          <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right w-full">
            <p className="leading-[22px] whitespace-pre-wrap">ليسانس حقوق – ماجستير قانون تجاري</p>
          </div>
        )}
      </div>

      <div className="h-0 relative w-full">
        <div className="absolute inset-[-0.5px_0]">
          <Image alt="Divider" className="block w-full h-full object-contain" src={imgDashboardVector6} />
        </div>
      </div>

      {/* Specializations Section */}
      <div className="flex flex-col gap-[8px] items-start w-full">
        <div className="flex items-center justify-between w-full">
        <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
            <p className="leading-normal">التخصصات</p>
          </div>
          <button
            onClick={() => setShowSpecializations(!showSpecializations)}
            className={`${
              showSpecializations ? 'bg-[#0a4875]' : 'bg-[#e8e8e8]'
            } flex gap-[8px] items-center justify-center p-[8px] rounded-[10px]`}
          >
            {showSpecializations ? (
              <div className="relative w-[24px] h-[24px]">
                <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutline} />
              </div>
            ) : (
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start relative w-[24px] h-[24px]">
                <div className="col-[1] ml-0 mt-0 relative row-[1] size-[24px]">
                  <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutlineHide} />
                </div>
                <div className="col-[1] flex h-[18px] items-center justify-center ml-[2px] mt-[3px] relative row-[1] w-[22px]">
                  <div className="flex-none rotate-[140.711deg]">
                    <div className="h-0 relative w-[28.425px]">
                      <Image alt="Slash" className="block w-full h-full object-contain" src={imgDashboardSlash} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center">
              <div className={`flex flex-col font-cairo font-semibold justify-center leading-[0] text-[16px] text-right whitespace-nowrap ${
                showSpecializations ? 'text-[#e8f4fd]' : 'text-[#0a4875]'
              }`}>
                <p className="leading-normal">{showSpecializations ? 'اظهار' : 'اخفاء'}</p>
              </div>
            </div>
          </button>
       
        </div>
        {showSpecializations && (
          <div className="flex gap-[8px] items-start">
            {['تجاري', 'مدني', 'أحوال شخصية'].map((spec) => (
              <div key={spec} className="bg-[#e8f4fd] flex flex-col items-center px-[14px] py-[10px] rounded-[10px]">
                <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#0a4875] text-[16px] text-right whitespace-nowrap">
                  <p className="leading-[22px]">{spec}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-0 relative w-full">
        <div className="absolute inset-[-0.5px_0]">
          <Image alt="Divider" className="block w-full h-full object-contain" src={imgDashboardVector6} />
        </div>
      </div>

      {/* Age Section */}
      <div className="flex flex-col gap-[8px] items-end w-full">
        <div className="flex items-center justify-between w-full">
        <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
            <p className="leading-normal">العمر</p>
          </div>
          <button
            onClick={() => setShowAge(!showAge)}
            className={`${
              showAge ? 'bg-[#0a4875]' : 'bg-[#e8e8e8]'
            } flex gap-[10px] items-center justify-center p-[8px] rounded-[10px]`}
          >
            <div className="relative w-[24px] h-[24px]">
              <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutline} />
            </div>
            <div className="flex items-center">
              <div className={`flex flex-col font-cairo font-semibold justify-center leading-[0] text-[16px] text-right whitespace-nowrap ${
                showAge ? 'text-[#e8f4fd]' : 'text-[#0a4875]'
              }`}>
                <p className="leading-normal">{showAge ? 'اظهار' : 'اخفاء'}</p>
              </div>
            </div>
          </button>
          
        </div>
        {showAge && (
          <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right w-full">
            <p className="leading-[22px] whitespace-pre-wrap">30 عام</p>
          </div>
        )}
      </div>

      <div className="h-0 relative w-full">
        <div className="absolute inset-[-0.5px_0]">
          <Image alt="Divider" className="block w-full h-full object-contain" src={imgDashboardVector6} />
        </div>
      </div>

      {/* Phone Section */}
      <div className="flex flex-col gap-[8px] items-end w-full">
        <div className="flex items-center justify-between w-full">
        <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
            <p className="leading-normal">رقم الهاتف</p>
          </div>
          <button
            onClick={() => setShowPhone(!showPhone)}
            className={`${
              showPhone ? 'bg-[#0a4875]' : 'bg-[#e8e8e8]'
            } flex gap-[10px] items-center justify-center p-[8px] rounded-[10px]`}
          >
            <div className="relative w-[24px] h-[24px]">
              <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutline} />
            </div>
            <div className="flex items-center">
              <div className={`flex flex-col font-cairo font-semibold justify-center leading-[0] text-[16px] text-right whitespace-nowrap ${
                showPhone ? 'text-[#e8f4fd]' : 'text-[#0a4875]'
              }`}>
                <p className="leading-normal">{showPhone ? 'اظهار' : 'اخفاء'}</p>
              </div>
            </div>
          </button>
          
        </div>
        {showPhone && (
          <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right w-full">
            <p className="leading-[22px] whitespace-pre-wrap">+200 000 000</p>
          </div>
        )}
      </div>

      <div className="h-0 relative w-full">
        <div className="absolute inset-[-0.5px_0]">
          <Image alt="Divider" className="block w-full h-full object-contain" src={imgDashboardVector6} />
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col gap-[8px] items-end w-full">
        <div className="flex items-center justify-between w-full">
        <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
            <p className="leading-normal">سنوات الخبرة</p>
          </div>
          <button
            onClick={() => setShowExperience(!showExperience)}
            className={`${
              showExperience ? 'bg-[#0a4875]' : 'bg-[#e8e8e8]'
            } flex gap-[10px] items-center justify-center p-[8px] rounded-[10px]`}
          >
            <div className="relative w-[24px] h-[24px]">
              <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutline} />
            </div>
            <div className="flex items-center">
              <div className={`flex flex-col font-cairo font-semibold justify-center leading-[0] text-[16px] text-right whitespace-nowrap ${
                showExperience ? 'text-[#e8f4fd]' : 'text-[#0a4875]'
              }`}>
                <p className="leading-normal">{showExperience ? 'اظهار' : 'اخفاء'}</p>
              </div>
            </div>
          </button>
          
        </div>
        {showExperience && (
          <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right w-full">
            <p className="leading-[22px] whitespace-pre-wrap">+20 عام</p>
          </div>
        )}
      </div>

      <div className="h-0 relative w-full">
        <div className="absolute inset-[-0.5px_0]">
          <Image alt="Divider" className="block w-full h-full object-contain" src={imgDashboardVector6} />
        </div>
      </div>

      {/* Delegation Requests Section */}
      <div className="flex flex-col gap-[8px] items-end w-full">
        <div className="flex items-center justify-between w-full">
        <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
            <p className="leading-normal">طلبات الانابة</p>
          </div>
          <button
            onClick={() => setShowDelegation(!showDelegation)}
            className={`${
              showDelegation ? 'bg-[#0a4875]' : 'bg-[#e8e8e8]'
            } flex gap-[10px] items-center justify-center p-[8px] rounded-[10px]`}
          >
            <div className="relative w-[24px] h-[24px]">
              <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutline} />
            </div>
            <div className="flex items-center">
              <div className={`flex flex-col font-cairo font-semibold justify-center leading-[0] text-[16px] text-right whitespace-nowrap ${
                showDelegation ? 'text-[#e8f4fd]' : 'text-[#0a4875]'
              }`}>
                <p className="leading-normal">{showDelegation ? 'اظهار' : 'اخفاء'}</p>
              </div>
            </div>
          </button>
          
        </div>
        {showDelegation && (
          <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right w-full">
            <p className="leading-[22px] whitespace-pre-wrap">+ 100</p>
          </div>
        )}
      </div>

      <div className="h-0 relative w-full">
        <div className="absolute inset-[-0.5px_0]">
          <Image alt="Divider" className="block w-full h-full object-contain" src={imgDashboardVector6} />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="flex flex-col gap-[8px] items-start w-full">
        <div className="flex items-center justify-between w-full">
        <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
            <p className="leading-normal">الصور والفيديوهات</p>
          </div>
          <button
            onClick={() => setShowGallery(!showGallery)}
            className={`${
              showGallery ? 'bg-[#0a4875]' : 'bg-[#e8e8e8]'
            } flex gap-[10px] items-center justify-center p-[8px] rounded-[10px]`}
          >
            <div className="relative w-[24px] h-[24px]">
              <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutline} />
            </div>
            <div className="flex items-center">
              <div className={`flex flex-col font-cairo font-semibold justify-center leading-[0] text-[16px] text-right whitespace-nowrap ${
                showGallery ? 'text-[#e8f4fd]' : 'text-[#0a4875]'
              }`}>
                <p className="leading-normal">{showGallery ? 'اظهار' : 'اخفاء'}</p>
              </div>
            </div>
          </button>
          
        </div>
        {showGallery && (
          <div className="flex flex-col gap-[8px] items-start w-full">
            {/* Images Row */}
            <div className="flex gap-[20px] items-center justify-start w-full">
              <div className="flex flex-col h-[220px] items-end p-[10px] rounded-[10px] w-[185px] relative">
                <img alt="Gallery" className="absolute inset-0 object-cover pointer-events-none rounded-[10px] w-full h-full" src={imgDashboardFrame1171279337} />
                <div className="bg-white relative rounded-[8px] w-[24px] h-[24px] cursor-pointer z-10">
                  <Image alt="Close" className="block w-full h-full object-contain" src={imgDashboardCloseSquare} />
                </div>
              </div>
              <div className="flex flex-col h-[220px] items-end p-[10px] rounded-[10px] w-[185px] relative">
                <img alt="Gallery" className="absolute inset-0 object-cover pointer-events-none rounded-[10px] w-full h-full" src={imgDashboardProfile} />
                <div className="bg-white relative rounded-[8px] w-[24px] h-[24px] cursor-pointer z-10">
                  <Image alt="Close" className="block w-full h-full object-contain" src={imgDashboardCloseSquare} />
                </div>
              </div>
            </div>
            {/* Videos Row */}
            <div className="flex gap-[20px] items-center justify-start w-full">
              <div className="flex flex-col gap-[10px] h-[220px] items-end p-[10px] rounded-[10px] w-[185px] relative">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
                  <img alt="Video" className="absolute object-cover rounded-[10px] w-full h-full" src={imgDashboardFrame1171279340} />
                  <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[10px] to-black"></div>
                </div>
                <div className="bg-w
                hite relative rounded-[8px] w-[24px] h-[24px] cursor-pointer z-10">
                  <Image alt="Close" className="block w-full h-full object-contain" src={imgDashboardCloseSquare} />
                </div>
              </div>
              <div className="flex flex-col gap-[10px] h-[220px] items-end p-[10px] rounded-[10px] w-[185px] relative">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
                  <img alt="Video" className="absolute object-cover rounded-[10px] w-full h-full" src={imgDashboardFrame1171279341} />
                  <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[10px] to-black"></div>
                </div>
                <div className="bg-white relative rounded-[8px] w-[24px] h-[24px] cursor-pointer z-10">
                  <Image alt="Close" className="block w-full h-full object-contain" src={imgDashboardCloseSquare} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-0 relative w-full">
        <div className="absolute inset-[-0.5px_0]">
          <Image alt="Divider" className="block w-full h-full object-contain" src={imgDashboardVector6} />
        </div>
      </div>

      {/* Comments Section */}
      <div className="flex flex-col gap-[8px] items-end w-full">
        <div className="flex items-center justify-between w-full">
        <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
            <p className="leading-normal">التعليقات</p>
          </div>
          <button
            onClick={() => setShowComments(!showComments)}
            className={`${
              showComments ? 'bg-[#0a4875]' : 'bg-[#e8e8e8]'
            } flex gap-[10px] items-center justify-center p-[8px] rounded-[10px]`}
          >
            <div className="relative w-[24px] h-[24px]">
              <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutline} />
            </div>
            <div className="flex items-center">
              <div className={`flex flex-col font-cairo font-semibold justify-center leading-[0] text-[16px] text-right whitespace-nowrap ${
                showComments ? 'text-[#e8f4fd]' : 'text-[#0a4875]'
              }`}>
                <p className="leading-normal">{showComments ? 'اظهار' : 'اخفاء'}</p>
              </div>
            </div>
          </button>
          
        </div>
        {showComments && (
          <div className="flex flex-col gap-[20px] items-center justify-center w-full">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white flex flex-col gap-[10px] items-end p-[14px] rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] w-full">
                <div className="flex items-center justify-between w-full">
                <div className="flex gap-[20px] items-start">
                <div className="border-2 border-[#2b2b2b] border-solid flex items-center justify-center p-[4px] rounded-[300px] w-[68px] h-[68px]">
                      <div className="aspect-[84/84] flex-1 relative rounded-[300px]">
                        <img alt="Profile" className="absolute inset-0 object-cover pointer-events-none rounded-[300px] w-full h-full" src={imgDashboardUnsplashWnwK3EXzYo} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] items-start">
                      <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-[18px] text-right w-[102px]">
                        <p className="leading-normal whitespace-pre-wrap">ليلى حمدي</p>
                      </div>
                      <div className="h-[16px] relative w-[96px]">
                        <Image alt="Stars" className="block w-full h-full object-contain" src={imgDashboardFrame1171279284} />
                      </div>
                      <div className="flex flex-col font-cairo font-normal h-[14px] justify-center leading-[0] text-[#656565] text-[12px] text-right w-[79px]">
                        <p className="leading-[22px] whitespace-pre-wrap">12 نوفمبر 2025</p>
                      </div>
                    </div>
                    
                  </div>
                  <button className="bg-[#e8e8e8] flex gap-[10px] items-center justify-center p-[8px] rounded-[10px]">
                    <div className="relative w-[24px] h-[24px]">
                      <Image alt="Eye" className="block w-full h-full object-contain" src={imgDashboardEyeOutline} />
                    </div>
                    <div className="flex items-center">
                      <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#0a4875] text-[16px] text-right whitespace-nowrap">
                        <p className="leading-normal">اخفاء</p>
                      </div>
                    </div>
                  </button>
                  
                </div>
                <div className="flex flex-col font-cairo font-medium justify-center leading-[0] min-w-full relative text-[#656565] text-[14px] text-right w-[min-content]">
                  <p className="leading-[22px] whitespace-pre-wrap">
                    كنت بحاجة لاستشارة عاجلة بخصوص تأسيس شركة. استخدمت 'توّكل' ووجدت محامياً متخصصاً في قانون الشركات. سرعة الاستجابة وجودة الاستشارة كانت فوق التوقعات. أوصي بها بشدة لكل من يبحث عن محامٍ
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Profile Button */}
      <div className="flex items-end w-full">
        <button className="bg-[#0a4875] flex gap-[10px] h-[60px] items-center justify-center p-[10px] rounded-[10px] w-[268px]">
          <p className="font-cairo font-bold leading-normal text-[18px] text-right text-white">
            تعديل الملف الشخصي
          </p>
        </button>
      </div>
    </div>
  );
}

export default DashboardProfileView;
