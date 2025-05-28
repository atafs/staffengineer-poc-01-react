import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./styles/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Separador2 from "./components/Separador2";
import Separador3 from "./components/Separador3";
import Separador4 from "./components/Separador4";
import Separador5 from "./components/Separador5";
import Separador6 from "./components/Separador6";

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header>
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-4 justify-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-300 underline" : "hover:text-blue-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/separador2"
                className={({ isActive }) =>
                  isActive ? "text-blue-300 underline" : "hover:text-blue-300"
                }
              >
                Separador 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/separador3"
                className={({ isActive }) =>
                  isActive ? "text-blue-300 underline" : "hover:text-blue-300"
                }
              >
                Separador 3
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/separador4"
                className={({ isActive }) =>
                  isActive ? "text-blue-300 underline" : "hover:text-blue-300"
                }
              >
                Separador 4
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/separador5"
                className={({ isActive }) =>
                  isActive ? "text-blue-300 underline" : "hover:text-blue-300"
                }
              >
                Separador 5
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/separador6"
                className={({ isActive }) =>
                  isActive ? "text-blue-300 underline" : "hover:text-blue-300"
                }
              >
                Separador 6
              </NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/separador2" element={<Separador2 />} />
          <Route path="/separador3" element={<Separador3 />} />
          <Route path="/separador4" element={<Separador4 />} />
          <Route path="/separador5" element={<Separador5 />} />
          <Route path="/separador6" element={<Separador6 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
