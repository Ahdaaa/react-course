import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

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
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-5 my-5 outline">
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

const Skills = ({ name, level, color }) => {
  const bgColor = { backgroundColor: `${color}` };
  return (
    <div
      className="flex gap-1 w-28 justify-center rounded-full px-3 py-1 text-sm font-bold text-white text-gray-700"
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
