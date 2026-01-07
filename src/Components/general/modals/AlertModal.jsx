import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const AlertModal = ({ setShowModal , runFunction , showModal}) => {

  function onClickHandler() {
    runFunction()
  }

  const onCloseHandler = () => {
    setShowModal(false); 
  };

  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog
        as="div"
        onClose={() => onCloseHandler()}
        className="relative z-[200]"
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
                      className="w-[55px] h-[55px] text-yellow-500 mt-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>

                    <div className="w-full items-center justify-center flex mt-1">
                      <span className="text-black text-[13px] mt-1 font-iranSansMedium">
                        آیا از انجام این عملیات اطمینان دارید؟
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => onClickHandler()}
                        className="group ease-in-out mb-4 duration-300 bg-green-600 px-6 mt-5 py-[6px] flex items-center justify-center rounded-[8px]"
                      >
                        <span className="text-[white] text-[11px] font-iranSansLight">
                          تایید
                        </span>
                      </button>
                      <button
                        onClick={() => onCloseHandler()}
                        className="group ease-in-out mb-4 duration-300  bg-orange-600 px-4 mt-5 py-[6px] flex items-center justify-center rounded-[8px]"
                      >
                        <span className="text-[white] text-[11px] font-iranSansLight">
                          انصراف
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

export default AlertModal;
