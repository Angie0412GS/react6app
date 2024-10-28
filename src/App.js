import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import Inicio from "./componetes/inicio";
import Sobre_que from "./componetes/Sobre";
import Counter from "./componetes/counter";
import ThemedComponent from "./componetes/ThemedComponent.js";
import { ThemeProvider } from "./componetes/ThemeContext";
import { Provider } from "react-redux";
import { Store } from "./componetes/Store.js";
import ComponenteContador from "./componetes/CounterComponent.js";
import '../src/styles/inicio_sobre.css'

function App(){
  return (
    <Router>
      <nav>
        <div className="nav-container">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Inicio
          </NavLink>
          <NavLink to="/Sobre" className={({ isActive }) => (isActive ? "active" : "")}>
            Sobre
          </NavLink>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Sobre" element={<Sobre_que />} />
        </Routes>
      </main>
    </Router>
  );
};
//export default App;

function App2(){
  return(
    <div>
      <Counter/>
    </div>
  );
};
//export default App2;

function App3(){
  return(
    <div>
      <ThemeProvider>
        <ThemedComponent/>
      </ThemeProvider>
    </div>
  );
};
//export default App3;

const App4 = () => {
  return (
    <Provider store={Store}>
      <div className="App">
        <h1>Mi contador con Redux</h1>
        <ComponenteContador />
      </div>
    </Provider>
  );
};

export default App4;