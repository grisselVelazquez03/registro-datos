import UI from './class/UI.js'; 

const ui = new UI();
ui.createForm();

export const formulario = document.querySelector('#formulario');
export const nombre = document.querySelector('#first_name');
export const apellido = document.querySelector('#last_name');
export const correo = document.querySelector('#email');
export const saldo = document.querySelector('#saldo');
export const masculino = document.querySelector('#masculino');
export const femenino = document.querySelector('#femenino');
export const anio = document.querySelector('#anio');
export const personaListado = document.querySelector('#persons-list');
