import React from "react";
import SectionsTitle from "./SectionsTitle";

// Import images from public folder
const landing = "/img/landing.png";
const mobileLanding = "/img/mobile/mobileLanding.png";

// Import feature icons and data
const feature1 = "/icons/feature1.png";
const feature2 = "/icons/feature2.png";
const feature3 = "/icons/feature3.png";

const features = [
  {
    id: 1,
    title: "تهیه اقلام ضروری",
    subTitle: "تهیه اقلام خوراکی و مصرفی",
    icon: feature1,
  },
  {
    id: 2,
    title: "رسیدگی به ایتام",
    subTitle: "ایتام سادات و غیر سادات",
    icon: feature2,
  },
  {
    id: 3,
    title: "ارایه مستمری ماهانه",
    subTitle: "کمک هزینه ماهانه به سرپرستان خانوار",
    icon: feature3,
  },
];

const Landing = () => {
  return (
    <section className="max-w-[2000px] relative md:mx-auto mx-[21px]  lg:rounded-none lg-[21px] rounded-3xl">
      <img
        src={landing}
        alt="موسسه خیریه توانا"
        className="rounded-none hidden md:block"
      />
      <img
        src={mobileLanding}
        alt="موسسه خیریه توانا"
        className="rounded-3xl md:hidden "
      />
      <button className="flex items-center  text-[13px] lg:text-[16px] gap-[11px] bg-gradient-to-l from-[#097E15] to-[#20CC32] py-[9px] px-[23px] text-white font-sansMedium rounded-lg absolute bottom-[50%] left-[35%] lg:bottom-[40%] md:left-[60%] md:bottom-[50%] sm:left-[38%] lg:left-[60%] shadow-lg shadow-slate-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.6007 1.14593C13.2743 0.084255 15.9773 -0.91968 18.3115 1.46071C23.8525 7.11136 14.3502 18 10 18C5.64988 18 -3.85249 7.11136 1.68853 1.46072C4.02272 -0.919653 6.72564 0.0842676 8.39929 1.14593C9.34498 1.74582 10.655 1.74582 11.6007 1.14593ZM5.78882 3.70109C6.17602 3.55395 6.37063 3.12078 6.22349 2.73358C6.07635 2.34638 5.64318 2.15178 5.25598 2.29891C4.68523 2.51581 4.13343 2.86843 3.61721 3.38024C2.96287 4.02899 2.52693 4.76568 2.2833 5.55572C2.16124 5.95154 2.38317 6.37137 2.77899 6.49343C3.17481 6.61548 3.59464 6.39356 3.7167 5.99774C3.88666 5.44658 4.19156 4.92308 4.67331 4.44544C5.05159 4.07039 5.42812 3.83816 5.78882 3.70109Z"
            fill="white"
          />
        </svg>
        <span>حمایت مالی</span>
      </button>
      <SectionsTitle title="اقدامات" />
      <div className="flex md:flex-row flex-col md:gap-[100px] md:my my-[40px] md:my-[30px] gap-[32px] h-[219px] items-center justify-center  bg-features bg-no-repeat bg-center bg-cover">
        {features.map((item, index) => (
          <div
            className={`w-[285px] flex gap-5 ${
              index === 1 && "mr-[120px] md:mr-0"
            }`}
          >
            <img src={item.icon} alt="" className="size-[64px]" />
            <div className="pt-1 min-w-fit">
              <p className="text-[#666666] text-[16px] font-sansBold pb-[6px]">
                {item.title}
              </p>
              <p className="text-[#686868] text-[14px] font-sans">
                {item.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Landing;
