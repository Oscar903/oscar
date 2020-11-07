export class Ptient {

    constructor(_id = '', nombre = '', apellido = '', fecha = '', tipoConsulta='', doctor= '') {
        this._id = _id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha = fecha;
        this.tipoConsulta = tipoConsulta;
        this.doctor = doctor;
       
        
    }

    _id: string;
    nombre: string;
    apellido: string;
    fecha: string;
    tipoConsulta: string;
    doctor: string;

}