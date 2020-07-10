const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const massageOne = document.querySelector('#massage1')
const massageTwo = document.querySelector('#massage2')
const massageThree = document.querySelector('#massage3')
const massageFour = document.querySelector('#massage4')
const massageFive = document.querySelector('#massage5')
const massageSix = document.querySelector('#massage6')


// massageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const address = search.value
    massageTwo.textContent = 'Loading...'
    massageOne.textContent = ' '
    massageThree.textContent = ' '
    massageFour.textContent = ' '
    massageFive.textContent = ' '
    massageSix.textContent = ' '
    console.log('Client side js script')
    fetch('http://localhost:8080/weather?search=' + address + '').then((responce) => {
        responce.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                massageTwo.textContent = data.error
            } else {
                massageOne.textContent = 'Location : ' + data.data.location.name + ' ' + data.data.location.region + ' ' + data.data.location.country + '.'
                console.log(data.data.current.temp_c)
                massageTwo.textContent = 'Current Temp is ' + data.data.current.temp_c + '°C.'
                massageThree.textContent = 'Current condition is ' + data.data.current.condition.text + '.'
                massageFour.textContent = 'Humidity in air ' + data.data.current.humidity + '%.'
                massageFive.textContent = 'Direction of wind ' + data.data.current.wind_dir + '.'
                massageSix.textContent = 'Spreed of wind ' + data.data.current.wind_kph + ' kph.'
            }



        })
    })
})