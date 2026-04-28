import React, { Fragment } from "react";

//import "../style.css";
import { NumericFormat } from "react-number-format";

const TableBody = ({
  item,
  index,
  removeProduct,
  setTotalAmount,
  updateMode,
}) => {
  return (
    <tr className="even:bg-[#F4E5FF] animate">
      <td dir="rtl" className="py-3  text-[12px] text-center font-iranSans">
        {index + 1}
      </td>

      <td dir="rtl" className="py-3 text-[12px] text-center  font-iranSans">
        {`${item.memberName || "-"} ${item.memberFamily || "-"}`}
      </td>

      <td dir="rtl" className="py-3  text-center text-[13px] font-iranSans">
        {item.memberFatherName || "-"}
      </td>
      <td dir="rtl" className="py-3 px-5 text-[13px] text-center font-iranSans">
        {item.memberBirthdate || "-"}
      </td>
      <td dir="rtl" className="py-3 px-5 text-[12px] text-center font-iranSans">
        {item.memberNationalCode || "-"}
      </td>
      <td dir="rtl" className="py-3 px-5 text-[13px] text-center font-iranSans">
        {item.memberGender || "-"}
      </td>
      <td dir="rtl" className="py-3 px-5 text-[13px] text-center font-iranSans">
        {item.memberEducationStatus || "-"}
      </td>
      <td dir="rtl" className="py-3 px-5 text-[13px] text-center font-iranSans">
        {item.memberRelation || "-"}
      </td>
      <td dir="rtl" className="py-3 px-5 text-[13px] text-center font-iranSans">
        {item.memberCaretakerStatus || "-"}
      </td>
      <td dir="rtl" className="py-3 px-5 text-[13px] text-center font-iranSans">
        <div className="flex justify-center items-center">
          <svg
            onClick={() => {
              removeProduct(index);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-[18px] text-[#FF5B00] cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </td>
   
    </tr>
  );
};

export default TableBody;
