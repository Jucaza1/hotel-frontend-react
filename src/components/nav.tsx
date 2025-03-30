import { Link } from 'react-router'

export default function Nav() {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
            <Link to="/" className="pl-8">Home</Link>
            <div className="pr-8">
                <Link to="/demo" className="p-4">Demo</Link>
                <Link to="/register" className="p-4">Register</Link>
                <Link to="/login" className="p-4">Login</Link>
                <Link to="/users/me" className="p-4">Profile</Link>
                <Link to="/hotels" className="p-4">Hotels</Link>
            </div>
        </nav>
    )
}

