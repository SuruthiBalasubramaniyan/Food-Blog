import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Blog/Food/Context";
import Home1 from "./Blog/Home1";
import Signup from "./Blog/Sign-up";
import Menu from "./Blog/Food/Menu";
import Merge from "./Blog/Merge";
import Make from "./Blog/Food/Make";
import RecipeDetail from "./Blog/Food/Recipedetails";
import NavbarComponent from "./Blog/Navbar"; 
import Login from "./Blog/logiin";

function App() {
  return (
    <div>
      <Router>
        <CartProvider>
          <NavbarComponent /> 
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/about" element={<Merge />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recipe" element={<Make />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;

 