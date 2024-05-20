import "./App.css";
// import "./coustom.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ShowItems from "./components/ShowItems";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ShowItems/>
    </div>
  );
}

export default App;
