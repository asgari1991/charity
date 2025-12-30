import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

const Modal = ({
  show,
  setShow,
  title,
  content,
  onClose,
  gradientFrom = "#31B6A6",
  gradientTo = "#00907F",
  headerHeight = "54px",
  headerShow = true,
}) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" onClose={onClose} className="relative z-[100] ">
        <Transition.Child
          as={Fragment} // Changed from Fragment to a div
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur bg-black  bg-opacity-60 transition-all duration-300" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center  p-4temp">
            <Transition.Child
              as={Fragment} // Changed from Fragment to a div
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div dir="rtl" className="">
                <Dialog.Panel className="flex relative  flex-col items-center justify-center">
                  <div
                    style={{
                  
                      height: headerHeight,
                    }}
                    className={`w-full ${
                      headerShow ? "flex" : "hidden"
                    } rounded-t-[16px] bg-[#4E6F88]  items-center justify-between`}
                  >
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
                      {title}
                    </span>
                  </div>
                  {content}
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
