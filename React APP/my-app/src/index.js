import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import ProfileCart from "./profile";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <ProfileCart />
    // <div className="container">
    //   <Header />
    //   <Menu />
    //   <Footer />
    // </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48PX", textTransform: "uppercase" };
  const style = {};

  return (
    <>
      <header className="header">
        <h1 style={style}>Fast React Pizza Co.</h1>
      </header>
    </>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}
function Footer() {
  return (
    <>
      <footer className="footer">
        {new Date().toLocaleTimeString()}We are currently open!
      </footer>
    </>
  );
}

function Pizza() {
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 8;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("we're currently open!");
  // else alert("sorry we closed");

  return (
    <>
      <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />
      <h3>"Pizza Prosciutto"</h3>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </>
  );
}
//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React v18
// import ReactDOM from "react-dom"
// React.render(<App />);
