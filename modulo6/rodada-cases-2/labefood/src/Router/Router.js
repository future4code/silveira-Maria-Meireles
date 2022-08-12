import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/Signup'
import SignUpAddress from '../Pages/SignUpAddress/SignUpAddress'
import AddressEdit from "../Pages/AddressEdit/AddressEdit"
import FeedPage from '../Pages/Feed/feed'
import Profile from '../Pages/Profile/Profile'
import ProfileEdit from '../Pages/ProfileEdit/ProfileEdit'
import RestaurantDetails from '../Pages/Restaurant/RestaurantDetails'
import Cart from '../Pages/Cart/Cart'
import React from 'react'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage/>} />
                <Route path="/signUp" element={ <SignUp/> } />
                <Route path="/SignUp/address" element = { <SignUpAddress /> } />
                <Route path="/addressEdit/:id" element={ <AddressEdit /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/feed/:restaurantId" element={ <RestaurantDetails /> } /> 
                <Route path="/profile" element={ <Profile /> } /> 
                <Route path="/profile/:id" element={ <ProfileEdit /> } />
                <Route path="/cart" element={ <Cart /> } />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;