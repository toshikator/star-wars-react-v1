import React from 'react';
// import Hero from "./Hero";
// import Friends from "./Friends";
// import FarGalaxy from "./FarGalaxy";
import Home from "./Home";
// import aboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import {aboutMePage, contactPage, starWarsPage} from "../utils/constants";
import StarWarsContext from "../utils/starWarsContext";

const Main = (props) => {
    return(
        <StarWarsContext.consumer>
            {value=>{
                switch (props.page) {
                    case aboutMePage: return (
                        <AboutMe/>
                    );
                    case starWarsPage: return(
                        <StarWars/>
                    );
                    case contactPage: return (
                        <Contact/>
                    );
                    default: return( <Home/>);

                }

            }
            }
            }
        </StarWarsContext.consumer>
    )


};

export default Main;