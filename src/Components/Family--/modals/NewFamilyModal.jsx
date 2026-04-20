import React, { Fragment, useEffect, useState } from "react";
import Button from "../../general/button/Button";
import { Transition, Dialog } from "@headlessui/react";

import Table from "./table/Table";

import CustomDateInput from "../../general/date-picker/CustomDateInput";
import axios from "../../../axiosSetup";
import ComboBox from "../../general/combox/ComboBox";
const NewFamilyModal = ({
  newFamilyModalShow,
  setNewFamilyModalShow,
  setRefresh,
  updateMode,
  setUpdateMode,
  successModalShow,
  setSuccessModalShow,
  familyId,
  setFamilyId,
}) => {
  // ---------------------------------------------------------------------
  const [selectedBirthDate, setSelectedBirthDate] = useState("");
  const [birthDateKey, setBirthDateKey] = useState(false);
  const [selectedInsuranceType, setSelectedInsuranceType] = useState("");
  const [selectedHousingStatus, setSelectedHousingStatus] = useState("");
  const [selectedSupportingOrg, setSelectedSupportingOrg] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  //-------------------------------------------------------
  // Family Head states
  const [headFirstName, setHeadFirstName] = useState("");
  const [headLastName, setHeadLastName] = useState("");
  const [headNationalCode, setHeadNationalCode] = useState("");
  const [headFatherName, setHeadFatherName] = useState("");
  const [headPhone, setHeadPhone] = useState("");
  const [headWifesName, setHeadWifesName] = useState("");
  const [headBankAccount, setHeadBankAccount] = useState("");
  const [headJob, setHeadJob] = useState("");
  const [headLonelyReason, setHeadLonelyReason] = useState("");
  //-------------------------------------------------------
  // Family states
  const [familyAddress, setFamilyAddress] = useState("");
  const [familyPhone, setFamilyPhone] = useState("");
  const [employmentFields, setEmploymentFields] = useState("");

  //-------------------------------------------------------
  const [physicalStatusList, setPhysicalStatusList] = useState([]);
  const [physicalStatus, setPhysicalStatus] = useState("");
  const [genderList, setGenderList] = useState([
    { id: 0, name: "مرد" },
    { id: 1, name: "زن" },
  ]);
  const [gender, setGender] = useState("");
  const [insuranceTypes, setInsuranceTypes] = useState([]);
  const [housingStatus, setHousingStatus] = useState([]);
  const [supportingOrgs, setSupportingOrgs] = useState([]);
  const [regionList, setRegionList] = useState([]);
  const [educationStatusList, setEducationStatusList] = useState([]);
  const [caretakerStatusList, setCaretakerStatusList] = useState([]);
  //-------------------------------------------------------
  const [memberId, setMemberId] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberFatherName, setMemberFatherName] = useState("");
  const [memberNationalCode, setMemberNationalCode] = useState("");
  const [memberRelation, setMemberRelation] = useState("");
  const [memberStatus, setMemberStatus] = useState("");
  const [memberEducationStatus, setMemberEducationStatus] = useState("");
  const [memberGender, setMemberGender] = useState("");
  const [memberBirthdate, setMemberBirthdate] = useState("");
  const [memberBirthdateKey, setMemberBirthdateKey] = useState(false);
  const [memberPhysicalStatus, setMemberPhysicalStatus] = useState("");
  const [memberCaretakerStatus, setMemberCaretakerStatus] = useState("");
  //-------------------------------------------------------
  const [familyMembers, setFamilyMembers] = useState([]);
  const [totalAmount, setTotalAmount] = useState();
  const [tableBodyDatas, setTableBodyDatas] = useState([]);
  const [tableHeaderDatas, setTableHeaderDatas] = useState([
    "ردیف",
    "نام و نام خانوادگی",
    "نام پدر",
    "تاریخ تولد",
    "کد ملی",
    "جنسیت",
    "وضعیت تحصیلی",
    "نسبت",
    "وضعیت سرپرستی",
    "حذف",
  ]);
  //-------------------------------------------------------
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitMember, setIsSubmitMember] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  //-------------------------------------------------------

  console.log("physicalStatus", physicalStatus);

  useEffect(() => {
    if (newFamilyModalShow && familyId) {
      axios
        .get("/api/families/info", {
          params: {
            family_id: familyId,
          },
        })
        .then((res) => {
          let data = res.data?.list[0];
          let tableData = res.data.list[1].members;
          if (res.status === 200) {
            setHeadFirstName(data?.head_first_name);
            setHeadLastName(data?.head_last_name);
            setHeadFatherName(data?.father_name);
            setHeadNationalCode(data?.head_national_code);
            setHeadPhone(data?.head_phone);
            setPhysicalStatus({
              physical_status_id: data?.physical_status_id,
              physical_status_name: data?.physical_status_name,
            });
            setGender({ id: data?.gender, name: data?.gender_name });
            setHeadWifesName(data?.wifes_name);
            setHeadBankAccount(data?.bank_account);
            setHeadJob(data?.head_job);
            setSelectedInsuranceType({
              insurance_type_id: data?.insurance_type_id,
              insurance_type_name: data?.insurance_type_name,
            });
            setSelectedHousingStatus({
              house_status_id: data?.house_status_id,
              house_status_name: data?.house_status_name,
            });
            setFamilyAddress(data?.address);
            setFamilyPhone(data?.phone);
          }
          setSelectedRegion({
            region_id: data?.region_id,
            region_name: data?.region_name,
          });
          setSelectedSupportingOrg({
            support_orgs_id: data?.support_orgs_id,
            support_orgs_name: data?.support_orgs_name,
          });
          setEmploymentFields(data?.employment_fields);
          // -------------------------------------------------------------
          setTableBodyDatas(tableData);
        })
        .catch((error) => {
          console.log("API error->", error);
        });
    }
  }, [newFamilyModalShow]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form is submitted");
    setIsSubmit(true);

    // Validate required fields
    const errors = {};
    if (!headFirstName) errors.headFirstName = "نام الزامی است";
    if (!headLastName) errors.headLastName = "نام خانوادگی الزامی است";
    if (!headNationalCode) errors.headNationalCode = "کد ملی الزامی است";
    if (!selectedBirthDate) errors.selectedBirthDate = "تاریخ تولد الزامی است";

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});

    // Construct family_members array with proper structure
    const formattedFamilyMembers = familyMembers.map((member) => ({
      first_name: member.memberName?.split(" ")[0] || "",
      last_name: member.memberName?.split(" ").slice(1).join(" ") || "",
      father_name: member.memberFatherName || "",
      gender: member.memberGender === "مرد" ? 1 : 2,
      national_code: member.memberNationalCode || "",
      birth_date: member.memberBirthdate || "",
      physical_status_id: member.memberPhysicalStatus?.id || 1,
      caretaker_status_id: member.memberCaretakerStatus?.caretaker_status_id,
      education_status_id: member.memberEducationStatus?.education_status_id,
    }));

    const requestBody = {
      family: {
        insurance_type_id: selectedInsuranceType?.insurance_type_id,
        house_status_id: selectedHousingStatus?.house_status_id,
        address: familyAddress || "",
        phone: familyPhone || "",
        region_id: selectedRegion?.id || 1,
        support_orgs_id: selectedSupportingOrg?.support_orgs_id,
        employment_fields: employmentFields || "",
      },
      family_head: {
        first_name: headFirstName || "",
        last_name: headLastName || "",
        national_code: headNationalCode || "",
        birth_date: selectedBirthDate || "",
        father_name: headFatherName || "",
        phone: headPhone || "",
        wifes_name: headWifesName || "",
        bank_account: headBankAccount || "",
        job: headJob || "",
        gender: gender?.id === 1 ? 1 : 2, // مرد=1, زن=2
        physical_status_id: physicalStatus?.physical_status_id,
        lonely_reason: headLonelyReason || "",
      },
      family_members: formattedFamilyMembers,
    };

    axios
      .post(`/api/families`, requestBody)
      .then((res) => {
        if (res.status === 201) {
          setSuccessModalShow(true);
          setRefresh((prev) => !prev);
          onClose();
          // Reset form
          setHeadFirstName("");
          setHeadLastName("");
          setHeadNationalCode("");
          setHeadFatherName("");
          setHeadPhone("");
          setHeadWifesName("");
          setHeadBankAccount("");
          setHeadJob("");
          setHeadLonelyReason("");
          setSelectedBirthDate("");
          setGender("");
          setPhysicalStatus("");
          setFamilyAddress("");
          setFamilyPhone("");
          setEmploymentFields("");
          setSelectedInsuranceType("");
          setSelectedHousingStatus("");
          setSelectedRegion("");
          setSelectedSupportingOrg("");
          setFamilyMembers([]);
          setTableBodyDatas([]);
          setIsSubmit(false);
        }
      })
      .catch((error) => {
        console.error("Error submitting family:", error);
        setIsSubmit(false);
      });
  };

  const addNewMember = () => {
    setIsSubmitMember(true);

    // require at least a name or national code
    if (!memberNationalCode) {
      setIsSubmitMember(false);
      return;
    }

    setFamilyMembers((prevMembers) => {
      // Check duplicate by national code if provided, otherwise by name+birthdate
      const exists = memberNationalCode
        ? prevMembers.some(
            (m) =>
              m.memberNationalCode &&
              m.memberNationalCode === memberNationalCode,
          )
        : prevMembers.some(
            (m) =>
              m.memberName === memberName &&
              m.memberBirthdate === memberBirthdate,
          );

      if (exists) {
        // duplicate — do not add
        setIsSubmitMember(false);
        return prevMembers;
      }

      const newMember = {
        memberName: memberName || "",
        memberFatherName: memberFatherName || "",
        memberNationalCode: memberNationalCode || "",
        memberRelation: memberRelation || "",
        memberCaretakerStatus:
          memberCaretakerStatus?.caretaker_status_name || "",
        memberEducationStatus:
          memberEducationStatus?.education_status_name || "",
        memberGender: memberGender?.name || memberGender || "",
        memberBirthdate: memberBirthdate || "",
        memberPhysicalStatus: memberPhysicalStatus?.physical_status_name || "",
        // Store IDs for API submission
        memberCaretakerStatusId: memberCaretakerStatus?.id || null,
        memberEducationStatusId: memberEducationStatus?.id || null,
        memberGenderId: memberGender?.id || null,
        memberPhysicalStatusId: memberPhysicalStatus?.id || null,
      };

      const updated = [...prevMembers, newMember];
      setTableBodyDatas(updated);

      // reset member form fields

      setMemberName("");
      setMemberFatherName("");
      setMemberNationalCode("");
      setMemberRelation("");
      setMemberStatus("");
      setMemberEducationStatus("");
      setMemberGender("");
      setMemberBirthdate("");
      setMemberPhysicalStatus("");
      setMemberCaretakerStatus("");
      setIsSubmitMember(false);
      setMemberBirthdateKey((prev) => !prev);

      return updated;
    });
  };

  const removeMember = (index) => {
    setTableBodyDatas((prev) => prev.filter((_, i) => i !== index));
    setFamilyMembers((prev) => prev.filter((_, i) => i !== index));
  };
  const onClose = () => {
    setNewFamilyModalShow(false);
    setTimeout(() => {
      setUpdateMode(false);
    }, 200);
    setIsSubmit(false);
    setValidationErrors({});
    setFamilyId(null);
  };
  useEffect(() => {
    if (!updateMode) {
      axios
        .get(`/api/physicalStatus`)
        .then((res) => {
          setPhysicalStatusList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [newFamilyModalShow]);
  useEffect(() => {
    if (!updateMode) {
      axios
        .get(`/api/insuranceTypes`)
        .then((res) => {
          setInsuranceTypes(res.data.list);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [newFamilyModalShow]);
  useEffect(() => {
    if (!updateMode) {
      axios
        .get(`/api/houseStatus`)
        .then((res) => {
          setHousingStatus(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [newFamilyModalShow]);
  useEffect(() => {
    if (!updateMode) {
      axios
        .get(`/api/supportOrgs`)
        .then((res) => {
          setSupportingOrgs(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [newFamilyModalShow]);
  useEffect(() => {
    if (!updateMode) {
      axios
        .get(`/api/educationStatus`)
        .then((res) => {
          setEducationStatusList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [newFamilyModalShow]);
  useEffect(() => {
    if (!updateMode) {
      axios
        .get(`/api/caretakerStatus`)
        .then((res) => {
          setCaretakerStatusList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [newFamilyModalShow]);
  useEffect(() => {
    if (!updateMode) {
      axios
        .get(`/api/regions`)
        .then((res) => {
          setRegionList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [newFamilyModalShow]);
  return (
    <Transition appear show={newFamilyModalShow} as={Fragment}>
      <Dialog as="div" onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur bg-black bg-opacity-60" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div dir="rtl">
                <Dialog.Panel
                  className={`flex relative flex-col items-center justify-center`}
                >
                  <div className="w-[850px] rounded-t-[16px] flex items-center justify-between h-[54px] bg-gradient-to-l to-[#6F8FA8] from-mainBlue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white mr-4 cursor-pointer"
                      onClick={onClose}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white ml-auto mr-3 font-iranSans text-[14px]">
                      {updateMode ? "ویرایش خانواده" : "ثبت خانواده جدید "}
                    </span>
                  </div>
                  <div className="flex flex-col rounded-b-[16px] w-[850px] bg-white items-start justify-center px-4  pb-4">
                    <form
                      className="flex my-6 items-start justify-between flex-col xl:max-w-full mx-auto w-full z-50"
                      onSubmit={onSubmitHandler}
                      id="submitModal"
                    >
                      <div className="relative z-[10000] mb-[20px] border-[1px] border-tableBorder flex rounded-lg flex-wrap py-4 gap-3 px-5 w-full">
                        <span
                          className={`${`text-[10px] right-[6px] left-18 -top-2 px-[4px]`} absolute group-focus-within:px-[4px] 
      min-w-max cursor-text  ease-in-out duration-500  font-iranSans text-mainBlue text-left transition-all bg-white`}
                        >
                          مشخصات سرپرست
                        </span>
                        <input
                          type="text"
                          placeholder="نام "
                          value={headFirstName}
                          onChange={(e) => setHeadFirstName(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />{" "}
                        {validationErrors.headFirstName && (
                          <span className="text-red-600 text-[9px] font-iranSansBold">
                            {validationErrors.headFirstName}
                          </span>
                        )}{" "}
                        <input
                          type="text"
                          placeholder="نام خانوادگی "
                          value={headLastName}
                          onChange={(e) => setHeadLastName(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />{" "}
                        {validationErrors.headLastName && (
                          <span className="text-red-600 text-[9px] font-iranSansBold">
                            {validationErrors.headLastName}
                          </span>
                        )}{" "}
                        <input
                          type="text"
                          placeholder="نام پدر "
                          value={headFatherName}
                          onChange={(e) => setHeadFatherName(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <input
                          type="text"
                          placeholder="کد ملی "
                          value={headNationalCode}
                          onChange={(e) => setHeadNationalCode(e.target.value)}
                          className=" border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />{" "}
                        {validationErrors.headNationalCode && (
                          <span className="text-red-600 text-[9px] font-iranSansBold">
                            {validationErrors.headNationalCode}
                          </span>
                        )}{" "}
                        <div className="relative">
                          <CustomDateInput
                            title="تاریخ تولد"
                            value={selectedBirthDate}
                            setValue={setSelectedBirthDate}
                            dateKey={birthDateKey}
                            setKey={setBirthDateKey}
                          />
                          {(!selectedBirthDate && isSubmit) ||
                          validationErrors.selectedBirthDate ? (
                            <span className="font-iranSansBold -mb-1 mt-1 text-red-600 ease-in-out duration-300 text-[9px]">
                              {validationErrors.selectedBirthDate ||
                                "وارد کردن تاریخ تولد الزامی است"}
                            </span>
                          ) : null}
                        </div>
                        <input
                          type="text"
                          placeholder="شماره همراه "
                          value={headPhone}
                          onChange={(e) => setHeadPhone(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <div className="relative flex items-center z-[1000000]">
                          <ComboBox
                            title="وضعیت جسمانی"
                            data={physicalStatusList}
                            selectedValue={physicalStatus}
                            onChangeHandler={(value) =>
                              setPhysicalStatus(value)
                            }
                            itemName={(item) => item.physical_status_name}
                            color="#420E5A"
                            ringColor="#4E6F88"
                            rounded="8px"
                          />
                          {physicalStatus && (
                            <svg
                              onClick={() => {
                                setPhysicalStatus("");
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-mainBlue cursor-pointer  left-2 top-[7px] absolute"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="relative flex items-center">
                          <ComboBox
                            title="جنسیت "
                            data={genderList}
                            selectedValue={gender}
                            onChangeHandler={(val) => setGender(val)}
                            itemName={(item) => item.name}
                            color="#420E5A"
                            ringColor="#4E6F88"
                            rounded="8px"
                          />
                          {gender && (
                            <svg
                              onClick={() => {
                                setGender("");
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-mainBlue cursor-pointer  left-2 top-[7px] absolute"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          type="text"
                          placeholder="نام همسر "
                          value={headWifesName}
                          onChange={(e) => setHeadWifesName(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <input
                          type="text"
                          placeholder="علت تنهایی "
                          value={headLonelyReason}
                          onChange={(e) => setHeadLonelyReason(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <input
                          type="text"
                          placeholder="شماره حساب سرپرست "
                          value={headBankAccount}
                          onChange={(e) => setHeadBankAccount(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <input
                          type="text"
                          placeholder="شغل "
                          value={headJob}
                          onChange={(e) => setHeadJob(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                      </div>
                      <div className="relative z-[40] mb-[20px] border-[1px] border-tableBorder flex rounded-lg flex-wrap py-4 gap-3 px-5 w-full">
                        <span
                          className={`${`text-[10px] right-[6px] left-18 -top-2 px-[4px]`} absolute group-focus-within:px-[4px] 
      min-w-max cursor-text  ease-in-out duration-500  font-iranSans text-mainBlue text-left transition-all bg-white`}
                        >
                          اطلاعات خانواده
                        </span>

                        <div className="relative flex items-center">
                          <ComboBox
                            title="نوع بیمه"
                            data={insuranceTypes}
                            selectedValue={selectedInsuranceType}
                            onChangeHandler={(value) =>
                              setSelectedInsuranceType(value)
                            }
                            itemName={(item) => item.insurance_type_name}
                            color="#420E5A"
                            ringColor="#4E6F88"
                            rounded="8px"
                          />
                          {selectedInsuranceType && (
                            <svg
                              onClick={() => {
                                setSelectedInsuranceType("");
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-mainBlue cursor-pointer  left-2 top-[7px] absolute"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="relative flex items-center z-40">
                          <ComboBox
                            title="وضعیت مسکن"
                            data={housingStatus}
                            selectedValue={selectedHousingStatus}
                            onChangeHandler={(value) =>
                              setSelectedHousingStatus(value)
                            }
                            itemName={(item) => item.house_status_name}
                            color="#420E5A"
                            ringColor="#4E6F88"
                            rounded="8px"
                          />
                          {selectedHousingStatus && (
                            <svg
                              onClick={() => {
                                setSelectedHousingStatus("");
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-mainBlue cursor-pointer  left-2 top-[7px] absolute"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          type="text"
                          placeholder="آدرس "
                          value={familyAddress}
                          onChange={(e) => setFamilyAddress(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <input
                          type="text"
                          placeholder="تلفن "
                          value={familyPhone}
                          onChange={(e) => setFamilyPhone(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <div className="relative flex items-center">
                          <ComboBox
                            title="منطقه"
                            data={regionList}
                            selectedValue={selectedRegion}
                            onChangeHandler={(value) =>
                              setSelectedRegion(value)
                            }
                            itemName={(item) => item.region_name}
                            color="#420E5A"
                            ringColor="#4E6F88"
                            rounded="8px"
                          />
                          {selectedRegion && (
                            <svg
                              onClick={() => {
                                setSelectedRegion("");
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-mainBlue cursor-pointer  left-2 top-[7px] absolute"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="relative flex items-center">
                          <ComboBox
                            title="سازمان حمایت کننده"
                            data={supportingOrgs}
                            selectedValue={selectedSupportingOrg}
                            onChangeHandler={(value) =>
                              setSelectedSupportingOrg(value)
                            }
                            itemName={(item) => item.support_orgs_name}
                            color="#420E5A"
                            ringColor="#4E6F88"
                            rounded="8px"
                          />
                          {selectedSupportingOrg && (
                            <svg
                              onClick={() => {
                                setSelectedSupportingOrg("");
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-mainBlue cursor-pointer  left-2 top-[7px] absolute"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          type="text"
                          placeholder="زمینه های اشتغال "
                          value={employmentFields}
                          onChange={(e) => setEmploymentFields(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                      </div>

                      <div className="relative mb-[20px] border-[1px] border-tableBorder flex rounded-lg flex-wrap py-4 gap-3 px-5 w-full">
                        <span
                          className={`${`text-[10px] right-[6px] left-18 -top-2 px-[4px]`} absolute group-focus-within:px-[4px] 
      min-w-max cursor-text  ease-in-out duration-500  font-iranSans text-mainBlue text-left transition-all bg-white`}
                        >
                          عضو جدید
                        </span>

                        <input
                          type="text"
                          placeholder="نام و نام خانوادگی "
                          value={memberName}
                          onChange={(e) => setMemberName(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <input
                          type="text"
                          placeholder="نام پدر "
                          value={memberFatherName}
                          onChange={(e) => setMemberFatherName(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <div className="relative flex items-center">
                          <ComboBox
                            title="جنسیت "
                            data={genderList}
                            selectedValue={memberGender}
                            onChangeHandler={(val) => setMemberGender(val)}
                            itemName={(item) => item.name}
                            color="#420E5A"
                            ringColor="#4E6F88"
                            rounded="8px"
                          />
                          {memberGender && (
                            <svg
                              onClick={() => {
                                setMemberGender("");
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-mainBlue cursor-pointer  left-2 top-[7px] absolute"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          type="text"
                          placeholder="نسب "
                          value={memberRelation}
                          onChange={(e) => setMemberRelation(e.target.value)}
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <input
                          type="text"
                          placeholder="کدملی  "
                          value={memberNationalCode}
                          onChange={(e) =>
                            setMemberNationalCode(e.target.value)
                          }
                          className="border border-mainBlue/25 px-2.5 py-2 rounded-lg text-sxs font-DanaMedium"
                        />
                        <div className="relative flex items-center">
                          <ComboBox
                            title="وضعیت جسمانی"
                            data={physicalStatusList}
                            selectedValue={memberPhysicalStatus}
                            onChangeHandler={(value) =>
                              setMemberPhysicalStatus(value)
                            }
                            itemName={(item) => item.physical_status_name}
                            color="#420E5A"
                            ringColor="#4E6F88"
                            rounded="8px"
                          />
                          {memberPhysicalStatus && (
                            <svg
                              onClick={() => {
                                setMemberPhysicalStatus("");
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-mainBlue cursor-pointer  left-2 top-[7px] absolute"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="relative">
                          <CustomDateInput
                            title="تاریخ تولد"
                            value={memberBirthdate}
                            setValue={setMemberBirthdate}
                            dateKey={memberBirthdateKey}
                            setKey={setMemberBirthdateKey}
                          />
                          {!memberBirthdate && isSubmit && (
                            <span className="font-iranSansBold -mb-1 mt-1 text-red-600 ease-in-out duration-300 text-[9px]">
                              وارد کردن تاریخ تولد الزامی است
                            </span>
                          )}
                        </div>
                        <div className="relative flex items-center">
                          <ComboBox
                            title="وضعیت سرپرستی"
                            data={caretakerStatusList}
                            selectedValue={memberCaretakerStatus}
                            onChangeHandler={(value) =>
                              setMemberCaretakerStatus(value)
                            }
                            itemName={(item) => item.caretaker_status_name}
                            color="#420E5A"
                            ringColor="#4E6F88"
                            rounded="8px"
                          />
                          {memberCaretakerStatus && (
                            <svg
                              onClick={() => {
                                setMemberCaretakerStatus("");
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-mainBlue cursor-pointer  left-2 top-[7px] absolute"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="relative flex items-center">
                          <ComboBox
                            title="وضعیت تحصیلی"
                            data={educationStatusList}
                            selectedValue={memberEducationStatus}
                            onChangeHandler={(value) =>
                              setMemberEducationStatus(value)
                            }
                            itemName={(item) => item.education_status_name}
                            color="#420E5A"
                            ringColor="#4E6F88"
                            rounded="8px"
                          />
                          {memberEducationStatus && (
                            <svg
                              onClick={() => {
                                setMemberEducationStatus("");
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-mainBlue cursor-pointer  left-2 top-[7px] absolute"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </div>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            addNewMember();
                          }}
                          title="اضافه به لیست"
                          bg
                          isContractors
                          type="button"
                          color="bg-mainBlue"
                        />
                      </div>

                      <div className="relative border-[1px] border-b-mainBlue flex rounded-[8px] flex-wrap py-7 gap-4 w-full">
                        <span
                          className={`${`text-[10px] right-[6px] left-18 -top-2 px-[4px]`} absolute group-focus-within:px-[4px] 
      min-w-max cursor-text  ease-in-out duration-500  font-iranSans text-mainBlue text-left transition-all bg-white`}
                        >
                          لیست اعضا
                        </span>
                        <Table
                          tableBodyDatas={tableBodyDatas}
                          tableHeaderDatas={tableHeaderDatas}
                          setTotalAmount={setTotalAmount}
                          removeMember={removeMember}
                          updateMode={updateMode}
                        />
                      </div>

                      <div className="mr-auto mt-1 ml-2">
                        <Button
                          title="ثبت فرم"
                          bg
                          isContractors
                          type="submit"
                          color="bg-mainBlue"
                          disabled={isSubmit}
                        />
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NewFamilyModal;
