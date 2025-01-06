import UI from "./class/UI.js";
import Persona from './class/Persona.js';
import { db } from './data/db.js';

const adminPersona = new Persona();

const persona = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    ip_address: '192.168.0.1',
    gender: '',
    cuenta: {
        anio: '',
        saldo: '' 
    }
}

export function cargarDatosIniciales() {
    db.forEach(data => {
        adminPersona.agregarPersona(structuredClone(data));
    });
    const ui = new UI();
    ui.mostrarPersonas(adminPersona);
}

// Llamar a la función para cargar los datos al iniciar la aplicación
document.addEventListener('DOMContentLoaded', cargarDatosIniciales);

export function cargarPersona(e){
    if (e.target.name === 'anio' || e.target.name === 'saldo') {
        persona.cuenta[e.target.name] = e.target.value;
    } else {
        persona[e.target.name] = e.target.value;
    }
}

export function agregarPersona(e){
    e.preventDefault();
    const ui = new UI();
    const { first_name, last_name, email, gender, cuenta: { anio, saldo } } = persona;
    if(first_name === '' || last_name === '' || email === '' || gender === '' || anio === '' || saldo === ''){
        alert('Todos los campos son obligatorios');
        return;
    }
    persona.id = Date.now();
    adminPersona.agregarPersona(structuredClone(persona));
    ui.mostrarPersonas(adminPersona);
    ui.limpiarFormulario();
    limpiarPersona();
    alert('Persona agregada correctamente');

    console.log(adminPersona);
}

export function eliminarPersona(id){
    const ui = new UI();
    adminPersona.eliminarPersona(id);
    ui.mostrarPersonas(adminPersona);
}

function limpiarPersona(){
    persona.id = '';
    persona.first_name = '';
    persona.last_name = '';
    persona.email = '';
    persona.gender = '';
    persona.cuenta.anio = '';
    persona.cuenta.saldo = '';
}