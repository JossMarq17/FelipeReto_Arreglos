var carreritas = ["Lucia", "Roberto", "María", "Jesús", "Andrea", "José"];

console.log(carreritas);
carreritas.splice(4,1); //Quitamos a Andrea
console.log(carreritas);

carreritas.shift();
carreritas.shift();
carreritas.unshift("Andrea");
carreritas.unshift("Roberto");
carreritas.unshift("Lucia");
console.log(carreritas);

carreritas.pop();
console.log(carreritas);

carreritas.shift();
console.log(carreritas);

carreritas.unshift("Armando");
carreritas.unshift("Fernanda");
carreritas.unshift("Cristobal");
carreritas.unshift("Lucia");
console.log(carreritas);

carreritas.unshift("Federico");
console.log(carreritas);

carreritas.forEach((element, index) =>{
    console.log(element,index);
});