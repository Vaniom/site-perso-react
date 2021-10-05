import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import logo from "./assets/img/logo_sans_fond_simple.png";

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isClicked: false
        };
    }

    handleButton = () => {
        if (this.state.isClicked === false) {
            this.setState({isClicked: true})
        } else {
            this.setState({isClicked: false})
        };
    }

    render(){
        return(
            <div className="logo-container">
                <div>
                    <img className="logo-img" src={logo} alt="logo" />
                </div>
                <div className="logo-text-flex-container">
                    <span className="logo-text">Florent PIANET</span>
                    <span className="logo-text-line-2">Développement Web</span>
                </div>
                <div className={this.state.isClicked ? "navbar-container open" : "navbar-container"}>
                    <div className="nav-icons">
                        <div className={this.state.isClicked ? "nav-icon home display" : "nav-icon home hidden"}>
                        <Link to="/"><FontAwesomeIcon icon={faHome} /><span>Accueil</span></Link>
                        </div>
                        <div className={this.state.isClicked ? "nav-icon profile display" : "nav-icon profile hidden"}>
                        <Link to="/about"><FontAwesomeIcon icon={faUserCircle} /><span>Profil</span></Link>
                        </div>
                        <div className={this.state.isClicked ? "nav-icon projects display" : "nav-icon projects hidden"}>
                        <Link to="/projects"><FontAwesomeIcon icon={faRocket} /><span>Projets</span></Link>
                        </div>
                        <div className={this.state.isClicked ? "nav-icon costs display" : "nav-icon costs hidden"}>
                        <Link to="tarifs"><FontAwesomeIcon icon={faDollarSign} /><span>Tarifs</span></Link>
                        </div>
                        <div className={this.state.isClicked ? "nav-icon contact display" : "nav-icon contact hidden"}>
                        <Link to="/contact"><FontAwesomeIcon icon={faCommentDots} /><span>Contact</span></Link>
                        </div>
                        <div className={this.state.isClicked ? "nav-icon adjust display" : "nav-icon adjust hidden"}>
                        <FontAwesomeIcon icon={faAdjust} /><span>Contraste</span>
                        </div>
                        </div>
                        <div
                            id="nav-icon"
                            className={this.state.isClicked ? "open" : ""}
                            onClick={this.handleButton}>
                            <span></span>
                            <span></span>
                            <span></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;