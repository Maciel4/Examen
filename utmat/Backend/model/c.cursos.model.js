import { Schema, model } from "mongoose";

export const esquemacursos = new Schema({
    name:{ type:String},
    Num_Alumnos:{ type: Number},
    Dias:{type: Number}
})

export const modelocursos = new model('Cursos', esquemacursos)