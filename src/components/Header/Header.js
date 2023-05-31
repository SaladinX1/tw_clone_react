import React from "react";
import {Link} from "react-router-dom";


function Header() {
    return (

        <div>

            <nav className="headerTop">

                <ul className="listeMenu">

                    <li className="liensNav">
                        <Link className="lien" to="/">
                        <img src="{}" alt="logo twitch" className="logo"/> 
                        </Link>
                    </li>
                    <li className="liensNav">
                    <Link className="lien" to="/">
                        Top Games
                        </Link>
                    </li>
                    <li className="liensNav">
                    <Link className="lien" to="/top-streams">
                        Top Streams
                        </Link>
                    </li>

                    <li className="liensNav"> 
                        <form className="formSubmit">

                            <input type="text" className="inputRecherche"/>
                            <button type="submit">
                                <img src="" alt="" className="logoLoupe"/> 
                            </button>

                        </form>

                     </li>

                </ul>

            </nav>

            <div className="menuResBtn">
                <img src="" alt="icone menu responsive" className="menuIco"/>
            </div>

        </div>
    ) 

}

export default Header