import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
// import { updateSelectedPerson } from "../../../../../store/slices/constractors-managment/selected-person/selectedPerson";
import { Transition } from "@headlessui/react";

import "./style.css";

const TableBody = ({ item, index, setFamilyId, setNewFamilyModalShow,setShowAlertModal }) => {
  return (
    <tr className=" odd:bg-[#F0F7FF] animate">
      <td dir="rtl" className="py-3 text-[13px] text-center font-iranSans">
        {index + 1}
      </td>
      <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans ">
        {item.head_first_name + " " + item.head_last_name || "--"}
      </td>
      <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans ">
        {item.head_national_code || "--"}
      </td>
      <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans ">
        {item.head_job || "--"}
      </td>
      <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans ">
        {item.members_count || "--"}
      </td>
      <td dir="rtl" className="py-3 text-[13px] text-center font-iranSans">
        {item.house_status_name || "--"}
      </td>

      <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans">
        {item.region_name || "--"}
      </td>

      <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans">
        <button
          onClick={() => {
            setFamilyId(item?.family_id);
            setNewFamilyModalShow(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </td>
      <td
        onClick={() => {
          setFamilyId(item?.family_id);
          setShowAlertModal(true);
        }}
        dir="rtr"
        className="py-3 cursor-pointer  text-[13px] text-center font-iranSans"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-5 text-[#FF5B00] mx-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </td>
    </tr>
  );
};

export default TableBody;
