import { modeloAlumnos } from "../model/a.model";

const test = () => {
    console.log("Funciona la conexion a Alumnos")
}
export default test

modeloAlumnos.create({
    name: "Edwin Maciel Esparza Esqueda",
    ID:2927347849,
    Area: "Desaarrollo de software"
})