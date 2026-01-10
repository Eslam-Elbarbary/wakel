import { useState } from 'react';
import { img, img1, img2, img3, img4, img5, imgElements, imgElements1, imgElements2, imgCloseSquare } from '../constants/images';
import Image from './Image';

function HeroSection() {
  const [activeTab, setActiveTab] = useState('search'); // 'search' or 'request'
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
            {/* Tab Navigation */}
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
                  طلب حضور / استشارة
                </p>
              </button>
            </div>

            {/* Search Tab Content */}
            {activeTab === 'search' && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 lg:gap-0 w-full">
                <div className="flex items-center relative rounded-[12px] w-full sm:w-auto">
                  <div className="border border-[#f3f3f3] border-solid flex gap-2 sm:gap-4 lg:gap-[16px] items-center justify-end p-0 rounded-bl-[12px] rounded-tl-[12px] sm:rounded-bl-none sm:rounded-tr-none sm:rounded-br-none sm:rounded-tl-[12px] relative">
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-[32px] lg:h-[32px] flex items-center justify-center flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px]">
                      <Image alt="User icon" className="block w-full h-full object-contain" src={img2} />
                    </div>
                    <input
                      type="text"
                      placeholder="أو اكتب اسم المحامي"
                      className="font-cairo font-normal leading-[28px] text-[#828282] text-xs sm:text-sm lg:text-[20px] text-end w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent placeholder:text-[#828282]"
                      dir="rtl"
                    />
                  </div>
                  <div className="border border-[#f3f3f3] border-solid flex gap-2 sm:gap-4 lg:gap-[24px] items-center justify-end p-0 sm:rounded-none lg:rounded-br-[10px] lg:rounded-tr-[10px] relative">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px] pointer-events-none">
                      <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img1} />
                    </div>
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-[32px] lg:h-[32px] flex items-center justify-center flex-shrink-0 mr-2 sm:mr-4 lg:mr-[16px] pointer-events-none">
                      <Image alt="Specialty icon" className="block w-full h-full object-contain" src={img3} />
                    </div>
                    <select
                      className="font-cairo font-normal leading-[28px] text-[#828282] text-xs sm:text-sm lg:text-[20px] text-end w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent appearance-none cursor-pointer"
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
                  <div className="border border-[#f3f3f3] border-solid flex gap-2 sm:gap-4 lg:gap-[24px] items-center justify-end p-0 sm:rounded-none relative">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px] pointer-events-none">
                      <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img1} />
                    </div>
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-[32px] lg:h-[32px] flex items-center justify-center flex-shrink-0 mr-2 sm:mr-4 lg:mr-[16px] pointer-events-none">
                      <Image alt="Location icon" className="block w-full h-full object-contain" src={img4} />
                    </div>
                    <select
                      className="font-cairo font-normal leading-[28px] text-[#828282] text-xs sm:text-sm lg:text-[20px] text-end w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent appearance-none cursor-pointer"
                      dir="rtl"
                    >
                      <option value="">المنطقة</option>
                      <option value="nasr-city">مدينة نصر</option>
                      <option value="heliopolis">مصر الجديدة</option>
                      <option value="zamalek">الزمالك</option>
                    </select>
                  </div>
                  <div className="border border-[#f3f3f3] border-solid flex gap-2 sm:gap-4 lg:gap-[24px] items-center justify-end p-0 rounded-br-[12px] rounded-tr-[12px] sm:rounded-bl-none sm:rounded-tl-none lg:rounded-br-[12px] lg:rounded-tr-[12px] relative">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px] pointer-events-none">
                      <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img1} />
                    </div>
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-[32px] lg:h-[32px] flex items-center justify-center flex-shrink-0 mr-2 sm:mr-4 lg:mr-[16px] pointer-events-none">
                      <Image alt="Location icon" className="block w-full h-full object-contain" src={img4} />
                    </div>
                    <select
                      className="font-cairo font-normal leading-[28px] text-[#828282] text-xs sm:text-sm lg:text-[20px] text-end w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent appearance-none cursor-pointer"
                      dir="rtl"
                    >
                      <option value="">المحافظة</option>
                      <option value="cairo">القاهرة</option>
                      <option value="giza">الجيزة</option>
                      <option value="alexandria">الإسكندرية</option>
                    </select>
                  </div>
                </div>
                <a className="bg-[#0a4875] cursor-pointer flex gap-2 sm:gap-[10px] h-12 sm:h-14 lg:h-[78px] items-center justify-center px-4 sm:px-5 lg:px-[20px] py-2 sm:py-2.5 lg:py-[10px] rounded-[10px] w-full sm:w-auto lg:w-[179px] sm:order-1">
                  <p className="font-cairo font-bold leading-normal text-base sm:text-lg lg:text-[24px] text-end text-white">
                    بحث
                  </p>
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-[32px] lg:h-[32px]">
                    <Image
                      alt="Search icon"
                      className="block w-full h-full object-contain"
                      src={img}
                    />
                  </div>
                </a>
              </div>
            )}

            {/* Request Tab Content */}
            {activeTab === 'request' && (
              <>
                {/* Request Type Selection */}
                {!requestType && (
                  <div className="flex gap-4 sm:gap-6 lg:gap-[40px] items-center justify-center w-full">
                    <button
                      onClick={() => handleRequestTypeSelect('attendance')}
                      className="bg-[#f9f9f9] border border-[#f3f3f3] border-solid flex items-center justify-center px-8 sm:px-12 lg:px-[80px] py-8 sm:py-12 lg:py-[64px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full sm:w-auto cursor-pointer"
                    >
                      <p className="font-cairo font-semibold leading-[38px] text-[#828282] text-lg sm:text-xl lg:text-[24px] text-end">
                        طلب حضور
                      </p>
                    </button>
                    <button
                      onClick={() => handleRequestTypeSelect('consultation')}
                      className="bg-[#f9f9f9] border border-[#f3f3f3] border-solid flex items-center justify-center px-8 sm:px-12 lg:px-[80px] py-8 sm:py-12 lg:py-[64px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full sm:w-auto cursor-pointer"
                    >
                      <p className="font-cairo font-semibold leading-[38px] text-[#828282] text-lg sm:text-xl lg:text-[24px] text-end">
                        طلب استشارة
                      </p>
                    </button>
                  </div>
                )}

                {/* Multi-Step Form */}
                {requestType && (
                  <>
                    {/* Progress Indicator */}
                    <div className="flex gap-3 sm:gap-4 lg:gap-[16px] items-center justify-start w-full max-w-[1154px]">
                        {/* Step 1 */}
                        <div className="flex flex-col items-start leading-[0] text-[20px] text-start whitespace-nowrap">
                        <div className="flex flex-col font-cairo font-bold justify-center relative text-[#a3a3a3]">
                          <p className="leading-[1.5]">01</p>
                        </div>
                        <div className="flex flex-col font-cairo font-semibold justify-center relative text-[#0a4875]">
                          <p className="leading-[1.5]">البيانات الأساسية</p>
                        </div>
                      </div>
                       {/* Step 2 */}
                       <div className="flex gap-2 sm:gap-3 lg:gap-[12px] items-end">
                        <div className="flex items-center justify-center relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                          <div className="flex-none rotate-[270deg] scale-y-[-100%]">
                            <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                              <Image alt="Arrow" className="block w-full h-full object-contain" src={img5} />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start leading-[0] text-[20px] text-right whitespace-nowrap">
                          <div className={`flex flex-col font-cairo font-bold justify-center relative ${currentStep === 2 ? 'text-[#0a4875]' : 'text-[#a3a3a3]'}`}>
                            <p className="leading-[1.5]">02</p>
                          </div>
                          <div className={`flex flex-col font-cairo font-semibold justify-center relative ${currentStep === 2 ? 'text-[#0a4875]' : currentStep > 2 ? 'text-[#0a4875]' : 'text-[#a3a3a3]'}`}>
                            <p className="leading-[1.5]">التخصص والموقع</p>
                          </div>
                        </div>
                      </div>
                      {/* Step 3 */}
                      <div className="flex gap-2 sm:gap-3 lg:gap-[12px] items-end">
                        <div className="flex items-center justify-center relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                          <div className="flex-none rotate-[270deg] scale-y-[-100%]">
                            <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]">
                              <Image alt="Arrow" className="block w-full h-full object-contain" src={img5} />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start leading-[0] text-[20px] text-right whitespace-nowrap">
                          <div className={`flex flex-col font-cairo font-bold justify-center relative ${currentStep === 3 ? 'text-[#0a4875]' : 'text-[#a3a3a3]'}`}>
                            <p className="leading-[1.5]">03</p>
                          </div>
                          <div className={`flex flex-col font-cairo font-semibold justify-center relative ${currentStep === 3 ? 'text-[#0a4875]' : 'text-[#a3a3a3]'}`}>
                            <p className="leading-[1.5]">الميزانية والمرفقات</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 sm:gap-6 lg:gap-[40px] items-end justify-end w-full max-w-[1154px]">
                      {/* Step 1: Basic Data */}
                      {currentStep === 1 && (
                        <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[10px] items-end justify-center w-full">
                          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-[28px] text-[#1c1c1c] text-sm sm:text-base lg:text-[20px] text-end">
                              عنوان الطلب
                            </p>
                            <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative">
                              <div className="opacity-0 relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px]">
                                <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img1} />
                              </div>
                              <input
                                type="text"
                                value={formData.requestTitle}
                                onChange={(e) => handleInputChange('requestTitle', e.target.value)}
                                placeholder={requestType === 'attendance' ? 'مثل: "حضور جلسة طلاق للزوجة"' : 'مثل: "استشارة في عقد بيع عقار"'}
                                className="font-cairo font-normal leading-[28px] text-[#828282] text-xs sm:text-sm lg:text-[20px] text-start w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent"
                                dir="rtl"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-[28px] text-[#1c1c1c] text-sm sm:text-base lg:text-[20px] text-end">
                              وصف مفصل
                            </p>
                            <div className="border border-[#f3f3f3] border-solid flex items-start justify-between p-0 rounded-[12px] w-full relative">
                              <div className="opacity-0 relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px] mt-3 sm:mt-4 lg:mt-[20px]">
                                <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img1} />
                              </div>
                              <textarea
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                placeholder="شرح مفصل للمشكلة"
                                className="font-cairo font-normal leading-[28px] text-[#828282] text-xs sm:text-sm lg:text-[20px] text-start w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent resize-none h-24 sm:h-32 lg:h-[128px]"
                                dir="rtl"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Specialization and Location */}
                      {currentStep === 2 && (
                        <div className="flex flex-1 flex-col gap-3 sm:gap-4 lg:gap-[10px] items-end justify-center w-full">
                          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[8px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-[28px] text-[#1c1c1c] text-sm sm:text-base lg:text-[20px] text-end">
                              التخصص القانوني المطلوب
                            </p>
                            <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative">
                              
                              <select
                                value={formData.specialization}
                                onChange={(e) => handleInputChange('specialization', e.target.value)}
                                className="font-cairo font-normal leading-[28px] text-xs sm:text-sm lg:text-[20px] text-start w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent appearance-none cursor-pointer"
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
                              <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px] pointer-events-none">
                                <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img1} />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[8px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-[28px] text-[#1c1c1c] text-sm sm:text-base lg:text-[20px] text-end">
                              المحافظة
                            </p>
                            <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative">
                            <select
                                value={formData.governorate}
                                onChange={(e) => handleInputChange('governorate', e.target.value)}
                                className="font-cairo font-normal leading-[28px] text-xs sm:text-sm lg:text-[20px] text-start w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent appearance-none cursor-pointer"
                                style={{ color: formData.governorate ? '#1c1c1c' : '#828282' }}
                                dir="rtl"
                              >
                                <option value="" disabled>القاهرة</option>
                                <option value="cairo">القاهرة</option>
                                <option value="giza">الجيزة</option>
                                <option value="alexandria">الإسكندرية</option>
                              </select>
                              <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px] pointer-events-none">
                                <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img1} />
                              </div>
                              
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[8px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-[28px] text-[#1c1c1c] text-sm sm:text-base lg:text-[20px] text-end">
                              المنطقة
                            </p>
                            <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative">
                            <select
                                value={formData.region}
                                onChange={(e) => handleInputChange('region', e.target.value)}
                                className="font-cairo font-normal leading-[28px] text-xs sm:text-sm lg:text-[20px] text-start w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent appearance-none cursor-pointer"
                                style={{ color: formData.region ? '#1c1c1c' : '#828282' }}
                                dir="rtl"
                              >
                                <option value="" disabled>القاهرة</option>
                                <option value="nasr-city">مدينة نصر</option>
                                <option value="heliopolis">مصر الجديدة</option>
                                <option value="zamalek">الزمالك</option>
                              </select>
                              <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px] pointer-events-none">
                                <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img1} />
                              </div>
                              
                            </div>
                          </div>
                          <div className="flex gap-2 sm:gap-3 lg:gap-[10px] items-start w-full">
                            <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[8px] items-start justify-center">
                              <p className="font-cairo font-normal leading-[28px] text-[#1c1c1c] text-sm sm:text-base lg:text-[20px] text-end">
                                التاريخ
                              </p>
                              <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative">
                                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px] pointer-events-none">
                                  <Image alt="Calendar icon" className="block w-full h-full object-contain" src={imgElements1} />
                                </div>
                                <label className="w-full relative cursor-pointer">
                                  <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => handleInputChange('date', e.target.value)}
                                    className="font-cairo font-normal leading-[28px] text-xs sm:text-sm lg:text-[20px] text-start w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent cursor-pointer"
                                    style={{ color: formData.date ? '#1c1c1c' : 'transparent' }}
                                    dir="rtl"
                                  />
                                  {!formData.date && (
                                    <span className="absolute right-3 sm:right-4 text-end lg:right-[20px] top-1/2 -translate-y-1/2 pointer-events-none font-cairo font-normal leading-[28px] text-[#828282] text-xs sm:text-sm lg:text-[20px]">
                                      اختر التاريخ
                                    </span>
                                  )}
                                </label>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[8px] items-end justify-center">
                              <p className="font-cairo font-normal leading-[28px] text-[#1c1c1c] text-sm sm:text-base lg:text-[20px] text-end">
                                الوقت
                              </p>
                              <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative">
                                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px] pointer-events-none">
                                  <Image alt="Clock icon" className="block w-full h-full object-contain" src={imgElements2} />
                                </div>
                                <label className="w-full relative cursor-pointer">
                                  <input
                                    type="time"
                                    value={formData.time}
                                    onChange={(e) => handleInputChange('time', e.target.value)}
                                    className="font-cairo font-normal leading-[28px] text-xs sm:text-sm lg:text-[20px] text-end w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent cursor-pointer"
                                    style={{ color: formData.time ? '#1c1c1c' : 'transparent' }}
                                    dir="rtl"
                                  />
                                  {!formData.time && (
                                    <span className="absolute right-3 sm:right-4 lg:right-[20px] top-1/2 -translate-y-1/2 pointer-events-none font-cairo font-normal leading-[28px] text-[#828282] text-xs sm:text-sm lg:text-[20px]">
                                      اختر الوقت
                                    </span>
                                  )}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Budget and Attachments */}
                      {currentStep === 3 && (
                        <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[10px] items-end justify-center w-full">
                          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[8px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-[28px] text-[#1c1c1c] text-sm sm:text-base lg:text-[20px] text-end">
                              ميزانيتك
                            </p>
                            <div className="flex gap-2 sm:gap-3 lg:gap-[8px] items-start w-full">
                            <div className="border border-[#f3f3f3] border-solid flex flex-1 items-center justify-between p-0 rounded-[12px] relative">
                                <div className="opacity-0 relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px]">
                                  <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img1} />
                                </div>
                                <input
                                  type="number"
                                  value={formData.budgetFrom}
                                  onChange={(e) => handleInputChange('budgetFrom', e.target.value)}
                                  placeholder="من"
                                  className="font-cairo font-normal leading-[28px] text-[#828282] text-xs sm:text-sm lg:text-[20px] text-start w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent"
                                  dir="rtl"
                                />
                              </div>
                              <div className="border border-[#f3f3f3] border-solid flex flex-1 items-center justify-between p-0 rounded-[12px] relative">
                                <div className="opacity-0 relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px]">
                                  <Image alt="Dropdown arrow" className="block w-full h-full object-contain" src={img1} />
                                </div>
                                <input
                                  type="number"
                                  value={formData.budgetTo}
                                  onChange={(e) => handleInputChange('budgetTo', e.target.value)}
                                  placeholder="الى"
                                  className="font-cairo font-normal leading-[28px] text-[#828282] text-xs sm:text-sm lg:text-[20px] text-start w-full p-3 sm:p-4 lg:p-[20px] border-0 outline-0 bg-transparent"
                                  dir="rtl"
                                />
                              </div>
                             
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[8px] items-start justify-center w-full">
                            <p className="font-cairo font-normal leading-[28px] text-[#1c1c1c] text-sm sm:text-base lg:text-[20px] text-end">
                              مستندات اضافية
                            </p>
                            <div className="border border-[#f3f3f3] border-solid flex items-center justify-between p-0 rounded-[12px] w-full relative">
                              
                              <label className="font-cairo font-normal leading-[28px] text-[#828282] text-xs sm:text-sm lg:text-[20px] text-end w-full p-3 sm:p-4 lg:p-[20px] cursor-pointer relative">
                                <input
                                  type="file"
                                  onChange={handleFileChange}
                                  className="absolute text-start inset-0 w-full h-full opacity-0 cursor-pointer"
                                  dir="rtl"
                                  multiple
                                />
                                <span className={formData.documents ? 'text-[#1c1c1c] text-start ' : 'text-[#828282] text-start'}>
                                  {formData.documents ? formData.documents.name : 'قم بارفاق المستندات اذا وجدت'}
                                </span>
                              </label>
                              <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] flex-shrink-0 ml-3 sm:ml-4 lg:ml-[20px] pointer-events-none">
                                <Image alt="Upload icon" className="block w-full h-full object-contain" src={imgElements} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Next/Send Button */}
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-[#0a4875] cursor-pointer flex gap-2 sm:gap-[10px] h-12 sm:h-14 lg:h-[78px] items-center justify-center px-4 sm:px-5 lg:px-[20px] py-2 sm:py-2.5 lg:py-[10px] rounded-[10px] w-full sm:w-auto lg:w-[179px] hover:opacity-90 transition-opacity"
                      >
                        <p className="font-cairo font-bold leading-normal text-base sm:text-lg lg:text-[24px] text-end text-white">
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
