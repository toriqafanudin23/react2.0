import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoCard from "./components/TodoCard";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Header />
      <Counter />
      {/* <TodoCard day="Senin" count={3} />
      <TodoCard day="Selasa" count={2} />
      <TodoCard day="Rabu" count={1} /> */}
      <Footer pesan="Toriq Afanudin 2025" />
    </>
  );
}

export default App;
