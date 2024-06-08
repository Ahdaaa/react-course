import { useState } from "react";
import React from "react";
import Item from "./item";

export default function Packing({
  itemsObj,
  onDeleteItem,
  onCheckItem,
  onClearItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = itemsObj;

  if (sortBy === "description") {
    sortedItems = itemsObj
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = itemsObj
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <>
      <ul className="font-ptSans font-semibold mb-5 lg:w-4/6 text-center grid grid-cols-3 gap-5">
        {sortedItems.map((item) => (
          <div className="flex flex-row gap-2" key={item.id}>
            <input
              type="checkbox"
              id="default-checkbox"
              className="checkbox"
              checked={item.packed}
              value=""
              onChange={() => onCheckItem(item.id)}
            />
            <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
          </div>
        ))}
      </ul>

      <div className="flex flex-row gap-1">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="font-ptSans text-black bg-white hover:bg-gray-300 rounded-full text-sm px-5 py-2 me-2 mb-2"
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          className="font-ptSans text-black bg-white hover:bg-gray-300 rounded-full text-sm px-3 py-2 me-2 mb-2"
          onClick={onClearItem}
        >
          Clear List
        </button>
      </div>
    </>
  );
}
