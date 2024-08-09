import { modeloLab } from "../model/b.laboratorio.model";

const test = () => {
    console.log("Funciona la conexion a Laboratorio")
}
export default test

modeloLab.create({
    name: "B203",
    Equipos: 14,
    Area: "Nanotecnologia"
})