import NavLink from "./NavLink";

export default function Navbar() {
    return (
        <>
            <nav className="flex items-center justify-center gap-6 w-full h-20 bg-slate-400">
                <NavLink url="/">Home</NavLink>
                <NavLink url="/about">About</NavLink>
            </nav>
        </>
    );
}