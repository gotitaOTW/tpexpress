class Alumno {
    constructor(nombre, dni, edad) {
      this.nombre = nombre;
      this.dni = dni;
      this.edad = edad;
    }
    
    toString() {
      return `nombre=${this.nombre}, DNI=${this.dni}, edad=${this.edad}`;
    }
  }

export default Alumno