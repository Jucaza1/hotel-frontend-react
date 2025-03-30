import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Demo from './routes/demo'
import Register from './routes/register'
import Login from './routes/login'
import { UserProvider } from './context/user'
import UserProfile from './routes/user'
import Hotels from './routes/hotels'
import Nav from './components/nav'
import Home from './routes/home'

function App() {

    return (
        <>
            <UserProvider>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/demo" Component={Demo} />
                        <Route path="/register" Component={Register} />
                        <Route path="/login" Component={Login} />
                        <Route path="/users/me" Component={UserProfile} />
                        <Route path="/hotels" Component={Hotels} />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    )
}

export default App
