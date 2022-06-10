import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "pages/Cart/Cart";
import Recipes from "components/RecipeMenu/Recipes";
import LoginForm from "./pages/Home/LoginForm";



const App = ({ Login, error }) => {
  return (  
    <BrowserRouter>
  
      <Routes>
        <Route index element={<LoginForm Login={Login} error={error}/>} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="/loginform" element={<LoginForm Login={Login} error={error} />} />
        <Route path="*" element={<Home />} />
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/recipes" element={<Recipes/>}></Route>
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
