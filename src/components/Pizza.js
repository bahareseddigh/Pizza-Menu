export default function Pizza(props) {
  return (
    <li className="pizza">
      <div>
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}
