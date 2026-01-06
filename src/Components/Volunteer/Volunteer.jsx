import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Search from "./search/Search";
import Table from "./table/Table";
import axios from "../../axiosSetup";
import NewVolunteerModal from "./modals/NewVolunteerModal";
import GeneralSuccessModal from "../general/modals/GeneralSuccessModal";
import Paging from "../general/paging/Paging";

export default function Family() {
  //----------------------------------------------------------------
  const [newVolunteerModalShow, setNewVolunteerModalShow] = useState(false);
  const [successModalShow, setSuccessModalShow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  //----------------------------------------------------------------
  const [updateMode, setUpdateMode] = useState(false);
  const [volunteerId, setVolunteerId] = useState(null);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [selectedVolunteerCode, setSelectedVolunteerCode] = useState(null);
  //----------------------------------------------------------------
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  //----------------------------------------------------------------
  const [tableBodyDatas, setTableBodyDatas] = useState([]);
  const [tableHeaderDatas, setTableHeaderDatas] = useState([
    "ردیف",
    "کد خیر",
    " نام و نام خانوادگی",
    "تلفن همراه",
    "شغل",
    "معرف",
    "بانک",
    "شماره کارت",
    "ویرایش",
  ]);
  useEffect(() => {
    axios
      .get("/api/donors", {
        params: {
          // family_head_id: selectedFamilyHead,
          // job: selectedJob,
          // house_status_id: selectedResidenceStatus,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setTableBodyDatas(res.data);
        }
      })
      .catch((error) => {
        console.log("API error->", error);
      });
  }, [refresh]);

  return (
    <>
      <NewVolunteerModal
        newVolunteerModalShow={newVolunteerModalShow}
        setNewVolunteerModalShow={setNewVolunteerModalShow}
        setRefresh={setRefresh}
        updateMode={updateMode}
        setUpdateMode={setUpdateMode}
        setSuccessModalShow={setSuccessModalShow}
        volunteerId={volunteerId}
        setVolunteerId={setVolunteerId}
        //formId={formId}
        //setFormId={setFormId}
      />
      <GeneralSuccessModal
        successModalShow={successModalShow}
        setSuccessModalShow={setSuccessModalShow}
      />
      <Header title={"خیرین"}>
        <svg
          width="17"
          height="21"
          viewBox="0 0 17 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.75 4.6875C5.75 6.2408 7.0092 7.5 8.5625 7.5V9.375C5.97367 9.375 3.875 7.27633 3.875 4.6875H5.75ZM8.5625 7.5C10.1158 7.5 11.375 6.2408 11.375 4.6875H13.25C13.25 7.27633 11.1513 9.375 8.5625 9.375V7.5ZM11.375 4.6875C11.375 3.1342 10.1158 1.875 8.5625 1.875V0C11.1513 0 13.25 2.09867 13.25 4.6875H11.375ZM8.5625 1.875C7.0092 1.875 5.75 3.1342 5.75 4.6875H3.875C3.875 2.09867 5.97367 0 8.5625 0V1.875ZM12.3125 13.125H4.8125V11.25H12.3125V13.125ZM4.8125 18.75H12.3125V20.625H4.8125V18.75ZM12.3125 18.75C13.8658 18.75 15.125 17.4908 15.125 15.9375H17C17 18.5263 14.9013 20.625 12.3125 20.625V18.75ZM2 15.9375C2 17.4908 3.2592 18.75 4.8125 18.75V20.625C2.22367 20.625 0.125 18.5263 0.125 15.9375H2ZM4.8125 13.125C3.2592 13.125 2 14.3842 2 15.9375H0.125C0.125 13.3487 2.22367 11.25 4.8125 11.25V13.125ZM12.3125 11.25C14.9013 11.25 17 13.3487 17 15.9375H15.125C15.125 14.3842 13.8658 13.125 12.3125 13.125V11.25Z"
            fill="#4E6F88"
          />
        </svg>
      </Header>
      <div className="w-full">
        <div className="w-full my-3 flex justify-start items-center py-2">
          <Search
            selectedVolunteer={selectedVolunteer}
            setSelectedVolunteer={setSelectedVolunteer}
            selectedVolunteerCode={selectedVolunteerCode}
            setSelectedVolunteerCode={setSelectedVolunteerCode}
          />
        </div>
        <div className="w-full mt-2">
          <div className="text-[14px] border-r-[4px] pr-[10px] border-[#4E6F88]">
            <h1 className="font-DanaDemiBold  font-semibold">لیست خیرین</h1>
            <span>لیست خیرین و حامیان موسسه</span>
          </div>

          <div className=" min-w-full">
            <div className="flex justify-between w-full px-5  pt-3 items-end ">
              {/*pagination */}
              <Paging
                total={totalPages}
                defaultPage={page}
                onChange={setPage}
                color="#4E6F88"
              />
              <div className="flex gap-x-3 p-0 ">
                <button
                  onClick={() => setNewVolunteerModalShow(true)}
                  className="flex items-center gap-x-1 font-DanaDemiBold text-xs rounded-lg bg-mainBlue text-white p-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.87565 18.1048C14.4205 18.1048 18.1048 14.4205 18.1048 9.87565C18.1048 5.33081 14.4205 1.64648 9.87565 1.64648C5.33081 1.64648 1.64648 5.33081 1.64648 9.87565C1.64648 14.4205 5.33081 18.1048 9.87565 18.1048Z"
                      stroke="white"
                      strokeWidth="1.64583"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.875 6.58398V13.1673"
                      stroke="white"
                      strokeWidth="1.64583"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.58398 9.875H13.1673"
                      stroke="white"
                      strokeWidth="1.64583"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  ثبت خیر جدید
                </button>
                <button
                  className="flex items-center gap-x-1 font-DanaDemiBold text-xs rounded-lg border border-mainBlue bg-white
   text-mainBlue p-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6673 1.66602H5.00065C4.55862 1.66602 4.1347 1.84161 3.82214 2.15417C3.50958 2.46673 3.33398 2.89065 3.33398 3.33268V16.666C3.33398 17.108 3.50958 17.532 3.82214 17.8445C4.1347 18.1571 4.55862 18.3327 5.00065 18.3327H15.0007C15.4427 18.3327 15.8666 18.1571 16.1792 17.8445C16.4917 17.532 16.6673 17.108 16.6673 16.666V6.66602L11.6673 1.66602Z"
                      stroke="#4E6F88"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.666 1.66602V6.66602H16.666"
                      stroke="#4E6F88"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3327 10.834H6.66602"
                      stroke="#4E6F88"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3327 14.166H6.66602"
                      stroke="#4E6F88"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33268 7.5H7.49935H6.66602"
                      stroke="#4E6F88"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  خروجی اکسل
                </button>
              </div>
            </div>
            <div className="text-center mt-[12px] border border-tableBorder rounded-lg ">
              <Table
                tableHeaderDatas={tableHeaderDatas}
                tableBodyDatas={tableBodyDatas}
                setVolunteerId={setVolunteerId}
                setNewVolunteerModalShow={setNewVolunteerModalShow}
                setUpdateMode={setUpdateMode}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
