import { useState } from 'react';
import {
  imgLawyerDetailsCloseSquare2,
  imgLawyerDetailsGallery,
  imgLawyerDetailsPlayCircle,
  imgLawyerDetailsVideoPlay,
  imgLawyerDetailsGallery1,
  imgLawyerDetailsGallery2,
  imgLawyerDetailsGallery3,
  imgLawyerDetailsGallery4
} from '../../constants/images';
import Image from '../Image';

function Step5Gallery({ formData, onFileChange, errors }) {
  const [uploadedImages, setUploadedImages] = useState(formData.galleryImages || []);
  const [uploadedVideos, setUploadedVideos] = useState(formData.galleryVideos || []);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 10 - uploadedImages.length);
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name
    }));
    const updatedImages = [...uploadedImages, ...newImages];
    setUploadedImages(updatedImages);
    onFileChange('galleryImages', updatedImages.map(img => img.file));
  };

  const handleVideoUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 10 - uploadedVideos.length);
    const newVideos = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name
    }));
    const updatedVideos = [...uploadedVideos, ...newVideos];
    setUploadedVideos(updatedVideos);
    onFileChange('galleryVideos', updatedVideos.map(vid => vid.file));
  };

  const handleRemoveImage = (index) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newImages);
    onFileChange('galleryImages', newImages.map(img => img.file));
  };

  const handleRemoveVideo = (index) => {
    const newVideos = uploadedVideos.filter((_, i) => i !== index);
    setUploadedVideos(newVideos);
    onFileChange('galleryVideos', newVideos.map(vid => vid.file));
  };

  // Show placeholder images from Figma initially, then replace with uploaded images
  const displayImages = uploadedImages.length > 0 
    ? uploadedImages 
    : [{ preview: imgLawyerDetailsGallery1 }, { preview: imgLawyerDetailsGallery2 }];

  // Show placeholder videos from Figma initially, then replace with uploaded videos
  const displayVideos = uploadedVideos.length > 0
    ? uploadedVideos
    : [
        { preview: imgLawyerDetailsGallery3 },
        { preview: imgLawyerDetailsGallery4 },
        { preview: imgLawyerDetailsGallery4 }
      ];

  return (
    <div className="flex flex-col gap-[20px] items-start w-full">
  {/* Images Row */}
  <div className="flex gap-[20px] items-center items-start justify-start">
    {/* Upload Images FIRST */}
    {uploadedImages.length < 10 && (
      <div className="bg-[#e8f4fd] border border-[#0a4875] border-dashed flex flex-col gap-[10px] h-[220px] items-center justify-center p-[10px] relative rounded-[10px] w-[185px]">
        <label className="w-full h-full flex flex-col gap-[10px] items-center justify-center cursor-pointer">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="relative w-[32px] h-[32px]">
            <Image
              alt="Gallery"
              className="block w-full h-full object-contain"
              src={imgLawyerDetailsGallery}
            />
          </div>
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#0a4875] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[22px]">يمكنك رفع صور لك و للمكتب</p>
          </div>
          <div className="flex flex-col font-cairo font-normal justify-center leading-[0] opacity-60 text-[#0a4875] text-[12px] text-center tracking-[0.4px]">
            <p className="leading-[18px] whitespace-pre-wrap">
              يجب ألا يتجاوز حجم الصورة 15 كيلو بايت، ويمكنك رفع حتى 10 صور
            </p>
          </div>
        </label>
      </div>
    )}

    {/* Images */}
    {displayImages.slice(0, 2).map((image, index) => (
      <div
        key={index}
        className="flex flex-col h-[220px] items-start p-[10px] relative rounded-[10px] w-[185px]"
      >
        <img
          alt={`Gallery ${index + 1}`}
          className="absolute inset-0 object-cover pointer-events-none rounded-[10px] w-full h-full"
          src={image.preview}
        />
        {uploadedImages.length > 0 && (
          <div
            className="bg-white relative rounded-[8px] w-[24px] h-[24px] cursor-pointer z-10"
            onClick={() => handleRemoveImage(index)}
          >
            <Image
              alt="Close"
              className="block w-full h-full object-contain"
              src={imgLawyerDetailsCloseSquare2}
            />
          </div>
        )}
      </div>
    ))}
  </div>

  {/* Videos Row */}
  <div className="flex gap-[20px] items-center justify-start">
    {/* Upload Videos FIRST */}
    {uploadedVideos.length < 10 && (
      <div className="bg-[#e8f4fd] border border-[#0a4875] border-dashed flex flex-col gap-[10px] h-[220px] items-center justify-center p-[10px] relative rounded-[10px] w-[185px]">
        <label className="w-full h-full flex flex-col gap-[10px] items-center justify-center cursor-pointer">
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={handleVideoUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="relative w-[32px] h-[32px]">
            <Image
              alt="Video"
              className="block w-full h-full object-contain"
              src={imgLawyerDetailsVideoPlay}
            />
          </div>
          <div className="flex flex-col font-cairo font-medium justify-center leading-[0] text-[#0a4875] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[22px]">يمكنك رفع فيديوهات تعريفية</p>
          </div>
          <div className="flex flex-col font-cairo font-normal justify-center leading-[0] opacity-60 text-[#0a4875] text-[12px] text-center tracking-[0.4px]">
            <p className="leading-[18px] whitespace-pre-wrap">
              يجب ألا يتجاوز حجم الفيديو 1 ميجابايت، ويمكنك رفع حتى 10 فيديوهات
            </p>
          </div>
        </label>
      </div>
    )}

    {/* Videos */}
    {displayVideos.slice(0, 3).map((video, index) => (
      <div
        key={index}
        className="flex flex-col gap-[10px] h-[220px] items-end p-[10px] relative rounded-[10px] w-[185px]"
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <img
            alt={`Video ${index + 1}`}
            className="absolute object-cover rounded-[10px] w-full h-full"
            src={video.preview}
          />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[10px] to-black"></div>
        </div>

        {uploadedVideos.length > 0 && (
          <div
            className="bg-white relative rounded-[8px] w-[24px] h-[24px] cursor-pointer z-10"
            onClick={() => handleRemoveVideo(index)}
          >
            <Image
              alt="Close"
              className="block w-full h-full object-contain"
              src={imgLawyerDetailsCloseSquare2}
            />
          </div>
        )}

        <div className="absolute left-[calc(50%+0.5px)] rounded-[30px] w-[40px] h-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-10">
          <Image
            alt="Play"
            className="block w-full h-full object-contain"
            src={imgLawyerDetailsPlayCircle}
          />
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Step5Gallery;
