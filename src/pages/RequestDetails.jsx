import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from '../components/Image';
import {
  imgDashboardRequestProfile,
  imgRequestDetailsArrowRight,
  imgRequestDetailsArrowLeft,
  imgRequestDetailsPdf,
  imgRequestDetailsCloseSquare
} from '../constants/images';

function RequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get request data from location state or use defaults
  const requestData = location.state || {
    id: id || 1,
    clientName: 'اسم العميل',
    type: 'حضور', // 'حضور', 'استشارة', 'انابة'
    status: 'عميل', // 'عميل' or 'محامي'
    date: '12 أغسطس 2025',
    profile: imgDashboardRequestProfile,
    title: 'حضور جلسة طلاق للزوجة',
    description: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص.',
    specialization: 'أحوال شخصية',
    region: 'القاهرة',
    governorate: 'القاهرة',
    time: '12 مساءاً',
    courtName: 'محكمة القاهرة', // Only for 'انابة' type
    budget: '400 - 600 ج.م',
    hasDocuments: true
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const isClient = requestData.status === 'عميل';
  const isLawyer = requestData.status === 'محامي';
  const isAttendance = requestData.type === 'حضور';
  const isConsultation = requestData.type === 'استشارة';
  const isDelegation = requestData.type === 'انابة';

  const handleBack = () => {
    navigate('/available-requests');
  };

  const handleReject = () => {
    // Handle reject action
    console.log('Request rejected');
  };

  const handleSendRequest = () => {
    // Show success modal
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const handleModalOk = () => {
    setShowSuccessModal(false);
    // Optionally navigate back to available requests
    navigate('/available-requests');
  };

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto pt-4 sm:pt-6 md:pt-8 lg:pt-0 pb-4 sm:pb-6 md:pb-8 lg:pb-0 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-center w-full">
          {/* Breadcrumb Card */}
          <div className="bg-white flex flex-col items-center justify-center overflow-clip p-2 sm:p-3 md:p-4 lg:p-[10px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full max-w-[1280px] mt-4 sm:mt-5 md:mt-6 lg:mt-[20px]">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-end justify-center w-full">
              <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center w-full">
                <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-lg sm:text-xl md:text-2xl lg:text-[26px] text-right flex-1">
                  <p className="leading-tight sm:leading-normal md:leading-[38px] lg:leading-[42px] whitespace-pre-wrap">تفاصيل الطلب</p>
                </div>
                <button
                  onClick={handleBack}
                  className="border border-[#d9d9d9] border-solid cursor-pointer flex items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[42px] lg:h-[42px] hover:opacity-80 transition-opacity flex-shrink-0"
                >
                  <div className="overflow-clip relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px]">
                    <div className="absolute flex inset-[29.17%_16.67%] items-center justify-center">
                      <div className="flex-none h-[16px] rotate-[90deg] scale-y-[-100%] w-[10px]">
                        <div className="relative w-full h-full">
                          <div className="absolute inset-[-4.69%_-7.5%_-3.39%_-7.5%]">
                            <Image alt="Back" className="block w-full h-full object-contain" src={imgRequestDetailsArrowRight} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] h-auto sm:h-10 md:h-12 lg:h-[48px] items-center justify-start px-3 sm:px-4 md:px-5 lg:px-[20px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full">
                <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#828282] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                  <p className="leading-normal">الطلبات المتاحة</p>
                </div>
                
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px]">
                  <div className="absolute contents inset-0">
                    <Image alt="Arrow left" className="block w-full h-full object-contain" src={imgRequestDetailsArrowLeft} />
                  </div>
                </div>
                <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#2e2e2e] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                  <p className="leading-normal">تفاصيل الطلب</p>
                </div>
              </div>
            </div>
          </div>

          {/* Request Details Card */}
          <div className="flex items-start justify-end w-full max-w-[1280px] mb-6 sm:mb-8 md:mb-10 lg:mb-[40px]">
            <div className="bg-white border border-[#f3f3f3] border-solid flex flex-[1_0_0] flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-end min-h-px min-w-px p-4 sm:p-6 md:p-8 lg:p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
              <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-start w-full">
                {/* Request Header Card */}
                <div className="bg-white flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-center justify-center p-3 sm:p-4 md:p-5 lg:p-[12px] rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] w-full">
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[12px] items-start w-full">
                    <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-start justify-end w-full flex-wrap">
                       {/* Profile Picture */}
                       <div className="relative rounded-[10px] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[80px] lg:h-[80px] flex-shrink-0">
                        <img
                          alt="Profile"
                          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] w-full h-full"
                          src={requestData.profile || imgDashboardRequestProfile}
                        />
                      </div>
                      
                      
                      {/* Name and Type */}
                      <div className="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-start min-w-0">
                        <div className="flex items-center justify-start w-full">
                          <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-base sm:text-lg md:text-xl lg:text-[20px] text-right">
                            <p className="leading-tight sm:leading-normal md:leading-[34px] lg:leading-[38px] break-words">{requestData.clientName}</p>
                          </div>
                        </div>
                        <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#4c4c4c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right w-full">
                          <p className="leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] whitespace-pre-wrap">طلب {requestData.type}</p>
                        </div>
                      </div>
                      {/* Status Badge */}
                      <div className={`border border-solid flex items-center justify-center px-3 sm:px-4 md:px-5 lg:px-[16px] py-1 sm:py-1.5 md:py-2 lg:py-[4px] rounded-[8px] flex-shrink-0 ${
                        isClient 
                          ? 'bg-[#fdf7e8] border-[#d28100]' 
                          : 'bg-[#e8f4fd] border-[#0a4875]'
                      }`}>
                        <p className={`font-cairo font-semibold leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px] text-sm sm:text-base md:text-[16px] lg:text-[18px] text-right ${
                          isClient ? 'text-[#be5900]' : 'text-[#0a4875]'
                        }`}>
                          {requestData.status}
                        </p>
                      </div>
                     
                    </div>
                    <div className="flex flex-col font-cairo font-semibold justify-center items-end leading-[0] text-[#4c4c4c] text-[16px] w-full">
                      <p className="leading-[28px] whitespace-pre-wrap">{requestData.date}</p>
                    </div>
                  </div>
                </div>

                {/* Request Details Form */}
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-start w-full">
                  {/* Request Title */}
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-start w-full">
                    <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right whitespace-nowrap">
                      <p className="leading-normal">عنوان الطلب</p>
                    </div>
                    <div className="bg-white border border-[#d9d9d9] border-solid flex flex-col items-center px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full">
                      <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#4c4c4c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right w-full">
                        <p className="leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px] whitespace-pre-wrap">{requestData.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Request Description */}
                  <div className="flex flex-col gap-[8px] items-start w-full">
                    <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
                      <p className="leading-normal">نبذة عن الطلب</p>
                    </div>
                    <div className="bg-white border border-[#d9d9d9] border-solid flex flex-col items-center px-[14px] py-[10px] rounded-[10px] w-full">
                      <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#4c4c4c] text-[16px] text-right w-full">
                        <p className="leading-[22px] whitespace-pre-wrap">{requestData.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Legal Specialization */}
                  <div className="flex flex-col gap-[8px] h-[80px] items-start w-full">
                    <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
                      <p className="leading-normal">التخصص القانوني المطلوب</p>
                    </div>
                    <div className="bg-white border border-[#d9d9d9] border-solid flex flex-col items-center px-[14px] py-[10px] rounded-[10px] w-full">
                      <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#4c4c4c] text-[16px] text-right w-full">
                        <p className="leading-[22px] whitespace-pre-wrap">{requestData.specialization}</p>
                      </div>
                    </div>
                  </div>

                  {/* Region and Governorate */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-start w-full">
                    <div className="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] min-h-[60px] sm:min-h-[70px] md:min-h-[75px] lg:h-[80px] items-start w-full">
                      <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-start whitespace-nowrap">
                        <p className="leading-normal">المنطقة</p>
                      </div>
                      <div className="bg-white border border-[#d9d9d9] border-solid flex flex-col items-center px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full">
                        <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#4c4c4c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right w-full">
                          <p className="leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px] whitespace-pre-wrap">{requestData.region}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] min-h-[60px] sm:min-h-[70px] md:min-h-[75px] lg:h-[80px] items-start w-full">
                      <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right whitespace-nowrap">
                        <p className="leading-normal">المحافظة</p>
                      </div>
                      <div className="bg-white border border-[#d9d9d9] border-solid flex flex-col items-center px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full">
                        <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#4c4c4c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-start w-full">
                          <p className="leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px] whitespace-pre-wrap">{requestData.governorate}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Court Name (Only for Delegation) */}
                  {isDelegation && (
                    <div className="flex flex-col gap-[8px] h-[80px] items-start w-full">
                      <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
                        <p className="leading-normal">اسم المحكمة</p>
                      </div>
                      <div className="bg-white border border-[#d9d9d9] border-solid flex flex-col items-center px-[14px] py-[10px] rounded-[10px] w-full">
                        <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#4c4c4c] text-[16px] text-right w-full">
                          <p className="leading-[22px] whitespace-pre-wrap">{requestData.courtName}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Time and Date (Only for Attendance and Delegation) */}
                  {(isAttendance || isDelegation) && (
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-start w-full">
                      <div className="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-start w-full">
                        <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right whitespace-nowrap">
                          <p className="leading-normal">الوقت</p>
                        </div>
                        <div className="bg-white border border-[#d9d9d9] border-solid flex flex-col items-center px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full">
                          <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#4c4c4c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right w-full">
                            <p className="leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px] whitespace-pre-wrap">{requestData.time}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-start w-full">
                        <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right whitespace-nowrap">
                          <p className="leading-normal">التاريخ</p>
                        </div>
                        <div className="bg-white border border-[#d9d9d9] border-solid flex flex-col items-center px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full">
                          <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#4c4c4c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right w-full">
                            <p className="leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px] whitespace-pre-wrap">{requestData.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Budget */}
                  <div className="flex flex-col gap-[8px] h-[80px] items-start w-full">
                    <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
                      <p className="leading-normal">الميزانية</p>
                    </div>
                    <div className="bg-white border border-[#d9d9d9] border-solid flex flex-col items-center px-[14px] py-[10px] rounded-[10px] w-full">
                      <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#4c4c4c] text-[16px] text-right w-full">
                        <p className="leading-[22px] whitespace-pre-wrap">{requestData.budget}</p>
                      </div>
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="flex flex-col gap-[8px] h-[80px] items-start w-full">
                    <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
                      <p className="leading-normal">المستندات الاضافية</p>
                    </div>
                    {requestData.hasDocuments && (
                      <div className="relative w-[40px] h-[40px]">
                        <Image alt="PDF" className="block w-full h-full object-contain" src={imgRequestDetailsPdf} />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="cursor-pointer flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-[20px] items-stretch sm:items-end w-full">
                <button
                  onClick={handleSendRequest}
                  className="bg-[#0a4875] flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] flex-1 sm:flex-none sm:w-[200px] md:w-[240px] lg:w-[268px] hover:opacity-90 transition-opacity"
                >
                  <p className="font-cairo font-bold leading-normal text-sm sm:text-base md:text-[17px] lg:text-[18px] text-right text-white">ارسال طلب</p>
                </button>
                <button
                  onClick={handleReject}
                  className="bg-[#e8e8e8] flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-full sm:w-[80px] md:w-[90px] lg:w-[95px] hover:opacity-90 transition-opacity"
                >
                  <p className="font-cairo font-bold leading-normal text-sm sm:text-base md:text-[17px] lg:text-[18px] text-right text-[#1c1c1c]">رفض</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white flex flex-col gap-[24px] items-center justify-center p-[24px] rounded-[10px] w-full max-w-[523px] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-[24px] items-start w-full">
              <div className="flex items-center justify-end w-full">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-white flex items-center justify-center rounded-[8px] w-[24px] h-[24px] cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="relative w-[24px] h-[24px]">
                    <Image alt="Close" className="block w-full h-full object-contain" src={imgRequestDetailsCloseSquare} />
                  </div>
                </button>
              </div>
              <div className="flex flex-col gap-[10px] items-center justify-center leading-[0] w-full">
                <div className="flex flex-col font-cairo font-bold justify-center relative text-[#1c1c1c] text-[22px] text-right whitespace-nowrap">
                  <p className="leading-[1.5]">ارسال الطلب</p>
                </div>
                <div className="flex flex-col font-cairo font-medium justify-center relative text-[#4c4c4c] text-[16px] text-center w-full max-w-[475px]">
                  <p className="leading-normal whitespace-pre-wrap">عند قبول الطلب سيتم التواصل معك</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleModalOk}
              className="bg-[#0a4875] cursor-pointer flex gap-[10px] h-[60px] items-center justify-center p-[10px] rounded-[10px] w-full hover:opacity-90 transition-opacity"
            >
              <p className="font-cairo font-bold leading-normal text-[18px] text-right text-white">موافق</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestDetails;
