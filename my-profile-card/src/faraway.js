import React, { useState } from "react";
import "./tw-custom.css";

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
      />

      <Stats itemsObj={items} />
    </div>
  );
}

function Logo() {
  return (
    <h1 className="text-2xl font-ptSans font-extrabold leading-9 tracking-tight mb-3">
      🏝️ Far Away 🏝️
    </h1>
  );
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(1);

  const maxAmount = Array.from({ length: 20 }, (_, i) => i + 1);

  function handleSubmit(e) {
    e.preventDefault(); // no reload on submit

    if (!description) return;

    const newItem = { id: Date.now(), description, amount, packed: false };
    onAddItems(newItem);
    // console.log(newItem);

    // set back to default value
    setDescription("");
    setAmount(1);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <h3 className="font-ptSans mb-8 pl-2 pr-2 leading-relaxed">
        What do you need for your next trip 😍
      </h3>
      <select
        className="text-black bg-white hover:bg-gray-300 rounded-full text-sm px-5 py-2 me-2 mb-2"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      >
        {maxAmount.map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      <input
        className="text-black bg-white hover:bg-gray-300 rounded-full text-sm px-5 py-2 me-2 mb-2"
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="text-black bg-purple-300 hover:bg-purple-400 rounded-full text-sm px-5 py-2 me-2 mb-2">
        Add
      </button>
    </form>
  );
}

function Packing({ itemsObj, onDeleteItem, onCheckItem }) {
  return (
    <ul className="font-ptSans font-semibold mb-5 lg:w-3/6 text-center grid grid-cols-3 gap-5">
      {itemsObj.map((item) => (
        <div className="flex flex-row gap-2">
          <input
            type="checkbox"
            id="default-checkbox"
            value={item.packed}
            className="checkbox"
            onChange={() => onCheckItem(item.id)}
          />
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
        </div>
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <div className="flex flex-row justify-center align-center gap-2">
      <span className={item.packed ? "line-through" : ""}>
        {item.amount} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </div>
  );
}

function Stats({ itemsObj }) {
  const numItems = itemsObj.length;
  const numPacked = itemsObj.filter((item) => item.packed).length;

  return (
    <footer>
      <em className="font-ptSans lg:text-xl text-sm">
        💼 You have {numItems} items on your list, and you already packed{" "}
        {numPacked} ({numItems > 0 ? `${(numPacked / numItems) * 100}%` : `0%`})
      </em>
    </footer>
  );
}
