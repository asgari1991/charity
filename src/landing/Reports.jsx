import React from "react";
import "./events/style.css";

// Use images from public/img
const reportsHeader = "/img/reports/reports-header.png";
const headerTitleBg = "/img/header-title-bg.png";
const cashDonations = "/img/reports/cash-donations.png";
const nonCashDonations = "/img/reports/non-cash-contributions.png";
const voluntaryActivities = "/img/reports/voluntary-activities.png";

const Reports = () => {
  return (
    <section className="max-w-[2000px] relative md:mx-auto mx-[21px]  lg:rounded-none lg-[21px] rounded-3xl">
      <img
        src={reportsHeader}
        alt="گزارشات"
        className="rounded-none hidden md:block max-h-[150px] w-full object-cover"
      />
      <div className="relative flex justify-center">
        <img
          src={headerTitleBg}
          alt="گزارشات"
          className="md:hidden relative w-[400px]"
        />
        <p className="font-sans text-[24px] absolute top-[28%] sm:right-[35%] right-[25%] md:hidden ">
          گزارشات
        </p>
      </div>
      <div className="md:px-[80px] pt-[50px] pb-[20px] text-[#323232] font-sans space-y-[50px]">
        <p>
          گزارش اقدامات انجام شده در سالهای گذشته توسط موسسه, به تفکیک تهیه
          شده و آماده دانلود است.
        </p>

        <div className="grid-cols-1 hidden sm:grid lg:grid-cols-2 xl:grid-cols-3 gap-[38px] place-items-center">
          <div className="relative w-[368px] h-[434px] rounded-2xl">
            <img
              src={cashDonations}
              className="w-[368px] rounded-2xl h-[434px] object-cover"
              alt="گزارش کمک های نقدی"
            />
            <div className="absolute w-full flex flex-col items-start rounded-b-2xl justify-center py-[18px] px-[24px] gap-[7px] bottom-0 backdrop-blur-md text-white font-sansBold">
              <p>دانلود فایل PDF</p>
              <p>گزارش کمک های نقدی</p>
            </div>
          </div>
          <div className="relative w-[368px] h-[434px] rounded-2xl">
            <img
              src={nonCashDonations}
              className="w-[368px] rounded-2xl h-[434px] object-cover"
              alt="گزارش کمک های غیر نقدی"
            />
            <div className="absolute w-full flex flex-col items-start rounded-b-2xl justify-center py-[18px] px-[24px] gap-[7px] bottom-0 backdrop-blur-md text-white font-sansBold">
              <p>دانلود فایل PDF</p>
              <p>گزارش کمک های غیر نقدی</p>
            </div>
          </div>
          <div className="relative w-[368px] h-[434px] rounded-2xl">
            <img
              src={voluntaryActivities}
              className="w-[368px] rounded-2xl h-[434px] object-cover"
              alt="گزارش فعالیت های داوطلبانه"
            />
            <div className="absolute w-full flex flex-col items-start rounded-b-2xl justify-center py-[18px] px-[24px] gap-[7px] bottom-0 backdrop-blur-md text-white font-sansBold">
              <p>دانلود فایل PDF</p>
              <p>گزارش فعالیت های داوطلبانه</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:hidden gap-[38px] place-items-center">
          <div className="relative w-[368px] h-[434px] rounded-2xl">
            <img
              src={cashDonations}
              className="w-[368px] rounded-2xl h-[434px] object-cover"
              alt="گزارش کمک های نقدی"
            />
            <div className="absolute w-full flex flex-col items-start rounded-b-2xl justify-center py-[18px] px-[24px] gap-[7px] bottom-0 backdrop-blur-md text-white font-sansBold">
              <p>دانلود فایل PDF</p>
              <p>گزارش کمک های نقدی</p>
            </div>
          </div>
          <div className="relative w-[368px] h-[434px] rounded-2xl">
            <img
              src={nonCashDonations}
              className="w-[368px] rounded-2xl h-[434px] object-cover"
              alt="گزارش کمک های غیر نقدی"
            />
            <div className="absolute w-full flex flex-col items-start rounded-b-2xl justify-center py-[18px] px-[24px] gap-[7px] bottom-0 backdrop-blur-md text-white font-sansBold">
              <p>دانلود فایل PDF</p>
              <p>گزارش کمک های غیر نقدی</p>
            </div>
          </div>
          <div className="relative w-[368px] h-[434px] rounded-2xl">
            <img
              src={voluntaryActivities}
              className="w-[368px] rounded-2xl h-[434px] object-cover"
              alt="گزارش فعالیت های داوطلبانه"
            />
            <div className="absolute w-full flex flex-col items-start rounded-b-2xl justify-center py-[18px] px-[24px] gap-[7px] bottom-0 backdrop-blur-md text-white font-sansBold">
              <p>دانلود فایل PDF</p>
              <p>گزارش فعالیت های داوطلبانه</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
