import { modeloProfes } from "../model/a.profes.model";

const test = () => {
    console.log("Funciona la conexion a Profesores")
}
export default test

modeloProfes.create({
    name: "Jorge Wong",
    ID:27063257,
    Area: "Redes"
})