const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.send('<h1>Hello express!</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Arvin',
//         age: 21
//     })
// })

// app.get('/about', (req, res) => {
//     res.send('<h2>About page</h2>')
// })

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is hot outside',
        location: 'Makati, Philippines'
    })
})

app.listen(3000, () => {
    console.log('Running on port 3000')
})
