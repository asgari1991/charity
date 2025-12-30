import React from "react";
import { Field, Form, Formik } from "formik";

// Use images from public/img
const cooperationHeader = "/img/cooperation/cooperation-bg.png";
const headerTitleBg = "/img/header-title-bg.png";

const Cooperation = () => {
  const formValues = [
    { title: "نام و نام خانوادگی", name: "name", type: "text" },
    { title: "تلفن همراه", name: "phone", type: "text" },
    { title: "نوع همکاری", name: "cooperationType", type: "text" },
    // { title: "توضیحات", name: "description", type: "text" },
  ];

  const initialValues = {
    name: "",
    phone: "",
    cooperationType: "",
    description: "",
  };

  return (
    <section className="max-w-[2000px] relative md:mx-auto mx-[21px] lg:rounded-none lg-[21px] rounded-3xl">
      <img
        src={cooperationHeader}
        alt="موسسه خیریه توانا"
        className="rounded-none hidden md:block max-h-[150px] w-full object-cover"
      />
      <div className="relative flex justify-center">
        <img
          src={headerTitleBg}
          alt="همکاری با موسسه"
          className="md:hidden relative w-[400px]"
        />
        <p className="font-sans text-[24px] absolute top-[28%] sm:right-[35%] right-[25%] md:hidden ">
          همکاری با موسسه
        </p>
      </div>

      <div className=" pt-[55px] flex flex-col justify-center items-center gap-[90px] ">
        <div className="flex flex-col items-start gap-5">
          <p className="text-[#004743] md:text-[#323232] text-[18px] font-sansBold">
            موسسه به منظور تقویت روحیه همدلی در جامعه و با انگیزه جذب کمک های
            داوطلبانه از علاقمندان دعوت بعمل می آورد.
          </p>
          <p className="text-[#5F5656] text-[14px]">
            چنانچه تمایل به همکاری با موسسه را دارید, فرم زیر را تکمیل فرمایید.
          </p>
        </div>
        <Formik initialValues={initialValues} onSubmit={(value, { resetForm }) => resetForm()}>
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
                    className="w-[350px] sm:w-[500px] h-[55px] border border-[#9F9F9F] rounded-[10px] px-[30px] focus-within:outline-[#9F9F9F]"
                  />
                </div>
                {item.name == "cooperationType" && (
                  <div className="flex flex-col">
                    <label htmlFor="name" className="mb-3">
                      توضیحات
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      id="description"
                      className="w-[350px] sm:w-[500px] h-[100px] border border-[#9F9F9F] rounded-[10px] px-[30px] py-3 focus-within:outline-[#9F9F9F]"
                    />
                  </div>
                )}
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
        {/* <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-9 items-center"
        >
          {formValues.map((item) => (
            <>
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-3">
                  {item.title}
                </label>
                <input
                  id={item.name}
                  name={item.name}
                  type={item.type}
                  onChange={formik.handleChange}
                  value={formik.values[item.name]}
                  className="w-[500px] h-[55px] border border-[#9F9F9F] rounded-[10px] px-[30px] focus-within:outline-[#9F9F9F]"
                />
              </div>
              {item.name == "cooperationType" && (
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-3">
                    توضیحات
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    className="w-[500px] h-[100px] border border-[#9F9F9F] rounded-[10px] px-[30px] py-3 focus-within:outline-[#9F9F9F]"
                  ></textarea>
                </div>
              )}
            </>
          ))}
          <button
            type="submit"
            className="bg-[#B88E2F] py-3 px-12 text-white flex justify-center items-center rounded-[5px]"
          >
            ثبت
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Cooperation;
