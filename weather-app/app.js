const request = require('request')

const weatherstack_url = 'http://api.weatherstack.com/current?access_key=77aa2ec0cb5e64aeefc46ce6375f4620&query=37.8267,-122.4233&units=f'

request({ url: weatherstack_url, json: true }, (error, response) => {
    
    // !Commented code is used if json: true parameter is not enabled
    // console.log(response)
    // const data = JSON.parse(response.body)
    // console.log(data.current);
    // console.log(response.body.current)
    if (error) {
        console.log('Unable to fetch weather data.')
    } else if (response.body.error) {
        console.log('Unable to find location.')
    } else {
        const temperature = response.body.current.temperature
        const weather_description = response.body.current.weather_descriptions[0]
    
        console.log(`It is currently ${temperature} out and it is ${weather_description}`)
    }
})

const mapbox_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWpzYTE3OTgiLCJhIjoiY2s5bTVxMXpjMDYzYTNxbnFkeG1qdThvNiJ9.4hmVhG-FFgUKCh9lDZmgBw&limit=1'

request({ url: mapbox_url, json: true}, (error, response) => {
    // console.log(response.body.features[0].geometry.coordinates[0])
    if (error) {
        console.log('Unable to fetch geocode data')
    } else if (!response.body.features) {
        console.log('Unable to find geocode data.')
    } else {
        const longitude = response.body.features[0].geometry.coordinates[0]
        const latitude = response.body.features[0].geometry.coordinates[1]
    
        console.log(`The Longitude is: ${longitude} \nand the latitude is ${latitude}`)
    }
})

