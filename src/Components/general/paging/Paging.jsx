import React, { Fragment, useEffect, useMemo, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

// A pure-state paging component (no Redux). Mirrors the look/feel of the existing paging.
// Props:
// - total: number of pages
// - defaultPage: initial page (1-based)
// - onChange: callback(pageNumber)
// - color: accent color (hex or css color)
const Paging = ({ total = 1, defaultPage = 1, onChange, color = "#CA82FF" }) => {
  const safeTotal = Math.max(1, Number(total) || 1);
  const [currentPage, setCurrentPage] = useState(
    Math.min(Math.max(1, Number(defaultPage) || 1), safeTotal)
  );

  // Clamp current page when total changes
  useEffect(() => {
    setCurrentPage((prev) => {
      const next = Math.min(Math.max(prev, 1), safeTotal);
      if (next !== prev && typeof onChange === "function") {
        onChange(next);
      }
      return next;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeTotal]);

  const pageOptions = useMemo(() => {
    return Array.from({ length: safeTotal }, (_, i) => i + 1);
  }, [safeTotal]);

  const goToPage = (page) => {
    const next = Math.min(Math.max(Number(page) || 1, 1), safeTotal);
    setCurrentPage(next);
    if (typeof onChange === "function") onChange(next);
  };

  const onClickPrev = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const onClickNext = () => {
    if (currentPage < safeTotal) goToPage(currentPage + 1);
  };

  return (
    <div className=" items-center flex justify-center ">
      {/* Prev */}
      <div
        onClick={onClickPrev}
        style={{ color: color }}
        className="flex cursor-pointer flex-row-reverse items-center ml-3 justify-center "
      >
        <span
          style={{ color: color }}
          className="text-left relative  text-[12px] font-iranSans"
        >
          قبل
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.2}
          stroke="currentColor"
          style={{ color: color }}
          className="w-5  -mt-[1px] h-5 "
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>

      {/* Numbers (Listbox) */}
      <div className="flex items-center gap-2 justify-center">
        <span style={{ color: color }} className=" text-[12px] font-iranSans">
          صفحه
        </span>
        <Listbox value={currentPage} onChange={(val) => goToPage(val)}>
          <div className="relative z-40 -mt-[1px] ">
            <Listbox.Button
              style={{ borderColor: color }}
              className="relative bg-[#F6FAFF] border  bg-opacity-40 rounded-[4px] cursor-pointer w-[60.3px] ease-in-out duration-300  flex items-center justify-center h-[21px]   text-right "
            >
              <span
                style={{ color: color }}
                className="block truncate text-[13px] font-iranSansLight"
              >
                {currentPage}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{ color: color }}
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-48 w-full overflow-y-scroll rounded-md bg-[#F6FAFF] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {pageOptions.map((page) => (
                  <Listbox.Option
                    key={page}
                    style={{ color: color }}
                    className={({ active }) =>
                      `relative font-iranSansLight cursor-pointer ease-in-out duration-300 lg:text-[13px] md:text-[11px] text-[8px]  select-none py-[3px] pr-[5px] ${
                        active ? "bg-black/10" : ""
                      }`
                    }
                    value={page}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {page}
                        </span>
                        {selected ? (
                          <span
                            style={{ color: color }}
                            className="absolute inset-y-0 left-0 flex items-center pl-3 "
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
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <span style={{ color: color }} className="text-[12px] mr-2 font-iranSans">
          از
        </span>
        <div className="bg-[#F6FAFF]  bg-opacity-40 rounded-[4px] flex items-center justify-center">
          <span
            style={{ color: color }}
            className="block truncate -mr-1 text-[13px] font-iranSansLight "
          >
            {safeTotal}
          </span>
        </div>
      </div>

      {/* Next */}
      <div
        onClick={onClickNext}
        className="text-black flex cursor-pointer items-center mr-4 justify-center "
      >
        <span
          style={{ color: color }}
          className="text-left relative -ml-[2px] text-[12px] font-iranSans"
        >
          بعد
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.2}
          stroke="currentColor"
          style={{ color: color }}
          className="w-5  h-5 "
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
    </div>
  );
};

export default Paging;


