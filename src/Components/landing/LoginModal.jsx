import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../general/Modal";
import { Field, Form, Formik } from "formik";
import axios from "axios";
const LoginModal = ({ loginModalShow, setLoginModalShow }) => {
  const navigate = useNavigate();
  
  const formValues = [
    { title: "نام کاربری", name: "userName", type: "text" },
    { title: "کلمه عبور", name: "password", type: "password" },
  ];

  const initialValues = {
    userName: "",
    password: "",
  };

  function onClose() {
    setLoginModalShow(false);
  }

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const res = await axios.post(`http://195.88.208.6:5000/api/user/login`, {
        username: values.userName,
        password: values.password,
      });

      console.log("Login success:", res.data);

      // example: save token
      localStorage.setItem("token", res.data.token);

      resetForm();
      setLoginModalShow(false);
      // Redirect to dashboard after successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert(
        error.response?.data?.message || "نام کاربری یا کلمه عبور اشتباه است"
      );
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
                      className="w-[350px] sm:w-[300px] h-[55px] border border-[#9F9F9F] rounded-[10px] px-[30px] focus:outline-[#9F9F9F]"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#4E6F88] mt-[20px] py-3 px-12 text-white rounded-[8px] disabled:opacity-50"
                >
                  {isSubmitting ? "در حال ارسال..." : "ثبت"}
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
