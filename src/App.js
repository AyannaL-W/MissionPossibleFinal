import Navbar from './Navbar';
import Contact from './Contact';
import FAQ from './FAQ';
import Top from './Top';
import Home from './Home';
import Games from './Games';
import Objectif from './Objectif';
import Analyze from './Analyze';
import Step from './Step';
import Connexion from './Connexion';
import SpiderManMiles from './SpidermanMiles';
import Crash from './Crash';
import COD from './COD';
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const [LanguageId, setLanguageId] = useState('French');

  function PageLangue(page){
    if(LanguageId === "French"){
      if(page === "Games") return "Jeux";
      else if (page === "Goals")  return "Objectifs";
      else if (page === "Analyze")  return "Analyses";
      else if (page === "Stepbystep") return "Pas à pas";
    }
    return page;
  }

  return (
    <Router>
      <div className="App">
        <Navbar LanguageId = {LanguageId} setLangue={setLanguageId}/>
        <div className="content">
          <Switch>
            <Route exact path="/MissionPossibleFinal">
              <Top page="Mission Possible"/>
              <Home LanguageId = {LanguageId}/>
              <FAQ LanguageId = {LanguageId}/>
            </Route>
            <Route path="/MissionPossibleFinal/Games">
              <Top page={PageLangue("Games")} />
              <Games LanguageId = {LanguageId}/>
            </Route>
            <Route exact path="/MissionPossibleFinal/Goals">
              <Top page={PageLangue("Goals")} />
              <Objectif LanguageId={LanguageId}/>
            </Route>
            <Route path="/MissionPossibleFinal/Goals/Spiderman">
              <Top page={PageLangue("Goals")} />
              <SpiderManMiles LanguageId={LanguageId}/>
            </Route>
            <Route path="/MissionPossibleFinal/Goals/COD">
              <Top page={PageLangue("Goals")} />
              <COD LanguageId={LanguageId}/>
            </Route>
            <Route path="/MissionPossibleFinal/Goals/Crash">
              <Top page={PageLangue("Goals")} />
              <Crash LanguageId={LanguageId}/>
            </Route>
            <Route path="/MissionPossibleFinal/Analyze">
              <Top page={PageLangue("Analyze")} />
              <Analyze LanguageId={LanguageId}/>
            </Route>
            <Route path="/MissionPossibleFinal/Stepbystep">
              <Top page={PageLangue("Stepbystep")} />
              <Step LanguageId={LanguageId} />
            </Route>
            <Route path="/MissionPossibleFinal/Connexion">
            <Top page="Connexion" />
            <Connexion LanguageId={LanguageId} />
            </Route>
          </Switch>
        </div>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
