import React, {useEffect, useState, Fragment} from "react";
import api from '../../api';

function Sidebar() {

        const [topStreams, setTopStream] = useState([]);

        useEffect(() => {
            const fetchData = async () => {

                const result = await api.get("https://api.twitch.tv/helix/streams");

                let dataArray = result.data.data;


                 let gameIDs = dataArray.map(stream => {
                    return stream.game_id;
                 });

                 let userIDs = dataArray.map(stream => {
                    return stream.game_id;
                 });
               //  console.log(gameIDs, userIDs);

               // Création des URLs personalisés

               let baseUrlGames = "https://api.twitch.tv/helix/games?";
               let baseUrlUsers = "https://api.twitch.tv/helix/users?";

                 let queryParamsGame = "";
                 let queryParamsUsers = "";

                 gameIDs.map(id => {
                    return(queryParamsGame = queryParamsGame + `id=${id}&`);
                 })

                 userIDs.map(id => {
                    return(queryParamsUsers = queryParamsUsers + `id=${id}&`);
                 })

                 // url final 

                 let urlFinalGames = baseUrlGames + queryParamsGame;
                 let urlFinalUsers = baseUrlUsers + queryParamsUsers;

                // console.log(urlFinalGames, urlFinalUsers);
                // console.log(dataArray);
                // appel

                let gamesNames = await api.get(urlFinalGames);
                let getUsers = await api.get(urlFinalUsers);

                let gamesNameArray = gamesNames.data.data;
                let arrayUsers = getUsers.data.data;
             //   console.log(arrayUsers);

              //  console.log(arrayUsers, gamesNameArray);

              // Création du tableau final

              let finalArray = dataArray.map(stream => {
                stream.gameName = "";
                stream.truePic = "";
                stream.login = "";

                gamesNameArray.forEach(name => {
                    arrayUsers.forEach(user => {

                        if(stream.user_id === user.id && stream.game_id === name.id) {
                            
                            stream.truePic = user.profile_image_url;
                            stream.gameName = name.name;
                            stream.login = user.login;

                        }
                    })
                });
                return stream;
              })

              setTopStream(finalArray.slice(0,6));
              

            }

            fetchData();

        }, [])

        console.log(topStreams);

    return (
        <>
        <div className="sidebar">
            <h2 className="titreSidebar"> Chaînes recommandées</h2>
            <ul className="listeStream">

                {topStreams.map((stream, index) => {

                  return <li key={index} className="containerFlexSideBar">

                       <img className="profilePicRonde" src={stream.truePic} alt="logo user"/>

                       <div className="streamUser">{stream.user_name}</div>

                       <div className="viewerRight"> 
                       
                       <div className="pointRouge"></div>
                       <div>{stream.viewer_count}</div>

                       </div>

                       <div className="gameNameSidebar">{stream.game_name}</div>


                    </li>;
                    
                })}


            </ul>
        </div>
        </>
    )
}

export default Sidebar;