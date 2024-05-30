import React, { useState } from "react";
import "./tailwind.css";
import "./tw-custom.css";

const skills = [
  {
    skill: "Golang",
    level: "intermediate",
    color: "blue",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#00008B",
  },
  {
    skill: "HTML/CSS",
    level: "advanced",
    color: "green",
  },
  {
    skill: "Next.JS",
    level: "beginner",
    color: "red",
  },
];

function App() {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-5 outline">
        <Avatar />
        <div className="px-6 py-4">
          <Intro />
          <div className="pt-4 pb-2 flex gap-2 flex-wrap">
            {skills.map((skill) => (
              <Skills
                name={skill.skill}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
      <DateCounter />
    </>
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
      <p className="font-ptSans text-gray-700 text-base">
        Aspiring Software Engineering | Undergraduate Student of Informatics at
        Institut Teknologi Sepuluh Nopember | Enthusiast in ReactJS and Go
      </p>
    </div>
  );
};

const Skills = ({ name, level, color }) => {
  const bgColor = { backgroundColor: `${color}` };
  return (
    <div
      className="flex gap-1 w-28 justify-center rounded-full px-3 py-1 text-sm font-bold text-white"
      style={bgColor}
    >
      <p>{name}</p>
      <span>
        {level === "beginner" && "🤓"}
        {level === "intermediate" && "💪"}
        {level === "advanced" && "🔥"}
      </span>
    </div>
  );
};

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function DateCounter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  let date = addDays(new Date(), count);

  return (
    <div className="flex flex-col gap-4 justify-center align-middle mx-auto my-5 max-w-sm">
      <div className="flex flex-col gap-3 items-center">
        <span className="font-mono">Step: {step}</span>
        <input
          id="steps-range"
          type="range"
          min="0"
          max="10"
          value={step}
          step="1"
          className="w-3/5 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <button
          className="btn btn-black"
          onClick={() => {
            if (count > 0) setCount((c) => c - step);
          }}
        >
          -
        </button>
        <input
          className="font-mono text-black text-center"
          type="text"
          placeholder="Count..."
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          className="btn btn-black"
          onClick={() => {
            setCount((c) => c + step);
          }}
        >
          +
        </button>
      </div>
      <p className="font-mono font-bold text-center">
        {count} days from today is {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
