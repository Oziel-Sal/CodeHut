import './style/App.css';
import LandingPage from './views/Landingpage';
import Ideas from './views/IdeaPage';
import Report from './views/Report';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App-header">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/ideas/">
            <Ideas />
          </Route>

          <Route exact path="/saved/">
            <Report />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
