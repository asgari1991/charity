import React, { Fragment, useEffect, useState } from "react";
import {
  Combobox,
  Transition,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  ComboboxButton,
  Field,
} from "@headlessui/react";
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

  const [filteredItems, setFilteredItems] = useState([data?.slice(0, 30)]);

  function search(inputChars, setVal) {
    const searchQuery = inputChars.toLowerCase();
    // const matchingNames = data.filter((item) =>
    //   itemName(item)?.toLowerCase().includes(searchQuery)
    // );
    const matchingNames = Array.isArray(data)
      ? data.filter((item) =>
          itemName(item)?.toLowerCase().includes(searchQuery)
        )
      : [];

    let output = matchingNames.slice(0, 10);

    setVal(output);

    console.log(filteredItems[0], "filteredItems[0]");
    return;
  }
  return (
    <div
      style={{ width: width }}
      className="relative group flex justify-start items-center text-center"
    >
      <Field>
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
                
              <ComboboxButton
                className="absolute inset-y-1 right-0 flex items-center"
                onClick={(event) =>
                  search(event.target.value, setFilteredItems)
                }
              >
                <ComboboxInput
                  autoComplete="off"
                  autoCorrect="off"
                  style={{
                    borderColor: ringColor,
                    width: width,
                    height: height,
                    borderRadius: rounded,
                    fontSize: fontSize,
                  }}
                  className=" outline-none py-1 pl-3 text-black  border font-iranSans pr-7  leading-5"
                  displayValue={selectedValue}
                  onChange={(event) =>
                    search(event.target.value, setFilteredItems)
                  }
                />
              </ComboboxButton>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ComboboxOptions
                style={{
                  width: optionWidth ? optionWidth : "100%",
                }}
                static
                className="absolute z-[60] mt-1 max-h-60 w-full- overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm"
              >
                {filteredItems[0]?.length === 0 ||
                filteredItems[0] === undefined ? (
                  <div className="relative text-[10px] font-iranSansLight cursor-default select-none py-2 px-4 text-gray-700">
                    یافت نشد
                  </div>
                ) : (
                  filteredItems &&
                  filteredItems.map((item) => (
                    <ComboboxOption
                      // key={item.organ_id}
                      className={({ active }) =>
                        `relative cursor-pointer select-none ease-in-out duration-300 py-2 pl-10 pr-4 ${
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
                            className={`font-iranSans truncate ${
                              selected ? "font-medium" : "font-normal"
                            } text-[10px] font-iranSans`}
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
                    </ComboboxOption>
                  ))
                )}
              </ComboboxOptions>
            </Transition>
          </div>
        </Combobox>
      </Field>
    </div>
  );
};

export default ComboBox;
