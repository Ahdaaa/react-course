import React from "react";

export default function Stats({ itemsObj }) {
  const numItems = itemsObj.length;
  const numPacked = itemsObj.filter((item) => item.packed).length;

  return (
    <footer>
      <em className="font-ptSans lg:text-xl text-sm">
        💼 You have {numItems} items on your list, and you already packed{" "}
        {numPacked} (
        {numItems > 0 ? `${Math.floor((numPacked / numItems) * 100)}%` : `0%`})
      </em>
    </footer>
  );
}
