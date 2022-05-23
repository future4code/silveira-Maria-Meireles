import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignOnPage from '../Pages/SignOnPage'
import SignInPage from '../Pages/SignInPage'
import FeedPage from '../Pages/FeedPage'
import PostCommentsPage from '../Pages/PostCommentsPage'
import ErrorPage from '../Pages/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<SignInPage/>} />
                <Route path='/Cadastro' element={<SignOnPage/>} />
                <Route path='/Feed' element={<FeedPage/>} />
                <Route path='/ComentariosPost/:id' element={<PostCommentsPage/>} />
                <Route path='*' element={<ErrorPage/> } /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router;