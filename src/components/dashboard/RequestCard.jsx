import React from 'react';
import { useNavigate } from 'react-router-dom';
import { imgDashboardRequestProfile } from '../../constants/images';

function RequestCard({ request, onViewDetails }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    // Prevent navigation if clicking the button (button has its own handler)
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
      return;
    }
    
    navigateToDetails();
  };

  const navigateToDetails = () => {
    // Navigate to request details page with request data
    const requestId = request.id || Date.now(); // Use timestamp as fallback ID
    navigate(`/request-details/${requestId}`, {
      state: {
        ...request,
        id: requestId,
        title: 'حضور جلسة طلاق للزوجة',
        description: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص.',
        specialization: 'أحوال شخصية',
        region: 'القاهرة',
        governorate: 'القاهرة',
        time: '12 مساءاً',
        courtName: 'محكمة القاهرة',
        budget: '400 - 600 ج.م',
        hasDocuments: true
      }
    });
    
    // Also call onViewDetails if provided
    if (onViewDetails) {
      onViewDetails(request);
    }
  };

  return (
    <div className="bg-white flex flex-col w-full gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-center justify-center p-3 sm:p-4 md:p-5 lg:p-[12px] rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] cursor-pointer" onClick={handleClick}>
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[12px] items-start w-full">
        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-start justify-end w-full flex-wrap">
          <div className="relative rounded-[10px] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[80px] lg:h-[80px] flex-shrink-0">
            <img alt="Client" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] w-full h-full" src={imgDashboardRequestProfile} />
          </div>
          <div className="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-start min-w-0">
            <div className="flex items-center justify-start w-full">
              <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-base sm:text-lg md:text-xl lg:text-[20px] text-right">
                <p className="leading-tight sm:leading-normal md:leading-[34px] lg:leading-[38px] break-words">{request.clientName || 'اسم العميل'}</p>
              </div>
            </div>
            <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#4c4c4c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right w-full">
              <p className="leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] whitespace-pre-wrap">{request.type || 'انابة'}</p>
            </div>
          </div>
          <div className={`border border-solid flex items-center justify-center px-3 sm:px-4 md:px-5 lg:px-[12px] py-1 sm:py-1.5 md:py-2 lg:py-[4px] rounded-[8px] flex-shrink-0 ${
            request.status === 'عميل' 
              ? 'bg-[#fdf7e8] border-[#d28100]' 
              : 'bg-[#e8f4fd] border-[#0a4875]'
          }`}>
            <p className={`font-cairo font-semibold leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px] text-xs sm:text-sm md:text-[13px] lg:text-[14px] text-right ${
              request.status === 'عميل' ? 'text-[#d28100]' : 'text-[#0a4875]'
            }`}>
              {request.status || 'محامي'}
            </p>
          </div>
        </div>
        <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#4c4c4c] text-sm sm:text-base md:text-[15px] lg:text-[16px] w-full">
          <p className="leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] whitespace-pre-wrap">{request.date || '12 أغسطس 2025'}</p>
        </div>
      </div>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          navigateToDetails();
        }}
        className="bg-[#0a4875] flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[52px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[8px] w-full hover:opacity-90 transition-opacity"
      >
        <p className="font-cairo font-bold leading-normal text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right text-white">
          عرض التفاصيل
        </p>
      </button>
    </div>
  );
}

export default RequestCard;
