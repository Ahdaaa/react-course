import React from "react";

export default function Item({ item, onDeleteItem }) {
  return (
    <div className="flex flex-row justify-center align-center gap-2">
      <span className={item.packed ? "line-through" : ""}>
        {item.amount} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </div>
  );
}
