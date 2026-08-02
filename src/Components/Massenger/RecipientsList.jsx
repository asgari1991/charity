import React from "react";

export default function RecipientsList({
  selectedRecipients,
  checkedRecipients,
  setCheckedRecipients,
  handleRemoveSingleRecipient,
  handleRemoveSelectedRecipients,
  handleToggleRecipientCheck,
  onClearAll,
}) {
  return (
    <div className="border border-tableBorder rounded-lg p-4 bg-blue-50 shadow-sm border-t-4 border-t-[#4E6F88]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-DanaDemiBold font-semibold text-[16px] text-[#4E6F88]">
          لیست نهایی گیرندگان ({selectedRecipients.length})
        </h2>
        <div className="flex gap-2">
          <button
            onClick={handleRemoveSelectedRecipients}
            disabled={checkedRecipients.length === 0}
            className="text-red-500 bg-white border border-red-200 px-3 py-1.5 rounded text-xs font-DanaDemiBold disabled:opacity-50 hover:bg-red-50"
          >
            حذف انتخاب‌شده‌ها
          </button>
          <button
            onClick={onClearAll}
            disabled={selectedRecipients.length === 0}
            className="text-gray-600 bg-white border border-gray-300 px-3 py-1.5 rounded text-xs font-DanaDemiBold hover:bg-gray-100 disabled:opacity-50"
          >
            حذف همه
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden max-h-[300px] overflow-y-auto">
        <table className="w-full text-right text-sm">
          <thead className="bg-gray-100 sticky top-0 border-b border-gray-200 text-gray-700 font-DanaDemiBold">
            <tr>
              <th className="p-2 w-[40px] text-center">
                <input
                  type="checkbox"
                  className="accent-mainBlue"
                  onChange={(e) =>
                    setCheckedRecipients(
                      e.target.checked
                        ? selectedRecipients.map((i) => i.phone)
                        : [],
                    )
                  }
                  checked={
                    selectedRecipients.length > 0 &&
                    checkedRecipients.length === selectedRecipients.length
                  }
                />
              </th>
              <th className="p-2">نام گیرنده</th>
              <th className="p-2">شماره تماس</th>
              <th className="p-2">منطقه / منبع</th>
              <th className="p-2 text-center">حذف</th>
            </tr>
          </thead>
          <tbody>
            {selectedRecipients.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-4 text-gray-400 text-xs"
                >
                  هیچ گیرنده‌ای به لیست نهایی اضافه نشده است.
                </td>
              </tr>
            ) : (
              selectedRecipients.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="p-2 text-center">
                    <input
                      type="checkbox"
                      className="accent-mainBlue"
                      checked={checkedRecipients.includes(row.phone)}
                      onChange={() => handleToggleRecipientCheck(row.phone)}
                    />
                  </td>
                  <td className="p-2">{row.name}</td>
                  <td className="p-2">{row.phone}</td>
                  <td className="p-2 text-xs text-gray-500">
                    {row.region}{" "}
                    <span className="text-gray-300">|</span> {row.source}
                  </td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => handleRemoveSingleRecipient(row.phone)}
                      className="text-red-400 hover:text-red-600 font-bold px-2"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

