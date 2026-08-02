import React, { Fragment, useEffect, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import axios from "../../axiosSetup";
import Button from "../general/button/Button";
import ListBox from "../general/listbox/ListBox";
import CustomInput from "../general/input/CustomInput";
import ErrorModal from "../general/modals/ErrorModal";
import GeneralSuccessModal from "../general/modals/GeneralSuccessModal";
import { convertEnglishToPersianDateChatGpt } from "../general/util";

const UsersModal = ({
  usersModalShow,
  setUsersModalShow,
  setSuccessModalShow,
}) => {
  // ---------------------------------------------------------------------
  // Users list states
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // ---------------------------------------------------------------------
  // New user form states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [roleList, setRoleList] = useState([
    { id: 0, name: "کاربر", is_admin: false },
    { id: 1, name: "مدیر", is_admin: true },
  ]);
  const [role, setRole] = useState(null);
  // ---------------------------------------------------------------------
  const [isSubmit, setIsSubmit] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  // ---------------------------------------------------------------------
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  // ---------------------------------------------------------------------

  const loadUsers = () => {
    setIsLoading(true);
    axios
      .get("/api/user")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data?.list || [];
        setUsersList(data);
      })
      .catch((error) => {
        console.log("خطا در دریافت کاربران:", error);
        setErrorMessage(
          error?.response?.data?.error || "خطا در دریافت لیست کاربران",
        );
        setShowErrorModal(true);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (usersModalShow) {
      loadUsers();
    }
  }, [usersModalShow]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    const errors = {};
    if (!username.trim()) errors.username = "نام کاربری الزامی است";
    if (!password.trim()) errors.password = "رمز عبور الزامی است";
    if (!name.trim()) errors.name = "نام الزامی است";

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});

    const requestBody = {
      username: username.trim(),
      password: password.trim(),
      name: name.trim(),
      is_admin: role?.is_admin ?? false,
    };

    axios
      .post("/user", requestBody)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setSuccessModalShow(true);
          loadUsers();
          resetForm();
          setIsSubmit(false);
        }
      })
      .catch((error) => {
        console.error("خطا در ثبت کاربر:", error);
        setErrorMessage(
          error?.response?.data?.error || "خطا در ثبت کاربر جدید",
        );
        setShowErrorModal(true);
        setIsSubmit(false);
      });
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setName("");
    setRole(null);
    setValidationErrors({});
  };

  const onClose = () => {
    setUsersModalShow(false);
    setTimeout(() => {
      resetForm();
    }, 200);
    setIsSubmit(false);
  };

  return (
    <Transition appear show={usersModalShow} as={Fragment}>
      <Dialog as="div" onClose={onClose} className="relative z-[100]">
        <ErrorModal
          showModal={showErrorModal}
          setShowModal={setShowErrorModal}
          errorMessage={errorMessage}
        />
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
                <Dialog.Panel className="flex relative flex-col items-center justify-center">
                  {/* ------------ Modal Header ------------ */}
                  <div className="w-[880px] rounded-t-[16px] flex items-center justify-between h-[54px] bg-gradient-to-l to-[#6F8FA8] from-mainBlue">
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
                      مدیریت کاربران
                    </span>
                  </div>

                  {/* ------------ Modal Body ------------ */}
                  <div className="flex flex-col rounded-b-[16px] w-[880px] bg-white items-start justify-center px-5 pb-5 max-h-[75vh] overflow-y-auto">
                    {/* ============ Add New User Form ============ */}
                    <form
                      onSubmit={onSubmitHandler}
                      id="addUserForm"
                      className="w-full mt-6"
                    >
                      <div className="relative border border-tableBorder rounded-lg flex flex-wrap items-start gap-3 py-4 px-5">
                        <span className="absolute text-[10px] right-[6px] -top-2 px-[4px] min-w-max cursor-text ease-in-out duration-500 font-iranSans text-mainBlue text-left transition-all bg-white">
                          ثبت کاربر جدید
                        </span>

                        <div className="flex flex-col">
                          <CustomInput
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            title="نام کاربری"
                          />
                          {validationErrors.username && (
                            <span className="text-red-600 text-[10px] mt-1 font-DanaDemiBold">
                              {validationErrors.username}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <CustomInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            title="رمز عبور"
                          />
                          {validationErrors.password && (
                            <span className="text-red-600 text-[10px] mt-1 font-DanaDemiBold">
                              {validationErrors.password}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <CustomInput
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            title="نام"
                          />
                          {validationErrors.name && (
                            <span className="text-red-600 text-[10px] mt-1 font-DanaDemiBold">
                              {validationErrors.name}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <ListBox
                            textSize="12px"
                            data={roleList}
                            onSelectHandler={(val) => setRole(val)}
                            itemName={(item) => item?.name}
                            placeHolder="سطح دسترسی"
                            value={role?.name}
                            color="#7F909C"
                            width="160px"
                            rounded="8px"
                          />
                        </div>

                        <div className="mr-auto mt-1 ml-2">
                          <Button
                            title="ثبت کاربر"
                            bg
                            isContractors
                            type="submit"
                            color="bg-mainBlue"
                            disabled={isSubmit}
                          />
                        </div>
                      </div>
                    </form>

                    {/* ============ Users List Table ============ */}
                    <div className="w-full mt-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-[14px] border-r-[4px] pr-[10px] border-mainBlue">
                          <h1 className="font-DanaDemiBold text-mainBlue">
                            لیست کاربران
                          </h1>
                          <span className="text-[11px] text-inputColor font-iranSans">
                            کاربرانی که به پنل مدیریت دسترسی دارند
                          </span>
                        </div>
                        <span className="flex items-center gap-1.5 text-[11px] font-DanaDemiBold text-mainBlue bg-[#F0F7FF] rounded-full px-3 py-1.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                            />
                          </svg>
                          {isLoading ? "..." : usersList.length} کاربر
                        </span>
                      </div>

                      {isLoading ? (
                        <div className="flex items-center justify-center py-10">
                          <div className="w-8 h-8 border-4 border-mainBlue border-t-transparent rounded-full animate-spin" />
                        </div>
                      ) : usersList.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center border border-tableBorder rounded-lg bg-tableBg/50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10 text-inputColor mb-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                            />
                          </svg>
                          <span className="text-inputColor text-[12px] font-iranSans">
                            هنوز کاربری ثبت نشده است
                          </span>
                        </div>
                      ) : (
                        <div className="border border-tableBorder rounded-lg overflow-hidden">
                          <table className="min-w-full">
                            <thead className="bg-tableBg font-DanaDemiBold text-xs">
                              <tr>
                                {[
                                  "ردیف",
                                  "نام کاربری",
                                  "نام",
                                  "سطح دسترسی",
                                  "تاریخ ایجاد",
                                ].map((h, i) => (
                                  <th
                                    key={i}
                                    scope="col"
                                    className="text-center text-[12px] text-mainBlue py-2.5"
                                  >
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {usersList.map((item, index) => (
                                <tr
                                  key={item.user_id || index}
                                  className="odd:bg-[#F0F7FF]"
                                >
                                  <td className="py-2.5 text-[12px] text-center font-iranSans">
                                    {index + 1}
                                  </td>
                                  <td className="py-2.5 text-[12px] text-center font-DanaMedium">
                                    <span dir="ltr" className="inline-block">
                                      {item.username || "--"}
                                    </span>
                                  </td>
                                  <td className="py-2.5 text-[12px] text-center font-iranSans">
                                    {item.name || "--"}
                                  </td>
                                  <td className="py-2.5 text-center">
                                    {item.is_admin ? (
                                      <span className="inline-flex items-center gap-1 text-[10px] font-DanaDemiBold text-[#00907F] bg-[#E6F6F4] rounded-full px-2.5 py-1">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-3 h-3"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                          />
                                        </svg>
                                        مدیر
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center gap-1 text-[10px] font-DanaDemiBold text-mainBlue bg-[#F0F7FF] rounded-full px-2.5 py-1">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-3 h-3"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                          />
                                        </svg>
                                        کاربر
                                      </span>
                                    )}
                                  </td>
                                  <td className="py-2.5 text-[12px] text-center font-iranSans">
                                    {item.created_at
                                      ? convertEnglishToPersianDateChatGpt(
                                          item.created_at,
                                        )
                                      : "--"}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
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

export default UsersModal;
