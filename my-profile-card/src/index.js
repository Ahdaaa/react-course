import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { FaGolang } from "react-icons/fa6";

function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-5 my-5 outline">
      <Avatar />
      <div className="px-6 py-4">
        <Intro />
        <Skills />
      </div>
    </div>
  );
}

function Avatar() {
  const avatar = {
    width: "500px",
    height: "250px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "all 0.5s",
  };

  return (
    // your image
    <div className="header">
      <img src="images/me.png" alt="" style={avatar} />
    </div>
  );
}

const Intro = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-2">Ahda Filza Ghaffaru</h1>
      <p className="text-gray-700 text-base">
        Aspiring Software Engineering | Undergraduate Student of Informatics at
        Institut Teknologi Sepuluh Nopember | Enthusiast in ReactJS and Go
      </p>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="pt-4 pb-2 flex gap-2 flex-wrap">
      <div class="flex w-20 justify-center bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        Golang <FaGolang />
      </div>
      <div class="flex w-20 justify-center bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        Golang <FaGolang />
      </div>
      <div class="flex w-20 justify-center bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        Golang <FaGolang />
      </div>
      <div class="flex w-20 justify-center bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        Golang <FaGolang />
      </div>
      <div class="flex w-20 justify-center bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        Golang <FaGolang />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
