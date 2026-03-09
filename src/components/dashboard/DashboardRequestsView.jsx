import React, { useState } from 'react';
import RequestCard from './RequestCard';
import FilterSidebar from './FilterSidebar';

function DashboardRequestsView({ onViewRequestDetails }) {
  const [requests] = useState([
    { id: 1, clientName: 'اسم العميل', type: 'انابة', date: '12 أغسطس 2025' },
    { id: 2, clientName: 'اسم العميل', type: 'انابة', date: '12 أغسطس 2025' },
    { id: 3, clientName: 'اسم العميل', type: 'انابة', date: '12 أغسطس 2025' },
    { id: 4, clientName: 'اسم العميل', type: 'انابة', date: '12 أغسطس 2025' },
    { id: 5, clientName: 'اسم العميل', type: 'انابة', date: '12 أغسطس 2025' },
    { id: 6, clientName: 'اسم العميل', type: 'انابة', date: '12 أغسطس 2025' },
  ]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-start justify-end w-full">
      {/* Requests Grid */}
      <div className="flex flex-1 flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-start w-full lg:w-auto">
        {/* Responsive Grid: 1 column on mobile, 2 on tablet, 2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] w-full">
          <RequestCard request={requests[0]} onViewDetails={() => onViewRequestDetails(requests[0])} />
          <RequestCard request={requests[1]} onViewDetails={() => onViewRequestDetails(requests[1])} />
          <RequestCard request={requests[2]} onViewDetails={() => onViewRequestDetails(requests[2])} />
          <RequestCard request={requests[3]} onViewDetails={() => onViewRequestDetails(requests[3])} />
          <RequestCard request={requests[4]} onViewDetails={() => onViewRequestDetails(requests[4])} />
          <RequestCard request={requests[5]} onViewDetails={() => onViewRequestDetails(requests[5])} />
        </div>
      </div>
      
      {/* Filter Sidebar */}
      <div className="w-full lg:w-auto lg:flex-shrink-0">
        <FilterSidebar />
      </div>
    </div>
  );
}

export default DashboardRequestsView;
