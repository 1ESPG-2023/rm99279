const liElement = document.getElementsByTagName("li");
console.log(liElement)

for (let index = 0; index< liElement.length ; index ++) {
    console.log(liElement[index].textContent)
}
//console .log(liElement.length)
let nr1 = [1,2,3,4,5]
let nr2 = [6,7,8,9,10]
let nr3 = [nr1, nr2]

console.log(`Array-1 ${nr1}`);
console.log(`Array-1 ${nr2}`);
console.log(`Array-1 ${nr3}`);

//Listando um Array! Técnica especial
nr3.forEach((itemDoArray)=>){
    console.log(`Array-3 sendo listado${ItemdoArray}`);

}