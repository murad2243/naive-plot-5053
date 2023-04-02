import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home" 
import LoginPage from "../Pages/LoginPage" 
import Cart from "../Pages/Cart" 
import Mens from "../Pages/Mens" 
import Register from "../Pages/Register" 
// import SingleProduct from "../Pages/SingleProduct" 
// import NotFound from "../Pages/NotFound" 




const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<LoginPage/>} ></Route>
        <Route path="/register" element={<Register/>} ></Route>
        {/* <Route path="/notfound" element={<NotFound/>} ></Route> */}
        <Route path="/mens" element={<Mens/>} ></Route>
        <Route path="/cart" element={<Cart/>} ></Route>
        {/* <Route path="/products/:id" element={<SingleProduct/>} ></Route> */}
    </Routes>
}
export default AllRoutes;