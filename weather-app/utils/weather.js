const request = require('request')

const weather = (longitude, latitude, callback) => {
    const weatherstack_url = `http://api.weatherstack.com/current?access_key=77aa2ec0cb5e64aeefc46ce6375f4620&query=${longitude},${latitude}&units=f`

    request({ url: weatherstack_url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to fetch weather data')
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            const temperature = body.current.temperature
            const weather_description = body.current.weather_descriptions[0]
    
            callback(undefined, `It is currently ${temperature} out and it is ${weather_description}`)
        }
    })
}

module.exports = weather
