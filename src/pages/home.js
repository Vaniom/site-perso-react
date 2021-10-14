import React from "react";
import "./pages.css";
import home1 from "../assets/img/home-1.png";
import anmo from "../assets/img/anmo-massage-therapie-1024x583.png";

class Home extends React.Component {
    render() {
        return(
            <div className="page-content">
                <div className="main-content">
                    <img className="background-img home1" src={home1} />
                    <img className="anmo" src={anmo} />
                    <p>Je suis développeur web, j’accompagne les professionnels, associations et collectivités à renforcer leur présence en ligne en concevant et développant des sites web personnalisés grâce au CMS WordPress.</p>
                    <p>Je suis développeur web, j’accompagne les professionnels, associations et collectivités à renforcer leur présence en ligne en concevant et développant des sites web personnalisés grâce au CMS WordPress.</p>
                    <p>Je suis développeur web, j’accompagne les professionnels, associations et collectivités à renforcer leur présence en ligne en concevant et développant des sites web personnalisés grâce au CMS WordPress.</p>
                    <p>Je suis développeur web, j’accompagne les professionnels, associations et collectivités à renforcer leur présence en ligne en concevant et développant des sites web personnalisés grâce au CMS WordPress.</p>
                </div>
            </div>
        )
    }
}

export default Home