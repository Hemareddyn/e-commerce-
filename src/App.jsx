import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,Switch,Route
  } from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route
        exact 
        path="/product" 
        render={()=><Product/>}/>
        <Route
        exact 
        path="/" 
        render={()=><Home/>}/>
        <Route
        exact 
        path="/Register" 
        render={()=><Register/>}/>
        <Route
        exact 
        path="/productList" 
        render={()=><ProductList/>}/>
        <Route
        exact 
        path="/Login" 
        render={()=><Login/>}/>
        <Route
        exact 
        path="/Cart" 
        render={()=><Cart/>}/>
    
    
    </Switch>
    </Router>
    </>
  
  );
    
}

export default App;