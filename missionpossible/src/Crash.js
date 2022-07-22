import crash from "./images/crash.jpeg"

const Crash = () => {

    function PageLangue(section){
        if(Langue.LanguageId === "French"){
            if(section === "goal1") return "Cours pour 500 km";
            else if (section === "goal2") return "Saute sur 500 plateformes";
            else if (section === "goal3") return "Tue 50 enemies";
            else if (section === "back") return "Retour aux options de jeux";
        } else{
            if(section === "goal1") return "Run 500 km";
            else if (section === "goal2") return "Jump on 500 plateforms";
            else if (section === "goal3") return "Kill 50 enemies";
            else if (section === "back") return "Back to game options";
        }
    }

    return ( 
        <div className="objectif">
            <div className="container1">
                <div className="row">
                    <div className="col">
                        <div className="row1">
                        <img src={crash} className="crash" alt="Crash Bandicoot 4 poster" />
                            <h3>{PageLangue("goal1")}</h3>
                        </div>
                    </div>
                    <div className="col">
                    <div className="row1">
                    <img src={crash} className="crash" alt="Crash Bandicoot 4 poster" />
                        <h3>{PageLangue("goal2")}</h3>
                    </div>
                    </div>
                    <div className="col">
                    <div className="row1">
                        <img src={crash} className="crash" alt="Crash Bandicoot 4 poster" />
                        <h3>{PageLangue("goal3")}</h3>
                    </div>
                    </div>
                    <a href="/Goals" className="btn btn-outline-dark">
                        {PageLangue("back")}
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Crash;