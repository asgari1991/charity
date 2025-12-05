import React, { Fragment, useEffect, useState, useRef } from "react";
import { Combobox, Transition } from "@headlessui/react";

const ComboBox = ({
  title,
  data,
  onChangeHandler,
  itemName = (x) => x,
  selectedValue,
  color,
  ringColor,
  width = "150px",
  height = "35px",
  rounded = "6px",
  disabled = false,
  optionWidth = null,
  fontSize = "12px",
}) => {
  const buttonRef = useRef(null);
  const initialList = Array.isArray(data) ? data.slice(0, 30) : [];

  const [filteredItems, setFilteredItems] = useState(initialList);

  useEffect(() => {
    setFilteredItems(initialList);
  }, [data]);

  function search(inputChars = "", setVal) {
    if (typeof inputChars !== "string" || inputChars.trim() === "") {
      setVal(initialList);
      return;
    }
    const searchQuery = inputChars.toLowerCase();
    const matchingNames = Array.isArray(data)
      ? data.filter((item) =>
          (itemName(item) || "").toLowerCase().includes(searchQuery)
        )
      : [];
    setVal(matchingNames.slice(0, 10));
  }

  // display function for Combobox.Input
  const displayValue = (item) => {
    if (!item) return "";
    return typeof item === "string" ? item : itemName(item);
  };

  return (
    <div style={{ width }} className="relative group">
      <Combobox value={selectedValue} onChange={onChangeHandler} disabled={disabled}>
        <div className="relative">
          <div
            style={{ width, height }}
            className="relative rounded-[2px] text-left sm:text-sm"
          >
            {/* wrapper to anchor absolute button */}
            <div
              className="relative w-full h-full"
              onMouseDown={(e) => {
                // if clicking the actual button, let it handle the event
                if (e.target instanceof HTMLElement && e.target.closest("button")) return;
                // open dropdown and prevent blurring/focus change
                e.preventDefault();
                setFilteredItems(initialList);
                // programmatically toggle/open the combobox via button click
                buttonRef.current?.click();
              }}
            >
              <Combobox.Input
                className="w-full h-full box-border outline-none px-3 pr-12 text-black border font-iranSans"
                style={{
                  borderColor: ringColor || "#d1d5db",
                  borderRadius: rounded,
                  fontSize,
                }}
                displayValue={displayValue}
                placeholder={title}
                onChange={(e) => search(e.target.value, setFilteredItems)}
                onFocus={() => {
                  setFilteredItems(initialList);
                  // open when input receives focus
                  buttonRef.current?.click();
                }}
                aria-label={title}
              />

              <Combobox.Button
                type="button"
                // keep a ref so we can programmatically toggle/open the combobox
                ref={buttonRef}
                // explicit inline styles to bypass any Tailwind purge/stacking issues while debugging
                style={{
                  position: "absolute",
                  left: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 24,
                  height: 24,
                  zIndex: 9999,
                  pointerEvents: "auto",
                  // temporary visible background to locate the button — remove when fixed
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  padding: 0,
                }}
                onClick={() => setFilteredItems(Array.isArray(data) ? data.slice(0, 30) : [])}
                aria-label="toggle dropdown"
              >
                <svg
                  // keep Tailwind classes but also set inline fallback sizing
                  className="w-4 h-4 text-gray-500"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Combobox.Button>
            </div>
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options
              static
              className="absolute z-50 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm"
              style={{ width: optionWidth ? optionWidth : "100%" }}
            >
              {(!filteredItems || filteredItems.length === 0) && (
                <div className="relative text-[10px] font-iranSansLight cursor-default select-none py-2 px-4 text-gray-700">
                  یافت نشد
                </div>
              )}

              {filteredItems &&
                filteredItems.map((item, idx) => (
                  <Combobox.Option
                    key={idx}
                    value={item}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? "bg-[#E3F0FF] mx-2 rounded-md" : ""
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <div className="flex w-full items-center justify-between">
                        <span
                          className={`font-iranSans truncate ${
                            selected ? "font-medium" : "font-normal"
                          } text-[10px]`}
                        >
                          {itemName(item)}
                        </span>
                        {selected && (
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
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                        )}
                      </div>
                    )}
                  </Combobox.Option>
                ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default ComboBox;
