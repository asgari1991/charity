import React, { Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";

const ListBox = ({
  textSize = "11px",
  value,
  data,
  onSelectHandler,
  itemName,
  placeHolder,
  width = "190px",
  heigth = "34px",
  theme,
  color,
  initialValue = null,
  innerPlaceHolder = null,
  tracking,
  accessLevel,
  contractors,
  request,
  rounded = "3px",
}) => {
  let numericWidth = parseInt(width, 10);
  let newWidth = numericWidth + 5;
  const optionsWidth = newWidth + "px";

  useEffect(() => {
    if (initialValue && typeof initialValue == "function") {
      initialValue();
    }
  }, []);

  return (
    <Listbox
      value={value}
      onChange={(val) => onSelectHandler(val)}
      name="identityInfo"
    >
      <div className="z-40 relative">
        <Listbox.Button
          placeholder={"dfsfdff"}
          style={{
            width: width,
            height: heigth,
            borderRadius: rounded,
            borderColor: color,
          }}
          className={`
            relative bg-[#F6FAFF] border bg-opacity-40  cursor-pointer ease-in-out duration-300 flex items-center justify-start text-right ${
              theme === "dark-blue"
                ? "border-[#56A4FE]"
                : theme === "green"
                  ? "border-[#70CABF]"
                  : theme === "light-blue"
                    ? "border-[#56A4FE]"
                    : theme === "grayy"
                      ? "border-[#4e6f883d]"
                      : theme === "blue"
                        ? "border-[#25A6DF]"
                        : theme === "purple" && "border-[#8F74A5]"
            }`}
        >
          <span
            style={{ fontSize: textSize }}
            className="block truncate font-Dana pr-4 text-[#1E1E1E]"
          >
            {value}
          </span>
          {!value && (
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                style={{ color: color }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-5 h-5 ${
                  theme === "dark-blue"
                    ? "text-[#25A6DF]"
                    : theme === "green"
                      ? "text-[#00907F]"
                      : theme === "light-blue"
                        ? "#69D8FF"
                        : theme === "blue"
                          ? "text-[#25A6DF]"
                          : theme === "purple" && "text-[#420E5A]"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          )}

          <span
            style={{ color: color }}
            className={`text-[10px] px-1 absolute group-focus-within:px-[4px] min-w-max cursor-text ease-in-out duration-500 right-[6px] -top-2 font-Dana ${
              theme === "dark-blue"
                ? "text-[#0052C5]"
                : theme === "green"
                  ? "text-[#00907F]"
                  : theme === "light-blue"
                    ? "text-[#37A3D2]"
                    : theme === "blue"
                      ? "text-[#25A6DF]"
                      : theme === "purple" && "text-[#420E5A]"
            } text-left transition-all bg-white`}
          >
            {placeHolder}
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            style={{ width: optionsWidth }}
            className="absolute mt-1  overflow-y-scroll max-h-52 rounded-lg bg-[#F6FAFF] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {data?.map((item) => (
              <Listbox.Option
                key={item.id}
                className={({ active }) =>
                  `relative font-DanaMedium cursor-pointer ease-in-out duration-300 lg:text-[10px] md:text-[11px] text-[10px] text-[#000000] select-none py-2 pl-10 pr-4 ${
                    active ? "bg-[#E3F0FF] mx-2 rounded-md" : ""
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {itemName(item)}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#25A6DF]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default ListBox;
