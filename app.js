// const person = {
//     name: {first:'Bob', last:'Smith'},
//     age: 32,
//     gender:'male',
//     interests: ['music', 'skiing'],
//     bio: function() {
//         alert(this.name.first  + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + this.interests[1] + '.')
//     },
//     greeting: function() {
//         alert('Hi I\'m ' + this.name.first + '.')
//     }
// };

// let myDataName = 'height';
// let myDataValue = '1.75m';
// person[myDataName] = myDataValue;

// console.log(person.height)

// person.age = 45
// person['name']['last'] = 'Amir'
// console.log(person['name']['last'])
// console.log(person.age)

// const person1 = {
//     name: 'Amir',
//     greeting: function() {
//         alert('Hi! ma ' + this.name + ".")
//     }
// }

// const person2 = {
//     name: 'Tarig',
//     greeting: function() {
//         alert('Hi am ' + this.name + ".")
//     }
// }

// const myNotification = new Notification('Hello')

// const pand = {
//     name: 'whatever',
//     nationality: 'sudanes',
//     genre: 'rock',
//     members: 4,
//     formed: 1991,
//     split: 2000,
//     albums: [
//         {name: 'album1', released: 1991}
//         {name: 'album2', released: 1992}
//         {name: 'album3', released: 1993}
//         {name: 'album4', released: 1994}
//     ],
//     bandInfo: function() {
//         console.log(`${pand.name} was formed in ${pand.formed} and they were from ${pand.nationality} a group of ${pand.members} `)
//     }
// }

// function Person(name) {
//     //const obj = {};
//     this.name = name;
//     this.greeting = function() {
//         alert('hi am ' + this.name + '.')
//     }
// }

// const salva = Person('Salva');
// console.log(salva.name)
// console.log(salva.greeting());

// let person1 = new Person('bob')
// let person2 = new Person('sarah')

// console.log(person1.name)

// 

function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.calcPerimeter = function() {
         alert( this.sides / this.sideLength);
   }
  }

  let newShape = new Shape('squer', 5 , 25)
  console.log(newShape);

  let 