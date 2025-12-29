import React from "react";

const Button = ({
  title,
  icon,
  onClick,
  isTracking,
  isContractors,
  bg,
  isRequest,
  type,
  form,
  color = null,
  customSize = null,
  disable,
  ltr = false,
  textColor,
  borderColor=null,
  borderRadius = "8px"
}) => {
  return (
    <button
    style={{borderRadius:borderRadius}}
      dir={`${ltr ? "ltr" : "rtl"}`}
      className={`flex hover:shadow-lg ease-in-out duration-500
        items-center justify-center ${title && "gap-[8px]"} ${
          customSize !== null ? customSize : "py-[6px] px-4"
        } flex-row-reverse 
        ${
          !color
            ? bg
              ? isContractors
                ? "bg-[#00907F] text-white"
                : isTracking
                ? " bg-[#0073F6] text-white"
                : "bg-[#25A6DF] text-white"
              : isTracking
              ? "border-[#0073F6] "
              : isContractors
              ? "border-[#00907F]"
              : `${borderColor}`
            : color
        }   border disabled:bg-slate-300 disabled:cursor-not-allowed`}
      onClick={onClick}
      type={type && type}
      form={form && form}
      disabled={disable ? disable : false}
    >
      <span
        className={`${isContractors ? "text-[#62BE76]" : "text-[#25A6DF]"} ${
          !bg ? (textColor && textColor ) : "text-white"
        } text-[10px] font-iranSans flex`}
      >
        {title}
      </span>
      {icon || null}
    </button>
  );
};
export default Button;
