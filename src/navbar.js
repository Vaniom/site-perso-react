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
            <div className="header-wrapper">
                <div className="logo-container">
                    <div>
                        <img className="logo-img" src={logo} alt="logo" />
                    </div>
                    <Link to="/">
                    <div className="logo-text-flex-container">
                        <span className="logo-text">Florent PIANET</span>
                        <span className="logo-text-line-2">Développement Web</span>
                    </div>
                    </Link>
                </div>
                <div className="navbar-vertical">
                    <div className="nav-item">
                        <Link to="/projects">
                            Projets
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/about">
                        À Propos
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/tarifs">
                        Tarifs
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/contact">
                        Contact
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;