import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignOnPage from '../Pages/SignOnPage'
import SignInPage from '../Pages/SignInPage'
import FeedPage from '../Pages/FeedPage'
import PostCommentsPage from '../Pages/PostCommentsPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<SignOnPage/>} />
                <Route path='/Cadastro' element={<SignInPage/>} />
                <Route path='/Feed' element={<FeedPage/>} />
                <Route path='/ComentariosPost/:id' element={<PostCommentsPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;