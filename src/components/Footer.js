export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <>
      <footer className="footer">
        {new Date().toLocaleTimeString()} we're currently open!
      </footer>
    </>
  );
}
