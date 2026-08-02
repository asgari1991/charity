import React from "react";

export default function ManualAddRecipient({
  manualName,
  manualPhone,
  setManualName,
  setManualPhone,
  handleAddManual,
}) {
  return (
    <div className="border border-tableBorder rounded-lg p-4 bg-white shadow-sm flex flex-col md:flex-row items-end gap-3">
      <div className="flex-1 w-full">
        <label className="block text-xs mb-1 text-gray-600 font-DanaDemiBold">
          نام و نام خانوادگی
        </label>
        <input
          type="text"
          value={manualName}
          onChange={(e) => setManualName(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-mainBlue text-sm h-[32px]"
        />
      </div>
      <div className="flex-1 w-full">
        <label className="block text-xs mb-1 text-gray-600 font-DanaDemiBold">
          شماره موبایل
        </label>
        <input
          type="text"
          value={manualPhone}
          onChange={(e) => setManualPhone(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-mainBlue text-sm h-[32px]"
          dir="ltr"
          placeholder="09..."
        />
      </div>
      <button
        onClick={handleAddManual}
        className="bg-white h-[32px] border border-[#4E6F88] text-[#4E6F88] hover:bg-blue-50 px-4 rounded text-xs font-DanaDemiBold flex items-center justify-center min-w-[100px]"
      >
        افزودن دستی
      </button>
    </div>
  );
}

