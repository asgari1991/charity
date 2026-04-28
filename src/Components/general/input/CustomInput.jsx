import React from "react";

const CustomInput = ({title = "", value, onChange}) => {
  return (
    <div className="flex relative group flex-col">
      <input
        type="text"
        // placeholder={title}
        value={value}
        onChange={onChange}
        className="border border-[rgba(78,111,136,0.24)] px-2.5 py-2 rounded-lg text-[12px] text-black font-DanaMedium"
      />
      <span
        className={`${`text-[11px] right-[6px] left-18 -top-2 px-[4px]`} absolute group-focus-within:px-[4px] 
        min-w-max cursor-text  ease-in-out duration-500  font-iranSans text-[#7F909C] text-left transition-all bg-white`}
      >
        {title}
      </span>
    </div>
  );
};

export default CustomInput;
