import Navbar from "../Components/Navbar/Navbar";

export default function DefaultLayout({children}) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    );
}