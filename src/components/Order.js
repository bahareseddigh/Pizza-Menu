function Order(props) {
  return (
    <div className="order">
      <p>
        we're open until {props.closeHour}:00. Come visit us or order Online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
export default Order;
