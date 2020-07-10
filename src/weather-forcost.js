const request = require('request')
const forecast = (address, callback) => {

    const url = "http://api.weatherapi.com/v1/current.json?key=efd1a2c518b840a9b4265559200207&q=" + address + ""

    request({ url, json: true }, (error, { body } = {}) => {

        if (error) {
            callback('unable to connect weather api', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // const { body } = resonce
            const weather = body
            callback(undefined, weather)
        }
    })
}

module.exports = {
    forecast: forecast
}