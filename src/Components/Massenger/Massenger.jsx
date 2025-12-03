import React from "react";
import Header from "../Header/Header";

export default function Massenger() {
  return (
    <>
      <Header title={"ارسال پیامک"}>
      <svg
      width={24}
      height={22}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     
    >
      <path
        d="M5.116 6.736l.556-.556-.556.556zm-2.02-2.02l-.556.555.555-.556zm8.38 14.928a.786.786 0 000 1.571v-1.571zM22 18.27l-.636-.462.636.462zm-1.16 1.159l-.461-.636.462.636zm0-16.856l.463-.636-.462.636zM22 3.73l-.636.462.636-.462zM4.207 2.573l-.462-.636.462.636zM1.262 11a.786.786 0 101.571 0H1.262zm1.786-7.27l-.636-.461.636.461zM1 17.548a.786.786 0 100 1.572v-1.572zm6.286 1.572a.786.786 0 000-1.572v1.572zM1 14.406a.786.786 0 000 1.571v-1.571zm3.143 1.571a.786.786 0 100-1.571v1.571zM2.698 4.318l-.708-.341.708.341zM5.672 6.18L3.778 4.287l-1.111 1.11L4.56 7.292l1.112-1.11zM21.27 4.287L19.376 6.18l1.111 1.111 1.894-1.893-1.111-1.111zM4.56 7.29c1.73 1.73 3.083 3.086 4.28 3.998 1.213.927 2.358 1.47 3.684 1.47v-1.57c-.844 0-1.657-.33-2.732-1.15C8.7 9.207 7.433 7.943 5.672 6.18L4.56 7.291zm14.816-1.11c-1.762 1.761-3.028 3.025-4.12 3.859-1.075.82-1.888 1.148-2.732 1.148v1.572c1.326 0 2.47-.544 3.684-1.47 1.196-.913 2.549-2.268 4.28-3.999l-1.112-1.11zm-13.704 0L3.65 4.16 2.54 5.27l2.02 2.021 1.112-1.11zM21.397 4.16l-2.021 2.02 1.111 1.111 2.021-2.02-1.111-1.111zm-9.92-1.802h2.094V.787h-2.095v1.571zm2.094 17.286h-2.095v1.571h2.095v-1.571zM22.214 11c0 1.982 0 3.405-.12 4.507-.118 1.087-.343 1.768-.73 2.3l1.271.924c.614-.845.889-1.834 1.021-3.055.13-1.206.13-2.73.13-4.676h-1.572zm-8.643 10.214c1.947 0 3.47.001 4.676-.13 1.221-.132 2.21-.407 3.056-1.02l-.924-1.272c-.532.387-1.213.612-2.3.73-1.103.12-2.526.12-4.508.12v1.572zm7.793-3.407a4.46 4.46 0 01-.985.985l.924 1.272a6.026 6.026 0 001.332-1.333l-1.271-.924zm-7.793-15.45c1.982 0 3.405.001 4.507.12 1.088.118 1.769.344 2.301.73l.924-1.271c-.845-.614-1.835-.889-3.056-1.02-1.206-.132-2.729-.13-4.676-.13v1.571zm6.808.85c.378.275.71.607.985.985l1.271-.923a6.025 6.025 0 00-1.332-1.333l-.924 1.271zM11.476.787C9.53.787 8.006.785 6.8.917c-1.22.131-2.21.406-3.055 1.02l.924 1.271c.532-.386 1.213-.612 2.3-.73 1.102-.119 2.526-.12 4.507-.12V.787zm-7.731 1.15A6.024 6.024 0 002.412 3.27l1.272.923c.274-.378.607-.71.985-.985l-.924-1.271zM1 19.12h6.286v-1.572H1v1.572zm0-3.143h3.143v-1.571H1v1.571zm1.833-4.976c0-1.713 0-3.012.08-4.052.078-1.039.23-1.745.493-2.29L1.99 3.977c-.387.805-.56 1.739-.645 2.853-.084 1.113-.083 2.48-.083 4.17h1.571zm.573-6.342c.08-.167.172-.32.278-.466L2.412 3.27a4.582 4.582 0 00-.422.707l1.416.682zm.245-.5l-.397-.396-1.111 1.11.397.398L3.65 4.16zm20.135 6.842c0-1.69 0-3.058-.084-4.17-.084-1.115-.257-2.05-.645-2.854l-1.415.682c.262.545.415 1.251.493 2.29.079 1.04.08 2.339.08 4.052h1.57zm-.729-7.024c-.12-.25-.26-.484-.422-.707l-1.271.923c.105.145.197.3.278.466l1.415-.682zm-.549 1.294l.397-.397-1.111-1.111-.397.397 1.111 1.11z"
        fill="#4E6F88"
      />
    </svg>
      </Header>
      <div className="h-full flex justify-between border-4 border-tableBorder/50 font-DanaMedium">
        <div className="h-full w-[360px] p-4 text-center border-4 border-tableBorder/50 ">
          <input
            type="text"
            placeholder="جستجو"
            className=" w-full px-3 py-[6px] bg-[#D9D9D9]"
          />
          <div className="flex items-center gap-x-5 mt-[5px] mb-7">
            <span>جدیدترین</span>
            <div className="flex items-center gap-x-2">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071L15.0711 11.3431C15.4616 10.9526 15.4616 10.3195 15.0711 9.92893C14.6805 9.53841 14.0474 9.53841 13.6569 9.92893L8 15.5858L2.34315 9.92893C1.95262 9.53841 1.31946 9.53841 0.928932 9.92893C0.538408 10.3195 0.538408 10.9526 0.928932 11.3431L7.29289 17.7071ZM7 0L7 17H9L9 0L7 0Z"
                  fill="black"
                />
              </svg>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" rotate-180"
              >
                <path
                  d="M7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071L15.0711 11.3431C15.4616 10.9526 15.4616 10.3195 15.0711 9.92893C14.6805 9.53841 14.0474 9.53841 13.6569 9.92893L8 15.5858L2.34315 9.92893C1.95262 9.53841 1.31946 9.53841 0.928932 9.92893C0.538408 10.3195 0.538408 10.9526 0.928932 11.3431L7.29289 17.7071ZM7 0L7 17H9L9 0L7 0Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <ul className="space-y-[6px]">
            <li className="flex items-center gap-x-12 pb-1 border-b border-b-black">
              <div className="text-right">
                <span className="block font-DanaDemiBold font-bold">
                  عنوان پیام
                </span>
                <span className="block text-sm">
                  متن پیام تا حدود 50 کاراکتر
                </span>
              </div>
              <span className="text-sm">1403/01/01</span>
            </li>
            <li className="flex items-center gap-x-12 pb-1 border-b border-b-black">
              <div className="text-right">
                <span className="block font-DanaDemiBold font-bold">
                  عنوان پیام
                </span>
                <span className="block text-sm">
                  متن پیام تا حدود 50 کاراکتر
                </span>
              </div>
              <span className="text-sm">1403/01/01</span>
            </li>
            <li className="flex items-center gap-x-12 pb-1 border-b border-b-black">
              <div className="text-right">
                <span className="block font-DanaDemiBold font-bold">
                  عنوان پیام
                </span>
                <span className="block text-sm">
                  متن پیام تا حدود 50 کاراکتر
                </span>
              </div>
              <span className="text-sm">1403/01/01</span>
            </li>
          </ul>
        </div>
        <div className="w-full h-full p-9 border-4 border-tableBorder/50">
          <div className="flex items-center gap-x-2">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="19.5" cy="19.5" r="19.5" fill="#D9D9D9" />
            </svg>
            <span>ایجاد پیام جدید</span>
          </div>
          <input
            type="text"
            placeholder="جستجو"
            className="block w-[327px] mt-6 px-3 py-[6px] bg-[#D9D9D9]"
          />
          <textarea
            placeholder="متن پیام"
            id=""
            cols="40"
            rows="10"
            className="w-full mt-6 px-3 py-[6px] bg-[#D9D9D9]"
          ></textarea>
          <div>دریافت کنندگان</div>
          <textarea
            id=""
            cols="40"
            rows="10"
            className="w-full mt-3 px-3 py-[6px] bg-[#D9D9D9]"
          ></textarea>
          <div className="flex items-center justify-end mt-6">
            <button className="bg-[#D9D9D9] text-black p-2.5">
              ارسال پیام
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
