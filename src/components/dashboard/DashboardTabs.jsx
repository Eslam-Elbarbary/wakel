import React from 'react';

function DashboardTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'profile', label: 'عرض ملفي الشخصي' },
    { id: 'requests', label: 'الطلبات' },
    { id: 'messages', label: 'الرسائل' }
  ];

  return (
    <div className="flex items-center justify-end w-full overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${
            activeTab === tab.id
              ? 'border-[#0a4875] border-b-2'
              : 'border-[#b9b9b9] border-b'
          } border-l-0 border-r-0 border-solid border-t-0 flex flex-1 items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[8px] cursor-pointer min-w-[100px]`}
          onClick={() => onTabChange(tab.id)}
        >
          <div
            className={`flex flex-col font-cairo justify-center leading-[0] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-center whitespace-nowrap ${
              activeTab === tab.id ? 'font-bold text-[#0a4875]' : 'font-semibold text-[#1c1c1c]'
            }`}
          >
            <p className="leading-normal">{tab.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardTabs;
