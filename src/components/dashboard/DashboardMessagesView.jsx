import React, { useState } from 'react';
import {
  imgDashboardProfilePlaceholder,
  imgDashboardMessageListProfile,
  imgDashboardVideo,
  imgDashboardSend,
  imgDashboardMicrophone,
  imgDashboardAttachment,
  imgDashboardSearch
} from '../../constants/images';
import Image from '../Image';

function DashboardMessagesView() {
  const [message, setMessage] = useState('');

  return (
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] items-start w-full">
      {/* Message List Sidebar - Right side in RTL */}
      <div className="bg-white flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] items-center p-4 sm:p-5 md:p-6 lg:p-[24px] rounded-[8px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] w-full lg:w-[484px] lg:sticky lg:top-4 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
        {/* Search */}
        <div className="bg-white border border-[#e6e6e6] border-solid flex h-[48px] items-center justify-center px-[12px] py-[8px] rounded-[6px] w-full">
          <div className="flex items-center justify-between w-full">
          <input
              type="text"
              placeholder="بحث"
              className="capitalize font-cairo leading-[1.5] opacity-50 text-[#1a1a1a] text-[12px] outline-none border-none bg-transparent text-right"
              dir="rtl"
            />
            <div className="overflow-clip relative w-[24px] h-[24px]">
              <div className="absolute inset-[16.67%]">
                <div className="absolute inset-[-4.69%]">
                  <Image alt="Search" className="block max-w-none w-full h-full" src={imgDashboardSearch} />
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Message List */}
        <div className="flex flex-col gap-[16px] items-start w-full">
          {/* Message Item 1 */}
          <div className="flex items-center justify-between w-full">
            
            <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-[21px] items-center flex-1 min-w-0">
            <div className="flex items-center justify-center flex-shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[60px] lg:h-[60px]">
                  <div className="relative rounded-[80.142px] w-full h-full">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[80.142px]">
                      <div className="absolute bg-[#efefef] inset-0 rounded-[80.142px]"></div>
                      <img alt="Profile" className="absolute max-w-none object-cover rounded-[80.142px] w-full h-full" src={imgDashboardMessageListProfile} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="capitalize flex flex-col font-cairo gap-1 sm:gap-1.5 md:gap-2 lg:gap-[4px] items-start leading-normal text-[#1a1a1a] text-right flex-1 min-w-0">
                <p className="relative text-sm sm:text-base md:text-[15px] lg:text-[16px] break-words">أ. محمد محمود</p>
                <p className="relative text-xs sm:text-[11px] md:text-[11.5px] lg:text-[12px] break-words">
                  الرساله هنا
                </p>
              </div>
              
            </div>
            <p className="capitalize font-cairo leading-normal text-[#666] text-xs sm:text-[11px] md:text-[11.5px] lg:text-[12px] flex-shrink-0">
              12:00 AM
            </p>
          </div>
          {/* Message Item 2 (with unread count) */}
          <div className="flex items-center justify-between w-full">
            
            <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-[21px] items-center flex-1 min-w-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[60px] lg:h-[60px] flex-shrink-0">
                <img alt="Profile" className="block max-w-none w-full h-full" height="60" src={imgDashboardProfilePlaceholder} width="60" />
              </div>
              <div className="capitalize flex flex-col font-cairo gap-1 sm:gap-1.5 md:gap-2 lg:gap-[4px] items-start leading-normal text-[#1a1a1a] text-right flex-1 min-w-0">
                <p className="relative text-sm sm:text-base md:text-[15px] lg:text-[16px] break-words">أ. محمد محمود</p>
                <p className="relative text-xs sm:text-[11px] md:text-[11.5px] lg:text-[12px] break-words">
                  الرساله هنا
                </p>
              </div>
           
            </div>
            <div className="flex flex-row items-center h-full flex-shrink-0">
              <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-[4px] h-full items-start justify-center">
                <p className="capitalize font-cairo leading-normal text-[#666] text-xs sm:text-[11px] md:text-[11.5px] lg:text-[12px]">
                  12:00 AM
                </p>
                <div className="bg-[#008518] flex flex-col items-center justify-center p-1.5 sm:p-2 md:p-2.5 lg:p-[10px] rounded-[12px] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px]">
                  <p className="capitalize font-cairo leading-normal text-xs sm:text-[12px] md:text-[13px] lg:text-[14px] text-right text-white w-full whitespace-pre-wrap">
                    1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Chat Area - Left side in RTL */}
      <div className="bg-white flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] items-center p-4 sm:p-5 md:p-6 lg:p-[24px] rounded-[8px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] w-full lg:w-[690px] flex-1">
        {/* Chat Header */}
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center w-full gap-2 sm:gap-3 md:gap-4">
          <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-[21px] items-center flex-1 min-w-0">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[60px] lg:h-[60px] flex-shrink-0">
                <img alt="Profile" className="block max-w-none w-full h-full" height="60" src={imgDashboardProfilePlaceholder} width="60" />
              </div>
              <div className="capitalize flex flex-col font-cairo gap-1 sm:gap-1.5 md:gap-2 lg:gap-[4px] items-start leading-normal text-[#1c1c1c] text-right flex-1 min-w-0">
                <p className="relative text-sm sm:text-base md:text-[15px] lg:text-[16px] break-words">أ. محمد محمود</p>
                <p className="relative text-xs sm:text-[11px] md:text-[11.5px] lg:text-[12px] break-words">مستشار قانوني معتمد | السبت, 21 يونيو الساعه 04:15 م</p>
              </div>
              
            </div>
            <div className="opacity-0 relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[24px] lg:h-[24px] flex-shrink-0">
              <Image alt="Video" className="block w-full h-full object-contain" src={imgDashboardVideo} />
            </div>
            
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-[8px] items-center w-full">
          <p className="capitalize font-cairo leading-normal text-[#1c1c1c] text-[12px] text-right">
            السبت, 21 يونيو
          </p>
          {/* Outgoing Message */}
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] items-start justify-center w-full">
            <div className="bg-[#e8f4fd] flex items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px] max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-none">
              <p className="capitalize font-cairo leading-normal text-[#1c1c1c] text-xs sm:text-sm md:text-[13px] lg:text-[14px] text-right w-full lg:w-[385px] whitespace-pre-wrap break-words">
                لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
              </p>
            </div>
            <p className="capitalize font-cairo leading-normal text-[#828282] text-xs sm:text-xs md:text-[11px] lg:text-[12px]">
              12:00 AM
            </p>
          </div>
          {/* Incoming Message */}
          <div className="bg-white flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] items-end justify-center w-full">
            <div className="bg-[#e8e8e8] flex items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-none">
              <p className="capitalize font-cairo leading-normal text-[#1c1c1c] text-xs sm:text-sm md:text-[13px] lg:text-[14px] text-right w-full lg:w-[385px] whitespace-pre-wrap break-words">
                لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
              </p>
            </div>
            <p className="capitalize font-cairo leading-normal text-[#828282] text-xs sm:text-xs md:text-[11px] lg:text-[12px]">
              12:00 AM
            </p>
          </div>
          {/* Repeat messages */}
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] items-start justify-center w-full">
            <div className="bg-[#e8f4fd] flex items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px] max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-none">
              <p className="capitalize font-cairo leading-normal text-[#1c1c1c] text-xs sm:text-sm md:text-[13px] lg:text-[14px] text-right w-full lg:w-[385px] whitespace-pre-wrap break-words">
                لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
              </p>
            </div>
            <p className="capitalize font-cairo leading-normal text-[#828282] text-xs sm:text-xs md:text-[11px] lg:text-[12px]">
              12:00 AM
            </p>
          </div>
          <div className="bg-white flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] items-end justify-center w-full">
            <div className="bg-[#e8e8e8] flex items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-none">
              <p className="capitalize font-cairo leading-normal text-[#1c1c1c] text-xs sm:text-sm md:text-[13px] lg:text-[14px] text-right w-full lg:w-[385px] whitespace-pre-wrap break-words">
                لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
              </p>
            </div>
            <p className="capitalize font-cairo leading-normal text-[#828282] text-xs sm:text-xs md:text-[11px] lg:text-[12px]">
              12:00 AM
            </p>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] items-start justify-center w-full">
            <div className="bg-[#e8f4fd] flex items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px] max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-none">
              <p className="capitalize font-cairo leading-normal text-[#1c1c1c] text-xs sm:text-sm md:text-[13px] lg:text-[14px] text-right w-full lg:w-[385px] whitespace-pre-wrap break-words">
                لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
              </p>
            </div>
            <p className="capitalize font-cairo leading-normal text-[#828282] text-xs sm:text-xs md:text-[11px] lg:text-[12px]">
              12:00 AM
            </p>
          </div>
          <div className="bg-white flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] items-end justify-center w-full">
            <div className="bg-[#e8e8e8] flex items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-none">
              <p className="capitalize font-cairo leading-normal text-[#1c1c1c] text-xs sm:text-sm md:text-[13px] lg:text-[14px] text-right w-full lg:w-[385px] whitespace-pre-wrap break-words">
                لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
              </p>
            </div>
            <p className="capitalize font-cairo leading-normal text-[#828282] text-xs sm:text-xs md:text-[11px] lg:text-[12px]">
              12:00 AM
            </p>
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white border border-[#e8e8e8] border-solid flex h-12 sm:h-14 md:h-16 lg:h-[48px] items-center justify-center px-3 sm:px-4 md:px-5 lg:px-[12px] py-2 sm:py-2.5 md:py-3 lg:py-[8px] rounded-[6px] w-full">
          <div className="flex items-center justify-between w-full gap-2 sm:gap-3 md:gap-4 lg:gap-0">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب رسالة"
              className="capitalize font-cairo leading-[1.5] opacity-50 text-[#1c1c1c] text-xs sm:text-xs md:text-[11px] lg:text-[12px] outline-none border-none bg-transparent text-right flex-1"
              dir="rtl"
            />
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center flex-shrink-0">
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px]">
                <Image alt="Microphone" className="block w-full h-full object-contain" src={imgDashboardMicrophone} />
              </div>
              <div className="overflow-clip relative w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px]">
                <div className="absolute inset-[12.5%]">
                  <div className="absolute inset-[-4.17%]">
                    <Image alt="Attachment" className="block max-w-none w-full h-full" src={imgDashboardAttachment} />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex-none rotate-[180deg] scale-y-[-100%] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[26px] lg:h-[24px]">
                  <div className="absolute inset-0 overflow-clip">
                    <Image alt="Send" className="block max-w-none w-full h-full" src={imgDashboardSend} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default DashboardMessagesView;
