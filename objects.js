const books = [
    {Title:"Beyond birth and death", Author:"Srila Prabhupad", Publish:"1999", Type:"Spiritual"},
    {Title:"Basics of C", Author:"Dennis Riche", Publish:"1994", Type:"Technology"},
    {Titie:"Bhagvat Gita as it is", Author:"Srila Prabhupad", Publish:"1989",Type:"Spiritual"},
    {Title:"Grooks System Design", Autohr:"Walman dook", Publish:"2004", Type:"Technology"},
    {Title:"Hare krishna challenge", Author:"Srila Prabhupad", Publish:"1995", Type:"Spiritual"},
    {Title:"life comes from life", Author:"Srila Prabhupad", Publish:"1989", Type:"Spiritual"},
    {Title:"Rich dad poor dad", Author:"RDJ", Publish:"1979", Type:"Finance"},
    {Title:"Atomic habbit", Author:"lik tantra", Publish:"2008", Type:"daily use"}
];

let newBooks = books.filter((bks)=> {return bks.Type =='Spiritual'});
// console.log(newBooks);

const number = [1,2,3,4,5,6,7,8,9,10];
// add 10 in all number in the array

const newNum = number.map((num)=> num+10);
// console.log((newNum));

// reduce function in javaScript

const arr=[1,2,3,4,5,6];

// basic function 

const addtion = arr.reduce(function(acc, currVal){
    return acc+currVal;
},0);

//  console.log(addtion);

const sum = arr.reduce((acc, currVal)=> acc+currVal,0)

// console.log(sum);

//reduce method in objects

const courses = [
    {
        subject:"js Series",
        price:999
    },
    {
        subject:"C++ Series",
        price:4999
    },
    {
        subject:"AI/ML Series",
        price:22990
    },
    {
        subject:"Block Chain Series",
        price:5599
    }
];

const totalPayablePrice = courses.reduce((acc, item) => acc + item.price,0);
console.log(totalPayablePrice);




