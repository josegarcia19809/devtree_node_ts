import type {CorsOptions} from 'cors';

export const corsConfig: CorsOptions = {
    origin: function (origin, callback) {

        const whiteList = [process.env.FRONTEND_URL]

        if(process.argv[3] =="--api"){
            whiteList.push(undefined);
        }

        if (whiteList.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error(`Unable to connect to ${origin}`));
        }
    }
}