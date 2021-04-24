import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';


function App() {
  return (
    <Router>
       <Switch>
         <Route exact path="/">
             <Home/>
         </Route>
         <Route path="/home">
             <Home/>
         </Route>
         <Route path="/league/:idLeague">
              <LeagueDetail></LeagueDetail>
         </Route>
         <Route path="*">
             <NotFound></NotFound>
         </Route>
       </Switch>
    </Router>
  );
}

export default App;
