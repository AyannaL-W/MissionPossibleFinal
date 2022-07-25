import cod from "./images/COD-Vanguard.jpg"

const COD = (Langue) => {

    function PageLangue(section){
        if(Langue.LanguageId === "French"){
            if(section === "goal1") return "Cours pour 500 km";
            else if (section === "goal2") return "Saute dans les aires 600 fois";
            else if (section === "goal3") return "Tire 50 personnes";
            else if (section === "back") return "Retour aux options de jeux";
        } else{
            if(section === "goal1") return "Run 500 km";
            else if (section === "goal2") return "Jump 600 times";
            else if (section === "goal3") return "Shoot 50 people";
            else if (section === "back") return "Back to game options";
        }
    }

    return ( 
        <div className="objectif">
            <div className="container1">
                <div className="row">
                    <div className="col">
                        <div className="row1">
                            <img src={cod} className="cod" alt="Call of Duty Vanguard poster" />
                            <h3>{PageLangue("goal1")}</h3>
                        </div>
                    </div>
                    <div className="col">
                    <div className="row1">
                    <img src={cod} className="cod" alt="Call of Duty Vanguard poster" />
                        <h3>{PageLangue("goal2")}</h3>
                    </div>
                    </div>
                    <div className="col">
                    <div className="row1">
                    <img src={cod} className="cod" alt="Call of Duty Vanguard poster" />
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
 
export default COD;