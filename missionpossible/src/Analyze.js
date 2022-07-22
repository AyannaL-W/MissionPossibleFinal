import hours from "./images/clock.png"
import friends from "./images/friends.png"
import game from "./images/control.png"

const Analyze = (Langue) => {

    function PageLangue(section){
        if(Langue.LanguageId === "French"){
            if(section === "hours") return "Heures jouées";
            else if (section === "rounds") return "Parties jouées";
            else if (section === "friends") return "Partie jouées avec des amis";
            else if (section === "althours") return "Icônes d'une horlôge";
            else if (section === "altfriends")  return "Icônes qui montre des amis ensemble";
            else if (section === "altgame") return "Icônes d'une manette noir et blanche";
        } else{
            if(section === "hours") return "Hours played";
            else if (section === "rounds") return "Rounds played";
            else if (section === "friends") return "Rounds played with friends";
            else if (section === "althours") return "Symbole of a clock";
            else if (section === "altfriends")  return "Symbole of friends together";
            else if (section === "altgame") return "Symbole of a black and white remote";
        }
    }

    return ( 
        <div className="analyze">
            <div className="container1">
                <div className="row">
                    <div className="col">
                        <div className="row1">
                            <img src={hours} className="hours" alt={PageLangue("althours")} />
                            <h3>{PageLangue("hours")}</h3>
                            <p>47 h</p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="row1">
                        <img src={game} className="logo" alt={PageLangue("altgame")} />
                        <h3>{PageLangue("rounds")}</h3>
                        <p>23</p>
                    </div>
                    </div>
                    <div className="col">
                    <div className="row1">
                        <img src={friends} className="friends" alt={PageLangue("altfriends")} />
                        <h3>{PageLangue("friends")}</h3>
                        <p>14</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Analyze;