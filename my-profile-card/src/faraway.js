import React, { useState } from "react";
import "./tw-custom.css";
import Logo from "./far-away/logo";
import Form from "./far-away/form";
import Packing from "./far-away/packing";
import Stats from "./far-away/stats";

export default function FarAway() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]); // changing array without mutating them, by using spread.
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id)); // if each item id isnt equal to id to remove, then keep it.
  }

  function handleCheckItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setItems([]);
  }

  return (
    // w-3/5 mx-auto
    <div className="sm:container md:w-3/5 mx-auto flex flex-col items-center bg-gray-200 h-screen">
      <div className="mt-5 w-full flex flex-col items-center text-center mb-5">
        <Logo />
        <Form onAddItems={handleAddItems} />
      </div>

      <Packing
        itemsObj={items}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
        onClearItem={handleClearItem}
      />

      <Stats itemsObj={items} />
    </div>
  );
}
