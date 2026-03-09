import { useState } from 'react';
import {
  imgLawyerDetailsArrowDown7,
  imgLawyerDetailsAddSquare,
  imgLawyerDetailsCloseSquare
} from '../../constants/images';
import Image from '../Image';

function Step4AcademicExperience({ formData, onInputChange, onArrayChange, errors }) {
  const [experienceInput, setExperienceInput] = useState('');
  const [languageInput, setLanguageInput] = useState('');
  const [courseInput, setCourseInput] = useState('');

  const handleAddExperience = () => {
    if (experienceInput.trim()) {
      const newExperiences = [...(formData.experiences || []), experienceInput.trim()];
      onArrayChange('experiences', newExperiences);
      setExperienceInput('');
    }
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = formData.experiences.filter((_, i) => i !== index);
    onArrayChange('experiences', newExperiences);
  };

  const handleAddLanguage = () => {
    if (languageInput.trim()) {
      const newLanguages = [...(formData.languages || []), languageInput.trim()];
      onArrayChange('languages', newLanguages);
      setLanguageInput('');
    }
  };

  const handleRemoveLanguage = (index) => {
    const newLanguages = formData.languages.filter((_, i) => i !== index);
    onArrayChange('languages', newLanguages);
  };

  const handleAddCourse = () => {
    if (courseInput.trim()) {
      const newCourses = [...(formData.courses || []), courseInput.trim()];
      onArrayChange('courses', newCourses);
      setCourseInput('');
    }
  };

  const handleRemoveCourse = (index) => {
    const newCourses = formData.courses.filter((_, i) => i !== index);
    onArrayChange('courses', newCourses);
  };

  return (
    <div className="flex flex-col gap-[20px] items-end w-full">
      <div className="flex gap-[20px] items-center justify-end w-full">
        {/* Academic Degree */}
        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
            <p className="leading-normal">
              <span>{`الدرجات العلمية `}</span>
              <span className="text-[#cc1024]">*</span>
            </p>
          </div>
          <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
            <div className="relative w-[24px] h-[24px]">
              <Image alt="Arrow down" className="block w-full h-full object-contain" src={imgLawyerDetailsArrowDown7} />
            </div>
            <select
              value={formData.academicDegree || ''}
              onChange={(e) => onInputChange('academicDegree', e.target.value)}
              className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent appearance-none cursor-pointer text-right font-cairo font-normal text-[16px]"
              style={{ color: formData.academicDegree ? '#1c1c1c' : '#c3c3c3' }}
              dir="rtl"
            >
              <option value="">ليسانس، ماجستير، دكتوراه</option>
              <option value="bachelor">ليسانس</option>
              <option value="master">ماجستير</option>
              <option value="phd">دكتوراه</option>
            </select>
          </div>
        </div>
        {/* Universities */}
        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
            <p className="leading-normal">
              الجامعات المتخرج منها<span className="text-[#cc1024]">*</span>
            </p>
          </div>
          <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
            <div className="flex items-center opacity-0 relative">
              <div className="relative w-[24px] h-[24px]"></div>
              <div className="relative w-[24px] h-[24px]"></div>
            </div>
            <input
              type="text"
              value={formData.universities || ''}
              onChange={(e) => onInputChange('universities', e.target.value)}
              placeholder="الجامعات المتخرج منها"
              className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
              style={{ color: formData.universities ? '#1c1c1c' : '#c3c3c3' }}
              dir="rtl"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[20px] items-center justify-end w-full">
        {/* Work Experience */}
        <div className="flex flex-col gap-[8px] items-start justify-center w-[402px]">
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
            <p className="leading-normal">الخبرات العملية السابقة (اختياري)</p>
          </div>
          <div className="flex flex-col gap-[4px] items-end w-full">
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
              <div className="relative w-[24px] h-[24px]">
                <Image alt="Add" className="block w-full h-full object-contain cursor-pointer" src={imgLawyerDetailsAddSquare} onClick={handleAddExperience} />
              </div>
              <input
                type="text"
                value={experienceInput}
                onChange={(e) => setExperienceInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddExperience()}
                placeholder="الخبرات العملية السابقة"
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: experienceInput ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              />
            </div>
            {formData.experiences && formData.experiences.length > 0 && (
              <div className="flex gap-[4px] items-center justify-end w-full flex-wrap">
                {formData.experiences.map((exp, index) => (
                  <div key={index} className="bg-[#e8e8e8] flex items-center justify-center p-[4px] rounded-[8px]">
                    <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#c3c3c3] text-[14px] text-right whitespace-nowrap">
                      <p className="leading-[22px]">{exp}</p>
                    </div>
                    <div className="relative w-[20px] h-[20px] cursor-pointer" onClick={() => handleRemoveExperience(index)}>
                      <Image alt="Close" className="block w-full h-full object-contain" src={imgLawyerDetailsCloseSquare} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Years of Experience */}
        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
            <p className="leading-normal">
              <span>{`سنوات الخبرة `}</span>
              <span className="text-[#cc1024]">*</span>
            </p>
          </div>
          <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full">
            <div className="opacity-0 relative w-[24px] h-[24px]">
              <Image alt="Arrow down" className="block w-full h-full object-contain" src={imgLawyerDetailsArrowDown7} />
            </div>
            <input
              type="number"
              value={formData.yearsOfExperience || ''}
              onChange={(e) => onInputChange('yearsOfExperience', e.target.value)}
              placeholder="سنوات الخبرة"
              className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
              style={{ color: formData.yearsOfExperience ? '#1c1c1c' : '#c3c3c3' }}
              dir="rtl"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[20px] items-center justify-end w-full">
        {/* Languages */}
        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
            <p className="leading-normal">اللغات التي يتقنها المحامي (اختياري)</p>
          </div>
          <div className="flex flex-col gap-[4px] items-end w-full">
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full relative">
              <div className="relative w-[24px] h-[24px] cursor-pointer" onClick={handleAddLanguage}>
                <Image alt="Add" className="block w-full h-full object-contain" src={imgLawyerDetailsAddSquare} />
              </div>
              <input
                type="text"
                value={languageInput}
                onChange={(e) => setLanguageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddLanguage()}
                placeholder="اللغات التي يتقنها المحامي"
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: languageInput ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              />
            </div>
            {formData.languages && formData.languages.length > 0 && (
              <div className="flex gap-[4px] items-center justify-end w-full flex-wrap">
                {formData.languages.map((lang, index) => (
                  <div key={index} className="bg-[#e8e8e8] flex items-center justify-center p-[4px] rounded-[8px]">
                    <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#c3c3c3] text-[14px] text-right whitespace-nowrap">
                      <p className="leading-[22px]">{lang}</p>
                    </div>
                    <div className="relative w-[20px] h-[20px] cursor-pointer" onClick={() => handleRemoveLanguage(index)}>
                      <Image alt="Close" className="block w-full h-full object-contain" src={imgLawyerDetailsCloseSquare} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Training Courses */}
        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center">
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#1c1c1c] text-[16px] text-right whitespace-nowrap">
            <p className="leading-normal">الدورات التدريبية (اختياري)</p>
          </div>
          <div className="flex flex-col gap-[4px] items-end w-full">
            <div className="bg-white border border-[#d9d9d9] border-solid flex h-[60px] items-center justify-between px-[14px] py-[10px] rounded-[10px] w-full relative">
              <div className="relative w-[24px] h-[24px] cursor-pointer" onClick={handleAddCourse}>
                <Image alt="Add" className="block w-full h-full object-contain" src={imgLawyerDetailsAddSquare} />
              </div>
              <input
                type="text"
                value={courseInput}
                onChange={(e) => setCourseInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddCourse()}
                placeholder="الدورات التدريبية"
                className="w-full h-full px-[14px] py-[10px] border-0 outline-0 bg-transparent text-right font-cairo font-normal text-[16px]"
                style={{ color: courseInput ? '#1c1c1c' : '#c3c3c3' }}
                dir="rtl"
              />
            </div>
            {formData.courses && formData.courses.length > 0 && (
              <div className="flex gap-[4px] items-center justify-end w-full flex-wrap">
                {formData.courses.map((course, index) => (
                  <div key={index} className="bg-[#e8e8e8] flex items-center justify-center p-[4px] rounded-[8px]">
                    <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#c3c3c3] text-[14px] text-right whitespace-nowrap">
                      <p className="leading-[22px]">{course}</p>
                    </div>
                    <div className="relative w-[20px] h-[20px] cursor-pointer" onClick={() => handleRemoveCourse(index)}>
                      <Image alt="Close" className="block w-full h-full object-contain" src={imgLawyerDetailsCloseSquare} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4AcademicExperience;
