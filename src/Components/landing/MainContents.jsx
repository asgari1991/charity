import React from "react";
import SectionsTitle from "./SectionsTitle";
import CooperationSlider from "./CooperationSlider";
import IntroductionSlider from "./IntroductionSlider";

// Import images from public folder
const introductionPic1 = "/img/introductionPic1.jpg";
const introductionPic2 = "/img/introductionPic2.jpg";
const introductionPic3 = "/img/introductionPic3.jpg";
const introductionPic4 = "/img/introductionPic4.jpg";
const introductionPic5 = "/img/introductionPic5.jpg";
const mainPic = "/img/mainPic.png";

const cooperation = [
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

const MainContents = () => {
  return (
    <section>
      <div className="px-3 mb-[35px]">
        <SectionsTitle title=" معرفی موسسه" />
      </div>
      <div className="md:hidden w-[100vw]">
        <p className="text-[#666666] text-[18px] text-justify px-5 mb-4 font-sans">
          خدمت به جامعه با تمرکز بر کمک به نیازمندان و فقرزدایی با همت جمعی از
          دغدغه مندان شهرستان اراک
        </p>
        <IntroductionSlider />
      </div>
      <section className="hidden md:flex flex-col pb-[29px] mb-[80px] px-[24px]  justify-center items-center bg-mainBg1 bg-no-repeat bg-center bg-cover">
        <div className="mb-[33px] px-[50px] lg:px-[220px]">
          <h2 className="text-[#333333] hidden md:block text-[32px] font-sansBold text-center">
            معرفی موسسه
          </h2>

          {/* <p className="text-[#666666] text-[10px] md:text-[18px] font-sans">
            موسسه خیریه توانا در سال ....با هدف خدمت به جامعه با تمرکز بر کمک به
            نیازمندان و فقرزدایی با همت جمعی از دغدغه مندان شهرستان اراک ایجاد
            گردید. در حال حاضر پس از گذشت .... سال, تعداد ....خانواده نیازمند
            تحت پوشش قرارگرفته اند و تعداد.... داوطلب در اداره امور خیریه همکاری
            می کنند.
          </p> */}
        </div>
        <div className="w-fit flex flex-col items-center gap-[22px] h-[580px]">
          <div className="px-20 flex justify-center">
            <img
              src={introductionPic1}
              className="h-[300px] md:h-[580px] object-contain rounded-[16px]"
              alt=""
            />
            <div className="h-full flex flex-col justify-center gap-9 mr-[30px]">
              <img
                src={introductionPic2}
                className="h-[270px] w-[235px] object-fill rounded-[16px]"
                alt=""
              />
              <img
                src={introductionPic3}
                className="h-[270px] w-[235px] object-fill rounded-[16px]"
                alt=""
              />
            </div>
            <div className="h-full  flex-col justify-center gap-9 mr-[30px] hidden lg:flex">
              <img
                src={introductionPic4}
                className="h-[270px] w-[538px] object-fill rounded-[16px]"
                alt=""
              />
              <img
                src={introductionPic5}
                className="h-[270px] w-[538px] object-fill rounded-[16px]"
                alt=""
              />
            </div>
          </div>
          {/* <div className="gap-[24px] hidden lg:flex mx-auto">
            <img
              src={mainPic}
              className="w-[460px] h-[284px] object-cover rounded-[40px]"
              alt=""
            />
            <img
              src={mainPic}
              className="w-[460px] h-[284px] object-cover rounded-[40px]"
              alt=""
            />
          </div> */}
        </div>
      </section>
      <div className="px-3 mb-[35px]">
        <SectionsTitle title="فروشگاه" />
      </div>
      <section className="flex flex-col pb-[29px] mb-[31px] px-[24px]  justify-center items-center bg-mainBg1 bg-no-repeat bg-center bg-cover">
        <div className="mb-[33px] lg:px-[220px]">
          <h2 className="text-[#333333] hidden md:block text-[32px] font-sansBold text-center">
            فروشگاه موسسه
          </h2>

          <p className="text-[#666666] text-[20px] font-sans">
            فروشگاه محصولات تهیه شده توسط اعضای موسسه خیریه
          </p>
        </div>
        <div className="w-full flex flex-col gap-[22px] ">
          <div className="lg:px-[220px] flex justify-center">
            <img
              src={mainPic}
              className="w-[1000px] h-[200px] md:h-[380px] object-contain rounded-[40px]"
              alt=""
            />
          </div>
          <div className="gap-[24px] hidden lg:flex mx-auto">
            <img
              src={mainPic}
              className="w-[460px] h-[284px] object-cover rounded-[40px]"
              alt=""
            />
            <img
              src={mainPic}
              className="w-[460px] h-[284px] object-cover rounded-[40px]"
              alt=""
            />
          </div>
        </div>
        <button className="bg-[#FCBD01] py-[8px] px-[12px] rounded-[10px] text-[16px] font-sans lg:ml-20 lg:mr-auto ml-auto mt-[44px]">
          مشاهده همه محصولات
        </button>
      </section>
      <div className="px-3 mb-[35px]">
        <SectionsTitle title="همکاری با موسسه" />
      </div>
      <section className="flex flex-col  px-[73px] justify-center items-center bg-cooperationBg bg-no-repeat bg-center bg-cover">
        <div className="mb-[33px]">
          <h2 className="text-[#333333] hidden md:block text-[32px] font-sansBold text-center">
            همکاری با موسسه
          </h2>
          <p className="text-[#666666] text-[20px] font-sans">
            از همه علاقمندان به فعالیت های داوطلبانه و خیریه دعوت به همکاری می
            شود.
          </p>
        </div>
        <div className="w-full hidden md:flex md:flex-col justify-center ">
          {cooperation.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center gap-[40px] ${
                item.id === 2 && "justify-center"
              }`}
            >
              <img
                src={item.image}
                className="w-[287px] h-[240px] object-contain"
                alt=""
              />
              <div className="">
                <h2 className="text-[#414141] text-[20px] font-sans font-semibold text-start">
                  {item.title}
                </h2>
                <p className="text-[#6A6A6A] text-[16px] font-sansLight max-w-[411px]">
                  {item.subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        <CooperationSlider />
      </section>
      <section className="pt-[24px] pb-[30px] bg-gradient-to-l gap-[29px] from-[#EDF8F4] to-[#F6FDFF] flex flex-col items-center w-full">
        <div>
          <p className="text-[#000000] text-[16px] font-sansBold px-5 md:px-0">
            چنانچه علاقمند به اطلاع از برنامه های خیریه هستید شماره تلفن همراه
            خود را ثبت بفرمایید.
          </p>
        </div>
        <div className="relative">
          <input
            type="text"
            className="w-[350px] sm:w-[400px] md:w-[768px] h-[56px] rounded-[37px] bg-white shadow-lg shadow-[rgba(0,0,0,0.25)] pr-[38px] outline-none"
            placeholder="شماره تلفن همراه خود را وارد کنید."
          />
          <button className="absolute md:left-1 left-1 top-[1px] md:-top-[7px] bg-[rgba(251,209,3,1)] md:p-[16px] p-[12px] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.9692 15.3565L25.4886 10.1052C25.8619 9.87543 25.8576 9.51645 25.8375 9.37141C25.8174 9.22638 25.7284 8.87745 25.3048 8.75108L3.12678 2.18445C2.73477 2.06957 2.46769 2.28066 2.37292 2.37543C2.27815 2.46733 2.07568 2.73012 2.18337 3.11064L8.6824 25.3048C8.80589 25.7255 9.15913 25.8174 9.30416 25.8375C9.45206 25.8576 9.81823 25.8634 10.0523 25.4915L15.4413 16.8743L7.74761 9.26085C7.32545 8.84298 7.32114 8.1609 7.739 7.7373C8.15685 7.31369 8.84036 7.31082 9.26252 7.72868L16.9692 15.3565ZM28 9.48342C28 10.4828 27.4917 11.399 26.6186 11.9389L17.5852 17.5061L11.8774 26.633C11.2613 27.6167 10.1643 28.1308 9.01123 27.9714C7.85818 27.8134 6.94205 27.0222 6.6161 25.9108L0.117068 3.71662C-0.181606 2.69565 0.101273 1.60145 0.850829 0.84901C1.60757 0.0965691 2.71323 -0.183441 3.73849 0.120981L25.915 6.68761C27.0307 7.01645 27.8191 7.93546 27.9727 9.08566C27.99 9.22064 28 9.35131 28 9.48342Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </section>
    </section>
  );
};

export default MainContents;
