import React, { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
//import Portal from "../portal/Portal";

const ComboBox = ({
  title,
  data,
  onChangeHandler,
  itemName,
  selectedValue,
  color,
  ringColor,
  width = "150px",
  height = "35px",
  rounded = "",
  disabled = false,
  optionWidth = null,
  fontSize = "12px",
}) => {
  // ---------------------Example-------------------------

  //   const onChangeChartComboBox = (val) => {
  //     setSelectedOrganId(val.organ_id);
  //     setSelectedOrgan(val.organ);
  //   };

  //   function chartItemName(item) {
  //     return item.organ;
  //   }

  //   <ComboBox
  //   title="نام سازمان"
  //   data={comboBoxList}
  //   selectedValue={selectedOrgan}
  //   onChangeHandler={onChangeChartComboBox}
  //   itemName={chartItemName}
  //   color="#00907F"
  //   ringColor="#70CABF"
  //   width="280px"
  // />
  // ---------------------Example-------------------------

  const [filteredItems, setFilteredItems] = useState(
    Array.isArray(data) ? data.slice(0, 30) : []
  );

  useEffect(() => {
    setFilteredItems(Array.isArray(data) ? data.slice(0, 30) : []);
  }, [data]);

  function search(inputChars) {
    const searchQuery = (inputChars || "").toLowerCase();
    const matchingNames = Array.isArray(data)
      ? data.filter((item) =>
          itemName(item)?.toLowerCase().includes(searchQuery)
        )
      : [];

    const output = matchingNames.slice(0, 10);
    setFilteredItems(output);
  }
  return (
    <div
      style={{ width: width }}
      className="relative group flex justify-start items-center text-right"
    >
      <Combobox
        value={selectedValue}
        onChange={(val) => onChangeHandler(val)}
        disabled={disabled}
      >
        <div className="relative">
          <div
            style={{ width: width, height: height }}
            className="relative cursor-default rounded-[2px] text-left sm:text-sm"
          >
      
         
         
            {!selectedValue ? (<svg
             style={{ color: color }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 top-[26%] left-2 z-20 absolute"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>):(<></>)}

            <Combobox.Button className="absolute inset-y-1 right-0 flex items-center">
              <Combobox.Input
                autoComplete="off"
                autoCorrect="off"
                style={{
                  borderColor: ringColor,
                  width: width,
                  height: height,
                  borderRadius: rounded,
                  fontSize: fontSize,
                }}
                placeholder={title}
                className=" outline-none py-1 pl-7 text-black  border font-Dana pr-3  leading-5"
                displayValue={(val) => (val ? itemName(val) : "")}
                onChange={(event) => search(event.target.value)}
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options
              style={{
                width: optionWidth ? optionWidth : "100%",
              }}
              static
              className="absolute font-DanaMedium z-[60] mt-1 max-h-60 w-full- overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm"
            >
              {!filteredItems || filteredItems.length === 0 ? (
                <div className="relative text-[10px] font-Dana cursor-default select-none py-2 px-4 text-gray-700">
                  یافت نشد
                </div>
              ) : (
                filteredItems &&
                filteredItems.map((item) => (
                  <Combobox.Option
                    key={itemName(item)}
                    className={({ active }) =>
                      `relative !font-DanaMedium cursor-pointer select-none ease-in-out duration-300 py-2 pl-10 pr-4 ${
                        active ? "bg-[#E3F0FF] mx-2 rounded-md" : ""
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <div
                        className={`flex w-full items-center justify-between `}
                      >
                        <span
                          className={`font-DanaMedium truncate ${
                            selected ? "font-medium" : "font-normal"
                          } text-[10px] font-DanaMedium`}
                        >
                          {itemName(item)}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
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
                        ) : null}
                      </div>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default ComboBox;
