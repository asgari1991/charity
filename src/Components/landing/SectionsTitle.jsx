import React from "react";

const SectionsTitle = ({ title }) => {
  return (
    <div className="w-[95%] md:hidden h-[1px] bg-[#004743] mt-[48px] relative flex justify-center">
      <span className="text-[#004743] text-[24px] font-sans absolute bg-white px-[5px] -top-[18px]">
        {title}
      </span>
      <span className="absolute text-[#004743] text-[11px] -left-[11px] -top-[5px]">
        ◆
      </span>
      <span className="absolute text-[#004743] text-[11px] -right-[11px] -top-[5px]">
        ◆
      </span>
    </div>
  );
};

export default SectionsTitle;
