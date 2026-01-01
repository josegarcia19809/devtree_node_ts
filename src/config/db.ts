import mongoose from "mongoose";
import colors from "colors";


export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log(colors.bgMagenta.bold("✅ MongoDB conectado")))
            .catch(err => console.error(colors.bgRed.white.bold(err.message)));
    } catch (err) {
        console.log(colors.bgRed.white.bold(err.message))
        process.exit(1);
    }
}

