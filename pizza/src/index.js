import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "49px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our menu</h2>

      <Pizza
        name="Bangkit Cloud Computing"
        ingredient="Cheese, Cheese, Cheese"
        photoName="images/bangkit.jpg"
        price={10}
      />

      <Pizza
        name="Bangkit Machine Learning"
        ingredient="TENSORFLOW, TENSORFLOW, TENSORFLOW"
        photoName="images/bangkit.jpg"
        price={15}
      />
    </div>
  );
}

function Pizza(props) {
  // console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt="" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <p>{props.price + 3}</p>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  let info;

  if (openHour <= hour && closeHour >= hour) {
    info = "We're currently open!";
  } else {
    info = "We're currently closed.";
  }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} {info}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
