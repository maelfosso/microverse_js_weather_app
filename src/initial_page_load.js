
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
    <div class="">
      
    </div>
  `;
  document.getElementById('content').innerHTML = content;

  addListener();
}


const addListener = () => {
  let form = document.querySelector('form');
  form.onsubmit = function (submitEvent) {
    submitEvent.preventDefault();
    
    var name = document.querySelector('input').value;
    console.log(name);
  }
  
};

export {
  initialLoad
}