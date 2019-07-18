const request = require('request')

const url = 'https://api.darksky.net/forecast/5a0f931f5626e61c9a61eeff0ac4af4d/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.currently)
    const currentData = response.body.currently
    const dailyData = response.body.daily.data[0]
    console.log(`${dailyData.summary} It is currently ${currentData.temperature} degrees out. There is a ${currentData.precipProbability}% chance of rain`)
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWphbGlwaW8xNzk4IiwiYSI6ImNqeThqazE2cTBheGczZ3J6c3E0NzVsbjkifQ.eY_A-mJOk7Bz3HsIQRsQvA&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    // console.log(response.body.features[0])
    const locationData = response.body.features[0]
    console.log(`Lat: ${locationData.center[1]}, Long: ${locationData.center[0]}`)
})