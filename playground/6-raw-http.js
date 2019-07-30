const https = require('https')

const url = 'https://api.darksky.net/forecast/5a0f931f5626e61c9a61eeff0ac4af4d/4a0,-75'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('Error', error)
})

request.end()