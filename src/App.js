import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import "../src/App.css";

export default function App() {
  return (
    <main className="container">
      <Header />
      <Menu />
      <Footer />
    </main>
  );
}
