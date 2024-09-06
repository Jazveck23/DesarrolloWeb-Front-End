const carro = {
    id: 1,
    nombre: 'La Ferrari',
    date: new Date(),
    marca: { 
        id: 1,
        nombre: 'Ferrari',
        ubicacion: 'Europa',
        age: 100
    },
    costo: 100000,

    saludo: function(){
        return `Hola ${this.marca.nombre} ${this.nombre}`;
    }
}


console.log(carro)

let salu = carro.saludo()
console.log(salu);

