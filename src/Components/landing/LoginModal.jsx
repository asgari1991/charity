import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../general/Modal";
import { Field, Form, Formik } from "formik";
import axios from "../../axiosSetup";
const LoginModal = ({ loginModalShow, setLoginModalShow }) => {
  const navigate = useNavigate();

  const formValues = [
    { title: "نام کاربری", name: "userName", type: "text" },
    { title: "کلمه عبور", name: "password", type: "password" },
  ];
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    userName: "",
    password: "",
  };

  function onClose() {
    setLoginModalShow(false);
    setIsSubmit(false);
  }

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setIsSubmit(true);
    try {
      const res = await axios.post(`/api/user/login`, {
        username: values.userName,
        password: values.password,
      });

      console.log("Login success:", res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);

      resetForm();
      setLoginModalShow(false);
      // Redirect to dashboard after successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(error.response?.data?.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      show={loginModalShow}
      setShow={setLoginModalShow}
      onClose={onClose}
      title=""
      content={
        <section className="bg-white p-5 w-[500px] rounded-b-[8px]">
          <p className="text-[#323232] text-[18px] text-center mb-[20px] font-sansMedium">
            لطفا نام کاربری و کلمه عبور را وارد کنید.
          </p>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-[15px] items-center">
                {formValues.map((item) => (
                  <div className="flex flex-col" key={item.name}>
                    <Field
                      placeholder={item.title}
                      name={item.name}
                      type={item.type}
                      className="w-[350px] sm:w-[300px] h-[50px] border border-[#9F9F9F] rounded-[10px] px-[30px] focus:outline-[#9F9F9F]"
                    />
                  </div>
                ))}
                {isSubmit && errorMessage && (
                  <p className="text-red-500 text-[13px] font-DanaDemiBold">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#4E6F88] mt-[20px] py-2 px-12 text-white rounded-[12px] disabled:opacity-50"
                >
                  {isSubmitting ? "در حال ورود..." : "ورود"}
                </button>
              </Form>
            )}
          </Formik>
        </section>
      }
    />
  );
};

export default LoginModal;
