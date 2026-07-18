import React, { Fragment, useEffect, useState } from "react";
import Button from "../../general/button/Button";
import { Transition, Dialog } from "@headlessui/react";

import Table from "./table/Table";

import CustomDateInput from "../../general/date-picker/CustomDateInput";
import axios from "../../../axiosSetup";
import ComboBox from "../../general/combox/ComboBox";
import {
  convertEnglishToPersianDateChatGpt,
  convertPersianToEnglishDate,
} from "../../general/util";
import ErrorModal from "../../general/modals/ErrorModal";
import ListBox from "../../general/listbox/ListBox";
import CustomInput from "../../general/input/CustomInput";
// import "../../../styles.css"

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
  const [originalBirthDate, setOriginalBirthDate] = useState("");
  const [birthDateKey, setBirthDateKey] = useState(false);
  const [selectedInsuranceType, setSelectedInsuranceType] = useState("");
  const [selectedHousingStatus, setSelectedHousingStatus] = useState("");
  const [selectedSupportingOrg, setSelectedSupportingOrg] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(null);
  //-------------------------------------------------------
  // Family Head states
  const [headFirstName, setHeadFirstName] = useState("");
  const [headLastName, setHeadLastName] = useState("");
  const [headNationalCode, setHeadNationalCode] = useState("");
  const [headFatherName, setHeadFatherName] = useState("");
  const [headPhone, setHeadPhone] = useState("");
  const [isSeyyed, setIsSeyyed] = useState();
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
  const [lonelyReasonList, setLonelyReasonList] = useState([]);
  const [lonelyReason, setLonelyReason] = useState();
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
  const [memberFamily, setMemberFamily] = useState("");
  const [memberFatherName, setMemberFatherName] = useState("");
  const [memberNationalCode, setMemberNationalCode] = useState("");
  const [memberRelation, setMemberRelation] = useState("");
  const [memberStatus, setMemberStatus] = useState("");
  const [memberEducationStatus, setMemberEducationStatus] = useState("");
  const [memberGender, setMemberGender] = useState(null);
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
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  //-------------------------------------------------------
  const [memberErrors, setMemberErrors] = useState();
  //-------------------------------------------------------
  const [newMemberShow, setNewMemberShow] = useState(false);
  //-------------------------------------------------------

  console.log("memberCaretakerStatus", memberCaretakerStatus);

  console.log("familyMembers", familyMembers);
  console.log("tableBodyDatas", tableBodyDatas);
  console.log("gender", gender);

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
          if (data?.birth_date) {
            let startDate = convertPersianToEnglishDate(
              `${data?.birth_date[0]}${data?.birth_date[1]}${data?.birth_date[2]}${data?.birth_date[3]}`,
              `${data?.birth_date[5]}${data?.birth_date[6]}`,
              `${data?.birth_date[8]}${data?.birth_date[9]}`,
            );
            setSelectedBirthDate(startDate);
            setOriginalBirthDate(startDate);
            setBirthDateKey((prevKey) => prevKey + 1);
          }
          // -------------------------------------------------------------
          setIsSeyyed({
            value: data?.is_seyyed,
            name: data?.is_seyyed ? "سید" : "غیر سید",
          });
          // -------------------------------------------------------------
          setLonelyReason({
            lonely_reason_id: data?.lonely_reason_id,
            lonely_reason_name: data?.lonely_reason_name,
          });
          // -------------------------------------------------------------
          // Normalize the table data to have consistent property names
          const normalizedTableData = tableData.map((member) => ({
            // Use consistent property names (camelCase with member prefix)
            memberName: member.first_name || "",
            memberFamily: member.last_name || "",
            memberFatherName: member.father_name || "",
            memberNationalCode: member.national_code || "",
            memberRelation: member.relation || "", // Add if you have this in API
            memberCaretakerStatus: member.caretaker_status_name || "",
            memberEducationStatus: member.education_status_name || "",
            memberGender: member.gender === 1 ? "مرد" : "زن",
            memberBirthdate: member.birth_date || "",
            memberPhysicalStatus: member.physical_status_name || "",
            // Store IDs for API submission
            memberCaretakerStatusId: member.caretaker_status_id || null,
            memberEducationStatusId: member.education_status_id || null,
            memberGenderId: member.gender === 1 ? 0 : 1, // 0 for male, 1 for female
            memberPhysicalStatusId: member.physical_status_id || 1,
            // Keep original data for reference if needed
            family_member_id: member.family_member_id,
            family_id: member.family_id,
          }));

          setTableBodyDatas(normalizedTableData);
        })
        .catch((error) => {
          console.log("API error->", error);
        });
    }
  }, [newFamilyModalShow]);

  console.log("selectedRegion",selectedRegion);
  

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form is submitted");
    setIsSubmit(true);

    // Validate required fields
    const errors = {};
    if (!headFirstName) errors.headFirstName = "نام الزامی است";
    if (!headLastName) errors.headLastName = "نام خانوادگی الزامی است";
    // if (!headNationalCode) errors.headNationalCode = "کد ملی الزامی است";
    // if (!selectedBirthDate) errors.selectedBirthDate = "تاریخ تولد الزامی است";

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});

    // // Construct family_members array with proper structure
    // const formattedFamilyMembers = familyMembers.map((member) => ({
    //   first_name: member.memberName?.split(" ")[0] || "",
    //   last_name: member.memberName?.split(" ").slice(1).join(" ") || "",
    //   father_name: member.memberFatherName || "",
    //   gender: member.memberGender === "مرد" ? 1 : 2,
    //   national_code: member.memberNationalCode || "",
    //   birth_date: member.memberBirthdate || "",
    //   physical_status_id: member.memberPhysicalStatus?.id || 1,
    //   caretaker_status_id: member.memberCaretakerStatus?.caretaker_status_id,
    //   education_status_id: member.memberEducationStatus?.education_status_id,
    // }));

    // Format ALL members from tableBodyDatas (now all have consistent property names)
    const formattedFamilyMembers = tableBodyDatas.map((member) => ({
      first_name: member.memberName || "",
      last_name: member.memberFamily || "",
      father_name: member.memberFatherName || "",
      gender: member.memberGender === "مرد" ? 1 : 2,
      national_code: member.memberNationalCode || "",
      birth_date: member.memberBirthdate || "",
      physical_status_id: member.memberPhysicalStatusId || 1,
      caretaker_status_id: member.memberCaretakerStatusId,
      education_status_id: member.memberEducationStatusId,
      // Include family_member_id if it exists (for updates)
      ...(member.family_member_id && {
        family_member_id: member.family_member_id,
      }),
    }));

    const requestBody = {
      family_id: familyId || null,
      family: {
        insurance_type_id: selectedInsuranceType?.insurance_type_id,
        house_status_id: selectedHousingStatus?.house_status_id,
        address: familyAddress || "",
        phone: familyPhone || "",
        region_id: selectedRegion?.region_id,
        support_orgs_id: selectedSupportingOrg?.support_orgs_id,
        employment_fields: employmentFields || "",
      },
      family_head: {
        first_name: headFirstName || "",
        last_name: headLastName || "",
        national_code: headNationalCode || "",
        birth_date:
          originalBirthDate == selectedBirthDate
            ? convertEnglishToPersianDateChatGpt(originalBirthDate)
            : selectedBirthDate,
        father_name: headFatherName || "",
        phone: headPhone || "",
        wifes_name: headWifesName || "",
        bank_account: headBankAccount || "",
        job: headJob || "",
        gender: gender?.id === 0 ? 0 : 1, // مرد=0, زن=1
        physical_status_id: physicalStatus?.physical_status_id,
        lonely_reason: headLonelyReason || "",
        lonely_reason_id: lonelyReason?.lonely_reason_id,
        is_seyyed: isSeyyed?.value || false,
      },
      family_members: formattedFamilyMembers,
    };

    if (familyId) {
      axios
        .patch(`/api/families`, requestBody)
        .then((res) => {
          if (res.status === 201) {
            setSuccessModalShow(true);
            setRefresh((prev) => !prev);
            onClose();

            setIsSubmit(false);
          }
        })
        .catch((error) => {
          console.error("Error submitting family:", error);
          setErrorMessage(error?.response?.data?.error || "خطا");
          setShowErrorModal(true);
          setIsSubmit(false);
        });
    } else {
      axios
        .post(`/api/families`, requestBody)
        .then((res) => {
          if (res.status === 201) {
            setSuccessModalShow(true);
            setRefresh((prev) => !prev);
            onClose();

            setIsSubmit(false);
          }
        })
        .catch((error) => {
          console.error("Error submitting family:", error);
          setErrorMessage(error?.response?.data?.error || "خطا");
          setShowErrorModal(true);
          setIsSubmit(false);
        });
    }
  };

  // const addNewMember = () => {
  //   setIsSubmitMember(true);

  //   // require at least a name or national code
  //   if (!memberNationalCode) {
  //     setIsSubmitMember(false);
  //     return;
  //   }

  //   setFamilyMembers((prevMembers) => {
  //     // Check duplicate by national code if provided, otherwise by name+birthdate
  //     const exists = memberNationalCode
  //       ? prevMembers.some(
  //         (m) =>
  //           m.memberNationalCode &&
  //           m.memberNationalCode === memberNationalCode,
  //       )
  //       : prevMembers.some(
  //         (m) =>
  //           m.memberName === memberName &&
  //           m.memberBirthdate === memberBirthdate,
  //       );

  //     if (exists) {
  //       // duplicate — do not add
  //       setIsSubmitMember(false);
  //       return prevMembers;
  //     }

  //     const newMember = {
  //       memberName: memberName || "",
  //       memberFatherName: memberFatherName || "",
  //       memberNationalCode: memberNationalCode || "",
  //       memberRelation: memberRelation || "",
  //       memberCaretakerStatus:
  //         memberCaretakerStatus?.caretaker_status_name || "",
  //       memberEducationStatus:
  //         memberEducationStatus?.education_status_name || "",
  //       memberGender: memberGender?.name || memberGender || "",
  //       memberBirthdate: memberBirthdate || "",
  //       memberPhysicalStatus: memberPhysicalStatus?.physical_status_name || "",
  //       // Store IDs for API submission
  //       memberCaretakerStatusId: memberCaretakerStatus?.id || null,
  //       memberEducationStatusId: memberEducationStatus?.id || null,
  //       memberGenderId: memberGender?.id || null,
  //       memberPhysicalStatusId: memberPhysicalStatus?.id || null,
  //     };

  //     const updated = [...prevMembers, newMember];
  //     setTableBodyDatas(updated);

  //     // reset member form fields

  //     setMemberName("");
  //     setMemberFatherName("");
  //     setMemberNationalCode("");
  //     setMemberRelation("");
  //     setMemberStatus("");
  //     setMemberEducationStatus("");
  //     setMemberGender("");
  //     setMemberBirthdate("");
  //     setMemberPhysicalStatus("");
  //     setMemberCaretakerStatus("");
  //     setIsSubmitMember(false);
  //     setMemberBirthdateKey((prev) => !prev);

  //     return updated;
  //   });
  // };

  const validateMember = (member) => {
    const errors = {};

    if (!member.memberName?.trim())
      errors.memberName = "نام عضو نمی‌تواند خالی باشد";

    if (!member.memberFamily?.trim())
      errors.memberFamily = "نام خانوادگی عضو نمی‌تواند خالی باشد";

    // if (!member.memberFatherName?.trim())
    //   errors.memberFatherName = "نام پدر نمی‌تواند خالی باشد";

    // if (!member.memberNationalCode?.trim())
    //   errors.memberNationalCode = "کد ملی الزامی است";
    // else if (!/^\d{10}$/.test(member.memberNationalCode))
    //   errors.memberNationalCode = "کد ملی باید ۱۰ رقم باشد";

    // // if (!member.memberRelation?.trim())
    // //   errors.memberRelation = "نسبت با سرپرست الزامی است";
    // console.log("member.memberGenderId", member.memberGenderId);

    // if (member.memberGenderId === null || member.memberGenderId === undefined) {
    //   errors.memberGender = "لطفاً جنسیت را انتخاب کنید"; // Please select gender
    // }

    // if (!member.memberBirthdate?.trim())
    //   errors.memberBirthdate = "تاریخ تولد الزامی است";

    return errors;
  };

  console.log("memberGender", memberGender);


  const addNewMember = () => {
    setIsSubmitMember(true);

    // if (!memberNationalCode) {
    //   setIsSubmitMember(false);
    //   return;
    // }

    // Check for duplicates in tableBodyDatas
    const exists = memberNationalCode
      ? tableBodyDatas.some(
        (m) =>
          m.national_code === memberNationalCode ||
          m.memberNationalCode === memberNationalCode,
      )
      : false;

    if (exists) {
      setIsSubmitMember(false);
      return;
    }
    console.log("memberGender?.id---->", memberGender?.id);

    const newMember = {
      memberName: memberName || "",
      memberFamily: memberFamily || "",
      memberFatherName: memberFatherName || "",
      memberNationalCode: memberNationalCode || "",
      memberRelation: memberRelation || "",
      memberCaretakerStatus: memberCaretakerStatus?.caretaker_status_name || "",
      memberEducationStatus: memberEducationStatus?.education_status_name || "",
      memberGender: memberGender?.name || memberGender || "",
      memberBirthdate: memberBirthdate || "",
      memberPhysicalStatus: memberPhysicalStatus?.physical_status_name || "",
      memberCaretakerStatusId:
        memberCaretakerStatus?.caretaker_status_id || null,
      memberEducationStatusId:
        memberEducationStatus?.education_status_id || null,
      memberGenderId: memberGender?.id,
      memberPhysicalStatusId: memberPhysicalStatus?.id || null,
    };

    // 1) Run validation
    const errors = validateMember(newMember);

    if (Object.keys(errors).length > 0) {
      setMemberErrors(errors); // نمایش خطاها در UI
      setIsSubmitMember(false);
      return;
    }

    // Update tableBodyDatas with the new member
    setTableBodyDatas((prev) => [...prev, newMember]);

    // Reset form fields
    setMemberName("");
    setMemberFamily("");
    setMemberFatherName("");
    setMemberNationalCode("");
    setMemberRelation("");
    setMemberStatus("");
    setMemberEducationStatus("");
    setMemberGender(null);
    setMemberBirthdate("");
    setMemberPhysicalStatus("");
    setMemberCaretakerStatus("");
    setIsSubmitMember(false);
    setMemberBirthdateKey((prev) => !prev);
  };

  const removeMember = (index) => {
    setTableBodyDatas((prev) => prev.filter((_, i) => i !== index));
    setFamilyMembers((prev) => prev.filter((_, i) => i !== index));
  };
  const onClose = () => {
    setNewFamilyModalShow(false);
    setTimeout(() => {
      setUpdateMode(false);
      setFamilyId(null);
      setValidationErrors({});
    }, 200);
    setIsSubmit(false);
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
    setSelectedRegion(null);
    setSelectedSupportingOrg("");
    setFamilyMembers([]);
    setTableBodyDatas([]);
    // --------------------------------------------
    setMemberErrors();
    setMemberName();
    setMemberFamily();
    setMemberFatherName();
    setMemberGender(null);
    setMemberRelation();
    setMemberNationalCode();
    setMemberPhysicalStatus();
    setMemberBirthdate("");
    setMemberBirthdateKey(false);
    setMemberCaretakerStatus();
    setMemberEducationStatus();
    // --------------------------------------------
    setIsSeyyed();
    setNewMemberShow(false);
    setLonelyReason();
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
        .get(`/api/lonely_reason`)
        .then((res) => {
          setLonelyReasonList(res.data);
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
                  <div className="w-[970px] rounded-t-[16px] flex items-center justify-between h-[54px] bg-gradient-to-l to-[#6F8FA8] from-mainBlue">
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
                      {familyId ? "ویرایش خانواده" : "ثبت خانواده جدید "}
                    </span>
                  </div>
                  <div className="flex flex-col rounded-b-[16px] w-[970px] bg-white items-start justify-center px-4  pb-4">
                    <ErrorModal
                      showModal={showErrorModal}
                      setShowModal={setShowErrorModal}
                      errorMessage={errorMessage}
                    />
                    <form
                      className="flex relative my-6 items-start justify-between flex-col xl:max-w-full mx-auto w-full z-50"
                      onSubmit={onSubmitHandler}
                      id="submitModal"
                    >
                      <div className="relative z-[10000] mb-[20px] border-[1px] border-tableBorder flex items-start rounded-lg flex-wrap py-4 gap-3 px-5 w-full">
                        <span
                          className={`${`text-[10px] right-[6px] left-18 -top-2 px-[4px]`} absolute group-focus-within:px-[4px] 
      min-w-max cursor-text  ease-in-out duration-500  font-iranSans text-mainBlue text-left transition-all bg-white`}
                        >
                          مشخصات سرپرست
                        </span>

                        <div className="flex flex-col">
                          {/* <input
                            type="text"
                            placeholder="نام "
                            value={headFirstName}
                            onChange={(e) => setHeadFirstName(e.target.value)}
                            className="border border-[#4E6F88] px-2.5 py-2 rounded-lg text-[12px] text-black font-DanaMedium"
                          /> */}
                          <CustomInput
                            value={headFirstName}
                            onChange={(e) => setHeadFirstName(e.target.value)}
                            title="نام"
                          />
                          {validationErrors.headFirstName && (
                            <span className="text-red-600 text-[10px] mt-1 font-DanaDemiBold">
                              {validationErrors.headFirstName}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <CustomInput
                            value={headLastName}
                            onChange={(e) => setHeadLastName(e.target.value)}
                            title="نام خانوادگی"
                          />

                          {validationErrors.headLastName && (
                            <span className="text-red-600 text-[10px] mt-1 font-DanaDemiBold">
                              {validationErrors.headLastName}
                            </span>
                          )}
                        </div>
                        <CustomInput
                          value={headFatherName}
                          onChange={(e) => setHeadFatherName(e.target.value)}
                          title="نام پدر "
                        />
                        <div className="flex flex-col">
                          <CustomInput
                            value={headNationalCode}
                            onChange={(e) =>
                              setHeadNationalCode(e.target.value)
                            }
                            title="کد ملی "
                          />

                          {/* {validationErrors.headNationalCode && (
                            <span className="text-red-600 text-[10px] mt-1 font-DanaDemiBold">
                              {validationErrors.headNationalCode}
                            </span>
                          )} */}
                        </div>
                        <div className="relative">
                          <CustomDateInput
                            title="تاریخ تولد"
                            value={selectedBirthDate}
                            setValue={setSelectedBirthDate}
                            dateKey={birthDateKey}
                            setKey={setBirthDateKey}
                          />
                          {/* {(!selectedBirthDate && isSubmit) ||
                            validationErrors.selectedBirthDate ? (
                            <span className="font-DanaDemiBold   -mt-[4px] text-red-600 ease-in-out duration-300 text-[10px]">
                              {validationErrors.selectedBirthDate ||
                                "وارد کردن تاریخ تولد الزامی است"}
                            </span>
                          ) : null} */}
                        </div>

                        <CustomInput
                          value={headPhone}
                          onChange={(e) => setHeadPhone(e.target.value)}
                          title="شماره همراه "
                        />
                        <div className="">
                          <ListBox
                            textSize="12px"
                            data={[
                              { value: true, name: "سید" },
                              { value: false, name: "غیر سید" },
                            ]}
                            onSelectHandler={(value) => setIsSeyyed(value)}
                            itemName={(item) => item?.name}
                            placeHolder="نسب"
                            value={isSeyyed?.name}
                            color="#7F909C"
                            width="160px"
                            rounded="8px"
                          />
                        </div>
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
                            ringColor="rgb(78 111 136 / 0.25)"
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
                            ringColor="rgb(78 111 136 / 0.25)"
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
                        <CustomInput
                          value={headWifesName}
                          onChange={(e) => setHeadWifesName(e.target.value)}
                          title="نام همسر "
                        />
                        <div className="">
                          <ListBox
                            textSize="12px"
                            data={lonelyReasonList}
                            onSelectHandler={(value) => setLonelyReason(value)}
                            itemName={(item) => item?.lonely_reason_name}
                            placeHolder="علت تنهایی"
                            value={lonelyReason?.lonely_reason_name}
                            color="#7F909C"
                            width="160px"
                            rounded="8px"
                          />
                        </div>
                       

                        <CustomInput
                          value={headBankAccount}
                          onChange={(e) => setHeadBankAccount(e.target.value)}
                          title="شماره حساب سرپرست "
                        />

                        <CustomInput
                          value={headJob}
                          onChange={(e) => setHeadJob(e.target.value)}
                          title="شغل"
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
                            ringColor="rgb(78 111 136 / 0.25)"
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
                            ringColor="rgb(78 111 136 / 0.25)"
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
                        <CustomInput
                          value={familyAddress}
                          onChange={(e) => setFamilyAddress(e.target.value)}
                          title="آدرس"
                        />

                        <CustomInput
                          value={familyPhone}
                          onChange={(e) => setFamilyPhone(e.target.value)}
                          title="تلفن "
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
                            ringColor="rgb(78 111 136 / 0.25)"
                            rounded="8px"
                          />
                          {selectedRegion && (
                            <svg
                              onClick={() => {
                                setSelectedRegion(null);
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
                            ringColor="rgb(78 111 136 / 0.25)"
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

                        <CustomInput
                          value={employmentFields}
                          onChange={(e) => setEmploymentFields(e.target.value)}
                          title="زمینه های اشتغال "
                        />
                      </div>
                      {!newMemberShow && (
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            setNewMemberShow(true);
                          }}
                          title="اعضای تحت تکفل"
                          bg
                          isContractors
                          type="button"
                          color="bg-mainBlue"
                        />
                      )}
                      {/* {newMemberShow && ( */}
                      <div
                        // className={`${newMemberShow ? 'fade-in visible opacity-100' : 'opacity-0 translate-x-[600px] fade-in'} transition-all duration-300 relative mb-[20px] border-[1px] border-tableBorder flex items-start rounded-lg flex-wrap py-4 gap-3 px-5 w-full`}

                        className={`
                          relative mb-[20px] border-[1px] border-tableBorder flex items-start rounded-lg flex-wrap py-4 gap-3 px-5 w-full
                          ${newMemberShow ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"}
                          overflow-hidden- transition-all duration-500 ease-in-out
                        `}
                      >
                        <span
                          className={`${`z-[10000] text-[10px] right-[6px] left-18 -top-2 px-[4px]`} absolute group-focus-within:px-[4px] 
min-w-max cursor-text  ease-in-out duration-500  font-iranSans text-mainBlue text-left transition-all bg-white`}
                        >
                          اعضای تحت تکفل
                        </span>
                        <div className="flex flex-col">
                          <CustomInput
                            value={memberName}
                            onChange={(e) => setMemberName(e.target.value)}
                            title="نام"
                          />

                          {memberErrors?.memberName && (
                            <span className="text-red-600 font-DanaDemiBold mt-1 text-[10px]">
                              {memberErrors.memberName}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <CustomInput
                            value={memberFamily}
                            onChange={(e) => setMemberFamily(e.target.value)}
                            title="نام خانوادگی"
                          />

                          {memberErrors?.memberFamily && (
                            <span className="text-red-600 font-DanaDemiBold mt-1 text-[10px]">
                              {memberErrors.memberFamily}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <CustomInput
                            value={memberFatherName}
                            onChange={(e) =>
                              setMemberFatherName(e.target.value)
                            }
                            title="نام پدر"
                          />
{/* 
                          {memberErrors?.memberFatherName && (
                            <span className="text-red-600 font-DanaDemiBold mt-1 text-[10px]">
                              {memberErrors.memberFatherName}
                            </span>
                          )} */}
                        </div>
                        <div className="flex flex-col ">
                          <div className="relative flex items-center">
                            <ComboBox
                              title="جنسیت "
                              data={genderList}
                              selectedValue={memberGender}
                              onChangeHandler={(val) => setMemberGender(val)}
                              itemName={(item) => item.name}
                              color="#420E5A"
                              ringColor="rgb(78 111 136 / 0.25)"
                              rounded="8px"
                            />
                            {memberGender && (
                              <svg
                                onClick={() => {
                                  setMemberGender(null);
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
                          {/* {memberErrors?.memberGender && (
                            <span className="text-red-600 font-DanaDemiBold mt-1 text-[10px]">
                              {memberErrors.memberGender}
                            </span>
                          )} */}
                        </div>

                        <CustomInput
                          value={memberRelation}
                          onChange={(e) => setMemberRelation(e.target.value)}
                          title="نسب"
                        />

                        <div className="flex flex-col ">
                          <CustomInput
                            value={memberNationalCode}
                            onChange={(e) =>
                              setMemberNationalCode(e.target.value)
                            }
                            title="کدملی"
                          />
                          {/* {memberErrors?.memberNationalCode && (
                            <span className="text-red-600 font-DanaDemiBold mt-1 text-[10px]">
                              {memberErrors.memberNationalCode}
                            </span>
                          )} */}
                        </div>
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
                            ringColor="rgb(78 111 136 / 0.25)"
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
                          {/* {!memberBirthdate && isSubmit && (
                            <span className="font-DanaDemiBold -mb-1 mt-1 text-red-600 ease-in-out duration-300 text-[10px]">
                              وارد کردن تاریخ تولد الزامی است
                            </span>
                          )} */}
                          {/* {memberErrors?.memberBirthdate && (
                            <span className="text-red-600 font-DanaDemiBold mt-1 text-[10px]">
                              {memberErrors.memberBirthdate}
                            </span>
                          )} */}
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
                            ringColor="rgb(78 111 136 / 0.25)"
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
                            ringColor="rgb(78 111 136 / 0.25)"
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
                      {/* )} */}

                      <div className="relative border-[1px] border-b-mainBlue flex rounded-[8px] flex-wrap py-7 gap-4 w-full">
                        <span
                          className={`${`text-[10px] right-[6px] left-18 -top-2 px-[4px]`} absolute group-focus-within:px-[4px] 
      min-w-max cursor-text  ease-in-out duration-500  font-iranSans text-mainBlue text-left transition-all bg-white`}
                        >
                           اعضای تحت تکفل
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
