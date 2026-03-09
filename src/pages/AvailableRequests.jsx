import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterSidebar from '../components/dashboard/FilterSidebar';
import RequestCard from '../components/dashboard/RequestCard';
import { imgOrderProfile } from '../constants/images';

function AvailableRequests() {
  // Sample order data - in real app, this would come from API
  const orders = [
    { id: 1, clientName: 'اسم العميل', type: 'استشارة', status: 'عميل', date: '12 أغسطس 2025', profile: imgOrderProfile },
    { id: 2, clientName: 'اسم العميل', type: 'انابة', status: 'محامي', date: '12 أغسطس 2025', profile: imgOrderProfile },
    { id: 3, clientName: 'اسم العميل', type: 'حضور', status: 'عميل', date: '12 أغسطس 2025', profile: imgOrderProfile },
    { id: 4, clientName: 'اسم العميل', type: 'انابة', status: 'محامي', date: '12 أغسطس 2025', profile: imgOrderProfile },
    { id: 5, clientName: 'اسم العميل', type: 'استشارة', status: 'عميل', date: '12 أغسطس 2025', profile: imgOrderProfile },
    { id: 6, clientName: 'اسم العميل', type: 'حضور', status: 'محامي', date: '12 أغسطس 2025', profile: imgOrderProfile },
    { id: 7, clientName: 'اسم العميل', type: 'حضور', status: 'عميل', date: '12 أغسطس 2025', profile: imgOrderProfile },
    { id: 8, clientName: 'اسم العميل', type: 'استشارة', status: 'عميل', date: '12 أغسطس 2025', profile: imgOrderProfile },
  ];

  const handleViewDetails = (order) => {
    // Navigation is handled by RequestCard component
    // This function can be used for additional logic if needed
  };

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-[1440px] mt-8 sm:mt-10 md:mt-12 lg:mt-[50px] mb-8 sm:mb-10 md:mb-12 lg:mb-[100px] mx-auto pt-0 pb-0 px-4 sm:px-6 md:px-8 lg:px-[80px]">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[68px] items-center w-full">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-center justify-center w-full">
              <div className="flex flex-col items-start w-full">
                {/* Content Area with Orders and Filter */}
                <div className="flex flex-col lg:flex-row items-end w-full gap-4 sm:gap-5 md:gap-6 lg:gap-[10px]">
                  {/* Orders Grid */}
                  <div className="flex flex-1 flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-start min-h-px min-w-px w-full lg:w-auto">
                    {/* Responsive Grid: 1 column on mobile, 2 on tablet, 2 on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] w-full">
                      <RequestCard 
                        request={{ id: 1, clientName: 'اسم العميل', type: 'استشارة', status: 'عميل', date: '12 أغسطس 2025', profile: imgOrderProfile }}
                      />
                      <RequestCard 
                        request={{ id: 2, clientName: 'اسم العميل', type: 'انابة', status: 'محامي', date: '12 أغسطس 2025', profile: imgOrderProfile }}
                      />
                      <RequestCard 
                        request={{ id: 3, clientName: 'اسم العميل', type: 'حضور', status: 'عميل', date: '12 أغسطس 2025', profile: imgOrderProfile }}
                      />
                      <RequestCard 
                        request={{ id: 4, clientName: 'اسم العميل', type: 'انابة', status: 'محامي', date: '12 أغسطس 2025', profile: imgOrderProfile }}
                      />
                      <RequestCard 
                        request={{ id: 5, clientName: 'اسم العميل', type: 'استشارة', status: 'عميل', date: '12 أغسطس 2025', profile: imgOrderProfile }}
                      />
                      <RequestCard 
                        request={{ id: 6, clientName: 'اسم العميل', type: 'حضور', status: 'محامي', date: '12 أغسطس 2025', profile: imgOrderProfile }}
                      />
                      <RequestCard 
                        request={{ id: 7, clientName: 'اسم العميل', type: 'حضور', status: 'عميل', date: '12 أغسطس 2025', profile: imgOrderProfile }}
                      />
                      <RequestCard 
                        request={{ id: 8, clientName: 'اسم العميل', type: 'استشارة', status: 'عميل', date: '12 أغسطس 2025', profile: imgOrderProfile }}
                      />
                    </div>
                  </div>
                  
                  {/* Filter Sidebar */}
                  <div className="w-full lg:w-auto lg:flex-shrink-0">
                    <FilterSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AvailableRequests;
