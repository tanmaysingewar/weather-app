console.log()

const path = require('path')
const express = require('express')
const hbs = require('hbs')
const weather = require('./weather-forcost.js')


const app = express()
    // Define paths for Express conif
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templete/views')
const partialsPath = path.join(__dirname, '../templete/partials')

//set handlers
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup staic diractry
app.use(express.static(publicDirectory))


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Tanmay Singewar'
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Tanmay Singewar'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        massage: 'This is help page.',
        name: 'Tanmay Singewar'
    })
})

app.get('/weather', (req, res) => {
    const city = req.query.search
    if (!city) {
        return res.send({
            error: 'error in search term'
        })
    }

    weather.forecast(city, (error, weather) => {
        res.send({
            error: error,
            data: weather
        })
        console.log(weather)
    })
})



app.get('*', (req, res) => {
    res.render('error404', {
        title: '404 Error page',
        msg: ' Page not found :(',
        name: 'Tanmay Singewar'
    })
})
app.listen(8080, () => {
    console.log('Server is running ')
})