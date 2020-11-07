
export class User {

    constructor(_id = '', nombre = '', apellido = '', cargo = '', correo='', password = '') {
        this._id = _id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.correo = correo;
        this.password = password;
        
    }

    _id: string;
    nombre: string;
    apellido: string;
    cargo: string;
    correo: string;
    password: string;

}