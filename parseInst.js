// const collection = document.getElementsByClassName('_ab8y _ab94')
// for (let i = 0; i < collection.length; i++) {
//   const atr = `https://www.instagram.com/${collection.item(i).innerText}`
//     console.log(atr)
// }


// const func = () => {}
// func()


// function func2 () {} //decloration

// const fun3 = function(){} //expretion



// const SumLength = (arr) => arr.reduce( (a, i ) => i.text.length + a, 0)
// console.log(SumLength(array))


// function zam (a){
//   return function (b){
//     return function (c){
//       return a + b + c
//     }
//   }
// }

// console.log( zam(1)(2)(3) );


// console.log(a)
// let a  = 10;

//Создать новый метод findFive для String.
//Будет проверять есть ли 5 в строке и возвращать boolean;

// String.prototype.findFive = function (){ return this.includes(5) }

// let str = 'Soeinc5njn'
// console.log(str.findFive());

// splice, fill, sort, reverce, pop, push, shift, unshift

const obj = {
  name: 'Serg',
  lastName: 'Din',
  age: 31,
  city: 'Minst'
}

const { age, name, ...rest } = obj


// Promise.all(
//   [ 
//     Promise.resolve(obj.name),
//     Promise.resolve(obj.lastName)
//   ]
// )
// .then( res => console.log( res[0] + ' ' + res[1] ))


// async function namFam (){
//    const name = await Promise.resolve(obj.name)
//    const fam = await Promise.resolve(obj.lastName)
//    return console.log( name + ' ' + fam );
// }

// console.log( namFam() )

const array = [
  {a:10, text: "Twitter"},
  {b:20, text: "Facebook"},
  {c:30, text: "Instagram"},
];

let mull = 1

console.log( array.filter(el =>  Object.values(el).filter( i => i === 'number')))

console.log(mull);
