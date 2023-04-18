
// const liElement = document.getElementsByTagName("li");

// for (let index = 0; index<liElement.length; index++){
//     console.log(liElement[index].textContent)

// }

//console.log(liElement.length)


// declaração de arrays
let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
let nr3 = [...nr1,...nr2];

console.log(`Array-1 ${nr1}`);
console.log(`Array-2 ${nr2}`);
console.log(`Array-3 ${nr3}`);

//Listando um aray! Técnica especial
// nr3.forEach((itemDoArray) =>{
//     console.log(`Array-3 sendo listado ${itemDoArray}`);
// })

//Listando o array com MAP
nr3.map((numero,key)=>{
    console.log(`${(key+1)} - Itens do array - ${numero}`);
    
})

//convertando HTMLCollection em Array de forma indireta
const liElementHtml = document.getElementsByTagName("li");
const liElementArray = [...liElementHtml];

console.log(liElementHtml)

liElementArray.map((item,key)=>{
    if(item.textContent == "Item-39"){
    console.log(`${key+1} -${item.textContent}`)
    }    
})
