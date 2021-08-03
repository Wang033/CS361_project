  document.addEventListener('DOMContentLoaded', bindButtons);
  function bindButtons(){
          document.getElementById('button_weather').addEventListener('click', function(event){  
          var apiKey = '6a9ecb926f692993ea793fa53ba6f81b';
     
          var req =new XMLHttpRequest(); 
          var cityname= document.getElementById('cityName').value;
          var countryname =document.getElementById('countryName').value;         
          if(cityname && countryname) {

          req.open("GET","http://api.openweathermap.org/data/2.5/weather?q="+cityname +","+countryname+"&appid="+apiKey, false);
          
          }
          
           req.send(null);
           var response = JSON.parse(req.responseText);
           document.getElementById("name").textContent = response.name;
           document.getElementById("timezone").textContent = response.timezone;
           document.getElementById("lon").textContent = response.coord.lon;
           document.getElementById("lat").textContent = response.coord.lat;         
           document.getElementById("description").textContent = response.weather[0].description;
           document.getElementById("mainweather").textContent = response.weather[0].main;         
           document.getElementById("windspeed").textContent = response.wind.speed;
           document.getElementById("clouds").textContent = response.clouds.all;
	  			 document.getElementById("temp").textContent = response.main.temp;
           document.getElementById("temp_min").textContent = response.main.temp_min;
	   			 document.getElementById("humidity").textContent = response.main.humidity;
           document.getElementById("temp_max").textContent = response.main.temp_max;  
           document.getElementById("pressure").textContent = response.main.pressure;	
           document.getElementById("country").textContent = response.sys.country;
           event.preventDefault();
        });

 
  }
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}


document.getElementById("dwn-button").addEventListener("click", function(){
 
    var text = document.getElementById("text-val").value;
    var filename = "Weather_result.txt";
    
    download(filename, text);
}, false);