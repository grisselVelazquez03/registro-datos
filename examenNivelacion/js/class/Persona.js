class Persona{
    constructor(){
        this.personas = [];
    }

    agregarPersona(persona){
        this.personas = [...this.personas, persona];
    }

    eliminarPersona(id){
        this.personas = this.personas.filter(persona => persona.id !== id);
    }
}

export default Persona;