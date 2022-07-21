import { useState } from "react";

const Navbar = () => {

    const [HomeName, setHomeName] = useState('Accueil');

    const handleClick = () => {
        setHomeName('Home');
    }

    return (
        <nav className="navbar">
            <h1>bla bla bla</h1>
            <div className="links">
                <a href="/">{HomeName}</a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor: "black",
                    borderRadius: "8px"
                }}>bla bla</a>
            </div>
            <button onClick={handleClick} style={{
                    color:"white",
                    backgroundColor: "black",
                    borderRadius: "8px"
                }}>FR/ENG</button>
        </nav>
    );
}
 
export default Navbar;