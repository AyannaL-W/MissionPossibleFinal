import cod from "./images/COD-Vanguard.jpg"
import spider from "./images/spiderman.jpg"
import crash from "./images/crash.jpeg"

const Games = (Langue) => {

    function PageLangue(section){
        if(Langue.LanguageId === "French"){
            if(section === "DifficultyCOD") return "Difficulté : de novice jusqu'à expert";
            else if (section === "DescCOD") return "Le jeu décrit la montée en puissance des forces spéciales, la première étant chargée de découvrir un projet secret nazi et de le contrecarrer. Le joueur prend le contrôle de divers membres de la Task Force Vanguard, une équipe formée par le Special Operations Executive pour découvrir Phoenix, un projet secret nazi.";
            else if (section === "DifficultySpider") return "Difficulté : de novice jusqu'à expert";
            else if (section === "DescSpider")  return "Le jeu est une continuation de Marvel's Spider-Man, et montre la lutte de Miles pour équilibrer les devoirs de son personnage civil et son rôle de deuxième Spider-Man lorsque sa nouvelle maison, Harlem, est menacée par une guerre entre la Roxxon Energy Corporation et l'armée criminelle de haute technologie du bricoleur, le Underground.";
            else if (section === "DifficultyCrash") return "Difficulté : de novice jusqu'à moyen"
            else if (section === "DescCrash")   return "Le jeu est un jeu de plateforme dans lequel le joueur contrôle principalement soit le personnage titulaire Crash, soit sa sœur Coco, qui sont chargées de sauver le multivers de la domination des docteurs Neo Cortex et Nefarious Tropy.";
            else if(section === "goals")    return "Voir les objectifs pour ce jeu"
        } else{
            if(section === "DifficultyCOD") return "Difficulty : Novice to Expert";
            else if (section === "DescCOD") return "The game portrays the rise of special forces, with the first tasked to uncover a secret Nazi project and thwart it. The player takes control of various members of Task Force Vanguard, a team formed by the Special Operations Executive to uncover Phoenix, a secret Nazi project.";
            else if (section === "DifficultySpider") return "Difficulty : Novice to Expert";
            else if (section === "DescSpider")  return "The game is a spin-off/continuation of Marvel's Spider-Man, and depicts Miles' struggle to balance the duties of his civilian persona and his role as the second Spider-Man when his new home, Harlem, is threatened by a war between the Roxxon Energy Corporation and the Tinkerer's high-tech criminal army, the Underground.";
            else if (section === "DifficultyCrash") return "Difficulty : Novice to Medium"
            else if (section === "DescCrash")   return "The game is a platform game in which the player primarily controls either the titular character Crash or his sister Coco, who are tasked with saving the multiverse from domination by Doctors Neo Cortex and Nefarious Tropy.";
            else if(section === "goals")    return "See the goals for this game"
        }
    }

    return ( 
        <div className="games">
            <div className="container">
                <div className="row">
                <div className="col">
                    <img src={cod} className="cod" alt="Call of Duty Vanguard poster" />
                    <div className="container">
                        <h3>Call of Duty : Vanguard</h3>
                        <p>{PageLangue("DifficultyCOD")}</p>
                        <p>{PageLangue("DescCOD")}</p>
                        <a href="/MissionPossibleFinal/Goals/Cod" className="btn btn-outline-dark">
                            {PageLangue("goals")}
                        </a>
                    </div>
                </div>
                <div className="col">
                    <img src={spider} className="spider" alt="Spider-Man Miles Morales poster" />
                    <div className="container">
                        <h3>Spider-Man: Miles Morales</h3>
                        <p>{PageLangue("DifficultySpider")}</p>
                        <p>{PageLangue("DescSpider")}</p>
                        <a href="/MissionPossibleFinal/Goals/Spiderman" className="btn btn-outline-dark">
                        {PageLangue("goals")}
                        </a>
                    </div>
                </div>
                <div className="col">
                    <img src={crash} className="crash" alt="Crash Bandicoot 4 poster" />
                    <div className="container">
                        <h3>Crash Bandicoot 4</h3>
                        <p>{PageLangue("DifficultyCrash")}</p>
                        <p>{PageLangue("DescCrash")}</p>
                        <a href="/MissionPossibleFinal/Goals/Crash" class="btn btn-outline-dark">
                        {PageLangue("goals")}
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Games;