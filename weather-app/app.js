const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (address) {
    geocode(address, (error, {latitude, longitude, location}) => { //only 1 will have a value in error/data
        if (error) {
            return console.log('Error', error)
        }

        // console.log('Geocode data: ', geocodeData)
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error', error)
            }

            console.log('Location: ', location)
            console.log('Forecast: ', forecastData)
        })
    })
} else {
    console.log('No location provided')
}