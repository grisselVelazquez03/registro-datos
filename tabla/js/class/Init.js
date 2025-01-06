import { formulario, nombre, apellido, correo, saldo, masculino, femenino, anio } from '../selectors.js';
import { cargarPersona, agregarPersona } from '../function.js';

class Init{
    constructor(){
        this.init();
    }
    init(){
        formulario.addEventListener('submit', agregarPersona);
        nombre.addEventListener('input', cargarPersona);
        apellido.addEventListener('input', cargarPersona);
        correo.addEventListener('input', cargarPersona);
        saldo.addEventListener('input', cargarPersona);
        masculino.addEventListener('input', cargarPersona);
        femenino.addEventListener('input', cargarPersona);
        anio.addEventListener('input', cargarPersona);
    }
}

export default Init;

