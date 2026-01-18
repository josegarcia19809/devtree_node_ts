import type { CorsOptions } from 'cors';

export const corsConfig: CorsOptions = {
    origin: function(origin, callback) {
        if(origin === process.env.FRONTEND_URL) {
            callback(null, true);
        }else{
            callback(new Error(`Unable to connect to ${origin}`));
        }
    }
}