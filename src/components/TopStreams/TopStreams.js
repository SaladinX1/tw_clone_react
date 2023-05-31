import React, {useEffect, useState} from "react";
import api from '../../api'




function TopStreams() {


    const [channels, setChannels] = useState([]); 

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

            let newUrl = stream.thumbnail_url.replace("{width}", "320px").replace("{height}", "180px");
            stream.thumbnail_url = newUrl;

            return stream;
          })

          setChannels(finalArray);
          
        }

        fetchData();

    }, [])

    return (
        <div>
            <h1 className="titreGames">Streams les plus populaires</h1>
            <div className="flexAccueil">
                {channels.map((channel, index) => (
                    <div key={index} className="carteStream">
                        <img src={channel.thumbnail_url} className="imgCarte" alt="jeu" />
                        <div className="cardBodyStream">
                            <h5 className="titreCarteStream">{channel.user_name}</h5>
                            <p className="txtStream">Jeu : {channel.gameName}</p>
                            <p className="txtStream viewers">Viewers : {channel.viewer_count}</p>
                            <div className="btnCarte">Regarder {channel.user_name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}



export default TopStreams;