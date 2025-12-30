import React, { useState } from "react";
import { Formik, Form } from "formik";
import ComboBox from "../../general/combox/ComboBox";
const Search = ({selectedVolunteer, setSelectedVolunteer,selectedVolunteerCode,setSelectedVolunteerCode}) => {

  const [volunteerList,setVolunteerList]=useState([])
  const [volunteerCodeList,setVolunteerCodeList]=useState([])
  const InitialValues = {
    userName: "",
    name: "",
  };
  return (
    <Formik
      initialValues={InitialValues}
      className="w-full flex justify-center items-center"
    >
      {({ values }) => (
        <Form className=" w-full border-y-2 p-2">
          <div className="flex items-center gap-x-1 mb-2 ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12L5 4"
                stroke="#4E6F88"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M19 20L19 18"
                stroke="#4E6F88"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M5 20L5 16"
                stroke="#4E6F88"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M19 12L19 4"
                stroke="#4E6F88"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 7L12 4"
                stroke="#4E6F88"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 20L12 12"
                stroke="#4E6F88"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx="5"
                cy="14"
                r="2"
                stroke="#4E6F88"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx="12"
                cy="9"
                r="2"
                stroke="#4E6F88"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx="19"
                cy="15"
                r="2"
                stroke="#4E6F88"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-sm">
              در صورت نیاز به فیلتر اطلاعات در جدول, از فیلتر های زیر استفاده
              کنید.
            </span>
          </div>
          <div className="flex justify-between items-center min-w-full ">
            <div className="flex gap-x-3 justify-start ">
           
              <div className="relative flex flex-col">
                <ComboBox
                  title="نام خیر"
                  data={volunteerList}
                  selectedValue={selectedVolunteer}
                  onChangeHandler={(val) => setSelectedVolunteer(val)}
                  
                  itemName={(item) => item.name}
                  width="163px"
                  height="32px"
                  rounded="8px"
            
                />
                
                {selectedVolunteer && (
                  <svg
                    onClick={() =>{setSelectedVolunteer(null)
                     
                      
                    } }
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 cursor-pointer absolute left-2 top-[10px] z-30"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
              <div className="relative flex flex-col ">
                <ComboBox
                  title="کد خیر"
                  data={volunteerCodeList}
                  selectedValue={selectedVolunteerCode}
                  onChangeHandler={(val) => setSelectedVolunteerCode(val)}
                  itemName={(item) => item.name}
                  width="163px"
                  height="32px"
                  rounded="8px"
            
                />
                {selectedVolunteerCode && (
                  <svg
                    onClick={() => setSelectedVolunteerCode(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 cursor-pointer absolute left-2 top-[10px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Search;
