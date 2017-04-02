 function display () {
   document.getElementById('display').innerHTML = ' '
   function createNode (element) {
     return document.createElement(element)
   }

   function append (parent, el) {
     return parent.appendChild(el)
   }
   let dis = document.getElementById('display')
   let city = document.getElementById('city').value
   let country = document.getElementById('country').value
   let splits = country.split('', country.length)
   let sp = splits.join()
   const url = 'http://api.openweathermap.org/data/2.5/weather?q='
   const apikey = '7ab7cb3cad491430a96a74d844b45d26'
 
   fetch(`${url}${city},${country}&APPID=${apikey}`)
    .then((res) => res.json())
    .then((data) => {
      let weat = data.weather[0].description
      let tempMax = data.main.temp_max - 273.15
      let tempMin = data.main.temp_min - 273.15
      const lat = data.coord.lat
      let lon = data.coord.lon
      let li = createNode('li'), 
        img = createNode('img'),
        span = createNode('span')
      if (weat === 'shower rain' || 'rain' || 'light rain') {
        img.src = 'img/rain.png'
      }
      if (weat === 'clear sky' || 'sunny') {
        img.src = 'img/sun.png'
      }
      if (weat === 'snow') {
        img.src = 'img/snow.png'
      }
      if (weat === 'overcast clouds' || 'clouds' || 'cloudy') {
        img.src = 'img/cloudy.png'
      }
      span.innerHTML = `Temperature is ${tempMax.toFixed(2)}°C/${tempMin.toFixed(2)}°C. The city of ${city} in ${country} is having ${weat} in the forecast` 
      append(li, img)
      append(li, span)
      document.getElementById('display').append(li)
    })
   .catch((e) => console.log(e, 'Something went wrong.'))
 }