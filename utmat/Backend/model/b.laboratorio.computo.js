import { Schema, model } from "mongoose";

export const esquemaLab_Com = new Schema({
    name:{ type:String},
    Equipos:{ type: Number},
    Area:{type: String}
})

export const modeloLab_Com = new model('Laboratorio_com', esquemaLab_Com)