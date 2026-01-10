function StatisticsSection() {
  return (
    <div className="bg-[#f3f3f3] flex flex-col gap-4 sm:gap-5 lg:gap-[20px] items-center justify-center px-4 sm:px-6 md:px-10 lg:px-[80px] py-6 sm:py-8 lg:py-[40px] w-full">
      <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] items-center justify-center leading-[0] text-center w-full">
        <div className="font-cairo font-bold text-[#1c1c1c] text-xl sm:text-2xl lg:text-[32px] w-full max-w-2xl">
          <p className="leading-tight sm:leading-snug lg:leading-[42px] whitespace-pre-wrap">
            أرقام حققناها
          </p>
        </div>
        <div className="font-cairo font-medium text-[#626262] text-sm sm:text-base lg:text-[18px] w-full max-w-3xl">
          <p className="leading-normal whitespace-pre-wrap"> وّكل يعني اختيارك لأفضل المحامين المتخصصين في مجالك. نحن نعمل على توفير الدعم القانوني المناسب لك، مع ضمان تقديم استشارات دقيقة وفعالة.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[48px] items-center justify-center w-full max-w-6xl">
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] items-center justify-center leading-[0] text-center w-full whitespace-nowrap">
          <div className="font-cairo font-bold text-[#0a4875] text-2xl sm:text-3xl lg:text-[48px]">
            <p className="leading-tight sm:leading-snug lg:leading-[68px]">+120</p>
          </div>
          <div className="font-cairo font-semibold text-[#626262] text-sm sm:text-base lg:text-[20px]">
            <p className="leading-normal sm:leading-snug lg:leading-[28px]">توكيل ناجح</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] items-center justify-center leading-[0] text-center w-full whitespace-nowrap">
          <div className="font-cairo font-bold text-[#0a4875] text-2xl sm:text-3xl lg:text-[48px]">
            <p className="leading-tight sm:leading-snug lg:leading-[68px]">+100</p>
          </div>
          <div className="font-cairo font-semibold text-[#626262] text-sm sm:text-base lg:text-[20px]">
            <p className="leading-normal sm:leading-snug lg:leading-[28px]">استشاره قانونيه</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] items-center justify-center leading-[0] text-center w-full whitespace-nowrap">
          <div className="font-cairo font-bold text-[#0a4875] text-2xl sm:text-3xl lg:text-[48px]">
            <p className="leading-tight sm:leading-snug lg:leading-[68px]">+1000</p>
          </div>
          <div className="font-cairo font-semibold text-[#626262] text-sm sm:text-base lg:text-[20px]">
            <p className="leading-normal sm:leading-snug lg:leading-[28px]">مستخدم مسجل</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px] items-center justify-center leading-[0] text-center w-full whitespace-nowrap">
          <div className="font-cairo font-bold text-[#0a4875] text-2xl sm:text-3xl lg:text-[48px]">
            <p className="leading-tight sm:leading-snug lg:leading-[68px]">+120</p>
          </div>
          <div className="font-cairo font-semibold text-[#626262] text-sm sm:text-base lg:text-[20px]">
            <p className="leading-normal sm:leading-snug lg:leading-[28px]">محامي مسجل</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsSection;
