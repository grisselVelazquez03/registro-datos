import { personaListado } from '../selectors.js';
import { eliminarPersona } from '../function.js';

class UI {
    createForm() {
        // Crear el formulario
        const form = document.createElement('form');
        form.id = 'formulario';

        // Crear el campo de nombre
        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Nombre: ';
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = 'first_name';
        nameInput.id = 'first_name';
        form.appendChild(nameLabel);
        form.appendChild(nameInput);

        // Crear el campo de apellidos
        const apellidoLabel = document.createElement('label');
        apellidoLabel.textContent = 'Apellidos: ';
        const apellidoInput = document.createElement('input');
        apellidoInput.type = 'text';
        apellidoInput.name = 'last_name';
        apellidoInput.id = 'last_name';
        form.appendChild(apellidoLabel);
        form.appendChild(apellidoInput);

        // Crear el campo de correo
        const correoLabel = document.createElement('label');
        correoLabel.textContent = 'Correo: ';
        const correoInput = document.createElement('input');
        correoInput.type = 'email';
        correoInput.name = 'email';
        correoInput.id = 'email';
        form.appendChild(correoLabel);
        form.appendChild(correoInput);

        // Crear el campo de género
        const generoLabel = document.createElement('label');
        generoLabel.textContent = 'Género: ';
        form.appendChild(generoLabel);
        const generoDiv = document.createElement('div');
        generoDiv.classList.add('radio-container');
        const masculinoInput = document.createElement('input');
        masculinoInput.type = 'radio';
        masculinoInput.name = 'gender';
        masculinoInput.value = 'Male';
        masculinoInput.id = 'masculino';
        const masculinoLabel = document.createElement('label');
        masculinoLabel.textContent = 'Masculino';
        masculinoLabel.setAttribute('for', 'masculino');
        const femeninoInput = document.createElement('input');
        femeninoInput.type = 'radio';
        femeninoInput.name = 'gender';
        femeninoInput.value = 'Female';
        femeninoInput.id = 'femenino';
        const femeninoLabel = document.createElement('label');
        femeninoLabel.textContent = 'Femenino';
        femeninoLabel.setAttribute('for', 'femenino');
        generoDiv.appendChild(masculinoInput);
        generoDiv.appendChild(masculinoLabel);
        generoDiv.appendChild(femeninoInput);
        generoDiv.appendChild(femeninoLabel);
        form.appendChild(generoDiv);

        // Crear el campo del año
        const anoLabel = document.createElement('label');
        anoLabel.textContent = 'Año: ';
        const anoSelect = document.createElement('select');
        anoSelect.name = 'anio';
        anoSelect.id = 'anio';
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Seleccione';
        anoSelect.appendChild(option);
        for (let i = 2000; i <= 2024; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            anoSelect.appendChild(option);
        }
        form.appendChild(anoLabel);
        form.appendChild(anoSelect);

        // Crear el campo de saldo
        const saldoLabel = document.createElement('label');
        saldoLabel.textContent = 'Saldo: ';
        const saldoInput = document.createElement('input');
        saldoInput.type = 'number';
        saldoInput.name = 'saldo';
        saldoInput.id = 'saldo';
        form.appendChild(saldoLabel);
        form.appendChild(saldoInput);

        // Botón de registrar
        const submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = 'Registrar';
        form.appendChild(submit);

        // Añadir el formulario al contenedor
        document.getElementById('form-container').appendChild(form);
    }

    mostrarPersonas({ personas }) {
        this.limpiarContenedor();
        const table = document.createElement('table');
        table.classList.add('tabla-personas');
        
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['ID', 'Nombre', 'Apellidos', 'Correo', 'Género', 'Año', 'Saldo', 'Opciones'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        const tbody = document.createElement('tbody');
        personas.forEach(persona => {
            const { id, first_name, last_name, email, gender, cuenta: { anio, saldo } } = persona;
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${id}</td>
                <td>${first_name}</td>
                <td>${last_name}</td>
                <td>${email}</td>
                <td>${gender}</td>
                <td>${anio}</td>
                <td>${saldo}</td>
            `;

            const optionsCell = document.createElement('td');
            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('options');

            const eliminarBtn = document.createElement('button');
            eliminarBtn.classList.add('btn', 'btn-danger');
            eliminarBtn.innerText = "Eliminar";
            eliminarBtn.onclick = () => eliminarPersona(id);

            optionsDiv.appendChild(eliminarBtn);
            optionsCell.appendChild(optionsDiv);

            row.appendChild(optionsCell);
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        personaListado.appendChild(table);
    }

    limpiarFormulario() {
        document.getElementById('formulario').reset();
    }

    limpiarContenedor() {
        if (personaListado.firstChild) {
            while (personaListado.firstChild) {
                personaListado.removeChild(personaListado.firstChild);
            }
        }
    }
}

export default UI;