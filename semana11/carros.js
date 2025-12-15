localStorage.setItem('autos',JSON.stringify( [
	{marca: 'BMW', modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
	{marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
	{marca: 'Ford', modelo: 'Mustang', year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
	{marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
	{marca: 'BMW', modelo: 'Serie 5', year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
	{marca: 'Mercedes Benz', modelo: 'Clase C', year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
	{marca: 'Chevrolet', modelo: 'Camaro', year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
	{marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
	{marca: 'Dodge', modelo: 'Challenger', year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
	{marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
	{marca: 'Dodge', modelo: 'Challenger', year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
	{marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
	{marca: 'BMW', modelo: 'Serie 5', year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
	{marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
	{marca: 'Dodge', modelo: 'Challenger', year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
	{marca: 'BMW', modelo: 'Serie 3', year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
	{marca: 'BMW', modelo: 'Serie 5', year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
	{marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
	{marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
]));

const autos = JSON.parse(localStorage.getItem('autos'));

//autos superan 2012
const mayor2012 = autos.filter(auto => auto.year > 2012);
console.log("los autos que superan a 2012 son:",mayor2012);

//Autos entre los años 2015 y 2018
const entre2015y2018 = autos.filter(auto => auto.year >= 2015 && auto.year <= 2018);
console.log("los autos entre 2015 y 2018 son:",entre2015y2018);

//Autos modelo Clase C
const claseC = autos.filter(auto => auto.modelo === 'Clase C');
console.log("los autos de modelos clase C son:",claseC);

//Autos de la marca Audi y año mayor a 2012
const audiMayor2012 = autos.filter(auto => auto.marca === 'Audi' && auto.year > 2012);
console.log("los autos de la marca Audi y año mayor a 2012 son:", audiMayor2012);

//Promedio total de precios
const promedioTotal = (autos.reduce((sum, auto) => sum + auto.precio, 0) / autos.length).toFixed(2);

console.log("El promedio total de los precios es:", promedioTotal);

//Promedio de precios de autos con transmisión manual
const manuales = autos.filter(auto => auto.transmision === 'manual');
const promedioManuales = manuales.reduce((sum, auto) => sum + auto.precio, 0) / manuales.length;
console.log("el promedio manual de los autos con transmisión manual es:", promedioManuales);

//Autos que superen el precio de 45000
const mayor45000 = autos.filter(auto => auto.precio > 45000);
console.log("los autos que superan el precio de 45000 son:",mayor45000);




