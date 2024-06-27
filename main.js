//?Resolver con (pop, push, shift, unshift)

//! -----------------------------------------------------------------------------------------------------------------------------------------------------------------
console.warn( 'Inventario de Frutas: Crea un array llamado frutas con al menos 5 frutas. Utiliza pop para eliminar la última fruta y mostrarla por consola. Luego, usa push para agregar "mango" al final del array.')

let frutas =['pera', 'naranja', 'manzana', 'mandarina', 'uva'];
console.log(frutas)

let frutaEliminada = frutas.pop();
console.log(frutaEliminada);
console.log(frutas);

let FrutaAgregada = frutas.push('mango')
console.log(frutas)


console.warn('------------------------------------------------')


//! -----------------------------------------------------------------------------------------------------------------------------------------------------------------
console.warn( '2. Lista de Tareas: Declara un array tareas con 3 tareas pendientes. Usa shift para eliminar la primera tarea y mostrarla por consola como "Tarea completada".  Añade una nueva tarea al principio del array con unshift.')

let tareasPendientes = ['1:realizar desafio 9', '2:realizar etapa 2 integrador', '3:realizar desafio 8'];
console.log(`tareas pendientes: ${tareasPendientes}`);

let tareaRealizada = tareasPendientes.shift();
console.log(`tarea Completada = ${tareaRealizada}`);

let tareaNueva = tareasPendientes.unshift('1-Realizar desafio 10');
console.log(`tarea Nueva = ${tareasPendientes}`);


console.warn('------------------------------------------------');


console.warn( '3. Fila de Espera: Simula una fila de espera con un array clientes.  Añade 2 nuevos clientes al final de la fila con push.  Atiende al primer cliente usando shift y muestra su nombre por consola.')

let filaDeEspera = ['cliente 1', 'cliente 2', 'cliente 3' , 'cliente 4'];
console.log(`en fila de espera hay estos clientes= ${filaDeEspera}`);

const dosClientesNuevos = filaDeEspera.push('cliente 5', 'cliente 6');
console.log(`${filaDeEspera}`);

const atiendoPrimerCLiente = filaDeEspera.shift();
console.log(`${filaDeEspera}`);
console.log(`primer cliente atendido: ${atiendoPrimerCLiente}`);


console.warn('------------------------------------------------');


console.warn( '4. Rotación de Elementos: Crea un array numeros con 5 números. Utiliza pop para sacar el último número y luego unshift para agregarlo al principio. Repite este proceso 3 veces y observa cómo cambian las posiciones.')

let arrayNumeros = [222, 33, 555 , 1254, 62541];
console.log(arrayNumeros);
let rotacion1 = arrayNumeros.pop();
let rotacion2 = arrayNumeros.unshift(rotacion1);
console.log(arrayNumeros);

let rotacion3 = arrayNumeros.pop();
let rotacion4 = arrayNumeros.unshift(rotacion3);
console.log(arrayNumeros);

let rotacion5 = arrayNumeros.pop();
let rotacion6 = arrayNumeros.unshift(rotacion5);
console.log(arrayNumeros);


console.warn('------------------------------------------------');


console.warn( '5. Carrito de Compras:  Declara un array carrito vacío. Permite al usuario agregar 3 productos al carrito con push. Luego, dale la opción de eliminar el último producto agregado usando pop.')

let carritoCompra  = []

function agregarProducto ( producto) {
    if (carritoCompra.length < 3){
        carritoCompra.push (producto)
        console.log(` ${producto} agregado al carrito`);

    }else {
        console.log(`carrito lleno, no puedes agregar mas productos`)
    }
}

function eliminarUltimoProducto()
{
    if (carritoCompra.length === 0){
        console.log("el carrito esta vacio, no hay productos para eliminar")
    } else {
        let productoEliminado = carritoCompra.pop();
        console.log(`Se elimino el producto ${productoEliminado} de el carrito de compras`)
    }
        
}

agregarProducto('producto 1');
agregarProducto('producto 2');
agregarProducto('producto 3');
agregarProducto('producto 4');

console.log(`el carrito actual tiene ${carritoCompra}`)

eliminarUltimoProducto();

console.log(`el carrito actual tiene ${carritoCompra}`)

//Resolver según corresponda y según lo indicado.

console.warn('------------------------------------------------');


console.warn( '6. (map) Doblar Valores:  Dado un array valores con números, crea un nuevo array dobles donde cada elemento sea el doble del valor original usando map.')

const valores = [15, 20, 35, 40, 50];
function dobles(valor){
    return valor * 2;

}

const duplicar = valores.map(dobles)
 
console.log(duplicar)

const valores2 = [15, 20, 35, 40, 50];
const duplicar2 = valores2.map(valor => valor * 2)
console.log(duplicar2)



console.warn('------------------------------------------------');


console.warn( '7. (map) Nombres en Mayúsculas: Convierte todos los nombres de un array nombres a mayúsculas utilizando map.')

const nombres = ["jesus", "Juan", "Pedro", "Maria"];
console.log(`nombres en minisculas ${nombres}`)
const nombresMayusculas = nombres.map(nombreFuncion => nombreFuncion.toUpperCase());

console.log(`nombres en Mayusculas ${nombresMayusculas}`)

console.warn('-----------------------------------------------');


console.warn( '8. (map) Precios con IVA:  Tienes un array precios con precios sin IVA. Calcula un nuevo array precios Con IVA donde cada precio incluya un IVA del 21%.')

let preciosSinIva = [1500, 2300, 5000, 1200 , 6000];
const iva = 0.21;
const precioConIva = preciosSinIva.map(precio => precio * (1 + iva));

console.log(precioConIva);

console.warn('-----------------------------------------------');

console.warn( 'map) Cuadrados de Números:  Crea un array numeros del 1 al 10. Obtén un nuevo array cuadrados donde cada elemento sea el cuadrado del número original.')

let numerosArray = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10]
console.log(numerosArray)
let numeroAlCuadrado = numerosArray.map ( cuadrado => cuadrado ** 2)
console.log(numeroAlCuadrado)

console.warn('-----------------------------------------------');

console.warn( '10. (filter) Números Pares:  Filtra un array numeros para obtener solo los números pares.')

let arrayNumerosParImpar = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,]
console.log(`el array con pares e impares es ${arrayNumerosParImpar}`)
const numerosPares =  arrayNumerosParImpar.filter(numero => numero % 2 === 0);
console.log(` solo los  numeros pares del array son ${numerosPares}`)

console.warn('-----------------------------------------------');

console.warn( '11. (filter) Palabras Largas:  Encuentra las palabras de más de 5 letras en un array palabras.')

const palabras = ['perros', 'bote', 'animal', 'gatos', 'pera']
console.log(`todas las palabras: ${palabras}`)

const palabras5Letras = palabras.filter(palabra => palabra.length >= 5);
console.log(`estas son las palabras con 5 letras : ${palabras5Letras}`)

console.warn('-----------------------------------------------');

console.warn( '12. (filter) Productos en Oferta:  Tienes un array productos con objetos que tienen propiedades nombre y precio. Filtra los productos que estén en oferta (precio menor a $500).')

let ProductosEnOferta = [
    {nombre:'camisa', precio:2000, propiedades: ['larga', 'blanca', 'talla m', ],},
    {nombre:'pantalon', precio:499, propiedades: ['largo', 'azul', 'talla 30',],},
    {nombre:'zapato', precio:489, propiedades: ['suela plana', 'talla 42', 'marron',],},

];
console.log(ProductosEnOferta)
 let oferta = ProductosEnOferta.filter(ofertaMenos500 => ofertaMenos500.precio < 500 )
 console.log(oferta)

console.warn('-----------------------------------------------');

console.warn( '13. (filter) Estudiantes Aprobados:  Filtra un array estudiantes (objetos con propiedades nombre y nota) para obtener solo a los estudiantes con notas mayores o iguales a 7.')

const estudiantes = [
    {nombre:'juan', nota:7,    },
    {nombre:'pedro', nota:8,    },
    {nombre:'jose', nota:6,    },
    {nombre:'jesus', nota:8,    },
    {nombre:'maria', nota:2,    },
]
console.log(estudiantes)
const notas = estudiantes.filter(nota => nota.nota >= 7)
console.log(notas)

console.warn('-----------------------------------------------');

console.warn( '14. (filter) Tareas Completadas:  Dado un array tareas (objetos con propiedades descripcion y completada), filtra las tareas que estén marcadas como completadas.')

const tareas = [
    {descripcion:'tarea 1', estatus:'completa',},
    {descripcion:'tarea 2', estatus:'incompleta',},
    {descripcion:'tarea 3', estatus:'completa',},
    {descripcion:'tarea 4', estatus:'incompleta',},
];
console.log(tareas)
const filtroCompletas = tareas.filter (completa => completa.estatus === 'completa')
console.log(filtroCompletas)

console.warn('-----------------------------------------------');

console.warn( '15. (forEach) Mostrar Lista: Imprime por consola cada elemento de un array nombres utilizando forEach.')

const arrayNombres = ['juan', 'maria', 'mateo', 'vicente', 'pedro']
arrayNombres.forEach(nombre => {
    console.log(nombre);
})

console.warn('-----------------------------------------------');

console.warn( '16. (forEach) Sumar Edades:  Calcula la suma de las edades de un array edades usando forEach.')

const edades =  [30, 15, 10, 5, 10]
console.log(edades)
let sumaEdades = 0;
edades.forEach(suma =>{
    sumaEdades += suma;
})

console.log(sumaEdades)




console.warn('-----------------------------------------------');

console.warn( '17. (forEach) Aplicar Descuento:  Tienes un array productos (objetos con nombre y precio). Aplica un descuento del 10% a cada producto usando forEach.')

let productos = [
    { nombre: 'camisa', precio: 2000 },
    { nombre: 'pantalon', precio: 499 },
    { nombre: 'zapato', precio: 489 }
];



let descuento = 0.1;

productos.forEach(producto => {
    const rebaja = producto.precio * descuento; 
    producto.precio -= rebaja;
});

console.log('Productos después del descuento:');
console.log(productos);

console.warn('-----------------------------------------------');

console.warn( '18. (forEach) Enviar Invitaciones:  Simula el envío de invitaciones por correo electrónico a cada persona de un array invitados utilizando forEach (puedes imprimir un mensaje de "Invitación enviada a [nombre]" por consola).')

const invitados = ['Juan', 'María', 'Pedro', 'Ana', 'Luisa'];

invitados.forEach(nombre => {
    console.log(`Invitación enviada a ${nombre}`);
});