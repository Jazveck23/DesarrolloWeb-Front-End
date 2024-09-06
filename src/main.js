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
    inventarios: [
        {
            id:1,
            color: 'Azul',
            cantidad: 5,
            precio: 1100000000
        },
        {
            id:1,
            color: 'Rojo',
            cantidad: 6,
            precio: 1133000000
        },
        {
            id:1,
            color: 'Amarillo',
            cantidad: 8,
            precio: 1133000000
        }
    ],
    totalInventario: function(){
        let total = 0;
        this.inventarios.forEach(inventario => {
            total = total +inventario.precio*inventario.precio;
        })
    },
    costo: 100000,

    saludo: function(){
        return `Hola ${this.marca.nombre} ${this.nombre}`;
    }
}


console.log(carro)

let salu = carro.saludo()
console.log(salu);

console.log(carro.totalInventario())

