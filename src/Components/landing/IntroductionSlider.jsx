import React from "react";

const interductionImages = [
  {
    id: 1,
    image: "/img/introductionPic1.jpg",
  },
  {
    id: 2,
    image: "/img/introductionPic2.jpg",
  },
  {
    id: 3,
    image: "/img/introductionPic3.jpg",
  },
  {
    id: 4,
    image: "/img/introductionPic4.jpg",
  },
  {
    id: 5,
    image: "/img/introductionPic5.jpg",
  },
];

const IntroductionSlider = () => {
  return (
    <div className="w-full flex items-center justify-center mb-[40px]">
      {interductionImages.map((item) => (
        <img
          key={item.id}
          src={item.image}
          className="h-[302px] w-[300px] sm:w-[340px] object-fill rounded-[16px]"
          alt="معرفی موسسه"
        />
      ))}
    </div>
  );
};

export default IntroductionSlider;
