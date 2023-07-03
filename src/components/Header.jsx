import { Link } from "react-router-dom";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const Header = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="w-full bg-slate-700 shadow-inner text-whitish">
                <div className="flex justify-between items-center gap-4 px-6 mx-auto h-[10vh] max-w-[1440px] font-bold  ">
                    <h2 className="uppercase text-3xl md:text-4xl">
                        <Link to={"/"}>Online Book Library</Link>
                    </h2>
                    {darkMode ? (
                        <BsFillMoonStarsFill
                            onClick={() => setDarkMode(!darkMode)}
                            className="cursor-pointer text-2xl text-slate-100"
                        />
                    ) : (
                        <BsFillSunFill
                            onClick={() => setDarkMode(!darkMode)}
                            className="cursor-pointer text-2xl"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
