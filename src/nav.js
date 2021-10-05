import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./nav.css";
import Navbar from "./navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Tarifs from "./pages/tarifs";

class Nav extends React.Component {
    render() {
        return (
                <div className="page-wrapper">
                <Router>
                <Navbar />
                <Switch>
                <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/tarifs">
                        <Tarifs />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    </Switch>
                </Router>
                </div>
        );
    }
}

export default Nav;