import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Fast React Pizza co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData
  return (
    <main className="menu">
      <h2>Our Menu </h2>
      {pizzas.length > 0 ? (
      <>
        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
        <ul className="pizzas">
          {pizzas.map(product => <Pizza productObj={product} key={product.name} />)}
        </ul>
      </> ): (<p>Sorry we're Working in Menu Now</p>) }
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  const [time, setTime] = useState(new Date().toLocaleTimeString())
  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
  })

  return <footer> {isOpen ?
    <div className="order">
      {time} we're open now you can order online we're will close at 12:00:00 PM
      <button className="btn">order now </button>
    </div> : <p> {time} We're happy to welcome you between {openHour}:00 AM and 12:00 PM</p>
  }</footer>;
}
function Pizza({productObj}) {
  return (
    <li className={`pizza ${productObj.soldOut ? "sold-out" : ""}`}>
      <img src={productObj.photoName} alt={productObj.name} />
    <div>
      <h3>{productObj.name}</h3>
      <p>{productObj.ingredients}</p>
      <span>{ productObj.soldOut ? "Sold Out" : productObj.price}</span>
    </div>
    </li>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
