import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Cart from "./Pages/Cart";
import WomenCollection from "./Pages/WomenCollection";
import Collection from "./Pages/Collection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/women" element={<WomenCollection/>} />
      </Routes>
    </Router>
  );
}

export default App;
