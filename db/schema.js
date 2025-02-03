import database from "./database";
import mongoose from "mongoose";

// Ensure the database connection is established
database._connect();

const UrlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortendUrl: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now   
    }
});

// Check if the model is already defined before creating it
const Url = mongoose.models.Url || mongoose.model("Url", UrlSchema);

export { Url };
