import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { imgNotificationPolygon } from '../constants/images';
import Image from './Image';

function NotificationDropdown({ isOpen, onClose, buttonRef }) {
  const dropdownRef = useRef(null);
  const [notifications] = useState([
    {
      id: 1,
      title: 'عنوان الاشعار',
      body: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص',
      date: '12 نوفمبر 2025'
    },
    {
      id: 2,
      title: 'عنوان الاشعار',
      body: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص',
      date: '12 نوفمبر 2025'
    }
  ]);

  const newNotificationsCount = 10;

  // Close dropdown when clicking outside (but not on the notification button)
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInsideDropdown = dropdownRef.current && dropdownRef.current.contains(event.target);
      const isClickOnButton = buttonRef?.current && buttonRef.current.contains(event.target);
      
      if (!isClickInsideDropdown && !isClickOnButton) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, buttonRef]);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 z-50" ref={dropdownRef}>
      {/* Wrapper for arrow and panel - matches Figma structure exactly */}
      <div className="relative w-[324px]">
        {/* Polygon Arrow - pointing up to notification button, positioned at top: 0, left: 7px */}
        <div className="absolute top-0 left-[7px] w-[24px] h-[21px] overflow-hidden pointer-events-none z-10">
          <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
            <Image 
              alt="Arrow pointer" 
              className="block max-w-none w-full h-full object-contain" 
              src={imgNotificationPolygon}
            />
          </div>
        </div>

        {/* Notification Panel - positioned 14px below arrow (top: 14px, left: 0) */}
        <div className="bg-white flex flex-col gap-[10px] items-center p-[10px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-[324px] relative mt-[14px]">
        {/* Header Section */}
        <div className="flex flex-col items-start justify-center w-full">
          <div className="flex items-center justify-between w-full">
            {/* Badge - "10 إشعار جديد" - positioned at top-left (right in RTL) */}
           
            {/* Title - "الاشعارات" - positioned at top-right (left in RTL) */}
            <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-[16px] text-center whitespace-nowrap">
              <p className="leading-[28px]">الاشعارات</p>
            </div>
            <div className="bg-[#f3f3f3] flex h-[28px] items-center justify-center px-[8px] py-[4px] rounded-[8px] w-[90px] flex-shrink-0">
              <div className="flex flex-col font-cairo font-semibold justify-center leading-[0] text-[#4c4c4c] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[28px]">{newNotificationsCount} إشعار جديد</p>
              </div>
            </div>
          </div>
          {/* Subtitle - centered below header */}
          <div className="flex flex-col font-cairo font-medium h-[22px] justify-center leading-[0] text-[#626262] text-[14px] text-center w-[190px] mt-2">
            <p className="leading-[28px] whitespace-pre-wrap">
              يتم عرض جميع الاشعارات الجديده
            </p>
          </div>
        </div>

        {/* Notification Cards */}
        <div className="flex flex-col gap-[10px] items-start w-full">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="border border-[#d9d9d9] border-solid flex flex-col items-start leading-[0] p-[10px] rounded-[10px] w-full cursor-pointer hover:bg-[#f9f9f9] transition-colors"
            >
              {/* Notification Title */}
              <div className="flex flex-col font-cairo font-bold h-[23px] justify-center relative shrink-0 text-[#1c1c1c] text-[14px] text-right w-[85px] mb-1">
                <p className="leading-[28px] whitespace-pre-wrap">{notification.title}</p>
              </div>
              {/* Notification Body */}
              <div className="flex flex-col font-cairo font-normal justify-center min-w-full relative shrink-0 text-[#626262] text-[13px] text-right w-full mb-2">
                <p className="leading-[20px] whitespace-pre-wrap">{notification.body}</p>
              </div>
              {/* Notification Date */}
              <div className="flex flex-col font-cairo font-medium h-[19px] justify-center relative shrink-0 text-[#626262] text-[12px] w-full">
                <p className="leading-[28px] whitespace-pre-wrap">{notification.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link - "عرض جميع الاشعارات" */}
        <Link
          to="/notifications"
          onClick={onClose}
          className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#0a4875] text-[14px] text-right whitespace-nowrap hover:opacity-80 transition-opacity underline decoration-solid"
        >
          <p className="leading-[28px]">عرض جميع الاشعارات</p>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default NotificationDropdown;
