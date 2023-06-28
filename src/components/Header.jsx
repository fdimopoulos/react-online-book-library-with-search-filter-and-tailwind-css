import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-evenly items-center gap-4 h-[10vh] w-full text-3xl md:text-4xl font-bold bg-blackish text-whitish">
            <h2 className="uppercase">
                <Link to={"/"}>Logo</Link>
            </h2>
            <h1>Online Book Library</h1>
        </div>
    );
};

export default Header;
