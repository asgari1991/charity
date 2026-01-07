import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ErrorModal = ({ setShowModal, errorMessage, showModal }) => {
  const onCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog
        as="div"
        onClose={() => onCloseHandler()}
        className="relative z-50- z-[2000]"
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
                  <div className="flex flex-col rounded-lg px-12 w-full bg-white items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[60px] h-[60px] text-red-500 mt-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>

                    <div className="w-full items-center justify-center flex mt-1">
                      <span className="text-black text-[13px] mt-1 font-iranSansMedium">
                        {errorMessage}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => onCloseHandler()}
                        className="group ease-in-out mb-4 duration-300 bg-green-600 px-6 mt-5 py-[6px] flex items-center justify-center rounded-[8px]"
                      >
                        <span className="text-[white] text-[11px] font-iranSansLight">
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

export default ErrorModal;
