import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  imgLawyerDetailsLogo,
  imgLawyerDetailsArrowRight,
  imgLawyerDetailsArrowLeft,
  imgLawyerDetailsFooter1,
  imgLawyerDetailsFooter2,
  imgLawyerDetailsFooter3,
  img1
} from '../constants/images';
import Image from '../components/Image';
import Step1PersonalData from '../components/lawyerDetails/Step1PersonalData';
import Step2ProfessionalData from '../components/lawyerDetails/Step2ProfessionalData';
import Step3Documents from '../components/lawyerDetails/Step3Documents';
import Step4AcademicExperience from '../components/lawyerDetails/Step4AcademicExperience';
import Step5Gallery from '../components/lawyerDetails/Step5Gallery';
import ProgressSidebar from '../components/lawyerDetails/ProgressSidebar';
import SuccessModal from '../components/lawyerDetails/SuccessModal';
import SignUpHeader from '../components/SignUpHeader';

function LawyerDetails() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    birthDate: '',
    nationalId: '',
    nationality: '',
    primaryPhone: '',
    additionalPhone: '',
    email: '',
    // Step 2
    registrationDate: '',
    registrationNumber: '',
    specializations: '',
    registrationDegree: '',
    registeredAddress: '',
    taxNumber: '',
    officeAddress: '',
    region: '',
    // Step 3
    taxCard: null,
    unionCard: null,
    nationalIdImages: [],
    // Step 4
    academicDegree: '',
    universities: '',
    experiences: [],
    yearsOfExperience: '',
    languages: [],
    courses: [],
    // Step 5
    galleryImages: [],
    galleryVideos: []
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleArrayChange = (field, array) => {
    setFormData(prev => ({
      ...prev,
      [field]: array
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Show success modal on final step
      setShowSuccessModal(true);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1PersonalData formData={formData} onInputChange={handleInputChange} errors={{}} />;
      case 2:
        return <Step2ProfessionalData formData={formData} onInputChange={handleInputChange} errors={{}} />;
      case 3:
        return <Step3Documents formData={formData} onFileChange={handleFileChange} errors={{}} />;
      case 4:
        return <Step4AcademicExperience formData={formData} onInputChange={handleInputChange} onArrayChange={handleArrayChange} errors={{}} />;
      case 5:
        return <Step5Gallery formData={formData} onFileChange={handleFileChange} errors={{}} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Success Modal */}
      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}

     {/* Header */}
     <SignUpHeader />

      {/* Main Content */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-start pt-16 sm:pt-20 md:pt-24 lg:pt-[140px] pb-8 sm:pb-10 md:pb-12 lg:pb-[100px] px-4 sm:px-6 md:px-8 lg:px-[80px] w-full max-w-[1440px] mx-auto">
        {/* Breadcrumb */}
        <div className="flex flex-col items-center justify-center overflow-clip w-full">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-end justify-center w-full">
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center w-full">
              <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-right flex-1">
                <p className="leading-tight sm:leading-normal md:leading-[38px] lg:leading-[42px] whitespace-pre-wrap">بيانات المحامي</p>
              </div>
              <button
                onClick={handleBack}
                className="border border-[#d9d9d9] border-solid flex items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[42px] lg:h-[42px] cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
              >
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px]">
                  <Image alt="Arrow right" className="block w-full h-full object-contain" src={imgLawyerDetailsArrowRight} />
                </div>
              </button>
            </div>
            <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] h-auto sm:h-10 md:h-12 lg:h-[48px] items-center justify-start px-3 sm:px-4 md:px-5 lg:px-[20px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full flex-wrap">
            <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#828282] text-[16px] text-center whitespace-nowrap">
                <p className="leading-normal">الرئيسيه</p>
              </div>
             

              <div className="relative w-[20px] h-[20px]">
                <Image alt="Arrow left" className="block w-full h-full object-contain" src={imgLawyerDetailsArrowLeft} />
              </div>
              
              <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#828282] text-[16px] text-center whitespace-nowrap">
                <p className="leading-normal">قوالب المحامين</p>
              </div>

              <div className="relative w-[20px] h-[20px]">
                <Image alt="Arrow left" className="block w-full h-full object-contain" src={imgLawyerDetailsArrowLeft} />
              </div>

              <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#2e2e2e] text-[16px] text-center whitespace-nowrap">
                <p className="leading-normal">بيانات المحامي</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form and Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-start justify-end w-full max-w-[1280px]">
          {/* Progress Sidebar */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <ProgressSidebar currentStep={currentStep} />
          </div>
          {/* Main Form */}
          <div className="bg-white border border-[#f3f3f3] border-solid flex flex-1 flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-end p-4 sm:p-6 md:p-8 lg:p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
            {renderStepContent()}
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-[20px] items-stretch sm:items-end justify-end w-full">
              <button
                onClick={handleCancel}
                className="bg-[#e8e8e8] flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-full sm:w-[80px] md:w-[90px] lg:w-[95px] cursor-pointer hover:opacity-80 transition-opacity"
              >
                <p className="font-cairo font-bold leading-normal text-[#1c1c1c] text-sm sm:text-base md:text-[17px] lg:text-[18px] text-right">
                  إلغاء
                </p>
              </button>
              <button
                onClick={handleNext}
                className="bg-[#0a4875] cursor-pointer flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] flex-1 sm:flex-none sm:w-[200px] md:w-[240px] lg:w-[268px] hover:opacity-90 transition-opacity"
              >
                <p className="font-cairo font-bold leading-normal text-sm sm:text-base md:text-[17px] lg:text-[18px] text-right text-white">
                  {currentStep === 5 ? 'إنشاء الملف' : 'التالي'}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bg-[#0a4875] bottom-0 flex gap-[12px] h-[60px] items-center justify-center left-1/2 -translate-x-1/2 w-full">
        <p className="font-alexandria font-normal leading-normal text-[#e7e7ee] text-[18px] text-center">
          | جميع الحقوق محفوظة
        </p>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative">
          <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[10.58%] mt-[93.51%] relative row-[1]">
            <div className="col-[1] h-[2.595px] ml-0 mt-0 relative row-[1] w-[60.81px]">
              <Image alt="Footer logo part 1" className="block w-full h-full object-contain" src={imgLawyerDetailsFooter1} />
            </div>
          </div>
          <div className="col-[1] h-[19.922px] ml-[22.21%] mt-0 relative row-[1] w-[40.887px]">
            <Image alt="Footer logo part 2" className="block w-full h-full object-contain" src={imgLawyerDetailsFooter2} />
          </div>
          <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-0 mt-[63.18%] relative row-[1]">
            <div className="col-[1] h-[9.827px] ml-0 mt-0 relative row-[1] w-[73.627px]">
              <Image alt="Footer logo part 3" className="block w-full h-full object-contain" src={imgLawyerDetailsFooter3} />
            </div>
          </div>
        </div>
        <p className="font-alexandria font-normal leading-normal text-[#e7e7ee] text-[18px] text-center">
          حقوق الطبع والنشر © 2025
        </p>
      </div>
    </div>
  );
}

export default LawyerDetails;
