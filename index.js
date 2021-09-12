// Module 6

const arr = [
{ name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
{ name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
{ name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
{ name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
{ name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
{ name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
{ name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
{ name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
{ name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
{ name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
{ name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
    { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 },
    { name: "Pierre", surname: "Curie", born: 1859, dead: 1906, id: 13}
];

let result = arr.filter(({born}) => born >= 1800 && born <= 1900)
console.log("1", result)

result = arr.reduce((acc, obj) => {
    // console.log(acc, obj)
    // console.log(obj.dead - obj.born)
    acc += (obj.dead - obj.born);
    return acc;
}, 0)

console.log("2", result)

result = arr.reduce((acc, { dead, born }) => acc + (dead - born), 0)

console.log("2.1", result)

result = arr.sort((a, z) => ((a.surname + " " + a.name).localeCompare((z.surname + " " + z.name)))) 

console.log("3", result)

result = arr.sort((min, max) => ((min.dead - min.born) - (max.dead - max.born)));

console.log("4", result)

result = arr.map((obj) => {
    obj.age = obj.dead - obj.born;
    return obj;
    
}).sort((min, max) => min.age - max.age)
    

console.log("4.1", result)