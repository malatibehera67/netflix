import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;