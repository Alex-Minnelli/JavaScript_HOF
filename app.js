console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus (number){
    return function (plusNumber){
        return plusNumber + number;
    }
}

let plus15 = plus(15);
console.log(plus15(10));


// Exercise 2 Section
console.log("Exercise 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

users.forEach(name => console.log(name.name));

// Exercise 3 Section
console.log("Exercise 3:\n==========\n");

//let scores = users.map(({name, score}) => ({[name]: score}));

let userScore = users.map(element =>{
    return [{ name: element.name}, { socre: element.score}];
})

console.log(userScore);

// Exercise 4 Section
console.log("Exercise 4:\n==========\n");

let filter = users.filter(active => active.isActive === true);
console.log(filter);

// Exercise 5 Section
console.log("Exercise 5:\n==========\n");

users.sort((a,b) => b.score - a.score);
console.log(users);

// Exercise 6 Section
console.log("Exercise 6:\n==========\n");

let avg = users.reduce((sum, val) => sum + val.score, 0)/users.length;
console.log(avg);
