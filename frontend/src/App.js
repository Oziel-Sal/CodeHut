import './App.css';
import LandingPage from './views/Landingpage';
import Ideas from './views/IdeaPage';
import Something from './views/Something';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/ideas/">
            <Ideas />
          </Route>

          <Route exact path="/something/">
            <Something />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
