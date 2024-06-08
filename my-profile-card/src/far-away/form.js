import React, { useState } from "react";

export default function Form({ onAddItems }) {
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
