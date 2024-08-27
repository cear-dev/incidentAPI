import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
    tittle:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    lat:{
        type: Number,
        require: true
    },
    lng:{
        type: Number,
        require: true
    }
});

export const incidentModel = mongoose.model('Incident',incidentSchema)