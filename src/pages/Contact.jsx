import { useState } from 'react';
import {
    imgContactEmailIcon,
    imgContactWhatsapp,
    imgContactPhoneIcon,
    imgContactLocationIcon,
    imgContactMap
} from '../constants/images';
import Image from '../components/Image';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
            alert('يرجى ملء جميع الحقول');
            return;
        }

        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert('تم إرسال رسالتك بنجاح!');
            setFormData({ name: '', phone: '', message: '' });
        } catch (error) {
            alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white relative w-full min-h-screen">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[68px] items-center max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[80px] py-8 sm:py-10 md:py-12 lg:py-[80px]">
                {/* Title Section */}
                <div className="flex flex-col items-center relative w-full">
                    <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center text-center w-full">
                        <div className="flex flex-col font-cairo font-bold justify-center text-[#1c1c1c] text-xl sm:text-2xl md:text-3xl lg:text-[32px] w-full max-w-[633px]">
                            <p className="leading-tight sm:leading-normal md:leading-[38px] lg:leading-[42px] whitespace-pre-wrap">اتصل بنا!</p>
                        </div>
                        <div className="flex flex-col font-cairo font-medium justify-center text-[#626262] text-sm sm:text-base md:text-[17px] lg:text-[18px] w-full max-w-[765px]">
                            <p className="leading-normal whitespace-pre-wrap">هل لديك استفسار أو تحتاج دعم؟ فريقنا متواجد لمساعدتك في أي وقت</p>
                        </div>
                    </div>
                </div>

                {/* Contact Info Cards */}
                <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 md:p-10 lg:p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full gap-4 sm:gap-6 md:gap-8 lg:gap-0">
                    {/* Location */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[16px] items-center justify-center w-full sm:w-[280px]">
                        <div className="overflow-clip relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px] flex-shrink-0">
                            <Image
                                alt="Location"
                                className="block max-w-none w-full h-full object-contain"
                                src={imgContactLocationIcon}
                            />
                        </div>
                        <p className="font-cairo font-semibold leading-tight sm:leading-normal md:leading-[36px] lg:leading-[40.161px] text-[#1c1c1c] text-lg sm:text-xl md:text-2xl lg:text-[28px] text-right">
                            مدينة نصر، القاهرة، مصر
                        </p>
                    </div>



                    {/* WhatsApp */}
                    <div className="flex flex-col gap-[16px] items-center justify-center w-full sm:w-[280px]">
                        <div className="relative w-[30px] h-[30px] flex-shrink-0">
                            <Image
                                alt="WhatsApp"
                                className="block max-w-none w-full h-full object-contain"
                                src={imgContactWhatsapp}
                            />
                        </div>
                        <p className="font-cairo font-semibold leading-[40.161px] text-[#1c1c1c] text-[28px] text-right">
                            920029034
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[16px] items-center justify-center w-full sm:w-[280px]">
                        <div className="overflow-clip relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px] flex-shrink-0">
                            <Image
                                alt="Phone"
                                className="block max-w-none w-full h-full object-contain"
                                src={imgContactPhoneIcon}
                            />
                        </div>
                        <p className="font-cairo font-semibold leading-tight sm:leading-normal md:leading-[36px] lg:leading-[40.161px] text-[#1c1c1c] text-lg sm:text-xl md:text-2xl lg:text-[28px] text-right">
                            8003050055
                        </p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[16px] items-center justify-center w-full sm:w-[280px]">
                        <div className="overflow-clip relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px] flex-shrink-0">
                            <Image
                                alt="Email"
                                className="block max-w-none w-full h-full object-contain"
                                src={imgContactEmailIcon}
                            />
                        </div>
                        <p className="font-cairo font-semibold leading-tight sm:leading-normal md:leading-[36px] lg:leading-[40.161px] text-[#1c1c1c] text-lg sm:text-xl md:text-2xl lg:text-[28px] text-right">
                            mail@mail.com
                        </p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-white border border-[#f3f3f3] border-solid flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-start p-6 sm:p-8 md:p-10 lg:p-[40px] rounded-[10px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] w-full">
                    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-start justify-end w-full">
                        {/* Form Section */}
                        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] items-start w-full lg:w-[680px]">
                            <p className="font-cairo font-bold leading-tight sm:leading-normal md:leading-[26px] lg:leading-[28px] text-[#1c1c1c] text-lg sm:text-xl md:text-[19px] lg:text-[20px] text-right">
                                بيانات التواصل
                            </p>

                            {/* Name Input */}
                            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] min-h-[70px] sm:min-h-[80px] md:min-h-[90px] lg:h-[98px] items-start justify-center w-full">
                                <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right whitespace-nowrap">
                                    <p className="leading-normal">الاسم</p>
                                </div>
                                <div className="bg-white border border-[#d9d9d9] border-solid flex h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-between px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full">
                                    <div className="flex items-center opacity-0 relative pointer-events-none">
                                        <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0"></div>
                                        <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0"></div>
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="الاسم بالكامل"
                                        className="flex-1 px-2 py-0 border-0 outline-0 bg-transparent text-right font-cairo font-normal text-sm sm:text-base md:text-[15px] lg:text-[16px] text-[#1c1c1c] placeholder:text-[#c3c3c3]"
                                        dir="rtl"
                                    />
                                </div>
                            </div>

                            {/* Phone Input */}
                            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-start justify-center w-full">
                                <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-start whitespace-nowrap">
                                    <p className="leading-normal">رقم الهاتف</p>
                                </div>
                                <div className="bg-white border border-[#d9d9d9] border-solid flex h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-start px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full">
                                    <div className="flex items-center opacity-0 relative pointer-events-none">
                                        <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0"></div>
                                        <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0"></div>
                                    </div>
                                    <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] items-center">
                                        <div className="flex flex-col font-cairo font-bold justify-center">
                                            <p className="leading-tight sm:leading-normal md:leading-[20px] lg:leading-[22px] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-right">+20</p>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="رقم الهاتف"
                                            className="flex-1 px-2 py-0 border-0 outline-0 bg-transparent text-right font-cairo font-normal text-sm sm:text-base md:text-[15px] lg:text-[16px] text-[#1c1c1c] placeholder:text-[#c3c3c3]"
                                            dir="rtl"
                                        />

                                    </div>
                                </div>
                            </div>

                            {/* Message Textarea */}
                            <div className="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] items-start justify-center w-full">
                                <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-sm sm:text-base md:text-[15px] lg:text-[16px] text-start whitespace-nowrap">
                                    <p className="leading-normal">الرسالة</p>
                                </div>
                                <div className="bg-white border border-[#d9d9d9] border-solid flex min-h-[150px] sm:min-h-[180px] md:min-h-[210px] lg:h-[238px] items-start justify-between px-3 sm:px-4 md:px-5 lg:px-[14px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] rounded-[10px] w-full">
                                    <div className="flex items-center opacity-0 relative pointer-events-none">
                                        <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0"></div>
                                        <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] flex-shrink-0"></div>
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="نص الرسالة"
                                        className="flex-1 px-2 py-0 border-0 outline-0 bg-transparent text-right font-cairo font-normal text-sm sm:text-base md:text-[15px] lg:text-[16px] text-[#1c1c1c] placeholder:text-[#c3c3c3] resize-none h-full"
                                        dir="rtl"
                                    />
                                </div>
                            </div>
                            {/* Submit Button */}
                            <div className="flex items-end w-full lg:w-[680px]">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="bg-[#0a4875] flex gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] h-12 sm:h-14 md:h-16 lg:h-[60px] items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-[10px] rounded-[10px] w-full sm:w-[200px] md:w-[240px] lg:w-[268px] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <p className="font-cairo font-bold leading-normal text-sm sm:text-base md:text-[17px] lg:text-[18px] text-right text-white">
                                        {isSubmitting ? 'جاري الإرسال...' : 'ارسال'}
                                    </p>
                                </button>
                            </div>
                        </div>

                        {/* Map/Image Section */}
                        <div className="bg-[#f9f9f9] flex flex-col min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:h-[567px] items-start p-2 sm:p-3 md:p-4 lg:p-[7.769px] rounded-[10px] w-full lg:w-auto lg:flex-1 overflow-hidden">
                            <div className="relative w-full h-full">
                                <Image
                                    alt="Map"
                                    className="block max-w-none w-full h-full object-cover rounded-[10px]"
                                    src={imgContactMap}
                                />
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

export default Contact;
