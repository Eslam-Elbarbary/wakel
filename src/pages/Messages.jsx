import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  imgMessageLawyerProfile,
  imgMessageArrowRight,
  imgMessageArrowLeft,
  imgMessageSend,
  imgMessageMicrophone,
  imgMessageAttachment,
  imgMessageVideo
} from '../constants/images';
import Image from '../components/Image';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Messages() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const messages = [
    { id: 1, sender: 'lawyer', text: 'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.', time: '12:00 AM' },
    { id: 2, sender: 'user', text: 'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.', time: '12:00 AM' },
    { id: 3, sender: 'lawyer', text: 'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.', time: '12:00 AM' },
    { id: 4, sender: 'user', text: 'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.', time: '12:00 AM' },
    { id: 5, sender: 'lawyer', text: 'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.', time: '12:00 AM' },
    { id: 6, sender: 'user', text: 'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.', time: '12:00 AM' },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Handle message sending logic here
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-center max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[80px] py-8 sm:py-10 md:py-12 lg:py-[40px]">
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
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px]">
                  <Image
                    alt="Back arrow"
                    className="block max-w-none w-full h-full object-contain"
                    src={imgMessageArrowRight}
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
                  src={imgMessageArrowLeft}
                />
              </div>
              <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#2e2e2e] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                <p className="leading-normal">تواصل</p>
              </div>

              <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px] flex-shrink-0">
                <Image
                  alt="Arrow left"
                  className="block max-w-none w-full h-full object-contain"
                  src={imgMessageArrowLeft}
                />
              </div>

              <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#828282] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                <p className="leading-normal">ملف المحامي</p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex items-start text-start justify-start w-full max-w-[1280px]">
          <div className="bg-white border border-[#f3f3f3] border-solid flex flex-1 flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-start p-4 sm:p-6 md:p-8 lg:p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] w-full">
            {/* Lawyer Info Header */}
            <div className="flex flex-col text-start items-start w-full">
              <div className="flex   w-full items-start ">
                <div className="opacity-0 relative w-[24px] h-[24px] flex-shrink-0 pointer-events-none">
                  <Image
                    alt="Video"
                    className="block max-w-none w-full h-full object-contain"
                    src={imgMessageVideo}
                  />
                </div>
                <div className="flex gap-[21px] items-center justify-start">
                  <div className="relative w-[60px] h-[60px] flex-shrink-0">
                    <Image
                      alt="Lawyer profile"
                      className="block max-w-none w-full h-full object-contain rounded-full"
                      src={imgMessageLawyerProfile}
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] items-start">
                    <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
                      <p className="leading-normal">أ. محمد محمود</p>
                    </div>
                    <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#1c1c1c] text-[12px] text-right whitespace-nowrap">
                      <p className="leading-normal">مستشار قانوني معتمد | السبت, 21 يونيو الساعه 04:15 م</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Messages List */}
            <div className="flex flex-col gap-[8px] items-center w-full flex-1 overflow-y-auto">
              {/* Date Separator */}
              <div className="flex flex-col font-cairo font-normal justify-center leading-[0] text-[#1c1c1c] text-[12px] text-center whitespace-nowrap w-full">
                <p className="leading-normal">السبت, 21 يونيو</p>
              </div>

              {/* Messages */}
              {messages.map((msg, index) => (
                <div
                  key={msg.id}
                  className={`flex flex-col gap-[4px] ${msg.sender === 'user' ? 'items-end' : 'items-start'} justify-center w-full`}
                >
                  <div
                    className={`flex items-center justify-center p-[10px] max-w-[385px] ${msg.sender === 'user'
                      ? 'bg-[#e8f4fd] rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px]'
                      : 'bg-[#e8e8e8] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px]'
                      }`}
                  >
                    <p className="font-cairo font-medium leading-normal text-[#1c1c1c] text-[14px] text-right whitespace-pre-wrap">
                      {msg.text}
                    </p>
                  </div>
                  <p className={`font-cairo font-normal leading-normal text-[#828282] text-[12px] ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.time}
                  </p>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="bg-white border border-[#e8e8e8] border-solid flex flex-col h-[48px] items-center justify-center px-[12px] py-[8px] rounded-[6px] w-full">
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
                    type="submit"
                    className="cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <div className="relative w-[26px] h-[24px] flex-shrink-0 rotate-180 scale-y-[-1]">
                      <Image
                        alt="Send"
                        className="block max-w-none w-full h-full object-contain"
                        src={imgMessageSend}
                      />
                    </div>
                  </button>

                  <button
                    type="button"
                    className="cursor-pointer overflow-clip relative w-[20px] h-[20px] flex-shrink-0 hover:opacity-80 transition-opacity"
                  >
                    <Image
                      alt="Attachment"
                      className="block max-w-none w-full h-full object-contain"
                      src={imgMessageAttachment}
                    />
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer relative w-[20px] h-[20px] flex-shrink-0 hover:opacity-80 transition-opacity"
                  >
                    <Image
                      alt="Microphone"
                      className="block max-w-none w-full h-full object-contain"
                      src={imgMessageMicrophone}
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Messages;
