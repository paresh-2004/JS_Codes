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
console.log(newBooks);
