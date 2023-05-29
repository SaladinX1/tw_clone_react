import axios from "axios";

let api = axios.create({
    headers: {
        'Client-ID' : 'gzs7so8iridcqoeb06gt2v0w2myit9',
        "Authorization" : "Bearer vvxme64jscfyoqbdkt8rnhqsxj0qhq"
    }
});

/* 

CLIENT_ID = gzs7so8iridcqoeb06gt2v0w2myit9
TOKEN = vvxme64jscfyoqbdkt8rnhqsxj0qhq
REDIRECT = 'http://127.0.0.1/'

LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=gzs7so8iridcqoeb06gt2v0w2myit9&redirect_uri=http://127.0.0.1/&response_type=token



*/




export default api;