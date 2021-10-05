import React from 'react';
import reactDom from 'react-dom';
import './index.css';
import Nav from './nav';
/*import logo from "./assets/img/logo_sans_fond_simple.png";
import Navbar from "./navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Tarifs from "./pages/tarifs";
import { Route } from "react-router-dom";*/

reactDom.render(
    <div className="main-container background">
        {/*<span className="background-animation-container"></span>
        <span className="background-animation-container"></span>
        <span className="background-animation-container"></span>
        <span className="background-animation-container"></span>
        <span className="background-animation-container"></span>
        <span className="background-animation-container"></span>
        <span className="background-animation-container"></span>
        <span className="background-animation-container"></span>*/}
        <Nav></Nav>
        {/*<Router>
            <Navbar />
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
        </Router>*/}
    </div>,
    document.getElementById('root')
);

