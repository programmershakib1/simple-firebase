import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-10 pb-10">
            <NavLink to="/" className="bg-green-400 py-2 px-6 rounded-full">Home</NavLink>
            <NavLink to="/login"  className="bg-green-400 py-2 px-6 rounded-full">Login</NavLink>
        </div>
    );
};

export default Header;