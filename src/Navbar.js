import { useState } from "react";
import logo from './images/remote.png'

const Navbar = (Langue, setLangue) => {

    const [HomeName, setHomeName] = useState('Accueil');
    const [GameName, setGameName] = useState('Jeux');
    const [GoalName, setGoalName] = useState('Objectifs');
    const [AnalyzeName, setAnalyzeName] = useState('Analyses');
    const [StepName, setStepName] = useState('Pas à pas');
    const [ConnexionName, setConnexionName] = useState('Connexion');

    const handleClick = () => {
        if(Langue.LanguageId === "French"){
            setHomeName('Home');
            setGameName('Games');
            setGoalName('Goals');
            setAnalyzeName('Analysis');
            setStepName('Step by Step');
            setConnexionName('Connexion');
            Langue.setLangue('English');
        } else{
            setHomeName('Accueil');
            setGameName('Jeux');
            setGoalName('Objectifs');
            setAnalyzeName('Analyses');
            setStepName('Pas à pas');
            setConnexionName('Connexion');
            Langue.setLangue('French');
        }
    }

    return (
        <nav className="navbar">
            <img src={logo} className="App-logo" alt="logo, a black and white remote from a console" />
            <h1>Mission Possible</h1>
            <div className="links">
                <a href="/">{HomeName}</a>
                <a href="/Games">{GameName}</a>
                <a href="/Goals">{GoalName}</a>
                <a href="/Analyze">{AnalyzeName}</a>
                <a href="/Stepbystep">{StepName}</a>
                <a href="/Connexion">{ConnexionName}</a>
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