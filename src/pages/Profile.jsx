import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  imgProfileHeader,
  imgProfileUser,
  imgProfileEllipse4,
  imgProfileFrame,
  imgProfileNotification,
  imgProfileArrowDown,
  imgProfileArrowDownSmall,
  imgProfileLogo,
  imgProfileArrowRight,
  imgProfileArrowLeft,
  imgProfileVerify,
  imgProfileCall,
  imgProfileSms,
  imgProfileVideo,
  imgProfileSend,
  imgProfileMicrophone,
  imgProfileAttachment,
  imgProfileSearch,
  imgProfileQemaa1,
  imgProfileQemaa2,
  imgProfileQemaa3,
  imgGroup3
} from '../constants/images';
import Image from '../components/Image';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';

function Profile() {
  const navigate = useNavigate();
  const { logout, userData } = useAuth();
  const [message, setMessage] = useState('');

  const messages = [
    { id: 1, sender: 'user', text: 'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ', time: '12:00 AM' },
    { id: 2, sender: 'lawyer', text: 'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى).', time: '12:00 AM' },
    { id: 3, sender: 'user', text: 'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ', time: '12:00 AM' },
    { id: 4, sender: 'lawyer', text: 'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى).', time: '12:00 AM' },
    { id: 5, sender: 'user', text: 'لوريم إيبسوم ويُستخدم في صناعات المطابع ودور النشر.', time: '12:00 AM' },
    { id: 6, sender: 'lawyer', text: 'لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.', time: '12:00 AM' },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    console.log('Sending message:', message);
    setMessage('');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-white relative w-full min-h-screen overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-center max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[80px] py-8 sm:py-10 md:py-12 lg:py-[40px] overflow-hidden">
        {/* Breadcrumb Section */}
        <div className="bg-white flex flex-col items-center justify-center overflow-clip p-2 sm:p-3 md:p-4 lg:p-[10px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-end justify-center w-full">
            {/* Title and Back Button */}
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center justify-center w-full">
              <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-lg sm:text-xl md:text-2xl lg:text-[26px] text-right flex-1">
                <p className="leading-tight sm:leading-normal md:leading-[38px] lg:leading-[42px] whitespace-pre-wrap">ملفي</p>
              </div>
              <button
                onClick={() => navigate(-1)}
                className="border border-[#d9d9d9] border-solid cursor-pointer flex items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[42px] lg:h-[42px] hover:opacity-80 transition-opacity flex-shrink-0"
              >
                <div className="overflow-clip relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px]">
                  <div className="absolute flex inset-[29.17%_16.67%] items-center justify-center">
                    <div className="flex-none h-[16px] rotate-[90deg] scale-y-[-100%] w-[10px]">
                      <div className="relative w-full h-full">
                        <Image
                          alt="Back arrow"
                          className="block max-w-none w-full h-full object-contain"
                          src={imgProfileArrowRight}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            {/* Breadcrumb Navigation */}
            <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] h-auto sm:h-10 md:h-12 lg:h-[48px] items-center justify-start px-3 sm:px-4 md:px-5 lg:px-[20px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full">
              <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#828282] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                <p className="leading-normal">الرئيسيه</p>
              </div>
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px] flex-shrink-0">
                <Image
                  alt="Arrow left"
                  className="block max-w-none w-full h-full object-contain"
                  src={imgProfileArrowLeft}
                />
              </div>
              
              <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#2e2e2e] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                <p className="leading-normal">ملفي</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col items-center p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[24px] items-start justify-between w-full">
           

            {/* Right Section - Messages and Search Sidebar */}
            <div className="flex flex-row gap-[24px] items-start justify-start w-full lg:flex-1">
                {/* Search Sidebar */}
              <div className="bg-white flex flex-col gap-[24px] h-full items-start p-[24px] rounded-[8px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] w-full lg:w-auto lg:flex-shrink-0 min-h-[600px]">
                {/* Search Box */}
                <div className="bg-white border border-[#e6e6e6] border-solid flex flex-col h-[48px] items-center justify-center px-[12px] py-[8px] rounded-[6px] w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="overflow-clip relative w-[24px] h-[24px] flex-shrink-0">
                      <Image
                        alt="Search"
                        className="block max-w-none w-full h-full object-contain"
                        src={imgProfileSearch}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="بحث"
                      className="flex-1 px-2 py-0 border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[12px] text-[#1a1a1a] opacity-50 placeholder:text-[#1a1a1a] placeholder:opacity-50"
                      dir="rtl"
                    />
                  </div>
                </div>

                {/* Contact List */}
                <div className="flex flex-col gap-[16px] items-start w-full">
                  {/* Contact 1 */}
                  <div className="flex gap-[40px] items-center justify-start w-full">
                    
                    <div className="flex gap-[21px] items-center justify-start">
                    <div className="relative w-[60px] h-[60px] flex-shrink-0">
                        <Image
                          alt="Lawyer profile"
                          className="block max-w-none w-full h-full object-contain rounded-full"
                          src={imgProfileEllipse4}
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-end">
                        <p className="font-cairo font-medium text-[#1a1a1a] text-[16px] text-right">أ. محمد محمود</p>
                        <p className="font-cairo font-normal min-w-full text-[#1a1a1a] text-[12px] text-right w-[min-content] whitespace-pre-wrap">الرساله هنا</p>
                      </div>
                     
                    </div>
                    <p className="font-cairo font-normal text-[#666] text-[12px]">12:00 AM</p>
                  </div>

                  {/* Contact 2 */}
                  <div className="flex gap-[40px] items-center justify-start w-full">
                   
                    <div className="flex gap-[21px] items-center justify-end">
                    <div className="relative w-[60px] h-[60px] flex-shrink-0">
                        <Image
                          alt="Lawyer profile"
                          className="block max-w-none w-full h-full object-contain rounded-full"
                          src={imgProfileEllipse4}
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-end">
                        <p className="font-cairo font-medium text-[#1a1a1a] text-[16px] text-right">أ. محمد محمود</p>
                        <p className="font-cairo font-normal min-w-full text-[#1a1a1a] text-[12px] text-right w-[min-content] whitespace-pre-wrap">الرساله هنا</p>
                      </div>
                     
                    </div>
                    <div className="flex flex-col gap-[4px] h-full items-start justify-center">
                      <p className="font-cairo font-normal text-[#666] text-[12px]">12:00 AM</p>
                      <div className="bg-[#008518] flex flex-col items-center justify-center p-[10px] rounded-[12px] w-[24px] h-[24px]">
                        <p className="font-cairo font-normal text-[14px] text-right text-white w-full whitespace-pre-wrap">1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Messages Section */}
              <div className="bg-white flex flex-col h-full items-center justify-between p-[24px] rounded-[8px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] w-full lg:w-[494px] min-h-[600px] flex-shrink-0">
                <div className="flex flex-col items-start w-full flex-shrink-0">
                  <div className="flex items-center w-full">
                    <div className="opacity-0 relative w-[24px] h-[24px] flex-shrink-0 pointer-events-none">
                      <Image
                        alt="Video"
                        className="block max-w-none w-full h-full object-contain"
                        src={imgProfileVideo}
                      />
                    </div>
                    <div className="flex gap-[21px] items-center">
                    <div className="relative w-[60px] h-[60px] flex-shrink-0">
                        <Image
                          alt="Lawyer profile"
                          className="block max-w-none w-full h-full object-contain rounded-full"
                          src={imgProfileEllipse4}
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start">
                        <p className="font-cairo font-medium text-[#1c1c1c] text-[16px] text-right">أ. محمد محمود</p>
                        <p className="font-cairo font-normal text-[#1c1c1c] text-[12px] text-right">مستشار قانوني معتمد | السبت, 21 يونيو الساعه 04:15 م</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start w-full flex-1">
                  <div className="flex flex-col gap-[8px] items-center w-full">
                    <p className="font-cairo font-normal text-[#1c1c1c] text-[12px] text-right">السبت, 21 يونيو</p>
                    {/* Messages */}
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex flex-col gap-[4px] ${msg.sender === 'user' ? 'items-start' : 'items-end'} justify-center w-full`}
                      >
                        <div
                          className={`flex items-center justify-center p-[10px] w-full max-w-[385px] ${
                            msg.sender === 'user'
                              ? 'bg-[#e8f4fd] rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px]'
                              : 'bg-[#e8e8e8] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px]'
                          }`}
                        >
                          <p className="font-cairo font-medium leading-normal text-[#1c1c1c] text-[14px] text-right whitespace-pre-wrap w-full">
                            {msg.text}
                          </p>
                        </div>
                        <p className={`font-cairo font-normal leading-normal text-[#828282] text-[12px] ${msg.sender === 'user' ? 'text-left' : 'text-right'}`}>
                          {msg.time}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Message Input */}
                  <form onSubmit={handleSendMessage} className="bg-white border border-[#e8e8e8] border-solid flex flex-col h-[48px] items-center justify-center px-[12px] py-[8px] rounded-[6px] w-full flex-shrink-0">
                    <div className="flex items-center justify-between w-full">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="اكتب رسالة"
                        className="flex-1 px-4 py-2 border-0 outline-0 bg-transparent text-right font-cairo font-medium text-[12px] text-[#1c1c1c] opacity-50 placeholder:text-[#1c1c1c] placeholder:opacity-50"
                        dir="rtl"
                      />
                      <div className="flex gap-[10px] items-center">
                      <button
                          type="button"
                          className="cursor-pointer overflow-clip relative w-[20px] h-[20px] flex-shrink-0 hover:opacity-80 transition-opacity"
                        >
                          <Image alt="Attachment" className="block max-w-none w-full h-full object-contain" src={imgProfileAttachment} />
                        </button>
                        
                        <button
                          type="button"
                          className="cursor-pointer relative w-[20px] h-[20px] flex-shrink-0 hover:opacity-80 transition-opacity"
                        >
                          <Image alt="Microphone" className="block max-w-none w-full h-full object-contain" src={imgProfileMicrophone} />
                        </button>
                        <button
                          type="submit"
                          className="cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity"
                        >
                          <div className="flex items-center justify-center relative">
                            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                              <div className="relative w-[26px] h-[24px]">
                                <Image alt="Send" className="block max-w-none w-full h-full object-contain" src={imgProfileSend} />
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                      
                    </div>
                  </form>
                </div>
              </div>

              
            </div>
             {/* Left Sidebar - Profile and Notifications */}
             <div className="flex flex-col gap-[20px] items-center w-full lg:w-[308px]">
              {/* User Profile Card */}
              <div className="bg-white flex flex-col gap-[10px] items-center px-[10px] py-[20px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full max-w-[324px]">
                <div className="bg-white border-[#1c1c1c] border-[3px] border-solid flex flex-col gap-[10px] items-center justify-center p-[8px] rounded-[100px] w-[80px] h-[80px] relative">
                  <div className="aspect-square relative rounded-[300px] w-full">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[300px]">
                      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[300px] to-[rgba(0,0,0,0.2)]" />
                      <Image
                        alt="User profile"
                        className="absolute max-w-none object-contain rounded-[300px] w-full h-full"
                        src={imgProfileUser}
                      />
                    </div>
                  </div>
                  <div className="absolute bg-white left-[53px] rounded-[300px] w-[24px] h-[24px] top-[53px]">
                    <Image
                      alt="Verify"
                      className="block max-w-none w-full h-full object-contain"
                      src={imgProfileVerify}
                    />
                  </div>
                </div>
                <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-[18px] text-right whitespace-nowrap">
                  <p className="leading-normal">الأستاذ / حسنين حسونة</p>
                </div>
                <Link
                  to="/edit-profile"
                  className="text-[#0a4875] text-[14px] text-right underline font-cairo font-semibold hover:opacity-80 transition-opacity"
                >
                  تعديل الملف الشخصي
                </Link>
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex gap-[10px] items-center justify-center">
                    <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#626262] text-[14px] text-center whitespace-nowrap">
                      <p className="leading-[28px]">رقم الهاتف</p>
                    </div>
                    <div className="relative w-[20px] h-[20px] flex-shrink-0">
                      <Image
                        alt="Call"
                        className="block max-w-none w-full h-full object-contain"
                        src={imgProfileCall}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-center whitespace-nowrap">
                    <p className="leading-[28px]">+20 01000000000</p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex gap-[10px] items-center justify-center">
                    <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#626262] text-[14px] text-center whitespace-nowrap">
                      <p className="leading-[28px]">البريد الالكتروني</p>
                    </div>
                    <div className="relative w-[20px] h-[20px] flex-shrink-0">
                      <Image
                        alt="SMS"
                        className="block max-w-none w-full h-full object-contain"
                        src={imgProfileSms}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-center whitespace-nowrap">
                    <p className="leading-[28px]">hossinhasonaa30@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex flex-col font-cairo font-bold h-[22px] justify-center leading-[0] text-[#cc1024] text-[14px] text-right w-[77px] hover:opacity-80 transition-opacity"
                >
                  <p className="leading-[28px] underline whitespace-pre-wrap">تسجيل خروج</p>
                </button>
              </div>

              {/* Notifications Card */}
              <div className="bg-white flex flex-col gap-[10px] items-center p-[10px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full max-w-[324px]">
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-center whitespace-nowrap">
                      <p className="leading-[28px]">الاشعارات</p>
                    </div>
                    <div className="bg-[#f3f3f3] flex h-[28px] items-center justify-center px-[8px] py-[4px] rounded-[8px] w-[90px]">
                      <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#4c4c4c] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[28px]">10 إشعار جديد</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="flex flex-col font-cairo font-medium h-[22px] justify-center leading-[0] text-[#626262] text-[14px] text-center w-[190px]">
                    <p className="leading-[28px] whitespace-pre-wrap">يتم عرض جميع الاشعارات الجديده</p>
                  </div>
                </div>
                <div className="border border-[#d9d9d9] border-solid flex flex-col items-start leading-[0] p-[10px] rounded-[10px] w-full">
                  <div className="flex flex-col font-cairo font-bold h-[23px] justify-center text-[#1c1c1c] text-[14px] text-right w-[85px]">
                    <p className="leading-[28px] whitespace-pre-wrap">عنوان الاشعار</p>
                  </div>
                  <div className="flex flex-col font-cairo font-normal justify-center min-w-full text-[#626262] text-[13px] text-right w-[min-content]">
                    <p className="leading-[20px] whitespace-pre-wrap">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص</p>
                  </div>
                  <div className="flex flex-col font-cairo font-medium h-[19px] justify-center text-[#626262] text-[12px] w-full">
                    <p className="leading-[28px] whitespace-pre-wrap">12 نوفمبر 2025</p>
                  </div>
                </div>
                <div className="border border-[#d9d9d9] border-solid flex flex-col items-start leading-[0] p-[10px] rounded-[10px] w-full">
                  <div className="flex flex-col font-cairo font-bold h-[23px] justify-center text-[#1c1c1c] text-[14px] text-right w-[85px]">
                    <p className="leading-[28px] whitespace-pre-wrap">عنوان الاشعار</p>
                  </div>
                  <div className="flex flex-col font-cairo font-normal justify-center min-w-full text-[#626262] text-[13px] text-right w-[min-content]">
                    <p className="leading-[20px] whitespace-pre-wrap">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص</p>
                  </div>
                  <div className="flex flex-col font-cairo font-medium h-[19px] justify-center text-[#626262] text-[12px] w-full">
                    <p className="leading-[28px] whitespace-pre-wrap">12 نوفمبر 2025</p>
                  </div>
                </div>
                <Link
                  to="/notifications"
                  className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#0a4875] text-[14px] text-right whitespace-nowrap hover:opacity-80 transition-opacity"
                >
                  <p className="leading-[28px] underline">عرض جميع الاشعارات</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Copyright Footer */}
      <div className="bg-[#0a4875] flex gap-[12px] h-[60px] items-center justify-center w-full mt-auto">
        <p className="font-alexandria font-normal leading-normal text-[#e7e7ee] text-[18px] text-center">
          | جميع الحقوق محفوظة
        </p>
        <div className="flex gap-[12px] items-center">
          <div className="relative w-[60.81px] h-[2.595px]">
            <Image alt="Qemaa logo 1" className="block max-w-none w-full h-full object-contain" src={imgProfileQemaa1} />
          </div>
          <div className="relative w-[40.887px] h-[19.922px]">
            <Image alt="Qemaa logo 2" className="block max-w-none w-full h-full object-contain" src={imgProfileQemaa2} />
          </div>
          <div className="relative w-[73.627px] h-[9.827px]">
            <Image alt="Qemaa logo 3" className="block max-w-none w-full h-full object-contain" src={imgProfileQemaa3} />
          </div>
        </div>
        <p className="font-alexandria font-normal leading-normal text-[#e7e7ee] text-[18px] text-center">
          حقوق الطبع والنشر © 2025
        </p>
      </div>
    </div>
  );
}

export default Profile;
