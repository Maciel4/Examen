import { Schema, model } from "mongoose";

export const esquemaAlumnos = new Schema({
    name:{ type:String},
    ID:{ type: Number},
    Area:{type: String}
})

export const modeloAlumnos = new model('Alumnos utmat', esquemaAlumnos)