const fs = require('fs')

// const book = {
//     title: 'The Alchemist',
//     author: 'Paulo Coelho'
// }

// // const testArray = ['test1', 'test2']

// const bookJSON = JSON.stringify(book) //

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const personData = JSON.parse(dataJSON)

personData.name = 'Arvin'
personData.age = 21

const personJSON = JSON.stringify(personData)
fs.writeFileSync('1-json.json', personJSON)