import cod from "./images/COD-Vanguard.jpg"
import spider from "./images/spiderman.jpg"
import crash from "./images/crash.jpeg"

const Step = (Langue) => {

    function PageLangue(section){
        if(Langue.LanguageId === "French"){
            if(section === "step") return "Voir les niveaux pour ce jeu";
        } else{
            if(section === "step") return "See the levels for this game";
        }
    }

    return ( 
        <div className="step">
            <div className="container1">
                <div className="row">
                    <div className="col">
                        <div className="row1">
                            <img src={cod} className="cod" alt="Call of Duty Vanguard poster" />
                            <h3>Call of Duty : Vanguard</h3>
                            <a href="/MissionPossibleFinal/Stepbystep" className="btn btn-outline-dark">
                            {PageLangue("step")}
                            </a>
                        </div>
                    </div>
                    <div className="col">
                    <div className="row1">
                        <img src={spider} className="spider" alt="Spider-Man Miles Morales poster" />
                        <h3>Spider-Man: Miles Morales</h3>
                        <a href="/MissionPossibleFinal/Stepbystep" className="btn btn-outline-dark">
                        {PageLangue("step")}
                        </a>
                    </div>
                    </div>
                    <div className="col">
                    <div className="row1">
                        <img src={crash} className="crash" alt="Crash Bandicoot 4 poster" />
                        <h3>Crash Bandicoot 4</h3>
                        <a href="/MissionPossibleFinal/Stepbystep" className="btn btn-outline-dark">
                        {PageLangue("step")}
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Step;