/*
const user = {
    name: "Oleg",
    yare: 1990,
    work: false,
}
console.log(user)

 const newUser = JSON.stringify(user)
 console.log(newUser)

 const beeforUser = JSON.parse(newUser)
 console.log(beeforUser);


const favoretColor = 'red';
const lastName = 'big'

const user = {
    name: "Oleg",
    yare: 1990,
    work: false,
}

const newUser = Object.assign({}, user);


delete newUser.work;
newUser['red'] = true;
newUser.lastName = lastName;


console.log(newUser);
console.log(user)

const othreUser = Object.assign({}, user, newUser);
console.log(othreUser) 


const firsFunc = (a, b) => {
    let c = a + b;
    return c;
}

console.dir(firsFunc)


const person = {
    user: "oleg",
    age: 35,
}

const plusAge = (obj) => {
    const newOnj = Object.assign({}, obj);
    newOnj.age += 4;
    return newOnj;
}

const newPerson = plusAge(person)
console.log(newPerson.age)
console.log(person.age)


function name() {
    console.log('Oleg')
}

const my = () => {
    console.log('my name is')
}

setTimeout(my, 500)
setTimeout(name, 1500)



const btnBig = {
    wigth: 1212,
    color: 'red',
}
console.log(btnBig)

const btnSmall =  {
    text: 'MKL',
}
console.log(btnSmall)

const newBtn = {
    ...btnBig,
    ...btnSmall,
}
console.log(newBtn)
 

const name = 'Oleg';
const myCity = "i'm from Minsk";

const info = `${name} ${myCity}`;
console.log(info);


setTimeout(() => {
    console.log('This is culbacFunction')
}, 1000 )

 
const mulByaFactor = function(a, b = 2) {
    return a * b 
}
console.log(mulByaFactor(5, 10))



const postDate = (post, addDate = Date()) => {
    let newPost = { ...post }
    newPost.date = addDate;
    return newPost;
}

const firstPost = {
    secondary: 'NewPaper',
    yare: 1922,
}

const postNow = postDate(firstPost);
console.log(postNow)



const error = () => {
    throw new Error(' This is a some Error :)')
}

try{
    error()
}catch(error){
   console.error(error)
   console.log(error.message)
}

console.log('continue')


const arr = [1, 2, 3]

const newArr = arr.map((e) => {
   return e * 3 
})
    
console.log(newArr)
console.log(arr)
    


const user = {
    name: 'Oleg',
    age: 23,
}

const {name, age} = user;
console.log(name)


const car =['Audi', 'BMW', 'Mersedes', 'KIA']
console.log(car)

const [carOne, carTwo, carThree, carFour] = car;
console.log(`This is a new car ${carTwo} and an old car ${carOne}`  )


const house = {
    color: 'red',
    width: 1212,
    yare: 1990,
}

const ageHouse = ({color, yare}) => {
    if(yare >= 1990 && color == 'red') {
        console.log('good house')
    } else{
        console.log('bad house')
    }
} 

ageHouse(house)


let val = 12;

if(val < 50) {
    val += 32;
    console.log(val)
}
console.log(val)

const person = {
    age:12,
  
}

if(!person.name) {
    console.log('Name is not defined')
} else {
    console.log('Everything okey')
}


let age = 1;

if(age >= 18 ) {
    console.log('Person is adult')
} 
if(age >= 12 && age < 18) {
    console.log('Percon is teenager')
} 
if( age < 12) {
    console.log('Percon is child')
}
*/ 

alert('your namber');
alert('your namber * 2');
alert('your namber plus 7');

let number = +prompt('finish number')

newNumber = (number - 7) / 2;
alert(newNumber);

