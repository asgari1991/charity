import React from "react";

export default function MessageBox({
  messageText,
  setMessageText,
  onExportExcel,
  selectedRecipientsLength,
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="border border-tableBorder rounded-lg p-4 bg-white shadow-sm flex flex-col flex-1 h-full min-h-[400px]">
        <div className="flex items-center gap-2 mb-4 border-r-[4px] pr-[10px] border-[#4E6F88]">
          <h2 className="font-DanaDemiBold font-semibold text-[16px]">
            متن پیام
          </h2>
        </div>

        <textarea
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="متن پیام خود را اینجا بنویسید..."
          className="flex-1 w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-mainBlue resize-none"
        />
      </div>

      <div className="flex flex-col gap-3 mt-auto">
        <button className="w-full border border-[#4E6F88] text-[#4E6F88] bg-white hover:bg-blue-50 py-3 rounded-lg text-sm font-DanaDemiBold transition shadow-sm">
          پیش‌نمایش اکسل
        </button>
        <button
          onClick={onExportExcel}
          disabled={selectedRecipientsLength === 0}
          className="w-full bg-[#4E6F88] text-white hover:bg-opacity-90 py-3 rounded-lg text-sm font-DanaDemiBold transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          تولید فایل نهایی اکسل
        </button>
      </div>
    </div>
  );
}

