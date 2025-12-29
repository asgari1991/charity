import React from "react";
import { DatePicker } from "zaman";
import {
  convertEnglishDateToPersianDate,
  convertEnglishToPersianDateChatGpt,
} from "../util";
import { useState } from "react";
import { useEffect } from "react";
import PersianDate from "persian-date";


const CustomDateInput = ({
  value,
  setValue,
  title,
  dateKey,
  setKey,
  color = "#4E6F88",
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onChange = (date) => {
    let persianDate = convertEnglishToPersianDateChatGpt(date);
    setValue(persianDate);
    setIsOpen(false); // Close the date picker after a date is selected
  };

  useEffect(() => {
    if (value !== undefined) {
      //   setKey((prevKey) => prevKey + 1);
      setIsOpen(false);
    }
  }, [value, setKey]);

  const handleInputClick = () => {
    if (!disabled) {
      setIsOpen(true); // Open the date picker when not disabled
    } else {
      setKey((prevKey) => prevKey + 1); // Change the key to force re-render
    }
  };

  function persianStringToDate(str) {
    return new PersianDate(str).toDate();
  }

  return (
    <div>
      <div
        className="font-iranSansLight calendere text-[12px] relative focus-within:outline-mainBlue "
        onClick={handleInputClick}
      >
          <span
          
          className={`${`text-[10px] text-mainBlue/75 right-[6px]  select-none left-18 -top-[6px] px-[4px]`} absolute group-focus-within:px-[4px]
                        min-w-max cursor-text  ease-in-out duration-500  font-iranSans text-left transition-all bg-white`}
        >
          {title}
        </span>
        <DatePicker
          customShowDateFormat="YYYY/MM/DD"
          key={dateKey}
          show={false}
          direction="rtr"
          round="x4"
          position="center"
          onChange={(e) => !disabled && onChange(e.value)}
          className={`!font-iranSans ${!isOpen ? "hidden" : ""}`}
          // defaultValue={value || undefined}
          defaultValue={value ? persianStringToDate(value) : undefined}
        />
        {value && !disabled ? (
          <svg
            style={{ color: color }}
            onClick={() => {
              setValue(undefined);
              setKey((prevKey) => prevKey + 1); // Change the key to force re-render
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 cursor-pointer  left-2 top-[7px] absolute"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            style={{ color: color }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5  left-2 top-[7px] absolute -z-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default CustomDateInput;

// import React, { useState, useEffect } from "react";
// import { DatePicker } from "zaman";
// import { convertEnglishDateToPersianDate } from "../util";

// const CustomDateInput = ({ value, setValue, title, dateKey, setKey }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const onChange = (date) => {

//     const persianDate = convertEnglishDateToPersianDate(date);
//     setValue(persianDate);
//     setIsOpen(false); // Close the date picker after a date is selected
//   };

//   useEffect(() => {
//     if (value !== undefined) {
//       setKey((prevKey) => prevKey + 1); // Increment the key to force a re-render if needed
//     }
//   }, [value, setKey]);

//   const handleDivClick = () => {
//     setIsOpen(true); // Open the date picker when the div is clicked
//   };

//   console.log("date:",value);

//   return (
//     <div className="font-iranSansLight calendere text-[12px] relative focus-within:outline-[#8F74A5]">
//       <div onClick={handleDivClick} className="relative">
//         <span className="text-[10px] right-[6px] select-none left-18 -top-[6px] px-[4px] absolute min-w-max cursor-text ease-in-out duration-500 font-iranSans text-[#420E5A] text-left transition-all bg-white">
//           {title}
//         </span>
//         <DatePicker
//           key={dateKey}
//           show={isOpen}
//           direction="ltr"
//           round="x4"
//           position="center"
//           onChange={(e) => onChange(e.value)}
//           className={`!font-iranSans ${!isOpen ? "hidden" : ""}`}
//           defaultValue={value || undefined}
//         />
//       </div>
//       {value && (
//         <svg
//           onClick={() => {
//             setValue(undefined); // Clear the date value
//             setKey((prevKey) => prevKey + 1); // Change the key to force re-render
//             setIsOpen(true); // Reopen date picker if value is cleared
//           }}
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="size-5 text-[#420E5A] cursor-pointer left-2 top-[7px] absolute"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       )}
//     </div>
//   );
// };

// export default CustomDateInput;
