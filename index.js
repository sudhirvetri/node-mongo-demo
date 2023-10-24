import mongoose from "mongoose";
import app from "./app.js";

(async () =>
{
    try
    {
        await mongoose.connect("mongodb://localhost:27017/gitsetup");
        console.log("DB connected");

        const onListening = () =>
        {
            console.log("Listerning to port 5000");
        }

        app.listen(5000, onListening)
    }
    catch (error)
    {
        console.error("Error :", error);
        throw error;

    }
})()
