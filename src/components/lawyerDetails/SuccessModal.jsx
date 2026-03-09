import { Link } from 'react-router-dom';
import { imgLawyerDetailsSuccessClose } from '../../constants/images';
import Image from '../Image';

function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4" onClick={onClose}>
      <div className="bg-white flex flex-col gap-[24px] items-center justify-center p-[24px] rounded-[10px] w-full max-w-[523px] shadow-lg" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <div className="flex items-center justify-start w-full">
          <button
            type="button"
            onClick={onClose}
            className="bg-white flex items-center justify-center rounded-[8px] w-[24px] h-[24px] cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="relative w-[24px] h-[24px]">
              <Image alt="Close" className="block w-full h-full object-contain" src={imgLawyerDetailsSuccessClose} />
            </div>
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="flex flex-col gap-[10px] items-center justify-center leading-[0] w-full">
          <div className="flex flex-col font-cairo font-bold justify-center relative text-[#1c1c1c] text-[22px] text-right whitespace-nowrap">
            <p className="leading-[1.5]">تم انشاء ملفك بنجاح</p>
          </div>
          <div className="flex flex-col font-cairo font-medium justify-center relative text-[#4c4c4c] text-[16px] text-center w-full max-w-[475px]">
            <p className="leading-normal whitespace-pre-wrap">
              تم انشاء ملفك بنجاح يمكنك الاطلاع علي الملف من خلال عرض لوحه التحكم الخاصه بك
            </p>
          </div>
        </div>
        
        {/* Link to Dashboard */}
        <Link
          to="/dashboard"
          onClick={onClose}
          className="block cursor-pointer font-cairo font-bold leading-[0] text-[#0a4875] text-[16px] whitespace-nowrap"
        >
          <p className="underline decoration-solid leading-normal">
            أذهب الي لوحه التحكم
          </p>
        </Link>
      </div>
    </div>
  );
}

export default SuccessModal;
