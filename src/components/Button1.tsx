import { Link } from 'react-router'

export function Button1({ to, children }: { to: string, children: React.ReactNode }) {
    return (
        <Link to={to} className="button py-2 px-4">
            {children}
        </Link>
    )
}
