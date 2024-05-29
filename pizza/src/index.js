import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const pizzaData = [
  {
    name: "Bangkit Mobile Development",
    ingredients: "KOTLIN, KOTLIN, KOTLIN",
    price: 10,
    photoName: "images/bangkit.jpg",
    soldOut: false,
  },
  {
    name: "Bangkit Google Cloud",
    ingredients: "CLOUD RUN, CLOUD RUN, CLOUD RUN",
    price: 20,
    photoName: "images/bangkit.jpg",
    soldOut: false,
  },
  {
    name: "Bangkit Mentor",
    ingredients: "WEEKCON, WEEKCON, WEEKCON",
    price: 15,
    photoName: "images/bangkit.jpg",
    soldOut: false,
  },
  {
    name: "Bangkit Mentee",
    ingredients: "CAPSTONE, CAPSTONE, CAPSTONE",
    price: 10,
    photoName: "images/bangkit.jpg",
    soldOut: true,
  },
];

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
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <h2>Our menu</h2>

      {/* conditional render ternary */}
      {numPizzas > 0 ? (
        <div className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </div>
      ) : (
        <p>We're still working on the menu</p>
      )}

      {/* conditional render && */}
      {/* {numPizzas > 0 && ( // react will render 0 if empty
        <div className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </div>
      )} */}
      {/* <Pizza
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
      /> */}
    </div>
  );
}

function Pizza(props) {
  // console.log(props);
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt="" />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <p>{props.pizzaObj.price + 3}</p>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = openHour <= hour && closeHour >= hour;

  return (
    <footer className="footer">
      {isOpen && ( // if isOpen then return this html, react wont render "false" value
        <div className="order">
          <p>We're open til {closeHour}:00</p>
          <button className="btn">Order</button>
        </div>
      )}
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
