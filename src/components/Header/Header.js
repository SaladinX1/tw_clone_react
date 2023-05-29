import React from "react";


function Header() {
    return (

        <div>

            <nav className="headerTop">

                <ul className="listeMenu">

                    <li className="liensNav">
                        <img src="{}" alt="logo twitch" className="logo"/> 
                    </li>
                    <li className="liensNav">
                        Top Games
                    </li>
                    <li className="liensNav">
                        Top Streams
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