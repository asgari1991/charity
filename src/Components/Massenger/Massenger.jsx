import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import axios from "../../axiosSetup";
import SearchFilters from "./SearchFilters";
import SearchResultsTable from "./SearchResultsTable";
import ManualAddRecipient from "./ManualAddRecipient";
import RecipientsList from "./RecipientsList";
import MessageBox from "./MessageBox";

export default function MessageCampaign() {
  // ==========================================
  const [locationList, setLocationList] = useState([]);
  const [residenceStatusList, setResidenceStatusList] = useState([]);
  // --------------------------------------------------------------------------
  const [physicalStatusList, setPhysicalStatusList] = useState([]);
  const [selectedPhysicalStatus, setSelectedPhysicalStatus] = useState();
  // ==========================================
  const [insuranceTypelist, setInsuranceTypelist] = useState([]);
  const [selectedInsuranceType, setSelectedInsuranceType] = useState();
  // ==========================================
  const [supportOrgsList, setSupportOrgsList] = useState([]);
  const [selectedsupportOrgs, setSelectedsupportOrgs] = useState();
  // ==========================================
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null); // region_id
  const [selectedResidenceStatus, setSelectedResidenceStatus] = useState(null); // house_status_id
  const [selectedGender, setSelectedGender] = useState(""); // gender
  const [selectedSeyyed, setSelectedSeyyed] = useState(undefined); // is_seyyed
  // ==========================================
  const [messageText, setMessageText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRecipients, setSelectedRecipients] = useState([]);
  const [checkedResults, setCheckedResults] = useState([]);
  const [checkedRecipients, setCheckedRecipients] = useState([]);
  // ==========================================
  const [manualName, setManualName] = useState("");
  const [manualPhone, setManualPhone] = useState("");
  // ==========================================
  useEffect(() => {
    axios
      .get("/api/regions")
      .then((res) => setLocationList(res.data))
      .catch((err) => console.log(err));

    axios
      .get("/api/houseStatus")
      .then((res) => setResidenceStatusList(res.data))
      .catch((err) => console.log(err));

    axios
      .get("/api/physicalStatus")
      .then((res) => setPhysicalStatusList(res.data))
      .catch((err) => console.log(err));

    axios
      .get("/api/insuranceTypes")
      .then((res) => setInsuranceTypelist(res.data?.list))
      .catch((err) => console.log(err));
    axios
      .get("/api/supportOrgs")
      .then((res) => setSupportOrgsList(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ==========================================
  const handleSearch = () => {
    axios
      .get("/api/families/full", {
        params: {
          search: searchTerm,
          region_id: selectedLocation?.region_id || "",
          house_status_id: selectedResidenceStatus?.house_status_id,
          gender: selectedGender?.value,
          is_seyyed: selectedSeyyed?.value === undefined ? "" : selectedSeyyed?.value,
          physical_status_id: selectedPhysicalStatus?.physical_status_id,
          insurance_type_id: selectedInsuranceType?.insurance_type_id,
          support_orgs_id: selectedsupportOrgs?.support_orgs_id,
          // limit: "all"
        },
      })
      .then((res) => {
        setSearchResults(res.data.list);
        setCheckedResults([]);
      })
      .catch((error) => {
        console.log("خطا در جستجو:", error);
      });
  };

  const handleExportExcel = () => {
    if (selectedRecipients.length === 0) return;

    const phoneList = selectedRecipients.map((item) => item.phone);

    axios
      .post(
        "/api/families/familyHeads/export-sms-excel",
        {
          phones: phoneList,
          message: messageText,
        },
        {
          responseType: "blob",
        },
      )
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "campaign_phones.xlsx");
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => {
        console.log("خطا در دانلود فایل اکسل:", error);
      });
  };

  // ==========================================
  const handleToggleResultCheck = (phone) => {
    setCheckedResults((prev) =>
      prev.includes(phone)
        ? prev.filter((item) => item !== phone)
        : [...prev, phone],
    );
  };

  const handleToggleRecipientCheck = (phone) => {
    setCheckedRecipients((prev) =>
      prev.includes(phone)
        ? prev.filter((item) => item !== phone)
        : [...prev, phone],
    );
  };

  const addItemsToRecipients = (itemsToAdd, source = null) => {
    setSelectedRecipients((prev) => {
      const newRecipients = [...prev];
      itemsToAdd.forEach((item) => {
        if (
          !newRecipients.some((existing) => existing.phone === item.head_phone)
        ) {
          newRecipients.push({
            name: item.head_full_name,
            phone: item.head_phone,
            region: item.region_name || "-",
            source: source || item.source,
          });
        }
      });
      return newRecipients;
    });
  };

  const handleAddSelected = () => {
    const toAdd = searchResults.filter((item) =>
      checkedResults.includes(item.head_phone),
    );
    addItemsToRecipients(toAdd, "جستجو");
    setCheckedResults([]);
  };

  const handleAddAllSearch = () => {
    addItemsToRecipients(searchResults, "جستجو");
  };

  const handleAddManual = () => {
    if (!manualName || !manualPhone) return;
    const newItem = {
      head_full_name: manualName,
      head_phone: manualPhone,
      source: "دستی",
    };
    addItemsToRecipients([newItem]);
    setManualName("");
    setManualPhone("");
  };

  const handleRemoveSingleRecipient = (phone) => {
    setSelectedRecipients((prev) =>
      prev.filter((item) => item.phone !== phone),
    );
  };

  const handleRemoveSelectedRecipients = () => {
    setSelectedRecipients((prev) =>
      prev.filter((item) => !checkedRecipients.includes(item.phone)),
    );
    setCheckedRecipients([]);
  };

  return (
    <>
      <Header title={"ارسال پیامک"}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
            stroke="#4E6F88"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="#4E6F88"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Header>

      <div className="w-full p-4 font-sans text-[14px]">
        <div className="flex flex-col xl:flex-row- gap-4">
          {/* ===================== receivers ===================== */}
          <div className="w-full xl:w-8/12- flex flex-col gap-4">
            <SearchFilters
              locationList={locationList}
              residenceStatusList={residenceStatusList}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              selectedResidenceStatus={selectedResidenceStatus}
              setSelectedResidenceStatus={setSelectedResidenceStatus}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
              selectedSeyyed={selectedSeyyed}
              setSelectedSeyyed={setSelectedSeyyed}
              physicalStatusList={physicalStatusList}
              selectedPhysicalStatus={selectedPhysicalStatus}
              setSelectedPhysicalStatus={setSelectedPhysicalStatus}
              insuranceTypelist={insuranceTypelist}
              selectedInsuranceType={selectedInsuranceType}
              setSelectedInsuranceType={setSelectedInsuranceType}
              supportOrgsList={supportOrgsList}
              selectedsupportOrgs={selectedsupportOrgs}
              setSelectedsupportOrgs={setSelectedsupportOrgs}
              onSearch={handleSearch}
            />

            <SearchResultsTable
              searchResults={searchResults}
              checkedResults={checkedResults}
              selectedRecipients={selectedRecipients}
              setCheckedResults={setCheckedResults}
              handleAddSelected={handleAddSelected}
              handleAddAllSearch={handleAddAllSearch}
              handleToggleResultCheck={handleToggleResultCheck}
            />

            <ManualAddRecipient
              manualName={manualName}
              manualPhone={manualPhone}
              setManualName={setManualName}
              setManualPhone={setManualPhone}
              handleAddManual={handleAddManual}
            />

            <div className="flex gap-1 w-full">
              <div className="w-2/3">
                <RecipientsList
                  selectedRecipients={selectedRecipients}
                  checkedRecipients={checkedRecipients}
                  setCheckedRecipients={setCheckedRecipients}
                  handleRemoveSingleRecipient={handleRemoveSingleRecipient}
                  handleRemoveSelectedRecipients={
                    handleRemoveSelectedRecipients
                  }
                  handleToggleRecipientCheck={handleToggleRecipientCheck}
                  onClearAll={() => setSelectedRecipients([])}
                />
              </div>
              <div className="w-full xl:w-4/12 flex flex-col gap-4">
                <MessageBox
                  messageText={messageText}
                  setMessageText={setMessageText}
                  onExportExcel={handleExportExcel}
                  selectedRecipientsLength={selectedRecipients.length}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
