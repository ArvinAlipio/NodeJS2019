const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWphbGlwaW8xNzk4IiwiYSI6ImNqeThqazE2cTBheGczZ3J6c3E0NzVsbjkifQ.eY_A-mJOk7Bz3HsIQRsQvA&limit=1`

    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length == 0) {
            callback('Unable to find location, try another search.', undefined)
        } else {
            const locationData = body.features[0]
            callback(undefined, {
                latitude: locationData.center[1],
                longitude: locationData.center[0],
                location: locationData.place_name
            })
        }
    })
}

module.exports = geocode