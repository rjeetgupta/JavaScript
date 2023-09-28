const myNum = [1, 2, 3, 4]

// const myTotal = myNum.reduce(function (acc, curval)  {
//     console.log(`acc : ${acc} and Current Value : ${curval}`);
//     return acc + curval
// }, 3)


const myTotal = myNum.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);

const myShoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Java course",
        price: 3999
    },
    {
        itemName: "C++ course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 1999
    },
    {
        itemName: "Data Science course",
        price: 4999
    },
    {
        itemName: "Mobile dev course",
        price: 9999
    },
]
const priceToPay = myShoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);