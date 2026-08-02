import React from "react";
import ComboBox from "../general/combox/ComboBox";
import ListBox from "../general/listbox/ListBox";

export default function SearchFilters({
  locationList,
  residenceStatusList,
  searchTerm,
  setSearchTerm,
  selectedLocation,
  setSelectedLocation,
  selectedResidenceStatus,
  setSelectedResidenceStatus,
  selectedGender,
  setSelectedGender,
  physicalStatusList,
  selectedPhysicalStatus,
  setSelectedPhysicalStatus,
  insuranceTypelist,
  selectedInsuranceType,
  setSelectedInsuranceType,
  supportOrgsList,
  selectedsupportOrgs,
  setSelectedsupportOrgs,
  selectedSeyyed,
  setSelectedSeyyed,
  onSearch,
}) {
  return (
    <div className="border border-tableBorder rounded-lg p-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 mb-4 border-r-[4px] pr-[10px] border-[#4E6F88]">
        <h2 className="font-DanaDemiBold font-semibold text-[16px]">
          جستجوی سرپرستان خانوار
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-7 gap-3 mb-4 items-end">
        {/* جستجوی متنی */}
        <div className="lg:col-span-2">
          <input
            type="text"
            placeholder="جستجوی نام، کدملی، موبایل..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-[32px] border border-mainBlue/25 rounded-lg p-2 focus:outline-none text-xs"
          />
        </div>

        {/* منطقه (ComboBox) */}
        <div className="relative w-[150px] flex flex-col">
          <ComboBox
            title="منطقه"
            data={locationList}
            selectedValue={selectedLocation}
            onChangeHandler={(val) => setSelectedLocation(val)}
            itemName={(item) => item.region_name}
            height="32px"
            rounded="8px"
          />
          {selectedLocation && (
            <svg
              onClick={() => setSelectedLocation(null)}
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

        <div className="relative w-[150px] flex flex-col">
          <ComboBox
            title="وضعیت مسکن"
            data={residenceStatusList}
            selectedValue={selectedResidenceStatus}
            onChangeHandler={(val) => setSelectedResidenceStatus(val)}
            itemName={(item) => item.house_status_name}
            height="32px"
            rounded="8px"
          />
          {selectedResidenceStatus && (
            <svg
              onClick={() => setSelectedResidenceStatus(null)}
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

        <div className="relative w-[150px] flex flex-col">
          <ComboBox
            title="وضعیت جسمانی"
            data={physicalStatusList}
            selectedValue={selectedPhysicalStatus}
            onChangeHandler={(val) => setSelectedPhysicalStatus(val)}
            itemName={(item) => item.physical_status_name}
            height="32px"
            rounded="8px"
          />
          {selectedPhysicalStatus && (
            <svg
              onClick={() => setSelectedPhysicalStatus(null)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 !z-[1000000]  cursor-pointer absolute left-2 top-[10px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div className="relative w-[150px] flex flex-col">
          <ListBox
            placeHolder="جنسیت"
            data={[
              { name: "مرد", value: 0 },
              { name: "زن", value: 1 },
            ]}
            onSelectHandler={(val) => setSelectedGender(val)}
            value={selectedGender?.name}
            itemName={(item) => item?.name}
            heigth="32px"
            rounded="8px"
            width="150px"
          />
          {selectedGender && (
            <svg
              onClick={() => setSelectedGender(null)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 cursor-pointer !z-[1000000] absolute left-2 top-[10px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div className="relative w-[150px] flex flex-col">
          <ListBox
            placeHolder="نسب"
            data={[
              { name: "سید", value: true },
              { name: "غیر سید", value: false },
            ]}
            onSelectHandler={(val) => setSelectedSeyyed(val)}
            value={selectedSeyyed?.name}
            itemName={(item) => item?.name}
            heigth="32px"
            rounded="8px"
            width="150px"
          />
          {selectedSeyyed && (
            <svg
              onClick={() => setSelectedSeyyed(undefined)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 cursor-pointer !z-[1000000] absolute left-2 top-[10px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        <div className="relative w-[150px] flex flex-col">
          <ComboBox
            title="نوع بیمه"
            data={insuranceTypelist}
            selectedValue={selectedInsuranceType}
            onChangeHandler={(val) => setSelectedInsuranceType(val)}
            itemName={(item) => item.insurance_type_name}
            height="32px"
            rounded="8px"
          />
          {selectedInsuranceType && (
            <svg
              onClick={() => setSelectedInsuranceType(null)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 !z-[1000000]  cursor-pointer absolute left-2 top-[10px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div className="relative w-[150px] flex flex-col">
          <ComboBox
            title="ارگان حمایت کننده"
            data={supportOrgsList}
            selectedValue={selectedsupportOrgs}
            onChangeHandler={(val) => setSelectedsupportOrgs(val)}
            itemName={(item) => item.support_orgs_name}
            height="32px"
            rounded="8px"
          />
          {selectedsupportOrgs && (
            <svg
              onClick={() => setSelectedsupportOrgs(null)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 !z-[1000000]  cursor-pointer absolute left-2 top-[10px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        <div>
          <button
            onClick={onSearch}
            className="w-full h-[32px] bg-[#4E6F88] text-white rounded-lg text-xs font-DanaDemiBold hover:bg-opacity-90 transition"
          >
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
}
