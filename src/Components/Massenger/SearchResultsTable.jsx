import React from "react";

export default function SearchResultsTable({
  searchResults,
  checkedResults,
  selectedRecipients,
  setCheckedResults,
  handleAddSelected,
  handleAddAllSearch,
  handleToggleResultCheck,
}) {
  return (
    <div className="border border-tableBorder rounded-lg p-4 bg-white shadow-sm">
      {/* دکمه‌های افزودن گروهی */}
      <div className="flex gap-2 mb-2">
        <button
          onClick={handleAddSelected}
          disabled={checkedResults.length === 0}
          className="border border-mainBlue text-mainBlue bg-blue-50 px-3 py-1.5 rounded text-xs font-DanaDemiBold disabled:opacity-50"
        >
          افزودن انتخاب‌شده‌ها ({checkedResults.length})
        </button>
        <button
          onClick={handleAddAllSearch}
          disabled={searchResults.length === 0}
          className="border border-mainBlue text-mainBlue px-3 py-1.5 rounded text-xs font-DanaDemiBold hover:bg-blue-50 disabled:opacity-50"
        >
          افزودن همه نتایج
        </button>
      </div>

      {/* جدول نتایج */}
      <div className="border border-gray-200 rounded-lg overflow-hidden max-h-[250px] overflow-y-auto">
        <table className="w-full text-right text-sm">
          <thead className="bg-gray-100 sticky top-0 border-b border-gray-200 text-gray-700 font-DanaDemiBold">
            <tr className="">
              <th className="p-2 w-[40px] text-center">
                <input
                  type="checkbox"
                  className="accent-mainBlue"
                  onChange={(e) =>
                    setCheckedResults(
                      e.target.checked
                        ? searchResults.map((i) => i.head_phone)
                        : [],
                    )
                  }
                  checked={
                    searchResults.length > 0 &&
                    checkedResults.length === searchResults.length
                  }
                />
              </th>
              <th className="p-2">نام سرپرست</th>
              <th className="p-2">موبایل</th>
              <th className="p-2">منطقه</th>
              <th className="p-2 text-center">وضعیت جسمانی</th>
              <th className="p-2 text-center">وضعیت مسکن</th>
              <th className="p-2 text-center">نوع بیمه</th>
              <th className="p-2 text-center">ارگان حمایت کننده</th>
              <th className="p-2 text-center">نسب</th>
              <th className="p-2 text-center">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-4 text-gray-400 text-xs"
                >
                  رکوردی یافت نشد.
                </td>
              </tr>
            ) : (
              searchResults.map((row, index) => {
                const isAlreadyAdded = selectedRecipients.some(
                  (r) => r.phone === row.head_phone,
                );
                return (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="p-2 text-center">
                      <input
                        type="checkbox"
                        className="accent-mainBlue"
                        checked={checkedResults.includes(row.head_phone)}
                        onChange={() => handleToggleResultCheck(row.head_phone)}
                        disabled={isAlreadyAdded}
                      />
                    </td>
                    <td className="p-2">{row.head_full_name}</td>
                    <td className="p-2">{row.head_phone}</td>
                    <td className="p-2 text-xs text-gray-600">
                      {row.region_name}
                    </td>
                    <td className="p-2 text-xs text-center text-gray-600">
                      {row.physical_status_name}
                    </td>
                    <td className="p-2 text-xs text-center text-gray-600">
                      {row.house_status_name}
                    </td>
                    <td className="p-2 text-xs text-center text-gray-600">
                      {row.insurance_type_name}
                    </td>
                    <td className="p-2 text-xs text-center text-gray-600">
                      {row.support_orgs_name}
                    </td>
                    <td className="p-2 text-xs text-center text-gray-600">
                      {row.is_seyyed ? "سید" : "غیر سید"}
                    </td>
                    <td className="p-2 text-center">
                      {isAlreadyAdded ? (
                        <span className="text-green-600 text-[10px] font-bold">
                          ✔ افزوده شده
                        </span>
                      ) : null}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
