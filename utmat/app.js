import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import testAlumnos from './Backend/controller/alumnos.controller.js';
import testClub from './Backend/controller/club.controller.js';
import testCursos from './Backend/controller/cursos.controller.js';
import testLaboratorio from './Backend/controller/Laboratorio.controller.js';
import testLaboratorio_com from './Backend/controller/Laboratorio.computo.controller.js';
import testProfes from './Backend/controller/Profes.controller.js';

dotenv.config()
mongoose.connect(process.env.url_utmat)

.then(()=> {
    console.log("Conexion establecida de manera correcta")
})
.catch((error) => {
    console.log("Conexion fallida",error)
})

const app =express()
app.use(cors())

app.listen(4500,()=>{
    console.log("El servidor se encuentra trabajando de manera correcta")
})

testAlumnos()
testClub()
testCursos()
testLaboratorio()
testLaboratorio_com()
testProfes()
