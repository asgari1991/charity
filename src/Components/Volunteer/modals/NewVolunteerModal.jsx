import React, { Fragment, useEffect, useState } from "react";
import Button from "../../general/button/Button";
import { Transition, Dialog } from "@headlessui/react";
import CustomDateInput from "../../general/date-picker/CustomDateInput";
import axios from "axios";
import ComboBox from "../../general/combox/ComboBox";
const NewVolunteerModal = ({
  newVolunteerModalShow,
  setNewVolunteerModalShow,
  setSuccessModalShow,
  setRefresh,
  updateMode,
  setUpdateMode,
}) => {
  //-------------------------------------------------------
  // Volunteer states
  const [volunteerFirstName, setVolunteerFirstName] = useState("");
  const [volunteerLastName, setVolunteerLastName] = useState("");
  const [volunteerPhone, setVolunteerPhone] = useState("");
  const [volunteerBank, setVolunteerBank] = useState("");
  const [volunteerBankAccount, setVolunteerBankAccount] = useState("");
  //-------------------------------------------------------
  const [genderList, setGenderList] = useState([
    { id: 1, name: "مرد" },
    { id: 2, name: "زن" },
  ]);
  const [gender, setGender] = useState("");

  //-------------------------------------------------------
  const [isSubmit, setIsSubmit] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  //-------------------------------------------------------

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    // Validate required fields
    const errors = {};
    if (!volunteerFirstName) errors.volunteerFirstName = "نام الزامی است";
    if (!volunteerLastName)
      errors.volunteerLastName = "نام خانوادگی الزامی است";
    if (!volunteerPhone) errors.volunteerPhone = "شماره تلفن الزامی است";

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});

    const requestBody = {
      name: volunteerFirstName,
      family: volunteerLastName,
      mobile: volunteerPhone,
      bank: volunteerBank,
      account_number: volunteerBankAccount,
    };

    axios
      .post(`http://195.88.208.6:5000/api/donors`, requestBody)
      .then((res) => {
        if (res.status===201) {
        setSuccessModalShow(true)
          setRefresh((prev) => !prev);
          onClose();
          // Reset form
          setVolunteerFirstName("");
          setVolunteerLastName("");
          setVolunteerPhone("");
          setVolunteerBank("");
          setVolunteerBankAccount("");

          setIsSubmit(false);
        }
      })
      .catch((error) => {
        console.error("Error submitting volunteer:", error);
        setIsSubmit(false);
      });
  };

  const onClose = () => {
    setNewVolunteerModalShow(false);
    setTimeout(() => {
      setUpdateMode(false);
    }, 200);
    setIsSubmit(false);
    setValidationErrors({});
  };

  return (
    <Transition appear show={newVolunteerModalShow} as={Fragment}>
      <Dialog as="div" onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur bg-black bg-opacity-60" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div dir="rtl">
                <Dialog.Panel
                  className={`flex relative flex-col items-center justify-center`}
                >
                  <div className="w-[850px] rounded-t-[16px] flex items-center justify-between h-[54px] bg-gradient-to-l to-[#6F8FA8] from-mainBlue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white mr-4 cursor-pointer"
                      onClick={onClose}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white ml-auto mr-3 font-iranSans text-[14px]">
                      {updateMode ? "ویرایش خیر" : "ثبت خیر جدید "}
                    </span>
                  </div>
                  <div className="flex flex-col rounded-b-[16px] w-[850px] bg-white items-start justify-center px-4  pb-4">
                    <form
                      className="flex my-6 items-start justify-between flex-col xl:max-w-full mx-auto w-full z-50"
                      onSubmit={onSubmitHandler}
                      id="submitModal"
                    >
                      <div className="relative z-[10000] mb-[20px] border-[1px] border-tableBorder flex rounded-lg flex-wrap py-4 gap-3 px-5 w-full">
                        <span
                          className={`${`text-[10px] right-[6px] left-18 -top-2 px-[4px]`} absolute group-focus-within:px-[4px] 
      min-w-max cursor-text  ease-in-out duration-500  font-iranSans text-mainBlue text-left transition-all bg-white`}
                        >
                          مشخصات خیر
                        </span>
                        <input
                          type="text"
                          placeholder="نام "
                          value={volunteerFirstName}
                          onChange={(e) =>
                            setVolunteerFirstName(e.target.value)
                          }
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />{" "}
                        {validationErrors.volunteerFirstName && (
                          <span className="text-red-600 text-[9px] font-iranSansBold">
                            {validationErrors.volunteerFirstName}
                          </span>
                        )}{" "}
                        <input
                          type="text"
                          placeholder="نام خانوادگی "
                          value={volunteerLastName}
                          onChange={(e) => setVolunteerLastName(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />{" "}
                        {validationErrors.volunteerLastName && (
                          <span className="text-red-600 text-[9px] font-iranSansBold">
                            {validationErrors.volunteerLastName}
                          </span>
                        )}
                        <input
                          type="text"
                          placeholder="شماره همراه "
                          value={volunteerPhone}
                          onChange={(e) => setVolunteerPhone(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <div className="relative flex items-center">
                          <ComboBox
                            title="جنسیت "
                            data={genderList}
                            selectedValue={gender}
                            onChangeHandler={(val) => setGender(val)}
                            itemName={(item) => item.name}
                            color="#420E5A"
                            ringColor="#4E6F88"
                            rounded="8px"
                          />
                          {gender && (
                            <svg
                              onClick={() => {
                                setGender("");
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-mainBlue cursor-pointer  left-2 top-[7px] absolute"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          type="text"
                          placeholder="بانک  "
                          value={volunteerBank}
                          onChange={(e) =>
                            setVolunteerBank(e.target.value)
                          }
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <input
                          type="text"
                          placeholder="شماره حساب "
                          value={volunteerBankAccount}
                          onChange={(e) =>
                            setVolunteerBankAccount(e.target.value)
                          }
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                      </div>

                      <div className="mr-auto mt-1 ml-2">
                        <Button
                          title="ثبت فرم"
                          bg
                          isContractors
                          type="submit"
                          color="bg-mainBlue"
                          disabled={isSubmit}
                        />
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NewVolunteerModal;
