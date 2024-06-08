import React from "react";

export default function Item({ item, onDeleteItem }) {
  return (
    <div className="flex flex-row justify-center align-center gap-2">
      <span
        className={`${item.packed ? "line-through" : ""} flex flex-row gap-2`}
      >
        <p>{item.amount}</p>
        <p>{item.description}</p>
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </div>
  );
}
