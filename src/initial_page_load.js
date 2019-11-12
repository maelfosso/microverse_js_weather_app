const API_KEY = '3f55a3bf69cf3a5883c01ec269cecaba';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const initialLoad = () => {
  let content = `
    <div class='header'>
      <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/26BGDQxDCZDFHW5Ne" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/animation-loop-sun-26BGDQxDCZDFHW5Ne">via GIPHY</a></p>
      
    <h1>Wheather APP</h1>
    </div>
    <form class="weather_form" action="" method="post">
      <div class="input-group">
          <input type="text" class="form-control" name="location" placeholder="Enter your location">
          <span class="input-group-btn">
              <button class="btn btn-default" type="submit">Search</button>
          </span>
      </div>
    </form>
    <div id="result" class="mt-5">
      
    </div>
  `;
  document.getElementById('content').innerHTML = content;

  addListener();
}

const apiURL = (name) => {
  return `${API_URL}?q=${name}&appid=${API_KEY}`;
}

const iconURL = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`
}

const setResult = (data) => {

  let result = `
    <h2>${data.town} <small class="text-muted">${data.country}</small></h2>
    <div class='d-flex flex-row'>
      <div><img src='${iconURL(data.weather.icon)}' alt='icon'/></div>
      <div class='weather d-flex flex-column'>
        <div class='main'>
          <strong>${data.weather.main}</strong> ${data.weather.description}
        </div>
        <div class='d-flex flex-row justify-content-between'>
          <dl>
            <dt class="">Humidity</dt>
            <dd class="">${data.main.humidity} %</dd>
          </dl>
          <dl>
            <dt class="">Pressure</dt>
            <dd class="">${data.main.pressure}</dd>
          </dl>
          <dl>
            <dt class="">Temperature</dt>
            <dd class="">${data.main.temp} °C</dd>
          </dl>
        </div>
      </div>
    </div>
  `;
  document.getElementById('result').innerHTML = result;
}

const addListener = () => {
  let form = document.querySelector('form');
  form.onsubmit = function (submitEvent) {
    submitEvent.preventDefault();

    var name = document.querySelector('input').value;
    console.log(name);
    this.reset();

    fetch(apiURL(name), {
      mode: 'cors'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
      let data = {
        town: response.name,
        country: response.sys.country,
        weather: {
          main: response.weather[0].main,
          icon: response.weather[0].icon.split('.')[0],
          description: response.weather[0].description
        },
        main: {
          humidity: response.main.humidity,
          pressure: response.main.pressure,
          temp: response.main.temp
        }
      }

      console.log(data);

      setResult(data);
    });
  }
  
};

export {
  initialLoad
}