import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { img, img1, imgGroup3, imgHeaderNotification, imgHeaderProfile } from '../constants/images';
import Image from './Image';
import { useAuth } from '../context/AuthContext';
import NotificationDropdown from './NotificationDropdown';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, userData, logout, setRole, userRole } = useAuth();
  const isLawyer = userRole === 'lawyer';
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const profileDropdownRef = useRef(null);
  const notificationButtonRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const mobileMenuDropdownRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickOutsideProfile = profileDropdownRef.current && !profileDropdownRef.current.contains(event.target);
      const isClickOutsideNotification = notificationButtonRef.current && !notificationButtonRef.current.contains(event.target);
      const isClickOutsideMobileButton = mobileMenuButtonRef.current && !mobileMenuButtonRef.current.contains(event.target);
      const isClickOutsideMobileDropdown = mobileMenuDropdownRef.current && !mobileMenuDropdownRef.current.contains(event.target);
      
      if (isClickOutsideProfile) {
        setShowProfileDropdown(false);
      }
      
      if (isClickOutsideMobileButton && isClickOutsideMobileDropdown) {
        setShowMobileMenu(false);
      }
    };

    if (showProfileDropdown || showMobileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileDropdown, showMobileMenu]);

  // Handle notification button click - close profile dropdown if open
  const handleNotificationClick = () => {
    setShowProfileDropdown(false);
    setShowNotificationDropdown(!showNotificationDropdown);
  };

  // Handle profile button click - close notification dropdown if open
  const handleProfileClick = () => {
    setShowNotificationDropdown(false);
    setShowProfileDropdown(!showProfileDropdown);
  };
  
  return (
    <div className="w-full bg-white">
      <div className="w-full mx-auto">
        <div className="bg-white flex flex-row h-16 sm:h-20 md:h-24 lg:h-[100px] items-center justify-between px-4 sm:px-6 md:px-10 lg:px-[80px] py-3 sm:py-4 md:py-5 lg:py-[20px] rounded-bl-[10px] rounded-br-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
          {/* Right side (start in RTL): Logo + Navigation links */}
          <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-[40px] items-center flex-1">
            {/* Mobile Menu Button - Visible only on mobile */}
            <div className="md:hidden relative">
              <button
                type="button"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="bg-[#f3f3f3] flex items-center justify-center p-2 rounded-[10px] w-10 h-10 hover:opacity-80 transition-opacity"
                ref={mobileMenuButtonRef}
              >
                <div className="relative w-6 h-6">
                  {showMobileMenu ? (
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </div>
              </button>
              {/* Mobile Menu Dropdown */}
              {showMobileMenu && (
                <div 
                  ref={mobileMenuDropdownRef}
                  className="absolute top-full right-0 mt-2 bg-white border border-[#d9d9d9] border-solid rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-w-[200px] z-50 overflow-hidden"
                >
                  <Link 
                    to="/"
                    className={`block px-4 py-3 text-right font-cairo font-medium text-[16px] hover:bg-[#f3f3f3] transition-colors ${location.pathname === '/' ? 'text-[#0a4875] font-bold' : 'text-[#1c1c1c]'}`}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    الرئيسية
                  </Link>
                  
                  {/* Lawyer-specific navigation links */}
                  {isAuthenticated && isLawyer ? (
                    <>
                      <Link 
                        to="/lawyers"
                        className={`block px-4 py-3 text-right font-cairo font-medium text-[16px] hover:bg-[#f3f3f3] transition-colors ${location.pathname === '/lawyers' ? 'text-[#0a4875] font-bold' : 'text-[#1c1c1c]'}`}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        المحاميون
                      </Link>
                      <Link 
                        to="/available-requests"
                        className={`block px-4 py-3 text-right font-cairo font-medium text-[16px] hover:bg-[#f3f3f3] transition-colors ${location.pathname === '/available-requests' ? 'text-[#0a4875] font-bold' : 'text-[#1c1c1c]'}`}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        الطلبات المتاحة
                      </Link>
                      <Link 
                        to="/subscriptions"
                        className={`block px-4 py-3 text-right font-cairo font-medium text-[16px] hover:bg-[#f3f3f3] transition-colors ${location.pathname === '/subscriptions' ? 'text-[#0a4875] font-bold' : 'text-[#1c1c1c]'}`}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        الاشتراكات
                      </Link>
                      <Link 
                        to="/contact"
                        className={`block px-4 py-3 text-right font-cairo font-medium text-[16px] hover:bg-[#f3f3f3] transition-colors ${location.pathname === '/contact' ? 'text-[#0a4875] font-bold' : 'text-[#1c1c1c]'}`}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        اتصل بنا
                      </Link>
                    </>
                  ) : (
                    <>
                      {/* Client navigation links */}
                      <Link 
                        to="/lawyers"
                        className={`block px-4 py-3 text-right font-cairo font-medium text-[16px] hover:bg-[#f3f3f3] transition-colors ${location.pathname === '/lawyers' ? 'text-[#0a4875] font-bold' : 'text-[#1c1c1c]'}`}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        المحاميون
                      </Link>
                      <Link 
                        to="/contact"
                        className={`block px-4 py-3 text-right font-cairo font-medium text-[16px] hover:bg-[#f3f3f3] transition-colors ${location.pathname === '/contact' ? 'text-[#0a4875] font-bold' : 'text-[#1c1c1c]'}`}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        اتصل بنا
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
            
            {/* Logo - Far right */}
            <Link to="/" className="flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-[5.085px] items-center justify-center">
              <p className="font-gulzar leading-normal text-[#0a4875] text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
                منصة وّكل
              </p>
              <div className="relative w-7 h-6 sm:w-9 sm:h-7 md:w-11 md:h-9 lg:w-[43.449px] lg:h-[36.41px]">
                <Image 
                  alt="منصة وّكل logo" 
                  className="block w-full h-full object-contain" 
                  src={imgGroup3}
                />
              </div>
            </Link>
            {/* Navigation Links - To the left of logo, hidden on mobile */}
            <div className="hidden md:flex flex-row gap-2 sm:gap-3 lg:gap-[10px] items-center">
              <Link 
                to="/"
                className={`border-b-2 border-l-0 border-r-0 border-solid border-t-0 flex items-center justify-center p-1.5 sm:p-2 lg:p-[8px] ${location.pathname === '/' ? 'border-[#0a4875]' : 'border-transparent'}`}
              >
                <div className={`font-cairo text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap ${location.pathname === '/' ? 'font-bold text-[#0a4875]' : 'font-semibold text-[#1c1c1c]'}`}>
                  <p className="leading-normal">الرئيسية</p>
                </div>
              </Link>
              
              {/* Lawyer-specific navigation links */}
              {isAuthenticated && isLawyer ? (
                <>
                  <Link 
                    to="/lawyers"
                    className={`cursor-pointer flex items-center justify-center p-1.5 sm:p-2 lg:p-[8px] ${location.pathname === '/lawyers' ? 'border-b-2 border-[#0a4875] border-l-0 border-r-0 border-solid border-t-0' : ''}`}
                  >
                    <div className={`font-cairo text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap ${location.pathname === '/lawyers' ? 'font-bold text-[#0a4875]' : 'font-semibold text-[#1c1c1c]'}`}>
                      <p className="leading-normal">المحاميون</p>
                    </div>
                  </Link>
                  <Link to="/available-requests" className={`cursor-pointer flex items-center justify-center p-1.5 sm:p-2 lg:p-[8px] ${location.pathname === '/available-requests' ? 'border-b-2 border-[#0a4875] border-l-0 border-r-0 border-solid border-t-0' : ''}`}>
                    <div className={`font-cairo text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap ${location.pathname === '/available-requests' ? 'font-bold text-[#0a4875]' : 'font-semibold text-[#1c1c1c]'}`}>
                      <p className="leading-normal">الطلبات المتاحة</p>
                    </div>
                  </Link>
                  <Link to="/subscriptions" className={`cursor-pointer flex items-center justify-center p-1.5 sm:p-2 lg:p-[8px] ${location.pathname === '/subscriptions' ? 'border-b-2 border-[#0a4875] border-l-0 border-r-0 border-solid border-t-0' : ''}`}>
                    <div className={`font-cairo text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap ${location.pathname === '/subscriptions' ? 'font-bold text-[#0a4875]' : 'font-semibold text-[#1c1c1c]'}`}>
                      <p className="leading-normal">الاشتراكات</p>
                    </div>
                  </Link>
                  <Link to="/contact" className="cursor-pointer flex items-center justify-center p-1.5 sm:p-2 lg:p-[8px]">
                    <div className="font-cairo font-semibold text-[#1c1c1c] text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                      <p className="leading-normal"> اتصل بنا </p>
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  {/* Client navigation links */}
                  <Link 
                    to="/lawyers"
                    className={`cursor-pointer flex items-center justify-center p-1.5 sm:p-2 lg:p-[8px] ${location.pathname === '/lawyers' ? 'border-b-2 border-[#0a4875] border-l-0 border-r-0 border-solid border-t-0' : ''}`}
                  >
                    <div className={`font-cairo text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap ${location.pathname === '/lawyers' ? 'font-bold text-[#0a4875]' : 'font-semibold text-[#1c1c1c]'}`}>
                      <p className="leading-normal">المحاميون</p>
                    </div>
                  </Link>
                  <Link to="/contact" className="cursor-pointer flex items-center justify-center p-1.5 sm:p-2 lg:p-[8px]">
                    <div className="font-cairo font-semibold text-[#1c1c1c] text-sm md:text-[15px] lg:text-[16px] text-center whitespace-nowrap">
                      <p className="leading-normal"> اتصل بنا </p>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
          
          {/* Left side (end in RTL): Different content based on auth status */}
          {isAuthenticated ? (
            // Logged In Header - User Profile Section (matching Figma design exactly)
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[20px] h-auto sm:h-12 md:h-14 lg:h-[60px] items-center justify-end flex-wrap sm:flex-nowrap">
               {/* User Profile Section */}
               <div className="relative" ref={profileDropdownRef}>
                <button
                  type="button"
                  onClick={handleProfileClick}
                  className="cursor-pointer flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-[8px] items-center justify-end p-0 hover:opacity-80 transition-opacity"
                >
                    {/* Profile Picture */}
                    <div className="bg-white border-2 border-[#1c1c1c] border-solid flex flex-col gap-[10px] items-center justify-center p-1 sm:p-1.5 md:p-2 lg:p-[4px] rounded-[100px] w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] flex-shrink-0">
                    <div className="aspect-square relative rounded-[300px] w-full overflow-hidden">
                      <Image 
                        alt="User profile" 
                        className="block w-full h-full object-cover rounded-[300px]" 
                        src={imgHeaderProfile}
                      />
                    </div>
                  </div>
                  {/* User Info */}
                  <div className="flex flex-col items-start justify-center hidden sm:flex">
                    <div className="flex flex-col font-cairo font-bold justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[17px] lg:text-[18px] text-right">
                      <p className="leading-tight sm:leading-normal md:leading-[26px] lg:leading-normal break-words">{userData.fullName || (isLawyer ? 'الأستاذ / حسنين حسونة' : 'عادل إمام')}</p>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-[8px] items-center justify-center">
                     
                      <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#0a4875] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-center">
                        <p className="leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px]">{isLawyer ? 'لوحة المتابعة' : 'ملفي'}</p>
                      </div>
                      <div className="relative w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-[16px] lg:h-[16px] flex-shrink-0">
                        <Image 
                          alt="Arrow down" 
                          className="block w-full h-full object-contain" 
                          src={img1}
                        />
                      </div>
                    </div>
                  </div>
                  
                
                </button>
                
                {/* Profile Dropdown Menu */}
                {showProfileDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white border border-[#d9d9d9] border-solid rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-w-[200px] z-50 overflow-hidden">
                    <Link
                      to="/lawyer-profile"
                      className="block px-4 py-3 text-right font-cairo font-medium text-[#1c1c1c] text-[16px] hover:bg-[#f3f3f3] transition-colors"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      تحقق من الملف الشخصي
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-3 text-right font-cairo font-medium text-[#1c1c1c] text-[16px] hover:bg-[#f3f3f3] transition-colors"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      ملفي الشخصي
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-3 text-right font-cairo font-medium text-[#1c1c1c] text-[16px] hover:bg-[#f3f3f3] transition-colors"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      الإعدادات
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setShowProfileDropdown(false);
                      }}
                      className="w-full text-right px-4 py-3 font-cairo font-medium text-[#cc1024] text-[16px] hover:bg-[#f3f3f3] transition-colors"
                    >
                      تسجيل الخروج
                    </button>
                  </div>
                )}
              </div>
               {/* Divider */}
               <div className="bg-[#f3f3f3] h-8 sm:h-10 md:h-12 lg:h-full w-[2px] sm:w-[2.5px] md:w-[3px] flex-shrink-0"></div>
                 {/* Notification Button with Dropdown */}
              <div className="relative">
                <button 
                  ref={notificationButtonRef}
                  type="button"
                  onClick={handleNotificationClick}
                  className={`bg-[#f3f3f3] cursor-pointer flex items-center justify-center px-2 sm:px-2.5 md:px-3 lg:px-[12px] py-1.5 sm:py-2 md:py-2.5 lg:py-[10px] rounded-[10px] w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] hover:opacity-80 transition-opacity ${
                    showNotificationDropdown ? 'opacity-100' : ''
                  }`}
                >
                  <div className="relative w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px]">
                    <Image 
                      alt="Notification" 
                      className="block w-full h-full object-contain" 
                      src={imgHeaderNotification}
                    />
                  </div>
                </button>
                {/* Notification Dropdown */}
                <NotificationDropdown 
                  isOpen={showNotificationDropdown}
                  onClose={() => setShowNotificationDropdown(false)}
                  buttonRef={notificationButtonRef}
                />
              </div>
              {/* Language Selector */}
              <div className="hidden sm:flex bg-[#f3f3f3] gap-[4px] h-[52px] items-center justify-center px-[12px] py-[10px] rounded-[10px]">
                <div className="relative w-[20px] h-[20px] flex-shrink-0">
                  <Image 
                    alt="Language selector" 
                    className="block w-full h-full object-contain" 
                    src={img}
                  />
                </div>
                <p className="font-cairo font-medium leading-[22px] text-[#2e2e2e] text-[14px] whitespace-nowrap">
                  العربية
                </p>
              </div>
              
            
              
             
              
             
            </div>
          ) : (
            // Not Logged In Header - Login/Signup Buttons
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[20px] items-center">
               {/* Buttons - To the right of language selector */}
               <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-[10px] items-center">
              <Link 
                  to="/signup" 
                  onClick={(e) => {
                    e.preventDefault();
                    setRole('lawyer');
                    navigate('/signup');
                  }}
                  className="bg-[#0a4875] flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-[10px] h-9 sm:h-10 md:h-12 lg:h-[50px] items-center justify-center px-2 sm:px-3 md:px-4 lg:px-[20px] py-1.5 sm:py-2 md:py-2.5 lg:py-[10px] rounded-[10px] w-24 sm:w-28 md:w-32 lg:w-[179px]"
                >
                  <p className="font-cairo font-bold leading-normal text-xs sm:text-[13px] md:text-sm lg:text-[16px] text-end text-white">
                    سجل كمحامي
                  </p>
                </Link>
                <Link to="/login" className="border border-[#0a4875] border-solid flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-[10px] h-9 sm:h-10 md:h-12 lg:h-[50px] items-center justify-center px-2 sm:px-3 md:px-4 lg:px-[20px] py-1.5 sm:py-2 md:py-2.5 lg:py-[10px] rounded-[10px] w-20 sm:w-24 md:w-28 lg:w-[155px]">
                  <p className="font-cairo font-bold leading-normal text-[#0a4875] text-xs sm:text-[13px] md:text-sm lg:text-[16px] text-end">
                    سجل دخول
                  </p>
                </Link>
                
              </div>
              {/* Language Selector - Far left, hidden on small mobile */}
              <div className="hidden sm:flex bg-[#f3f3f3] gap-1 sm:gap-2 lg:gap-[4px] h-9 sm:h-10 md:h-11 lg:h-[50px] items-center justify-center px-2 sm:px-2.5 md:px-3 lg:px-[12px] py-1.5 sm:py-2 md:py-2.5 lg:py-[10px] rounded-[10px]">
              <p className="font-cairo font-medium leading-[22px] text-[#2e2e2e] text-xs sm:text-[13px] md:text-sm lg:text-[14px]">
                  العربية
                </p>
                <div className="relative w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 lg:w-[20px] lg:h-[20px]">
                  <Image 
                    alt="Language selector" 
                    className="block w-full h-full object-contain" 
                    src={img}
                  />
                </div>
                
              </div>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
