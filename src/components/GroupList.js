import React from "react";

const groups = [
  "AKB48",
  "SKE48",
  "NMB48",
  "NGT48",
  "HKT48",
  "乃木坂46",
  "欅坂46",
  "日向坂46",
];

function GroupList({ onGroupMouseEnter }) {
  return (
    <div className="flex">
      <div className="bg-blue-300 p-4 w-4/12 h-screen">
        <h1 className="text-xl">Groups</h1>
        <ul className="text-lg">
          {groups.map((group) => {
            return (
              <li
                key={group}
                id={group}
                onMouseEnter={onGroupMouseEnter}
                className="py-2"
              >
                {group}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default GroupList;
