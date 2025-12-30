import React from "react";
import "./style.css";

// Use images from public/img instead of ../../assets/images
const eventsHeader = "/img/events/events-bg.png";
const headerTitleBg = "/img/header-title-bg.png";
const eventPost = "/img/events/event-post.png";

const EVENTS = [1, 2, 3];
const Events = () => {
  return (
    <section className="max-w-[2000px] relative md:mx-auto mx-[21px]  lg:rounded-none lg-[21px] rounded-3xl">
      <img
        src={eventsHeader}
        alt="رویداد ها"
        className="rounded-none hidden md:block max-h-[150px] w-full object-cover"
      />
      <div className="relative flex justify-center">
        <img
          src={headerTitleBg}
          alt="همکاری با موسسه"
          className="md:hidden relative w-[400px]"
        />
        <p className="font-sans text-[24px] absolute top-[28%] sm:right-[35%] right-[25%] md:hidden ">
          رویدادها
        </p>
      </div>
      <div className="md:px-[25px] lg:px-[80px] py-[50px] text-[#323232] font-sans space-y-[50px]">
        <p className="text-[#004743] md:text-black font-sans text-[24px] md:text-[15px]">
          گزارش از رویدادهای برگزار شده توسط موسسه در سالهای اخیر
        </p>
        <div className="grid grid-cols-1 gap-[31px]">
          {EVENTS.map((id) => (
            <div
              key={id}
              className="flex flex-col sm:flex-row items-center justify-center sm:gap-[26px]"
            >
              <img
                src={eventPost}
                alt="رویداد"
                className="w-[350px] h-[200px] object-cover sm:size-[200px]  rounded-lg"
              />
              <div className="flex flex-col sm:justify-between gap-2 sm:h-[200px]">
                <p className="text-[#565656] font-sansBold text-[16px] sm:text-[26px] pt-4">
                  رویداد تجلیل از خیرین استان با حضور عموم مردم
                </p>
                <p className="text-[15px] text-[#6F6F6F] font-sansLight hidden md:block">
                  رویداد تجلیل از خیرین استان با حضور عموم مردم رویداد تجلیل از
                  خیرین استان با حضور عموم مردم رویداد تجلیل از خیرین استان با
                  حضور عموم مردم رویداد تجلیل از خیرین استان با حضور عموم مردم
                  رویداد تجلیل از خیرین استان با حضور عموم مردم رویداد تجلیل از
                </p>
                <div>
                  <button className="bg-[#9A6AD8] px-7 py-1 rounded-2xl text-white">
                    بیشتر
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
