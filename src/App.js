import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import LaunchCourse from "./LaunchCourse/LaunchCourse";
import Register from "./components/Register/Register";
import Admin from "./components/Mentors/Mentors";
import Login from "./components/Login/Login";
import MyPrograms from "./components/MyPrograms/MyPrograms";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/programs">
            <MyPrograms />
          </Route>
          <Route exact path="/programs/:id">
            <MyPrograms />
          </Route>
          <Route exact path="/launchCourse">
            <LaunchCourse />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/mentors">
            <Admin />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
