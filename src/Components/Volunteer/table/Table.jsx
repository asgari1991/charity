import React from "react";
import TableBody from "./TableBody";

const Table = ({
  tableHeaderDatas,
  tableBodyDatas,
  setVolunteerId,
  setNewVolunteerModalShow,
  setUpdateMode,
  setShowAlertModal
}) => {
  return (
    <table className="mx-auto min-w-full p-2">
      <thead className="border-b-4 border-b-mainBlue bg-tableBg font-DanaDemiBold text-xs">
        <tr>
          {tableHeaderDatas.map((items, index) => {
            return (
              <th
                scope="col"
                key={items.accessGroup_id}
                className="text-center  text-[13px] py-2"
              >
                {items}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tableBodyDatas?.map((item, index) => {
          return (
            <TableBody
              key={item.donor_id}
              item={item}
              index={index}
              setVolunteerId={setVolunteerId}
              setNewVolunteerModalShow={setNewVolunteerModalShow}
              setUpdateMode={setUpdateMode}
              setShowAlertModal={setShowAlertModal}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
