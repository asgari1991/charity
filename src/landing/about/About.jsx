import React from "react";

// Use images from public/img
const aboutHeader = "/img/about-us/about-bg.png";
const headerTitleBg = "/img/header-title-bg.png";
const map = "/img/map.png";

const About = () => {
  return (
    <section className="max-w-[2000px] relative md:mx-auto mx-[21px]  lg:rounded-none lg-[21px] rounded-3xl">
      <img
        src={aboutHeader}
        alt="درباره ما"
        className="rounded-none hidden md:block max-h-[150px] w-full object-cover"
      />
      <div className="relative flex justify-center">
        <img
          src={headerTitleBg}
          alt="درباره ما"
          className="md:hidden relative w-[400px]"
        />
        <p className="font-sans text-[24px] absolute top-[28%] sm:right-[35%] right-[25%] md:hidden ">
          درباره ما
        </p>
      </div>
      <div className="mt-[45px] md:mt-[95px] md:px-[100px]">
        <p className="font-sansBold text-[20px] text-[#004743] mb-[20px]">
          موسسه خیریه تکفل ایتام و نیازمندان اراک
        </p>
      </div>

      <img
        src={map}
        alt="آدرس موسسه روی نقشه"
        className="rounded-[32px] w-full md:w-[85%]  md:object-contain mx-auto mb-[40px] mt-[30px] md:mt-[100px]"
      />
      <div className="w-[95%] mx-auto bg-aboutUsBg h-[250px] flex gap-8 lg:gap-0 items-center md:h-[130px] bg-cover bg-no-repeat bg-center  lg:pr-16 lg:pt-5">
        <div className="flex md:flex-row flex-col items-start justify-between gap-3 lg:gap-0 w-full lg:w-[80%]">
          <p className="text-[#464646] text-[16px] font-sans">
            اراک , خیابان شهید بهشتی, کوچه شمس, جنب حوزه علمیه حاج محمد ابراهیم
            خوانساری
          </p>
          <div className="text-[#464646] text-[16px] font-sans flex flex-col gap-5">
            <p>شماره تلفن ثابت: 8634220183</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
