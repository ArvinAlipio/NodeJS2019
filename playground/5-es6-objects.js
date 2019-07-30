//Object property shorthand
const name = 'Arvin'
const userAge = 21

const user = {
    name,
    age: userAge,
    location: 'Makati'
}

console.log(user)

//Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 301,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(rating)
// console.log(stock)

const transaction = (type, {label, price}) => {
    console.log(type)
    console.log(label)
    console.log(price)
}

transaction('order', product)