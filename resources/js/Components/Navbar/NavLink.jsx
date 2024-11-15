import { Link } from "@inertiajs/react";

export default function NavLink({url, children}) {
    return (
        <>
            <Link href={url} className="text-2xl font-semibold text-slate-900 hover:text-slate-600 cursor-pointer ease-in-out duration-300">{children}</Link>
        </>
    );
}