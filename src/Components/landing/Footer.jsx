import React from "react";

const Footer = () => {
  return (
    <section className="px-[30px] md:px-[80px] mt-[71px] flex justify-start gap-[99px] pb-11">
      <div className="flex flex-col gap-[16px]">
        <h1 className="text-[rgba(63,63,63,1)] text-[24px] font-sansBold">
          راه های ارتباطی
        </h1>
        <p className="text-[rgba(63,63,63,1)] text-[16px] font-sans ">
          اراک , خیابان شهید بهشتی, کوچه شمس, جنب حوزه علمیه حاج محمد ابراهیم
          خوانساری
        </p>
        <p className="text-[rgba(63,63,63,1)] text-[16px] font-sans ">
          شماره تلفن ثابت: 8634220183
        </p>
        {/* <p className="text-[rgba(63,63,63,1)] text-[16px] font-sans ">
          شماره تلفن همراه : 09181611233
        </p> */}
      </div>
      <div className="flex-col gap-[16px] hidden md:flex">
        <h1 className="text-[rgba(63,63,63,1)] text-[24px] font-sansBold">
          لینک های مهم
        </h1>
        <p className="text-[rgba(63,63,63,1)] text-[16px] font-sans ">
          فروشگاه
        </p>
        <p className="text-[rgba(63,63,63,1)] text-[16px] font-sans ">
          حمایت مالی
        </p>
        <p className="text-[rgba(63,63,63,1)] text-[16px] font-sans ">
          همکاری با موسسه
        </p>
      </div>
    </section>
  );
};

export default Footer;
