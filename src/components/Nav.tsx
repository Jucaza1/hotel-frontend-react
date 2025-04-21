import { Link } from 'react-router'

export default function Nav() {
    return (
        <nav className="flex justify-between items-center p-4 h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
            <Link to="/" className="px-4 py-2 my-2 underline_bar">Home</Link>
            <div className="flex">
                <Link to="/demo" className="px-4 py-2 my-2 underline_bar">Demo</Link>
                <Link to="/register" className="px-4 py-2 my-2 underline_bar">Register</Link>
                <Link to="/login" className="px-4 py-2 my-2 underline_bar">Login</Link>
                <Link to="/users/me" className="px-4 py-2 my-2 underline_bar">Profile</Link>
                <Link to="/hotels" className="px-4 py-2 my-2 underline_bar">Hotels</Link>
            </div>
        </nav>
    )
}

