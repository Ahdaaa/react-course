import React, { useState } from "react";

export default function Navbar() {
  const [Query, setQuery] = useState("");

  return (
    <nav className="flex flex-row justify-between gap-2 bg-black text-white py-7 px-5">
      <div className="flex gap-2">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>{" "}
      </div>
      <input
        className="rounded-lg placeholder: text-center"
        type="text"
        placeholder="Search movies..."
        value={Query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        Found <strong>X</strong> results
      </div>
    </nav>
  );
}
