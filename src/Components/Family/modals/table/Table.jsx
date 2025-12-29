import React from "react";
import TableBody from "./TableBody";
import { useEffect } from "react";

const Table = ({
  tableHeaderDatas,
  tableBodyDatas,
  setTotalAmount,
  removeMember,
  updateMode,
}) => {
  useEffect(() => {
    // if (!updateMode) {
    const sum = tableBodyDatas.reduce(
      (acc, item) => acc + Number(item.sumItem),
      0
    );
    setTotalAmount(sum);
    // }
  }, [tableBodyDatas, setTotalAmount]);

  return (
    <table className="mx-auto z-0 relative min-w-full my-1">
      <thead className="border-b-[3px] z-0 relative border-b-mainBlue border-t-[2px] bg-tableBg">
        <tr className="z-0 relative">
          {tableHeaderDatas.map((items, index) => {
            return (
              <th
                scope="col"
                key={index}
                className={`text-[13px] text-mainBlue  font-iranSansLight py-2 px-5`}
              >
                {items}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tableBodyDatas.map((item, index) => {
          return (
            <TableBody
              // key={item.person_id}
              item={item}
              index={index}
              setTotalAmount={setTotalAmount}
              removeProduct={removeMember}
              updateMode={updateMode}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
