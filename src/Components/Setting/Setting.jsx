import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "../../axiosSetup";
import UsersModal from "./UsersModal";
import GeneralSuccessModal from "../general/modals/GeneralSuccessModal";
import ErrorModal from "../general/modals/ErrorModal";

export default function Setting() {
  // ---------------------------------------------------------------------
  const [usersModalShow, setUsersModalShow] = useState(false);
  const [successModalShow, setSuccessModalShow] = useState(false);
  // ---------------------------------------------------------------------
  const [usersCount, setUsersCount] = useState(null);
  // ---------------------------------------------------------------------

  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data?.list || [];
        setUsersCount(data.length);
      })
      .catch((error) => {
        console.log("خطا در دریافت تعداد کاربران:", error);
      });
  }, [usersModalShow, successModalShow]);

  return (
    <>
      <UsersModal
        usersModalShow={usersModalShow}
        setUsersModalShow={setUsersModalShow}
        setSuccessModalShow={setSuccessModalShow}
      />
      <GeneralSuccessModal
        successModalShow={successModalShow}
        setSuccessModalShow={setSuccessModalShow}
      />

      <Header title={"تنظیمات"}>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.02006 5.35599L4.81994 6.19516L5.02006 5.35599ZM8.90172 3.22398L8.0754 2.9761L8.90172 3.22398ZM1.92178 10.4612L2.52645 9.84582L1.92178 10.4612ZM1.92178 14.7252L1.31712 14.1098H1.31712L1.92178 14.7252ZM5.02006 19.8303L5.22017 20.6695L5.02006 19.8303ZM8.90173 21.9623L8.0754 22.2102L8.90173 21.9623ZM15.0983 21.9623L15.9246 22.2102L15.0983 21.9623ZM18.9799 19.8303L19.1801 18.9912L18.9799 19.8303ZM22.0782 14.7252L21.4736 15.3405L22.0782 14.7252ZM22.0782 10.4612L21.4736 9.84582L22.0782 10.4612ZM18.9799 5.35599L18.7798 4.51681L18.9799 5.35599ZM15.0983 3.22398L15.9246 2.9761L15.0983 3.22398ZM4.81994 6.19516C6.91969 6.69587 9.11032 5.53104 9.72805 3.47187L8.0754 2.9761C7.73876 4.09829 6.49371 4.8205 5.22017 4.51681L4.81994 6.19516ZM2.52645 9.84582C1.71512 9.04857 1.70517 8.03294 2.18386 7.24417C2.66723 6.44771 3.63847 5.91343 4.81994 6.19516L5.22017 4.51681C3.25744 4.04877 1.55222 4.95931 0.708837 6.34899C-0.139215 7.74637 -0.126207 9.65821 1.31712 11.0765L2.52645 9.84582ZM2.52645 15.3405C4.07996 13.8139 4.07996 11.3724 2.52645 9.84582L1.31712 11.0765C2.18252 11.9269 2.18252 13.2594 1.31712 14.1098L2.52645 15.3405ZM4.81995 18.9912C3.63847 19.2729 2.66723 18.7386 2.18386 17.9422C1.70517 17.1534 1.71512 16.1378 2.52645 15.3405L1.31712 14.1098C-0.126207 15.5281 -0.139215 17.44 0.708837 18.8373C1.55222 20.227 3.25744 21.1376 5.22017 20.6695L4.81995 18.9912ZM9.72805 21.7145C9.11032 19.6553 6.91969 18.4905 4.81995 18.9912L5.22017 20.6695C6.49371 20.3658 7.73876 21.088 8.0754 22.2102L9.72805 21.7145ZM14.272 21.7145C13.9563 22.7668 13.0187 23.3236 12 23.3236C10.9813 23.3236 10.0437 22.7668 9.72805 21.7145L8.0754 22.2102C8.64927 24.1232 10.3652 25.049 12 25.049C13.6348 25.049 15.3507 24.1232 15.9246 22.2102L14.272 21.7145ZM19.1801 18.9912C17.0803 18.4905 14.8897 19.6553 14.272 21.7145L15.9246 22.2102C16.2612 21.088 17.5063 20.3658 18.7798 20.6695L19.1801 18.9912ZM21.4736 15.3405C22.2849 16.1378 22.2948 17.1534 21.8161 17.9422C21.3328 18.7386 20.3615 19.2729 19.1801 18.9912L18.7798 20.6695C20.7426 21.1376 22.4478 20.227 23.2912 18.8373C24.1392 17.44 24.1262 15.5281 22.6829 14.1098L21.4736 15.3405ZM21.4736 9.84582C19.92 11.3724 19.92 13.8139 21.4736 15.3405L22.6829 14.1098C21.8175 13.2594 21.8175 11.9269 22.6829 11.0765L21.4736 9.84582ZM19.1801 6.19516C20.3615 5.91343 21.3328 6.44771 21.8161 7.24417C22.2948 8.03294 22.2849 9.04857 21.4736 9.84582L22.6829 11.0765C24.1262 9.65821 24.1392 7.74637 23.2912 6.34899C22.4478 4.95931 20.7426 4.03877 18.7798 4.51681L19.1801 6.19516ZM14.272 3.47187C14.8897 5.53104 17.0803 6.69587 19.1801 6.19516L18.7798 4.51681C17.5063 4.8205 16.2612 4.09829 15.9246 2.9761L14.272 3.47187ZM15.9246 2.9761C15.3507 1.06311 13.6348 0.137294 12 0.137294C10.3652 0.137294 8.64927 1.06311 8.0754 2.9761L9.72805 3.47187C10.0437 2.41954 10.9813 1.86271 12 1.86271C13.0187 1.86271 13.9563 2.41954 14.272 3.47187L15.9246 2.9761ZM7.68647 12.5932C7.68647 14.9228 9.65877 16.7387 12 16.7387V15.0133C10.5296 15.0133 9.41188 13.8897 9.41188 12.5932H7.68647ZM12 16.7387C14.3412 16.7387 16.3135 14.9228 16.3135 12.5932H14.5881C14.5881 13.8897 13.4704 15.0133 12 15.0133V16.7387ZM16.3135 12.5932C16.3135 10.2636 14.3412 8.44759 12 8.44759V10.173C13.4704 10.173 14.5881 11.2966 14.5881 12.5932H16.3135ZM12 8.44759C9.65877 8.44759 7.68647 10.2636 7.68647 12.5932H9.41188C9.41188 11.2966 10.5296 10.173 12 10.173V8.44759Z"
            fill="#4E6F88"
          />
        </svg>
      </Header>

      {/* ------------ Settings Cards Grid ------------ */}
      <div className="w-full">
        {/* Future setting cards can be added here easily */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
          {/* ============ User Management Card ============ */}
          <div
            onClick={() => setUsersModalShow(true)}
            className="group relative overflow-hidden cursor-pointer rounded-2xl bg-gradient-to-bl from-mainBlue to-[#6F8FA8] p-6 text-white shadow-lg shadow-mainBlue/20 hover:shadow-2xl hover:shadow-mainBlue/30 hover:-translate-y-1.5 transition-all duration-300 ease-in-out"
          >
            {/* Decorative circles */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute -bottom-10 -right-6 w-36 h-36 rounded-full bg-white/5 group-hover:scale-125 transition-transform duration-500" />

            <div className="relative flex flex-col h-full">
              {/* Icon + arrow */}
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>

              {/* Title & description */}
              <div className="mt-5">
                <h2 className="font-DanaDemiBold text-lg">مدیریت کاربران</h2>
                <p className="mt-1.5 text-[12px] leading-6 text-white/75 font-iranSans">
                  مشاهده لیست کاربران پنل مدیریت و افزودن کاربر جدید با سطح
                  دسترسی مشخص
                </p>
              </div>

              {/* Footer: count badge */}
              <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4">
                <span className="text-[11px] text-white/70 font-iranSans">
                  کاربران فعال
                </span>
                <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] font-DanaDemiBold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  {usersCount !== null ? usersCount : "..."} کاربر
                </span>
              </div>
            </div>
          </div>

          {/* ============ Placeholder for future cards ============ */}
          {/* Add more setting cards here */}
        </div>
      </div>
    </>
  );
}

