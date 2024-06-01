import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", amount: 2, packed: false },
  { id: 2, description: "Socks", amount: 12, packed: false },
  { id: 3, description: "Charger", amount: 1, packed: true },
];

export default function FarAway() {
  const [items, setItems] = useState([]);

  return (
    // w-3/5 mx-auto
    <div className="sm:container md:w-3/5 mx-auto flex flex-col items-center bg-gray-200 h-screen">
      <div className="mt-5 w-full flex flex-col items-center text-center mb-5">
        <Logo />
        <Form itemsObj={items} setItemsObj={setItems} />
      </div>

      <Packing itemsObj={items} />

      <Stats />
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

function Form({ itemsObj, setItemsObj }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(1);

  const maxAmount = Array.from({ length: 20 }, (_, i) => i + 1);

  function handleAddItems(item) {
    setItemsObj((itemsObj) => [...itemsObj, item]); // changing array without mutating them, by using spread.
  }

  function handleSubmit(e) {
    e.preventDefault(); // no reload on submit

    if (!description) return;

    const newItem = { id: Date.now(), description, amount, packed: false };
    handleAddItems(newItem);
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

function Packing({ itemsObj }) {
  return (
    <ul className="font-ptSans font-semibold mb-5 lg:w-3/6 text-center flex flex-row gap-5">
      {itemsObj.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <div className="flex flex-row justify-center align-center gap-2">
      <span className={item.packed ? "line-through" : ""}>
        {item.amount} {item.description}
      </span>
      <button>❌</button>
    </div>
  );
}

function Stats() {
  return (
    <footer>
      <em className="font-ptSans lg:text-xl text-sm">
        💼 You have X items on your list, and you already packed X (X%){" "}
      </em>
    </footer>
  );
}
