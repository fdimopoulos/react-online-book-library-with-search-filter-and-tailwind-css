import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">
                <Link to={"/"}>Logo</Link>
            </h1>
            <h1>Online Book Library</h1>
        </div>
    );
};

export default Header;
