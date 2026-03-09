import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  img,
  img1,
  img2,
  img4,
  img5,
  img6,
  img9,
  imgGroup3,
  imgHeaderNotification,
  imgHeaderProfile,
  imgLawyerProfilePicture,
  imgLawyerVerify,
  imgLawyerLocation,
  imgLawyerArrowRight,
  imgLawyerArrowLeft,
  imgLawyerLogo,
  imgLawyerVideoThumbnail,
  imgLawyerPlayButton,
  imgLawyerStarRating,
  imgLawyerReviewProfile,
  imgLawyerFacebook,
  imgLawyerStarInput,
  imgLawyerEye,
  imgLawyerArrowDownOutline,
  imgCloseSquare
} from '../constants/images';
import Image from '../components/Image';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LawyerProfile() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [consultationNote, setConsultationNote] = useState('');
  const [expectedPrice, setExpectedPrice] = useState('');
  const [isSubmittingConsultation, setIsSubmittingConsultation] = useState(false);
  const [consultationSent, setConsultationSent] = useState(false);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHoverRating(value);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!rating || !comment.trim()) {
      alert('يرجى إدخال التقييم والتعليق');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('تم إرسال التقييم بنجاح');
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Review submission error:', error);
      alert('حدث خطأ أثناء إرسال التقييم');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenConsultationModal = () => {
    setShowConsultationModal(true);
  };

  const handleCloseConsultationModal = () => {
    setShowConsultationModal(false);
    setConsultationNote('');
    setExpectedPrice('');
  };

  const handleSubmitConsultation = async (e) => {
    e.preventDefault();
    if (!consultationNote.trim()) {
      alert('يرجى إدخال نبذة عن الاستشارة');
      return;
    }

    setIsSubmittingConsultation(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Close consultation modal and show success modal
      setShowConsultationModal(false);
      setShowSuccessModal(true);
      setConsultationNote('');
      setExpectedPrice('');
      setConsultationSent(true); // Mark consultation as sent
    } catch (error) {
      console.error('Consultation submission error:', error);
      alert('حدث خطأ أثناء إرسال طلب الاستشارة');
    } finally {
      setIsSubmittingConsultation(false);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleNoteChange = (e) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setConsultationNote(value);
    }
  };

  const reviews = [
    {
      id: 1,
      name: 'ليلى حمدي',
      date: '12 نوفمبر 2025',
      rating: 5,
      text: 'كنت بحاجة لاستشارة عاجلة بخصوص تأسيس شركة. استخدمت \'توّكل\' ووجدت محامياً متخصصاً في قانون الشركات. سرعة الاستجابة وجودة الاستشارة كانت فوق التوقعات. أوصي بها بشدة لكل من يبحث عن محامٍ'
    },
    {
      id: 2,
      name: 'أحمد محمد',
      date: '12 نوفمبر 2025',
      rating: 5,
      text: 'كنت أواجه صعوبة كبيرة في العثور على محامٍ متخصص في قضايا الأحوال الشخصية. منصة \'توّكل\' سهلت عليّ المهمة بشكل لا يصدق. وجدت المحامي المناسب في وقت قياسي وتلقيت الدعم القانوني الذي كنت أحتاجه تماماً. شكراً لكم!'
    }
  ];

  const specializations = ['تجاري', 'مدني', 'أحوال شخصية'];
  const legalSpecializations = ['النزاعات المالية والمدنية', 'الاستشارات الأسرية', 'صياغة العقود التجارية'];

  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-start max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[80px] py-8 sm:py-10 md:py-12 lg:py-[40px]">
        {/* Breadcrumb Section */}
        <div className="bg-white flex flex-col items-center justify-center overflow-clip p-2 sm:p-3 md:p-4 lg:p-[10px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-end justify-center w-full">
            {/* Title and Back Button */}
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center w-full">
              <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-lg sm:text-xl md:text-2xl lg:text-[26px] text-right flex-1">
                <p className="leading-tight sm:leading-normal md:leading-[38px] lg:leading-[42px] whitespace-pre-wrap">ملف المحامي</p>
              </div>
              <button
                onClick={() => navigate(-1)}
                className="border border-[#d9d9d9] border-solid cursor-pointer flex items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[42px] lg:h-[42px] hover:opacity-80 transition-opacity flex-shrink-0"
              >
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px]">
                  <Image
                    alt="Back arrow"
                    className="block max-w-none w-full h-full object-contain"
                    src={imgLawyerArrowRight}
                  />
                </div>
              </button>
            </div>
            {/* Breadcrumb Navigation */}
            <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] h-auto sm:h-10 md:h-12 lg:h-[48px] items-center justify-start px-3 sm:px-4 md:px-5 lg:px-[20px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full flex-wrap">
              <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#828282] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                <p className="leading-normal">الرئيسيه</p>
              </div>
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px] flex-shrink-0">
                <Image
                  alt="Arrow left"
                  className="block max-w-none w-full h-full object-contain"
                  src={imgLawyerArrowLeft}
                />
              </div>
              
              <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#2e2e2e] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                <p className="leading-normal">ملف المحامي</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Profile Section */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-center justify-center overflow-clip px-0 sm:px-0 md:px-0 lg:px-[80px] py-0 w-full">
          {/* Profile Card */}
          <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col items-end p-4 sm:p-6 md:p-8 lg:p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full max-w-[1280px]">
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-end w-full">
              {/* Profile Header */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] items-center justify-center w-full">
                {/* Profile Picture with Verification */}
                <div className="relative">
                  <div className="bg-white border-[#0a4875] border-3 sm:border-4 md:border-5 lg:border-[6px] border-solid flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-center justify-center p-3 sm:p-4 md:p-5 lg:p-[16px] rounded-[200px] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-[160px] lg:h-[160px]">
                    <div className="aspect-square relative rounded-[600px] w-full overflow-hidden">
                      <div className="absolute inset-0 pointer-events-none rounded-[600px]">
                        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[600px] to-[rgba(0,0,0,0.2)]"></div>
                      </div>
                      <Image
                        alt="Lawyer profile"
                        className="absolute max-w-none object-cover rounded-[600px] w-full h-full"
                        src={imgLawyerProfilePicture}
                      />
                    </div>
                  </div>
                  {/* Verification Badge */}
                  <div className="absolute bg-white bottom-[-3px] sm:bottom-[-4px] md:bottom-[-5px] lg:bottom-[-6px] right-[-3px] sm:right-[-4px] md:right-[-5px] lg:right-[-6px] rounded-[600px] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[48px] lg:h-[48px] z-10">
                    <div className="relative w-full h-full">
                      <Image
                        alt="Verified"
                        className="block max-w-none w-full h-full object-contain"
                        src={imgLawyerVerify}
                      />
                    </div>
                  </div>
                </div>
                {/* Name and Title */}
                <div className="flex flex-col items-end w-full lg:w-[438px] max-w-full">
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

              {/* Action Buttons and Info */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between w-full flex-wrap gap-4">
               {/* Specialization Tags */}
               <div className="flex gap-[8px] items-start">
                  {specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-[#e8f4fd] flex flex-col items-center px-[14px] py-[10px] rounded-[10px]"
                    >
                      <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#0a4875] text-[16px] text-right whitespace-nowrap">
                        <p className="leading-[22px]">{spec}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Location */}
                <div className="flex items-start justify-end">
                  <div className="flex gap-[8px] items-center justify-end">
                    <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-[18px] text-right whitespace-nowrap">
                      <p className="leading-normal">مدينة نصر، محافظة القاهرة</p>
                    </div>
                    <div className="overflow-clip relative w-[24px] h-[24px] flex-shrink-0">
                      <Image
                        alt="Location"
                        className="block max-w-none w-full h-full object-contain"
                        src={imgLawyerLocation}
                      />
                    </div>
                  </div>
                </div>

                
                 {/* Request Consultation Button / Contact Button */}
                 {consultationSent ? (
                   <Link 
                     to="/messages"
                     className="bg-[#0a4875] cursor-pointer flex gap-[10px] h-[60px] items-center justify-center p-[10px] rounded-[10px] w-[268px] hover:opacity-90 transition-opacity"
                   >
                    <p className="font-cairo font-bold leading-normal text-[18px] text-right text-white">
                      تواصل
                    </p>
                  </Link>
                 ) : (
                   <button 
                     onClick={handleOpenConsultationModal}
                     className="bg-[#0a4875] cursor-pointer flex gap-[10px] h-[60px] items-center justify-center p-[10px] rounded-[10px] w-[268px] hover:opacity-90 transition-opacity"
                   >
                    <p className="font-cairo font-bold leading-normal text-[18px] text-right text-white">
                      طلب استشارة
                    </p>
                  </button>
                 )}
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="flex gap-[40px] items-start w-full max-w-[1280px] flex-wrap lg:flex-nowrap">
            

            {/* Right Column */}
            <div className="flex flex-1 flex-col gap-[24px] items-start min-w-0">
              {/* About Me Section */}
              <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col items-end px-[40px] py-[20px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
                <div className="flex flex-col items-end w-full">
                  <div className="flex flex-col gap-[8px] items-end w-full">
                    <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap w-full">
                      <p className="leading-normal">نبذة تعريفية</p>
                    </div>
                    <div className="flex flex-col font-cairo font-semibold justify-center min-w-full text-[#1c1c1c] text-[16px] text-right w-full">
                      <p className="leading-[22px] whitespace-pre-wrap">
                        مستشار قانوني تابع لشركة اسيسيور للمحاماة والاستشارات القانونية بخبرة تزيد عن 12 عامًا في تقديم الاستشارات القانونية للأفراد والشركات، متخصص في العقود التجارية، القضايا العمالية، وصياغة الاتفاقيات باحترافية عالية. قدم مئات الجلسات الناجحة وساعد العديد من العملاء في تحقيق أفضل النتائج القانونية .قديم الاستشارات القانونية للأفراد والشركات، متخصص في العقود التجارية، القضايا العمالية، وصياغة الاتفاقيات باحترافية عالية.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Qualifications Section */}
              <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col items-end px-[40px] py-[20px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
                <div className="flex flex-col items-end w-full">
                  <div className="flex flex-col gap-[8px] items-end w-full">
                    <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap w-full">
                      <p className="leading-normal">المؤهلات العلمية</p>
                    </div>
                    <div className="flex flex-col font-cairo font-semibold justify-center min-w-full text-[#1c1c1c] text-[16px] text-right w-full">
                      <ul className="list-none space-y-2 pr-6">
                        <li className="leading-[22px] relative before:content-['•'] before:absolute before:-right-4 before:text-[#1c1c1c]">
                          لسانس حقوق – جامعة القاهرة
                        </li>
                        <li className="leading-[22px] relative before:content-['•'] before:absolute before:-right-4 before:text-[#1c1c1c]">
                          دبلومة في القانون التجاري – جامعة عين شمس
                        </li>
                        <li className="leading-[22px] relative before:content-['•'] before:absolute before:-right-4 before:text-[#1c1c1c]">
                          دورة اعتماد مستشار قانوني – نقابة المحامين المصرية
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Specializations Section */}
              <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col items-end p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
                <div className="flex flex-col items-end w-full">
                  <div className="flex flex-col gap-[8px] items-end w-full">
                    <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap w-full">
                      <p className="leading-normal">التخصصات القانونية</p>
                    </div>
                    <div className="flex gap-[8px] items-start flex-wrap">
                      {legalSpecializations.map((spec, index) => (
                        <div
                          key={index}
                          className="bg-[#e8f4fd] flex flex-col items-center px-[14px] py-[10px] rounded-[10px]"
                        >
                          <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#0a4875] text-[16px] text-right whitespace-nowrap">
                            <p className="leading-[22px]">{spec}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Previous Experiences Section */}
              <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col items-end p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
                <div className="flex flex-col items-end w-full">
                  <div className="flex flex-col gap-[8px] items-end w-full">
                    <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap w-full">
                      <p className="leading-normal">الخبرات السابقة</p>
                    </div>
                    <div className="flex flex-col font-cairo font-semibold justify-center min-w-full text-[#1c1c1c] text-[16px] text-right w-full">
                      <ul className="list-none space-y-2 pr-6">
                        <li className="leading-[22px] relative before:content-['•'] before:absolute before:-right-4 before:text-[#1c1c1c]">
                          مستشار قانوني لدى شركة XYZ للتجارة الدولية (2018 - 2024)
                        </li>
                        <li className="leading-[22px] relative before:content-['•'] before:absolute before:-right-4 before:text-[#1c1c1c]">
                          محامي متعاون مع مكتب العدالة القانونية (2014 - 2018)
                        </li>
                        <li className="leading-[22px] relative before:content-['•'] before:absolute before:-right-4 before:text-[#1c1c1c]">
                          محامي حر متخصص في القضايا المدنية والأحوال الشخصية (2011 - 2014)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificates and Courses Section */}
              <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col items-end p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
                <div className="flex flex-col items-end w-full">
                  <div className="flex flex-col gap-[8px] items-end w-full">
                    <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap w-full">
                      <p className="leading-normal">الشهادات والدورات</p>
                    </div>
                    <div className="flex flex-col font-cairo font-semibold justify-center min-w-full text-[#1c1c1c] text-[16px] text-right w-full">
                      <ul className="list-none space-y-2 pr-6">
                        <li className="leading-[22px] relative before:content-['•'] before:absolute before:-right-4 before:text-[#1c1c1c]">
                          شهادة المحكم التجاري المعتمد
                        </li>
                        <li className="leading-[22px] relative before:content-['•'] before:absolute before:-right-4 before:text-[#1c1c1c]">
                          دورة التحكيم الدولي – المركز العربي للتحكيم
                        </li>
                        <li className="leading-[22px] relative before:content-['•'] before:absolute before:-right-4 before:text-[#1c1c1c]">
                          ورشة مهارات التفاوض وصياغة العقود – نقابة المحامين
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col gap-[16px] items-end p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
                <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap w-full">
                  <p className="leading-normal">التقيمات</p>
                </div>
                <div className="flex flex-col gap-[20px] items-center justify-center w-full">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white flex flex-col gap-[10px] items-start p-[14px] rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] w-full"
                    >
                      <div className="flex gap-[20px] items-center justify-start w-full">
                      <div className="border-2 border-[#2b2b2b] border-solid flex items-center justify-center p-[4px] rounded-[300px] w-[68px] h-[68px] flex-shrink-0">
                          <div className="aspect-square relative rounded-[300px] w-full overflow-hidden">
                            <Image
                              alt="Reviewer profile"
                              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[300px] w-full h-full"
                              src={imgLawyerReviewProfile}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[4px] items-start">
                          <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-[18px] text-right w-[102px]">
                            <p className="leading-normal whitespace-pre-wrap">{review.name}</p>
                          </div>
                          <div className="h-[16px] relative w-[96px]">
                            <Image
                              alt="Star rating"
                              className="block max-w-none w-[20px] h-full object-contain"
                              src={img9}
                            />
                          </div>
                          <div className="flex flex-col font-cairo font-normal h-[14px] justify-center leading-[0] text-[#656565] text-[12px] text-right w-[79px]">
                            <p className="leading-[22px] whitespace-pre-wrap">{review.date}</p>
                          </div>
                        </div>
                        
                      </div>
                      <div className="flex flex-col font-cairo font-medium justify-center min-w-full text-[#656565] text-[14px] text-right w-full">
                        <p className="leading-[22px] whitespace-pre-wrap">{review.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Review Section */}
              <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col gap-[16px] items-start p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
                <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap w-full">
                  <p className="leading-normal">اضافة تقييم</p>
                </div>
                {/* Star Rating Input */}
                <div className="h-[40px] relative w-[188px]">
                  <div className="flex gap-[4px] items-center justify-end h-full">
                    {[1].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleStarHover(star)}
                        onMouseLeave={handleStarLeave}
                        className="relative w-[150px] h-[32px] flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
                      >
                        <Image
                          alt={`Star ${star}`}
                          className="block max-w-none w-full h-full object-contain"
                          src={imgLawyerStarInput}
                          style={{
                            opacity: star <= (hoverRating || rating) ? 1 : 0.3
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                {/* Comment Input */}
                <form onSubmit={handleSubmitReview} className="flex flex-col gap-[8px] items-end justify-center w-full">
                  <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap w-full">
                    <p className="leading-normal">تعليقك</p>
                  </div>
                  <div className="bg-white border border-[#d9d9d9] border-solid flex h-[102px] items-start justify-between px-[14px] py-[10px] rounded-[10px] w-full relative">
                    <div className="flex items-center opacity-0 relative pointer-events-none">
                      <div className="relative w-[24px] h-[24px]">
                        <Image
                          alt="Arrow down"
                          className="block max-w-none w-full h-full object-contain"
                          src={imgLawyerArrowDownOutline}
                        />
                      </div>
                      <div className="relative w-[24px] h-[24px]">
                        <Image
                          alt="Eye"
                          className="block max-w-none w-full h-full object-contain"
                          src={imgLawyerEye}
                        />
                      </div>
                    </div>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="التعليق"
                      className="flex-1 h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px] resize-none"
                      style={{ color: comment ? '#1c1c1c' : '#c3c3c3' }}
                      dir="rtl"
                      required
                    />
                  </div>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !rating || !comment.trim()}
                    className="bg-[#0a4875] flex gap-[10px] h-[60px] items-center justify-center p-[10px] rounded-[10px] w-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <p className="font-cairo font-bold leading-normal text-[18px] text-right text-white">
                      {isSubmitting ? 'جاري الإرسال...' : 'ارسال'}
                    </p>
                  </button>
                </form>
              </div>
            </div>
            {/* Left Column */}
            <div className="flex flex-col gap-[40px] items-start justify-center w-full lg:w-[428px]">
              {/* Experience and Rating Card */}
              <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col gap-[16px] items-end px-[40px] py-[20px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
                <div className="flex gap-[8px] items-center justify-start w-full">
                  <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
                    <p className="leading-normal">عدد سنوات الخبرة</p>
                  </div>
                  <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
                    <p className="leading-[22px]">+12 سنة</p>
                  </div>
                </div>
                <div className="flex gap-[8px] items-center justify-start w-full">
                <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
                    <p className="leading-normal">التقييم العام</p>
                  </div>
                  <div className="flex gap-[4px] items-center">
                    {[1].map((star) => (
                      <div key={star} className="relative w-[70px] h-[16px] flex-shrink-0">
                        <Image
                          alt="Star"
                          className="block max-w-none w-full h-full object-contain"
                          src={imgLawyerStarRating}
                        />
                      </div>
                    ))}
                    <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
                      <p className="leading-[22px]">4.5</p>
                    </div>
                  </div>
                  
                </div>
                <div className="flex gap-[8px] items-center justify-start w-full">
                <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
                    <p className="leading-normal">الموقع</p>
                  </div>
                  <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#0a4875] text-[16px] text-right whitespace-nowrap">
                    <p className="leading-[22px]">محافظة، مدينة، منطقة</p>
                  </div>
                  
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col gap-[16px] items-start px-[40px] py-[20px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
                <div className="flex gap-[8px] items-center justify-start w-full">
                <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
                    <p className="leading-normal">البريد الإلكتروني</p>
                  </div>
                  <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
                    <p className="leading-[22px]">mail@example.com</p>
                  </div>
                 
                </div>
                <div className="flex gap-[8px] items-center justify-start w-full">
                <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap">
                    <p className="leading-normal">رقم الهاتف</p>
                  </div>
                  <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
                    <p className="leading-[22px]">+2000000</p>
                  </div>
                  
                </div>
                <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap w-full">
                  <p className="leading-normal">مواقع التواصل الاجتماعي</p>
                </div>
                <div className="flex gap-[16px] items-center justify-start">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="relative w-[40px] h-[40px] flex-shrink-0">
                      <Image
                        alt="Social media"
                        className="block max-w-none w-full h-full object-contain"
                        src={imgLawyerFacebook}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CV Download Card */}
              <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col gap-[16px] items-end px-[40px] py-[20px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
                <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap w-full">
                  <p className="leading-normal">السيرة الذاتية</p>
                </div>
                <button className="bg-[#0a4875] flex gap-[10px] h-[60px] items-center justify-center p-[10px] rounded-[10px] w-full hover:opacity-90 transition-opacity cursor-pointer">
                  <p className="font-cairo font-bold leading-normal text-[18px] text-right text-white">
                    تحميل السيرة الذاتية
                  </p>
                </button>
              </div>

              {/* Video Card */}
              <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col gap-[16px] items-end p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
                <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#626262] text-[20px] text-right whitespace-nowrap w-full">
                  <p className="leading-normal">فيديو تعريفي</p>
                </div>
                <div className="flex flex-col h-[414px] items-end p-[10px] rounded-[10px] w-full relative overflow-hidden cursor-pointer group">
                  <div className="absolute inset-0 pointer-events-none rounded-[10px]">
                    <Image
                      alt="Video thumbnail"
                      className="absolute max-w-none object-cover rounded-[10px] w-full h-full"
                      src={imgLawyerVideoThumbnail}
                    />
                    <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[10px] to-black"></div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[30px] w-[40px] h-[40px] z-10 group-hover:scale-110 transition-transform">
                    <Image
                      alt="Play button"
                      className="block max-w-none w-full h-full object-contain"
                      src={imgLawyerPlayButton}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Request Modal */}
      {showConsultationModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
          onClick={handleCloseConsultationModal}
        >
          <div 
            className="bg-white border border-[#f3f3f3] border-solid flex flex-col gap-[40px] items-end p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full max-w-[908px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmitConsultation} className="flex flex-col gap-[40px] items-end w-full">
              {/* Consultation Note Section */}
              <div className="flex flex-col items-end w-full max-w-[828px]">
                <div className="flex flex-col gap-[8px] items-end justify-center w-full">
                  <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap w-full">
                    <p className="leading-normal">نبذة عن الاستشارة</p>
                  </div>
                  <div className="bg-white border border-[#d9d9d9] border-solid flex flex-col h-[107px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full relative">
                    <textarea
                      value={consultationNote}
                      onChange={handleNoteChange}
                      placeholder="نبذة عن الاستشارة"
                      className="w-full flex-1 px-0 py-0 border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px] resize-none placeholder:text-[#c3c3c3]"
                      style={{ color: consultationNote ? '#1c1c1c' : '#c3c3c3' }}
                      dir="rtl"
                      maxLength={500}
                      required
                    />
                    <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[14px] w-full self-start">
                      <p className="leading-[22px] whitespace-pre-wrap">
                        {consultationNote.length}/500
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expected Price Section */}
              <div className="flex flex-col items-end w-full max-w-[828px]">
                <div className="flex flex-col gap-[8px] items-end justify-center w-full">
                  <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap w-full">
                    <p className="leading-normal">السعر المتوقع</p>
                  </div>
                  <div className="bg-white border border-[#d9d9d9] border-solid flex flex-col items-center px-[14px] py-[10px] rounded-[10px] w-full">
                    <input
                      type="text"
                      value={expectedPrice}
                      onChange={(e) => setExpectedPrice(e.target.value)}
                      placeholder="300 ج.م"
                      className="w-full border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px] placeholder:text-[#c3c3c3]"
                      style={{ color: expectedPrice ? '#1c1c1c' : '#c3c3c3' }}
                      dir="rtl"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-[20px] items-center justify-end w-full">
                <button
                  type="submit"
                  disabled={isSubmittingConsultation || !consultationNote.trim()}
                  className="bg-[#0a4875] cursor-pointer flex gap-[10px] h-[60px] items-center justify-center p-[10px] rounded-[10px] w-[268px] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <p className="font-cairo font-bold leading-normal text-[18px] text-right text-white">
                    {isSubmittingConsultation ? 'جاري الإرسال...' : 'ارسال'}
                  </p>
                </button>
                <button
                  type="button"
                  onClick={handleCloseConsultationModal}
                  className="bg-[#e8e8e8] flex gap-[10px] h-[60px] items-center justify-center p-[10px] rounded-[10px] w-[95px] hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <p className="font-cairo font-bold leading-normal text-[#1c1c1c] text-[18px] text-right">
                    إلغاء
                  </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
          onClick={handleCloseSuccessModal}
        >
          <div 
            className="bg-white flex flex-col gap-[24px] items-center justify-center p-[24px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full max-w-[527px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Content Wrapper */}
            <div className="flex flex-col gap-[24px] items-start w-full">
              {/* Close Button */}
              <div className="flex items-center justify-start w-full">
                <button
                  type="button"
                  onClick={handleCloseSuccessModal}
                  className="bg-white cursor-pointer flex items-center justify-center p-0 rounded-[8px] w-[24px] h-[24px] hover:opacity-80 transition-opacity"
                >
                  <div className="relative w-full h-full">
                    <Image
                      alt="Close"
                      className="block max-w-none w-full h-full object-contain"
                      src={imgCloseSquare}
                    />
                  </div>
                </button>
              </div>

              {/* Success Message */}
              <div className="flex flex-col gap-[10px] items-center justify-center w-full">
                <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-[22px] text-right whitespace-nowrap w-full">
                  <p className="leading-[1.5] text-center">تم ارسال طلبك بنجاح</p>
                </div>
                <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#4c4c4c] text-[16px] text-center w-full max-w-[475px]">
                  <p className="leading-normal whitespace-pre-wrap">
                    تم ارسال طلبك بنجاح، سنقوم بالرد في اقرب وقت
                  </p>
                </div>
              </div>
            </div>

            {/* OK Button */}
            <button
              type="button"
              onClick={handleCloseSuccessModal}
              className="bg-[#0a4875] cursor-pointer flex gap-[10px] h-[60px] items-center justify-center p-[10px] rounded-[10px] w-full hover:opacity-90 transition-opacity"
            >
              <p className="font-cairo font-bold leading-normal text-[18px] text-right text-white">
                موافق
              </p>
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LawyerProfile;
