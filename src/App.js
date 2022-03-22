import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PrivateNavBar from "./Layout/Navbar/PrivateNavBar";

const Product = lazy(() => import("./Container/Product/Product"));
const Login = lazy(() => import("./Container/Auth/Login"));
const ProductDetail = lazy(() => import("./Components/ProductDetail"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
       
          <Route path="/product" element={<Product />} />
            <Route path="/productdetail/:id" element={<ProductDetail/>} />
        </Routes>
      </Suspense>
    </BrowserRouter> 
  );
}

export default App;
