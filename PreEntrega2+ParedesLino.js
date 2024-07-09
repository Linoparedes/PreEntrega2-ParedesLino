const alimentos = [
    {id:1, nombre:"Cat Chow", precio:4500},
    {id:2, nombre:"Vital Can", precio:4200},
    {id:3, nombre:"Excelent", precio:4000},
    {id:4, nombre:"Agility", precio:3800},
    {id:5, nombre:"Purina", precio:2000},
];

class Productos {
    constructor(productos) {
        this.items = productos;
    }

    agregarProducto(nombreP, precioP) {
        const producto = {id:this.generarId(), nombre:nombreP, precio:precioP};
        this.items.push(producto);
        console.log("Producto agregado!");
    }

    buscarProducto(id) {
        return this.items.find(item => item.id == id)
    }

    obtenerProductos() {
        return this.items;
    }

    listarProductos() {
        let salida = "";

        for (const producto of this.items) {
            salida += `${producto.id} - ${producto.nombre} $${producto.precio}\n`;
        }

        alert(salida);
    }

    totalProductos() {
        return this.items.length;
    }

    generarId() {
        let max = 0;

        this.items.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return max + 1;
    }

    eliminarProducto(id) {
        let pos = this.items.findIndex(item => item.id == id); 
        this.items.splice(pos, 1);        
        console.log("Se eliminó el Producto: #" + id);
    }
}


const catalogo = new Productos(alimentos)

let nombreProducto = prompt("Ingrese el Nombre del Alimento Que Desea:");
let precioProducto = parseFloat(prompt("Ingrese el Precio del Producto:"));
catalogo.agregarProducto(nombreProducto, precioProducto);

catalogo.eliminarProducto(3);

console.log(catalogo.obtenerProductos());

catalogo.listarProductos();

console.log("Total Productos: " + catalogo.totalProductos());
