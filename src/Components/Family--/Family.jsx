import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Search from "./search/Search";
import Table from "./table/Table";
import axios from "../../axiosSetup";
import NewFamilyModal from "./modals/NewFamilyModal";
import GeneralSuccessModal from "../general/modals/GeneralSuccessModal";
import Paging from "../general/paging/Paging";

export default function Family() {
  //----------------------------------------------------------------
  const [newFamilyModalShow, setNewFamilyModalShow] = useState(false);
  const [successModalShow, setSuccessModalShow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  //----------------------------------------------------------------
  const [updateMode, setUpdateMode] = useState(false);
  const [selectedResidenceStatus, setSelectedResidenceStatus] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedFamilyHead, setSelectedFamilyHead] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  //----------------------------------------------------------------
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  //----------------------------------------------------------------
  const [familyId, setFamilyId] = useState(null);
  //----------------------------------------------------------------
  const [tableBodyDatas, setTableBodyDatas] = useState([]);
  const [tableHeaderDatas, setTableHeaderDatas] = useState([
    "ردیف",
    " نام و نام خانوادگی سرپرست",
    "کدملی",
    "شغل",
    "تعداد اعضای خانواده",
    "وضعیت مسکن",
    "منطقه",
    "مشاهده پروفایل ",
  ]);
  useEffect(() => {
    axios
      .get("/api/families", {
        params: {
          family_head_id: selectedFamilyHead,
          job: selectedJob,
          house_status_id: selectedResidenceStatus,
          page: page,
          limit: 10,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setTableBodyDatas(res.data.list);
          const totalHeader = Number(res.data.total);
          setTotalPages(
            Math.max(1, Math.ceil((isNaN(totalHeader) ? 0 : totalHeader) / 10)),
          );
        }
      })
      .catch((error) => {
        console.log("API error->", error);
      });
  }, [refresh]);

  return (
    <>
      <NewFamilyModal
        newFamilyModalShow={newFamilyModalShow}
        setNewFamilyModalShow={setNewFamilyModalShow}
        setSuccessModalShow={setSuccessModalShow}
        setRefresh={setRefresh}
        updateMode={updateMode}
        setUpdateMode={setUpdateMode}
        familyId={familyId}
        setFamilyId={setFamilyId}
        //formId={formId}
        //setFormId={setFormId}
      />
      <GeneralSuccessModal
        successModalShow={successModalShow}
        setSuccessModalShow={setSuccessModalShow}
      />
      <Header title={"خانوار تحت پوشش"}>
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
        <div className="w-full  my-3 flex justify-start items-center py-2">
          <Search
            selectedResidenceStatus={selectedResidenceStatus}
            setSelectedResidenceStatus={setSelectedResidenceStatus}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </div>
        <div className="w-full mt-2">
          <div className="text-[14px] border-r-[4px] pr-[10px] border-[#4E6F88]">
            <h1 className="font-DanaDemiBold  font-semibold">
              لیست سرپرستان خانوار
            </h1>
            <span>لیست خانواده های تحت پوشش موسسه</span>
          </div>
          <div className=" min-w-full">
            <div className="flex justify-between w-full px-5  pt-3 items-end ">
              {/*pagination */}
              {/* <div className="flex items-center justify-between w-[226px] mt-5">
                <div className="flex items-center">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.6062 15.5031C7.46328 15.5031 7.32037 15.4506 7.20754 15.3381C6.98941 15.1206 6.98941 14.7606 7.20754 14.5431L12.1117 9.65313C12.4728 9.29313 12.4728 8.70813 12.1117 8.34812L7.20754 3.45813C6.98941 3.24063 6.98941 2.88063 7.20754 2.66313C7.42568 2.44563 7.78672 2.44563 8.00485 2.66313L12.9091 7.55312C13.2927 7.93562 13.5108 8.45313 13.5108 9.00063C13.5108 9.54813 13.3002 10.0656 12.9091 10.4481L8.00485 15.3381C7.89203 15.4431 7.74911 15.5031 7.6062 15.5031Z"
                      fill="#4E6F88"
                    />
                  </svg>
                  <span className="text-sxs">قبل</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs pl-1">صفحه </span>
                  <select className="w-12 border border-mainBlue rounded"></select>
                </div>
                <div className="flex items-center">
                  <span className="text-xs pl-1">از </span>
                  <input
                    type="text"
                    className="w-7 border border-mainBlue rounded"
                  />
                </div>
                <div className="flex items-center">
                  <span className="text-sxs">بعد</span>
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5825 15.5031C11.4396 15.5031 11.2967 15.4506 11.1838 15.3381L6.27962 10.4481C5.48231 9.65313 5.48231 8.34812 6.27962 7.55312L11.1838 2.66313C11.402 2.44563 11.763 2.44563 11.9811 2.66313C12.1993 2.88063 12.1993 3.24063 11.9811 3.45813L7.07693 8.34812C6.71589 8.70813 6.71589 9.29313 7.07693 9.65313L11.9811 14.5431C12.1993 14.7606 12.1993 15.1206 11.9811 15.3381C11.8683 15.4431 11.7254 15.5031 11.5825 15.5031Z"
                      fill="#4E6F88"
                    />
                  </svg>
                </div>
              </div> */}
              <Paging
                total={totalPages}
                defaultPage={page}
                onChange={setPage}
                color="#4E6F88"
              />
              <div className="flex gap-x-3 p-0 ">
                <button
                  onClick={() => setNewFamilyModalShow(true)}
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
                  ثبت خانواده جدید
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
                setFamilyId={setFamilyId}
                setNewFamilyModalShow={setNewFamilyModalShow}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
