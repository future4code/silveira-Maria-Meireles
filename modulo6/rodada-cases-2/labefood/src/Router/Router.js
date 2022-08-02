import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/Signup'
import SignUpAddress from '../Pages/SignUpAddress/SignUpAddress'
import FeedPage from '../Pages/Feed/feed'
import Profile from '../Pages/Profile/Profile'
import RestaurantDetails from '../Pages/Restaurant/RestaurantDetails'
import Cart from '../Pages/Cart/Cart'
import React from 'react'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>} />
                <Route path="/signUp" element={ <SignUp/> } />
                <Route path="/SignUp/address" element = { <SignUpAddress /> } />
                <Route path="/feed" element={ <FeedPage /> } />
                <Route path="/feed/:restaurantId" element={ <RestaurantDetails /> } /> 
                <Route path="/profile" element={ <Profile /> } /> 
                <Route path="/cart" element={ <Cart /> } />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;