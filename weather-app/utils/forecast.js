const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/5a0f931f5626e61c9a61eeff0ac4af4d/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`

    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const currentData = body.currently
            const dailyData = body.daily.data[0]
            callback(undefined, `${dailyData.summary} It is currently ${currentData.temperature} degrees out. There is a ${currentData.precipProbability}% chance of rain`)
        }
    })
}


module.exports = forecast