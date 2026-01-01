import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log("✅ MongoDB conectado"))
            .catch(err => console.error("❌ Error:", err));
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

