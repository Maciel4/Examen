import { modeloLab_Com } from "../model/b.laboratorio.computo";

const test = () => {
    console.log("Funciona la conexion a Laboratorio_com")
}
export default test

modeloLab_Com.create({
    name: "A205",
    Equipos: 23,
    Area: "Desaarrollo de software"
})