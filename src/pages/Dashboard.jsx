import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardBreadcrumb from '../components/dashboard/DashboardBreadcrumb';
import DashboardTabs from '../components/dashboard/DashboardTabs';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardProfileView from '../components/dashboard/DashboardProfileView';
import DashboardMessagesView from '../components/dashboard/DashboardMessagesView';
import DashboardRequestsView from '../components/dashboard/DashboardRequestsView';

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleViewRequestDetails = (request) => {
    setSelectedRequest(request);
    // Navigate to request details or show modal
    navigate(`/dashboard/request/${request.id}`);
  };

  const getBreadcrumbTitle = () => {
    switch (activeTab) {
      case 'profile':
        return 'لوحه التحكم المحامي';
      case 'messages':
        return 'لوحه المتابعة';
      case 'requests':
        return 'لوحه المتابعة';
      default:
        return 'لوحه التحكم المحامي';
    }
  };

  const getBreadcrumbSubtitle = () => {
    switch (activeTab) {
      case 'profile':
        return 'لوحه تحكم المحامي';
      case 'messages':
        return 'لوحه المتابعة';
      case 'requests':
        return 'لوحه المتابعة';
      default:
        return 'لوحه تحكم المحامي';
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <DashboardProfileView />;
      case 'messages':
        return <DashboardMessagesView />;
      case 'requests':
        return <DashboardRequestsView onViewRequestDetails={handleViewRequestDetails} />;
      default:
        return <DashboardProfileView />;
    }
  };

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-[100px] pb-8 sm:pb-10 md:pb-12 lg:pb-[100px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-center w-full">
          {/* Breadcrumb */}
          <div className="w-full">
            <DashboardBreadcrumb title={getBreadcrumbTitle()} subtitle={getBreadcrumbSubtitle()} />
          </div>

          {/* Main Content Area */}
          <div className="flex items-start w-full max-w-[1280px]">
            {/* Main Content Card */}
            <div className="bg-white border border-[#f3f3f3] border-solid flex flex-1 flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-end p-4 sm:p-6 md:p-8 lg:p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
              {/* Tabs */}
              <div className="w-full">
                <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
              </div>

              {/* Tab Content */}
              {activeTab === 'profile' ? (
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-start w-full">
                  {/* Main Profile Content - Appears on right in RTL (first child) */}
                  <div className="flex flex-1 flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-start w-full lg:w-auto">
                    <DashboardProfileView />
                  </div>
                  
                  {/* Sidebar - Appears on left in RTL (second child) */}
                  <div className="w-full lg:w-auto lg:flex-shrink-0">
                    <DashboardSidebar />
                  </div>
                </div>
              ) : (
                <div className="flex flex-1 flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-start w-full">
                  {renderTabContent()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
