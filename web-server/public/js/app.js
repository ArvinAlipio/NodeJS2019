console.log('Client side javascript file is loaded!')

// fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/Boston.json?access_token=pk.eyJ1IjoiYWpzYTE3OTgiLCJhIjoiY2s5bTVxMXpjMDYzYTNxbnFkeG1qdThvNiJ9.4hmVhG-FFgUKCh9lDZmgBw&limit=1').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent('Unable to fetch data')
            } else {
                messageOne.textContent = data.forecast
                messageTwo.textContent = data.placeName
                console.log(data.address) 
            }
        })
    })

})