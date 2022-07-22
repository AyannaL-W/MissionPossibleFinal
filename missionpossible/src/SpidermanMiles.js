import spiderman from "./images/spiderman.jpg"

const SpiderManMiles = (Langue) => {

    function PageLangue(section){
        if(Langue.LanguageId === "French"){
            if(section === "goal1") return "Cours pour 500 km sur des édifices";
            else if (section === "goal2") return "Balance toi dans les aires pour 400 km sans toucher le sol";
            else if (section === "goal3") return "Web 50 personnes";
            else if (section === "back") return "Retour aux options de jeux";
        } else{
            if(section === "goal1") return "Run 500 km on buildings";
            else if (section === "goal2") return "Swing in the air for 400 km without touching the ground";
            else if (section === "goal3") return "Web 50 people";
            else if (section === "back") return "Back to game options";
        }
    }

    return ( 
        <div className="objectif">
            <div className="container1">
                <div className="row">
                    <div className="col">
                        <div className="row1">
                            <img src={spiderman} className="spiderman" alt="Spider-Man Miles Morales poster" />
                            <h3>{PageLangue("goal1")}</h3>
                        </div>
                    </div>
                    <div className="col">
                    <div className="row1">
                        <img src={spiderman} className="spiderman" alt="Spider-Man Miles Morales poster" />
                        <h3>{PageLangue("goal2")}</h3>
                    </div>
                    </div>
                    <div className="col">
                    <div className="row1">
                        <img src={spiderman} className="spiderman" alt="Spider-Man Miles Morales poster" />
                        <h3>{PageLangue("goal3")}</h3>
                    </div>
                    </div>
                    <a href="/MissionPossibleFinal/Goals" className="btn btn-outline-dark">
                        {PageLangue("back")}
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default SpiderManMiles;