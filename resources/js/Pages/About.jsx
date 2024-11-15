export default function About({title, desc}) {
    return (
        <>
            <div className="w-full text-center mt-8">
                <h1 className="text-6xl font-extrabold text-slate-200 mb-3">{title}</h1>
                <p className="text-3xl font-semibold text-slate-400">{desc}</p>
            </div>
        </>
    );
}