import axios from "axios";

let api = axios.create({
    headers: {
        'Client-ID' : ``,
        "Authorization" : `Bearer `
    }
});

/* 
REDIRECT = 'http://127.0.0.1/'

LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=gzs7so8iridcqoeb06gt2v0w2myit9&redirect_uri=http://127.0.0.1/&response_type=token
*/

export default api;