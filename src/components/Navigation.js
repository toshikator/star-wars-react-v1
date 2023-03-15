import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import StarWarsContext from "../utils/starWarsContext";

const Navigation = (props) => {
    return (
        <StarWarsContext.Consumer>
            {value=>
                <nav>
                    <ul className="position-fixed list-unstyled d-inline">
                        <li onClick={()=>{value.changePage(homePage)}} className="border border-light rounded-pill btn btn-danger">Home</li>
                        <li onClick={()=>{value.changePage(aboutMePage)}} className="border border-light rounded-pill btn btn-danger">About me</li>
                        <li onClick={()=>{value.changePage(starWarsPage)}} className="border border-light rounded-pill btn btn-danger">Star wars</li>
                        <li onClick={()=>{value.changePage(contactPage)}} className="border border-light rounded-pill btn btn-danger">Contact</li>
                    </ul>
                </nav>
            }

        </StarWarsContext.Consumer>

    );
};

export default Navigation;