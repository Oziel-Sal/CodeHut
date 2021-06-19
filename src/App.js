import './App.css';
import LandingPage from './views/Landingpage';
import Ideas from './views/IdeaPage';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/ideas/">
            <Ideas />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
