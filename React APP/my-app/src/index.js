import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ProfileCart from "./profile";
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
    // <ProfileCart />
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
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
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 && ( //sort circuting
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            // <Pizza name={pizza.name} photoName={pizza.photoName} />
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}

      {/* <Pizza />
      <Pizza />
      <Pizza /> */}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("we're currently open!");
  // else alert("sorry we closed");

  return (
    <footer className="footer">
      {isOpen && ( //sort circuiting
        <div className="order">
          <p>we're open until {closeHour}:00.Come visite us or order online</p>
          <button className="btn"> Order</button>
        </div>
      )}
    </footer>
  );
  // return (
  //   <>
  //     <footer className="footer">
  //       {new Date().toLocaleTimeString()}We are currently open!
  //     </footer>
  //   </>
  // );
}

function Pizza(props) {
  return (
    <>
      <li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </li>
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
