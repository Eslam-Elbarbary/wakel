import { useState } from 'react';
import { 
  img, img1, img2, img3, img4, img5, 
  imgElements, imgElements1, imgElements2, 
  imgLawyerHeroElements, imgLawyerHeroElements1, imgLawyerHeroElements2,
  imgLawyerHeroSearch, imgLawyerHeroArrowDown, imgLawyerHeroUser,
  imgLawyerHeroJustice, imgLawyerHeroLocation, imgLawyerHeroArrow,
  imgCloseSquare 
} from '../constants/images';
import Image from './Image';
import { useAuth } from '../context/AuthContext';

function HeroSection() {
  const { userRole } = useAuth();
  const isLawyer = userRole === 'lawyer';
  const [activeTab, setActiveTab] = useState('search'); // 'search' or 'request' - Default to 'search' for both clients and lawyers
  const [requestType, setRequestType] = useState(null); // 'attendance' or 'consultation'
  const [currentStep, setCurrentStep] = useState(1); // 1, 2, or 3
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    requestTitle: '',
    description: '',
    specialization: '',
    governorate: '',
    region: '',
    location: '', // For lawyer proxy requests
    date: '',
    time: '',
    budgetFrom: '',
    budgetTo: '',
    documents: null
  });

  const handleRequestTabClick = () => {
    setActiveTab('request');
    setRequestType(null);
    setCurrentStep(1);
  };

  const handleSearchTabClick = () => {
    setActiveTab('search');
    setRequestType(null);
    setCurrentStep(1);
  };

  const handleRequestTypeSelect = (type) => {
    setRequestType(type);
    setCurrentStep(1);
  };

  const handleNext = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // If we're on step 3, show the success modal
    if (currentStep === 3) {
      setShowSuccessModal(true);
      return;
    }
    
    // Otherwise, go to the next step
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Reset form and go back to request type selection
    setFormData({
      requestTitle: '',
      description: '',
      specialization: '',
      governorate: '',
      region: '',
      date: '',
      time: '',
      budgetFrom: '',
      budgetTo: '',
      documents: null
    });
    setRequestType(null);
    setCurrentStep(1);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (e) => {
    handleInputChange('documents', e.target.files[0]);
  };

  return (
    <>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4" onClick={handleCloseModal} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="bg-white flex flex-col gap-6 sm:gap-[24px] items-center justify-center p-6 sm:p-[24px] rounded-[10px] w-full max-w-[523px] shadow-lg" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <div className="flex items-center justify-end w-full">
              <button
                type="button"
                onClick={handleCloseModal}
                className="bg-white flex items-center justify-center rounded-[8px] w-6 h-6 sm:w-[24px] sm:h-[24px] cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="relative w-6 h-6 sm:w-[24px] sm:h-[24px]">
                  <Image alt="Close" className="block w-full h-full object-contain" src={imgCloseSquare} />
                </div>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="flex flex-col gap-2.5 sm:gap-[10px] items-center justify-center leading-[0] w-full">
              <div className="flex flex-col font-cairo font-bold justify-center relative text-[#1c1c1c] text-lg sm:text-xl lg:text-[22px] text-right whitespace-nowrap">
                <p className="leading-[1.5]">تم ارسال طلبك بنجاح</p>
              </div>
              <div className="flex flex-col font-cairo font-medium justify-center relative text-[#4c4c4c] text-sm sm:text-base lg:text-[16px] text-center w-full max-w-[475px]">
                <p className="leading-normal whitespace-pre-wrap">
                  تم ارسال طلبك بنجاح، سنقوم بترشيح افضل المحاميون
                </p>
              </div>
            </div>
            
            {/* OK Button */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="bg-[#0a4875] cursor-pointer flex gap-2.5 sm:gap-[10px] h-12 sm:h-14 lg:h-[60px] items-center justify-center px-4 sm:px-5 lg:p-[10px] py-3 sm:py-2.5 rounded-[10px] w-full hover:opacity-90 transition-opacity"
            >
              <p className="font-cairo font-bold leading-normal text-base sm:text-lg lg:text-[18px] text-right text-white">
                موافق
              </p>
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px] items-center w-full relative z-0 isolate">
        <div className="bg-gradient-to-b from-white to-[#e7e7ee] flex items-end justify-center p-4 sm:p-6 md:p-10 lg:p-[80px] w-full relative z-0 isolate">
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[24px] items-center justify-center w-full max-w-7xl">
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] items-center leading-[0] text-center w-full">
            <div className="font-cairo font-bold text-[#0a4875] text-xl sm:text-2xl md:text-3xl lg:text-[40px] w-full max-w-3xl">
              <p className="leading-tight sm:leading-snug md:leading-normal lg:leading-[56px] whitespace-pre-wrap">
                مرحباً بك في منصة وّكل، وجهتك للحصول على الخدمات القانونية
              </p>
            </div>
            <div className="font-cairo font-medium text-[#041d2f] text-sm sm:text-base lg:text-[18px] w-full">
              <p className="leading-normal whitespace-pre-wrap">
                ابحث عن أفضل المحامين المتخصصين لتحصل على استشارة قانونية موثوقة
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-4 sm:gap-6 lg:gap-[40px] items-center justify-center p-4 sm:p-6 lg:px-[40px] lg:py-[32px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
            {/* Tab Navigation - Show for both Clients and Lawyers */}
            <div className="border-[#dadce6] border-b-[0.5px] border-l-0 border-r-0 border-solid border-t-0 flex items-center justify-between overflow-clip w-full">
            <button
                onClick={handleSearchTabClick}
                className={`flex flex-1 h-12 sm:h-16 lg:h-[80px] items-center justify-center min-h-px min-w-px p-2 sm:p-3 lg:p-[12px] ${activeTab === 'search' ? 'border-[#0a4875] border-b-[2.5px] border-l-0 border-r-0 border-solid border-t-0' : ''}`}
              >
                <p className={`font-cairo leading-normal text-sm sm:text-base lg:text-[20px] text-end ${activeTab === 'search' ? 'font-bold text-[#0a4875]' : 'font-normal text-[#828282]'}`}>
                  بحث عن محامي
                </p>
              </button>
              <button
                onClick={handleRequestTabClick}
                className={`flex flex-1 h-12 sm:h-16 lg:h-[80px] items-center justify-center min-h-px min-w-px p-2 sm:p-3 lg:p-[12px] ${activeTab === 'request' ? 'border-[#0a4875] border-b-[2.5px] border-l-0 border-r-0 border-solid border-t-0' : ''}`}
              >
                <p className={`font-cairo leading-normal text-sm sm:text-base lg:text-[20px] text-end ${activeTab === 'request' ? 'font-bold text-[#0a4875]' : 'font-normal text-[#828282]'}`}>
                  {isLawyer ? 'طلب حضور / انابة' : 'طلب حضور / استشارة'}
                </p>
              </button>
             
            </div>

            {/* Search Tab Content - Show when activeTab === 'search' */}
            {activeTab === 'search' && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-2 lg:gap-0 w-full">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center relative rounded-[12px] w-full sm:flex-1">
                  <div className="border border-[#f3f3f3] border-solid flex gap-2 sm:gap-3 md:gap-4 lg:gap-[16px] items-center justify-end p-0 rounded-tl-[12px] rounded-tr-[12px] sm:rounded-tr-none sm:rounded-br-none sm:rounded-bl-none sm:rounded-tl-[12px] relative flex-1">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[32px] lg:h-[32px] flex items-center justify-center flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px]">
                      <Image alt="User icon" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroUser : img2} />
                    </div>
                    <input
                      type="text"
                      placeholder="أو اكتب اسم المحامي"
                      className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#828282] text-xs sm:text-sm md:text-base lg:text-[20px] text-end w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent placeholder:text-[#828282]"
                      dir="rtl"
                    />
                  </div>
                  <div className="border border-[#f3f3f3] border-solid flex gap-2 sm:gap-3 md:gap-4 lg:gap-[24px] items-center justify-end p-0 sm:rounded-none lg:rounded-br-[10px] lg:rounded-tr-[10px] relative flex-1">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px] pointer-events-none">
                      <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroArrowDown : img1} />
                    </div>
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[32px] lg:h-[32px] flex items-center justify-center flex-shrink-0 mr-2 sm:mr-3 md:mr-4 lg:mr-[16px] pointer-events-none">
                      <Image alt="Specialty icon" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroJustice : img3} />
                    </div>
                    <select
                      className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#828282] text-xs sm:text-sm md:text-base lg:text-[20px] text-end w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent appearance-none cursor-pointer"
                      dir="rtl"
                    >
                      <option value="">اختار التخصص</option>
                      <option value="criminal">قضايا جنايات</option>
                      <option value="misdemeanor">قضايا جنح</option>
                      <option value="real-estate">قضايا عقارية</option>
                      <option value="company">قضايا تأسيس شركات</option>
                      <option value="personal">أحوال شخصية</option>
                    </select>
                  </div>
                  <div className="border border-[#f3f3f3] border-solid flex gap-2 sm:gap-3 md:gap-4 lg:gap-[24px] items-center justify-end p-0 sm:rounded-none relative flex-1">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px] pointer-events-none">
                      <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroArrowDown : img1} />
                    </div>
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[32px] lg:h-[32px] flex items-center justify-center flex-shrink-0 mr-2 sm:mr-3 md:mr-4 lg:mr-[16px] pointer-events-none">
                      <Image alt="Location icon" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroLocation : img4} />
                    </div>
                    <select
                      className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#828282] text-xs sm:text-sm md:text-base lg:text-[20px] text-end w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent appearance-none cursor-pointer"
                      dir="rtl"
                    >
                      <option value="">المنطقة</option>
                      <option value="nasr-city">مدينة نصر</option>
                      <option value="heliopolis">مصر الجديدة</option>
                      <option value="zamalek">الزمالك</option>
                    </select>
                  </div>
                  <div className="border border-[#f3f3f3] border-solid flex gap-2 sm:gap-3 md:gap-4 lg:gap-[24px] items-center justify-end p-0 rounded-bl-[12px] rounded-br-[12px] sm:rounded-bl-none sm:rounded-tl-none lg:rounded-br-[12px] lg:rounded-tr-[12px] relative flex-1">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px] pointer-events-none">
                      <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroArrowDown : img1} />
                    </div>
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[32px] lg:h-[32px] flex items-center justify-center flex-shrink-0 mr-2 sm:mr-3 md:mr-4 lg:mr-[16px] pointer-events-none">
                      <Image alt="Location icon" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroLocation : img4} />
                    </div>
                    <select
                      className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#828282] text-xs sm:text-sm md:text-base lg:text-[20px] text-end w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent appearance-none cursor-pointer"
                      dir="rtl"
                    >
                      <option value="">المحافظة</option>
                      <option value="cairo">القاهرة</option>
                      <option value="giza">الجيزة</option>
                      <option value="alexandria">الإسكندرية</option>
                    </select>
                  </div>
                </div>
                <a className="bg-[#0a4875] cursor-pointer flex gap-2 sm:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-center px-4 sm:px-5 md:px-6 lg:px-[10px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full sm:w-auto sm:flex-shrink-0 lg:w-[179px] sm:order-1">
                  <p className="font-cairo font-bold leading-tight sm:leading-normal md:leading-[26px] lg:leading-normal text-base sm:text-lg md:text-xl lg:text-[24px] text-end text-white">
                    بحث
                  </p>
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[32px] lg:h-[32px]">
                    <Image
                      alt="Search icon"
                      className="block w-full h-full object-contain"
                      src={isLawyer ? imgLawyerHeroSearch : img}
                    />
                  </div>
                </a>
              </div>
            )}

            {/* Request Tab Content - For both Clients and Lawyers */}
            {activeTab === 'request' && (
              <>
                {/* Request Type Selection */}
                {!requestType && (
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-[40px] items-stretch sm:items-center justify-center w-full">
                    <button
                      onClick={() => handleRequestTypeSelect('attendance')}
                      className={`${requestType === 'attendance' || (!requestType && isLawyer) ? 'bg-[#e8f4fd] border-[#0a4875]' : 'bg-[#f9f9f9] border-[#f3f3f3]'} border border-solid flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-[80px] py-6 sm:py-8 md:py-12 lg:py-[64px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full sm:w-auto sm:flex-1 cursor-pointer hover:opacity-80 transition-opacity`}
                    >
                      <p className={`font-cairo font-semibold leading-tight sm:leading-normal md:leading-[36px] lg:leading-[38px] text-base sm:text-lg md:text-xl lg:text-[24px] text-end ${requestType === 'attendance' || (!requestType && isLawyer) ? 'text-[#0a4875]' : 'text-[#828282]'}`}>
                        طلب حضور
                      </p>
                    </button>
                    <button
                      onClick={() => handleRequestTypeSelect(isLawyer ? 'proxy' : 'consultation')}
                      className={`${requestType === (isLawyer ? 'proxy' : 'consultation') || (!requestType && !isLawyer) ? 'bg-[#e8f4fd] border-[#0a4875]' : 'bg-[#f9f9f9] border-[#f3f3f3]'} border border-solid flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-[80px] py-6 sm:py-8 md:py-12 lg:py-[64px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full sm:w-auto sm:flex-1 cursor-pointer hover:opacity-80 transition-opacity`}
                    >
                      <p className={`font-cairo font-semibold leading-tight sm:leading-normal md:leading-[36px] lg:leading-[38px] text-base sm:text-lg md:text-xl lg:text-[24px] text-end ${requestType === (isLawyer ? 'proxy' : 'consultation') || (!requestType && !isLawyer) ? 'text-[#0a4875]' : 'text-[#828282]'}`}>
                        {isLawyer ? 'طلب انابة' : 'طلب استشارة'}
                      </p>
                    </button>
                  </div>
                )}

                {/* Multi-Step Form */}
                {requestType && (
                  <>
                    {/* Progress Indicator */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-[16px] items-center justify-start w-full max-w-[1154px] overflow-x-auto pb-2">
                        {/* Step 1 */}
                        <div className="flex flex-col items-start leading-[0] text-base sm:text-lg md:text-[19px] lg:text-[20px] text-start">
                        <div className="flex flex-col font-cairo font-bold justify-center relative text-[#a3a3a3]">
                          <p className="leading-tight sm:leading-normal md:leading-[1.4] lg:leading-[1.5]">01</p>
                        </div>
                        <div className="flex flex-col font-cairo font-semibold justify-center relative text-[#0a4875]">
                          <p className="leading-tight sm:leading-normal md:leading-[1.4] lg:leading-[1.5] text-xs sm:text-sm md:text-base lg:text-[18px] break-words">البيانات الأساسية</p>
                        </div>
                      </div>
                       {/* Step 2 */}
                       <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-[12px] items-end">
                        <div className="flex items-center justify-center relative w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px] flex-shrink-0">
                          <div className="flex-none rotate-[270deg] scale-y-[-100%]">
                            <div className="relative w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px]">
                              <Image alt="Arrow" className="block w-full h-full object-contain" src={img5} />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start leading-[0] text-base sm:text-lg md:text-[19px] lg:text-[20px] text-right">
                          <div className={`flex flex-col font-cairo font-bold justify-center relative ${currentStep === 2 ? 'text-[#0a4875]' : 'text-[#a3a3a3]'}`}>
                            <p className="leading-tight sm:leading-normal md:leading-[1.4] lg:leading-[1.5]">02</p>
                          </div>
                          <div className={`flex flex-col font-cairo font-semibold justify-center relative ${currentStep === 2 ? 'text-[#0a4875]' : currentStep > 2 ? 'text-[#0a4875]' : 'text-[#a3a3a3]'}`}>
                            <p className="leading-tight sm:leading-normal md:leading-[1.4] lg:leading-[1.5] text-xs sm:text-sm md:text-base lg:text-[18px] break-words">التخصص والموقع</p>
                          </div>
                        </div>
                      </div>
                      {/* Step 3 */}
                      <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-[12px] items-end">
                        <div className="flex items-center justify-center relative w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px] flex-shrink-0">
                          <div className="flex-none rotate-[270deg] scale-y-[-100%]">
                            <div className="relative w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px]">
                              <Image alt="Arrow" className="block w-full h-full object-contain" src={img5} />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start leading-[0] text-base sm:text-lg md:text-[19px] lg:text-[20px] text-right">
                          <div className={`flex flex-col font-cairo font-bold justify-center relative ${currentStep === 3 ? 'text-[#0a4875]' : 'text-[#a3a3a3]'}`}>
                            <p className="leading-tight sm:leading-normal md:leading-[1.4] lg:leading-[1.5]">03</p>
                          </div>
                          <div className={`flex flex-col font-cairo font-semibold justify-center relative ${currentStep === 3 ? 'text-[#0a4875]' : 'text-[#a3a3a3]'}`}>
                            <p className="leading-tight sm:leading-normal md:leading-[1.4] lg:leading-[1.5] text-xs sm:text-sm md:text-base lg:text-[18px] break-words">الميزانية والمرفقات</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[40px] items-stretch sm:items-end justify-end w-full max-w-[1154px]">
                      {/* Step 1: Basic Data */}
                      {currentStep === 1 && (
                        <div className="flex flex-1 flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[10px] items-end justify-center w-full">
                          <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-[10px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-sm sm:text-base md:text-lg lg:text-[20px] text-end">
                              عنوان الطلب
                            </p>
                            <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px]">
                              <div className="opacity-0 relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px]">
                                <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img1} />
                              </div>
                              <input
                                type="text"
                                value={formData.requestTitle}
                                onChange={(e) => handleInputChange('requestTitle', e.target.value)}
                                placeholder={requestType === 'attendance' ? 'مثل: "حضور جلسة طلاق للزوجة"' : (requestType === 'consultation' ? 'مثل: "استشارة في عقد بيع عقار"' : (isLawyer && requestType === 'proxy' ? 'مثل: "انابة في قضية تجارية"' : 'مثل: "استشارة في عقد بيع عقار"'))}
                                className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#828282] text-xs sm:text-sm md:text-base lg:text-[20px] text-start w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent"
                                dir="rtl"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-[10px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-sm sm:text-base md:text-lg lg:text-[20px] text-end">
                              وصف مفصل
                            </p>
                            <div className="border border-[#f3f3f3] border-solid flex items-start justify-between p-0 rounded-[12px] w-full relative">
                              <div className="opacity-0 relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px] mt-2.5 sm:mt-3 md:mt-4 lg:mt-[20px]">
                                <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img1} />
                              </div>
                              <textarea
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                placeholder="شرح مفصل للمشكلة"
                                className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#828282] text-xs sm:text-sm md:text-base lg:text-[20px] text-start w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent resize-none h-20 sm:h-24 md:h-28 lg:h-[128px]"
                                dir="rtl"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Specialization and Location */}
                      {currentStep === 2 && (
                        <div className="flex flex-1 flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[10px] items-end justify-center w-full">
                          {/* Specialization field - Only for attendance requests, not for consultation */}
                          {(isLawyer || (!isLawyer && requestType === 'attendance')) && (
                            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-[8px] items-start justify-center w-full">
                              <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-sm sm:text-base md:text-lg lg:text-[20px] text-end">
                                التخصص القانوني المطلوب
                              </p>
                              <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px]">
                                <select
                                  value={formData.specialization}
                                  onChange={(e) => handleInputChange('specialization', e.target.value)}
                                  className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-xs sm:text-sm md:text-base lg:text-[20px] text-start w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent appearance-none cursor-pointer"
                                  style={{ color: formData.specialization ? '#1c1c1c' : '#828282' }}
                                  dir="rtl"
                                >
                                  <option value="" disabled>أحوال شخصية</option>
                                  <option value="criminal">قضايا جنايات</option>
                                  <option value="misdemeanor">قضايا جنح</option>
                                  <option value="real-estate">قضايا عقارية</option>
                                  <option value="company">قضايا تأسيس شركات</option>
                                  <option value="personal">أحوال شخصية</option>
                                </select>
                                <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px] pointer-events-none">
                                  <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroArrowDown : img1} />
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-[8px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-sm sm:text-base md:text-lg lg:text-[20px] text-end">
                              المحافظة
                            </p>
                            <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px]">
                              <select
                                value={formData.governorate}
                                onChange={(e) => handleInputChange('governorate', e.target.value)}
                                className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-xs sm:text-sm md:text-base lg:text-[20px] text-start w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent appearance-none cursor-pointer"
                                style={{ color: formData.governorate ? '#1c1c1c' : '#828282' }}
                                dir="rtl"
                              >
                                <option value="" disabled>القاهرة</option>
                                <option value="cairo">القاهرة</option>
                                <option value="giza">الجيزة</option>
                                <option value="alexandria">الإسكندرية</option>
                              </select>
                              <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px] pointer-events-none">
                                <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroArrowDown : img1} />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-[8px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-sm sm:text-base md:text-lg lg:text-[20px] text-end">
                              المنطقة
                            </p>
                            <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px]">
                              <select
                                value={formData.region}
                                onChange={(e) => handleInputChange('region', e.target.value)}
                                className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-xs sm:text-sm md:text-base lg:text-[20px] text-start w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent appearance-none cursor-pointer"
                                style={{ color: formData.region ? '#1c1c1c' : '#828282' }}
                                dir="rtl"
                              >
                                <option value="" disabled>القاهرة</option>
                                <option value="nasr-city">مدينة نصر</option>
                                <option value="heliopolis">مصر الجديدة</option>
                                <option value="zamalek">الزمالك</option>
                              </select>
                              <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px] pointer-events-none">
                                <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroArrowDown : img1} />
                              </div>
                            </div>
                          </div>
                          {/* Lawyer-specific: Location field for proxy requests */}
                          {isLawyer && requestType === 'proxy' && (
                            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-[8px] items-start justify-center w-full">
                              <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-sm sm:text-base md:text-lg lg:text-[20px] text-end">
                                الموقع
                              </p>
                              <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px]">
                                <div className="opacity-0 relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px]">
                                  <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={imgLawyerHeroArrowDown} />
                                </div>
                                <input
                                  type="text"
                                  value={formData.location || ''}
                                  onChange={(e) => handleInputChange('location', e.target.value)}
                                  placeholder="اسم المحكمة / المصلحة الحكومية / قسم الشرطة"
                                  className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#828282] text-xs sm:text-sm md:text-base lg:text-[20px] text-start w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent"
                                  dir="rtl"
                                />
                              </div>
                            </div>
                          )}
                          {/* Date and Time fields - Only for attendance requests */}
                          {requestType === 'attendance' && (
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 md:gap-3 lg:gap-[10px] items-stretch sm:items-start w-full">
                              <div className="flex flex-1 flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-[8px] items-start justify-center">
                                <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-sm sm:text-base md:text-lg lg:text-[20px] text-end">
                                  التاريخ
                                </p>
                              <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px]">
                                <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px] pointer-events-none">
                                  <Image alt="Calendar icon" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroElements1 : imgElements1} />
                                </div>
                                <label className="w-full relative cursor-pointer">
                                  <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => handleInputChange('date', e.target.value)}
                                    className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-xs sm:text-sm md:text-base lg:text-[20px] text-start w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent cursor-pointer"
                                    style={{ color: formData.date ? '#1c1c1c' : 'transparent' }}
                                    dir="rtl"
                                  />
                                  {!formData.date && (
                                    <span className="absolute right-2.5 sm:right-3 md:right-4 lg:right-[20px] top-1/2 -translate-y-1/2 pointer-events-none font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#828282] text-xs sm:text-sm md:text-base lg:text-[20px]">
                                      اختر التاريخ
                                    </span>
                                  )}
                                </label>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-[8px] items-end justify-center">
                              <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-sm sm:text-base md:text-lg lg:text-[20px] text-end">
                                الوقت
                              </p>
                              <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px]">
                                <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px] pointer-events-none">
                                  <Image alt="Clock icon" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroElements2 : imgElements2} />
                                </div>
                                <label className="w-full relative cursor-pointer">
                                  <input
                                    type="time"
                                    value={formData.time}
                                    onChange={(e) => handleInputChange('time', e.target.value)}
                                    className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-xs sm:text-sm md:text-base lg:text-[20px] text-end w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent cursor-pointer"
                                    style={{ color: formData.time ? '#1c1c1c' : 'transparent' }}
                                    dir="rtl"
                                  />
                                  {!formData.time && (
                                    <span className="absolute right-2.5 sm:right-3 md:right-4 lg:right-[20px] top-1/2 -translate-y-1/2 pointer-events-none font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#828282] text-xs sm:text-sm md:text-base lg:text-[20px]">
                                      اختر الوقت
                                    </span>
                                  )}
                                </label>
                              </div>
                            </div>
                          </div>
                          )}
                        </div>
                      )}

                      {/* Step 3: Budget and Attachments */}
                      {currentStep === 3 && (
                        <div className="flex flex-1 flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[10px] items-end justify-center w-full">
                          <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-[8px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-sm sm:text-base md:text-lg lg:text-[20px] text-end">
                              ميزانيتك
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5 md:gap-3 lg:gap-[8px] items-stretch sm:items-start w-full">
                              <div className="border border-[#f3f3f3] border-solid flex flex-1 items-center justify-between p-0 rounded-[12px] relative min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px]">
                                <div className="opacity-0 relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px]">
                                  <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroArrowDown : img1} />
                                </div>
                                <input
                                  type="number"
                                  value={formData.budgetTo}
                                  onChange={(e) => handleInputChange('budgetTo', e.target.value)}
                                  placeholder="الى"
                                  className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#828282] text-xs sm:text-sm md:text-base lg:text-[20px] text-start w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent"
                                  dir="rtl"
                                />
                              </div>
                              <div className="border border-[#f3f3f3] border-solid flex flex-1 items-center justify-between p-0 rounded-[12px] relative min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px]">
                                <div className="opacity-0 relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px]">
                                  <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroArrowDown : img1} />
                                </div>
                                <input
                                  type="number"
                                  value={formData.budgetFrom}
                                  onChange={(e) => handleInputChange('budgetFrom', e.target.value)}
                                  placeholder="من"
                                  className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#828282] text-xs sm:text-sm md:text-base lg:text-[20px] text-start w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] border-0 outline-0 bg-transparent"
                                  dir="rtl"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-[8px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-sm sm:text-base md:text-lg lg:text-[20px] text-end">
                              مستندات اضافية
                            </p>
                            <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px]">
                              <label className="font-cairo font-normal leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#828282] text-xs sm:text-sm md:text-base lg:text-[20px] text-end w-full p-2.5 sm:p-3 md:p-4 lg:p-[20px] cursor-pointer relative">
                                <input
                                  type="file"
                                  onChange={handleFileChange}
                                  className="absolute text-start inset-0 w-full h-full opacity-0 cursor-pointer"
                                  dir="rtl"
                                  multiple
                                />
                                <span className={`${formData.documents ? 'text-[#1c1c1c]' : 'text-[#828282]'} text-start break-words`}>
                                  {formData.documents ? formData.documents.name : 'قم بارفاق المستندات اذا وجدت'}
                                </span>
                              </label>
                              <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-2 sm:ml-3 md:ml-4 lg:ml-[20px] pointer-events-none">
                                <Image alt="Upload icon" className="block w-full h-full object-contain" src={isLawyer ? imgLawyerHeroElements : imgElements} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Next/Send Button */}
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-[#0a4875] cursor-pointer flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[78px] items-center justify-center px-4 sm:px-5 md:px-6 lg:px-[20px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full sm:w-auto sm:flex-shrink-0 lg:w-[179px] hover:opacity-90 transition-opacity"
                      >
                        <p className="font-cairo font-bold leading-tight sm:leading-normal md:leading-[26px] lg:leading-normal text-base sm:text-lg md:text-xl lg:text-[24px] text-end text-white">
                          {currentStep === 3 ? 'ارسال' : 'التالي'}
                        </p>
                      </button>
                    </div>

                  
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default HeroSection;
