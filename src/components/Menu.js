import pizza1 from "../../src/assets/images/focaccia.jpg";
import pizza2 from "../../src/assets/images/funghi.jpg";
import pizza3 from "../../src/assets/images/margherita.jpg";
import pizza4 from "../../src/assets/images/prosciutto.jpg";
import pizza5 from "../../src/assets/images/salamino.jpg";
import pizza6 from "../../src/assets/images/spinaci.jpg";
import Pizza from "./Pizza";

const pizzaData = [
  {
    name: "focaccia",
    ingredients: "Bread with italian olive oil and rosmary",
    price: 6,
    photoName: pizza1,
    soldOut: false,
  },
  {
    name: "funghi",
    ingredients: "cheese and tomato with potato",
    price: 12,
    photoName: pizza2,
    soldOut: false,
  },
  {
    name: "margherita",
    ingredients: "tomato and cheese",
    price: 20,
    photoName: pizza3,
    soldOut: false,
  },
  {
    name: "prosciutto",
    ingredients: "oil with cheese with some rice",
    price: 8,
    photoName: pizza4,
    soldOut: false,
  },
  {
    name: "salamino",
    ingredients: "salamino fish with potato",
    price: 25,
    photoName: pizza5,
    soldOut: false,
  },
  {
    name: "spinaci",
    ingredients: "spinaci with somecheese and oil",
    price: 17,
    photoName: pizza6,
    soldOut: false,
  },
];

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}
