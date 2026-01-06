import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
// import { updateSelectedPerson } from "../../../../../store/slices/constractors-managment/selected-person/selectedPerson";
import { Transition } from "@headlessui/react";

import "./style.css";

const TableBody = ({
  item,
  index,
  setVolunteerId,
  setNewVolunteerModalShow,
  setUpdateMode,
}) => {
  return (
    <tr className=" odd:bg-[#F0F7FF] animate">
      <td dir="rtl" className="py-3 text-[13px] text-center font-iranSans">
        {index + 1}
      </td>

      <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans ">
        {item.donor_id || "--"}
      </td>
      <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans ">
        {item.name + " " + item.family || "--"}
      </td>
      <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans ">
        {item.mobile || "--"}
      </td>
      <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans ">
        {item.members_count || "--"}
      </td>

      <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans">
        {item.reason || "--"}
      </td>

      <td dir="rtr" className="py-3  text-[13px] text-center font-iranSans">
        {item.bank || "--"}
      </td>
      <td dir="rtr" className="py-3  text-[13px] text-center font-iranSans">
        {item.account_number || "--"}
      </td>
      <td
        onClick={() => {
          setVolunteerId(item?.donor_id);
          setNewVolunteerModalShow(true);
          setUpdateMode(true);
        }}
        dir="rtr"
        className="py-3  text-[13px] text-center font-iranSans"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-[#4E6F88] cursor-pointer mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </td>
    </tr>
  );
};

export default TableBody;
