import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
// import { updateSelectedPerson } from "../../../../../store/slices/constractors-managment/selected-person/selectedPerson";
import { Transition } from "@headlessui/react";

import "./style.css";

const TableBody = ({ item, index, setFamilyId, setNewFamilyModalShow }) => {
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
      {/* <td dir="rtl" className="py-3 text-[13px] text-center font-iranSans">
        <button
          onClick={() => {
            setSelectedPerson(item);
            setNewRegionModal(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-[#0052C5]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
      </td> */}
    </tr>
  );
};

export default TableBody;
