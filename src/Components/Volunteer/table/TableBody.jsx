import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
// import { updateSelectedPerson } from "../../../../../store/slices/constractors-managment/selected-person/selectedPerson";
import { Transition } from "@headlessui/react";

import "./style.css";

const TableBody = ({
  item,
  index,
  
}) => {
  return (
    <tr className=" odd:bg-[#F0F7FF] animate">
      <td
        dir="rtl"
        className="py-3 text-[13px] text-center font-iranSans"
      >
        {index + 1}
      </td>
     
      <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans ">
        {item.donor_id || "--"}
      </td>
       <td dir="rtl" className="py-3  text-[13px] text-center font-iranSans ">
        {item.name + " "+ item.family || "--"}
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
    </tr>
  );
};

export default TableBody;
