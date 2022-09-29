
export default function NavBar() {

    return (
        <nav className="">
            <div className="flex justify-center lg:gap-44 gap-4	md:lg:text-2xl lg:text-4xl bg-green-300 text-white p-2">
                <ul className=" lg:hover:text-5xl duration-300"> home </ul>
                <ul className="lg:hover:text-5xl duration-300"> about</ul>
                <ul className="lg:hover:text-5xl duration-300"> contact </ul>
            </div>
        </nav>

    );
    
}