import pizza1 from "../../src/assets/images/focaccia.jpg";
import pizza2 from "../../src/assets/images/funghi.jpg";
import pizza3 from "../../src/assets/images/margherita.jpg";
import pizza4 from "../../src/assets/images/prosciutto.jpg";
import pizza5 from "../../src/assets/images/salamino.jpg";
import pizza6 from "../../src/assets/images/spinaci.jpg";
export default function Pizza() {
  return (
    <main className="pizza">
      <img src={pizza6} alt="pizza spinaci" />
      <h3>Pizza Spinaci</h3>
      <p>tomato, mozarella, spinach, and ricotta cheese</p>
    </main>
  );
}
