import cod from "./images/COD-Vanguard.jpg"
import spider from "./images/spiderman.jpg"
import crash from "./images/crash.jpeg"

const Home = (Langue) => {


    function PageLangue(section){
        if(Langue.LanguageId === "French"){
            if(section === "Games") return "Jeux en vedette";
            else if (section === "More") return "Voir plus de jeux";
        } else{
            if(section === "Games") return "Featured Games";
            else if (section === "More") return "See more games";
        }
    }

    return ( 
        <div className="home">
            <div className="container1">
                <div className="row1">
                    <h2>{PageLangue("Games")}</h2>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row1">
                            <img src={cod} className="cod" alt="Call of Duty Vanguard poster" />
                            <h3>Call of Duty : Vanguard</h3>
                        </div>
                    </div>
                    <div className="col">
                    <div className="row1">
                        <img src={spider} className="spider" alt="Spider-Man Miles Morales poster" />
                        <h3>Spider-Man: Miles Morales</h3>
                    </div>
                    </div>
                    <div className="col">
                    <div className="row1">
                        <img src={crash} className="crash" alt="Crash Bandicoot 4 poster" />
                        <h3>Crash Bandicoot 4</h3>
                    </div>
                    </div>
                </div>
                <div className="row1">
                    <a href="/Games" className="btn btn-outline-dark">
                    {PageLangue("More")}
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Home;