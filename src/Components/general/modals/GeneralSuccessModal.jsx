import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";


const GeneralSuccessModal = ({
  message = " عملیات با موفقیت انجام شد",
  successModalShow,
  setSuccessModalShow,
}) => {


  const onSubmitHandler = () => {
    setSuccessModalShow(false);
  };

  return (
    <Transition appear show={successModalShow} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[100000]"
        onClose={() => setSuccessModalShow(false)}
      >
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
                  <div className="flex flex-col w-full rounded-[16px]  bg-white items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-16 text-green-800 h-16 mt-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-black px-6 text-[16px] mt-3 font-iranSans">
                      {message}
                    </span>
                    <div className="w-full flex items-center mt-5 mb-5 justify-center ">
                      <button
                        onClick={() => onSubmitHandler()}
                        className="hover:bg-green-900 ease-in-out duration-300 flex rounded-[8px] px-5 py-2 items-center justify-center bg-green-800"
                      >
                        <span className="text-[10px] font-iranSans text-[white] ease-in-out duration-300">
                          تایید
                        </span>
                      </button>
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

export default GeneralSuccessModal;
