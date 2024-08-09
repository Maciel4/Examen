import { modeloclub } from "../model/c.club.model";

const test = () => {
    console.log("Funciona la conexion a Profes")
}
export default test

modeloclub.create({
    name: "Ajedres",
    Num_Alumnos:32,
    Dias: 24
})