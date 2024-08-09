import { modelocursos } from "../model/c.cursos.model";

const test = () => {
    console.log("Funciona la conexion a cursos")
}
export default test

modelocursos.create({
    name: "Motoko",
    Num_Alumnos:23,
    Dias: 12
})