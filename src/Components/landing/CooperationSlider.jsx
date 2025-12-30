import React from "react";

// A simple, mobile-friendly list instead of a carousel to avoid extra
// dependencies like react-slick and slick-carousel.
const cooperationItems = [
  {
    id: 1,
    title: "معلم نیکوکار",
    subTitle:
      "آموزگاران خیری که دانش خود را بی دریغ در اختیار کودکان نیازمند و محروم از تحصیل میگذارند.",
    image: "/img/cooperationPic1.png",
  },
  {
    id: 2,
    title: "پزشک نیکوکار",
    subTitle:
      "کادر درمان نیکوکار که با ارایه خدمات رایگان سهم بزرگی در کاهش هزینه های خانواده های تحت پوشش دارند.",
    image: "/img/cooperationPic2.png",
  },
  {
    id: 3,
    title: "کاسب نیکوکار",
    subTitle:
      "کسبه و استادکاران نیکوکار که حتی با به اشتغال گرفتن یکی از جوانان تحت حمایت مرکز, در ریشه کن کردن فقر در جامعه نقش مهمی اجرا میکنند.",
    image: "/img/cooperationPic3.png",
  },
];

const CooperationSlider = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center md:hidden mb-[40px] gap-10">
      {cooperationItems.map((item) => (
        <div
          dir="rtl"
          key={item.id}
          className="flex flex-col sm:flex-row items-center gap-[24px] sm:px-10"
        >
          <img
            src={item.image}
            className="w-[287px] h-[240px] object-contain rounded-lg"
            alt={item.title}
          />
          <div>
            <h2 className="text-[#414141] text-[20px] font-sans font-semibold text-start mb-2">
              {item.title}
            </h2>
            <p className="text-[#6A6A6A] text-[16px] font-sansLight max-w-[411px]">
              {item.subTitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CooperationSlider;
