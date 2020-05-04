const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const location = process.argv[2]

if (!location) {
    return console.log("Please enter a location")
}

geocode(location, (error, {longitude, latitude, placeName}) => {
    if (error) {
        return console.log(error)
    }
    weather(longitude, latitude, (error, weather_data) => {
        if (error) {
            return console.log(error)
        }

        console.log(placeName)
        console.log(weather_data)
    })
})
