import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import logo from "./assets/img/logo_sans_fond_simple.png";

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isClicked: false,
            activePage: "home"
        };
    }


    handleButton = () => {
        if (this.state.isClicked === false) {
            this.setState({isClicked: true})
        } else {
            this.setState({isClicked: false})
        }
    }

    handleClickItem = () => {
        this.setState({isClicked: false});
    };

    render(){
        return(
            <div className="header-wrapper">
                <div className="logo-container">
                <NavLink to="/">
                    <div onClick={this.handleClickItem}>
                        <img className="logo-img" src={logo} alt="logo" />
                    </div>
                    </NavLink>
                    <NavLink to="/">
                    <div className="logo-text-flex-container" onClick={this.handleClickItem}>
                        <span className="logo-text">Florent PIANET</span>
                        <span className="logo-text-line-2">Développement Web</span>
                    </div>
                    </NavLink>
                </div>
                <div
                    className={this.state.isClicked ? "mobile-nav-icon open" : "mobile-nav-icon"}
                    id="nav-icon"
                    onClick={this.handleButton}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={this.state.isClicked ? "mobile-nav-menu open" : "mobile-nav-menu"}>
                    <div className="mobile-nav-item" onClick={this.handleClickItem}><NavLink to="/projects">Projets</NavLink></div>
                    <div className="mobile-nav-item" onClick={this.handleClickItem}><NavLink to="/about">À Propos</NavLink></div>
                    <div className="mobile-nav-item" onClick={this.handleClickItem}><NavLink to="/tarifs">Tarifs</NavLink></div>
                    <div className="mobile-nav-item" onClick={this.handleClickItem}><NavLink to="/contact">Contact</NavLink></div>
                    <div className="mobile-nav-item"><span className="facebook-icon" onClick={this.handleClickItem}><a href="https://www.facebook.com/florentpianet.webdev" target="_blank" rel="noreferrer noopener nofollow"><FontAwesomeIcon icon={faFacebook} /></a></span>
                        <span className="insta-icon"><a href="https://www.instagram.com/florentpianet/?hl=fr" target="_blank" rel="noreferrer noopener nofollow" onClick={this.handleClickItem}><FontAwesomeIcon icon={faInstagram} /></a></span>
                        <span className="github-icon"><a href="https://github.com/Vaniom" target="_blank" onClick={this.handleClickItem} rel="noreferrer noopener nofollow"><FontAwesomeIcon icon={faGithub} /></a></span></div>
                </div>
                <div className="navbar-vertical">
                    <div className="nav-item">
                        <NavLink activeClassName="active" to="/projects">
                            Projets
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink activeClassName="active" to="/about">
                        À Propos
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink activeClassName="active" to="/tarifs">
                        Tarifs
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink activeClassName="active" to="/contact">
                        Contact
                        </NavLink>
                    </div>
                    <div className="social-icons">
                        <span className="facebook-icon"><a href="https://www.facebook.com/florentpianet.webdev" target="_blank" rel="noreferrer noopener nofollow"><FontAwesomeIcon icon={faFacebook} /></a></span>
                        <span className="insta-icon"><a href="https://www.instagram.com/florentpianet/?hl=fr" target="_blank" rel="noreferrer noopener nofollow"><FontAwesomeIcon icon={faInstagram} /></a></span>
                        <span className="github-icon"><a href="https://github.com/Vaniom" target="_blank" rel="noreferrer noopener nofollow"><FontAwesomeIcon icon={faGithub} /></a></span>
                    </div>
                </div>
            </div>
        )
    };
}

export default Navbar;