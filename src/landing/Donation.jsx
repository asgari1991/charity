import React from "react";
import { Field, Form, Formik } from "formik";

// Use images from public/img
const donationHeader = "/img/donation/donation-bg.png";
const headerTitleBg = "/img/header-title-bg.png";

const Donation = () => {
  const formValues = [
    { title: "نام و نام خانوادگی", name: "name", type: "text" },
    { title: "تلفن همراه", name: "phone", type: "text" },

    // { title: "توضیحات", name: "description", type: "text" },
  ];

  const initialValues = {
    name: "",
    phone: "",
  };
  return (
    <section className="max-w-[2000px] relative md:mx-auto mx-[21px]  lg:rounded-none lg-[21px] rounded-3xl">
      <img
        src={donationHeader}
        alt="کمک مالی"
        className="rounded-none hidden md:block max-h-[150px] w-full object-cover"
      />
      <div className="relative flex justify-center">
        <img
          src={headerTitleBg}
          alt="کمک مالی"
          className="md:hidden relative w-[400px]"
        />
        <p className="font-sans text-[24px] absolute top-[28%] sm:right-[35%] right-[25%] md:hidden ">
          کمک مالی
        </p>
      </div>
      <div className="px-[30px] md:px-[80px] py-[50px] text-[#323232] font-sans space-y-[50px]">
        <p>
          پس از انتخاب مبالغ ثبت شده یا ثبت مبلغ دلخواه, دکمه انتقال به درگاه
          بانکی را انتخاب بفرمایید.
        </p>
      </div>
      <div className="border-[3px] w-[340px] border-[#D0D0D0] flex flex-col gap-2 mx-auto sm:w-fit pt-[42px] pb-[33px] px-[34px]">
        <div className="bg-[#965995] min-h-[50px] flex justify-between w-full py-[13px] px-[14px] text-white">
          {/* <p dir="ltr">50 000</p>
          <p>پنجاه هزار تومان </p> */}
        </div>
        <div dir="ltr" className="flex gap-3 mb-5">
          <p className="bg-[#EEEEEE] text-[#636363] py-2 px-5 rounded-lg font-sans text-[13px]">
            انتخاب مبلغ دلخواه---
          </p>
          {/* <p className="bg-[#EEEEEE] py-2 px-5 rounded-lg hidden sm:inline">
            100 000
          </p> */}
          {/* <p className="py-2 px-5 rounded-lg bg-[#965995] text-white">50 000</p>
          <p className="bg-[#EEEEEE] py-2 px-5 rounded-lg">10 000</p> */}
        </div>
        <p className="text-[#323232] font-sans text-sm mb-6">
          در صورت تمایل اطلاعات خود را وارد نمایید.
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={(value, { resetForm }) => {
            resetForm();
            alert(JSON.stringify(value, null, 2));
          }}
        >
          <Form className="flex flex-col gap-9 items-center">
            {formValues.map((item) => (
              <>
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-3">
                    {item.title}
                  </label>
                  <Field
                    id={item.name}
                    name={item.name}
                    type={item.type}
                    className="w-[300px] sm:w-[500px] h-[55px] border border-[#9F9F9F] rounded-[10px] px-[30px] focus-within:outline-[#9F9F9F]"
                  />
                </div>
                {/* {item.name == "cooperationType" && (
                  <div className="flex flex-col">
                    <label htmlFor="name" className="mb-3">
                      توضیحات
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      id="description"
                      className="w-[500px] h-[100px] border border-[#9F9F9F] rounded-[10px] px-[30px] py-3 focus-within:outline-[#9F9F9F]"
                    />
                  </div>
                )} */}
              </>
            ))}
            <button
              type="submit"
              className="bg-[#B88E2F] py-3 px-12 text-white flex justify-center items-center rounded-[5px]"
            >
              ثبت
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Donation;
