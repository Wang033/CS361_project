  const picturePath = './picture/';
  document.addEventListener('DOMContentLoaded', bindButtons);
  document.addEventListener('DOMContentLoaded', bindButtons_image);
  
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
           document.getElementById("description").textContent = response.weather[0].description; 
           document.getElementById("country").textContent = response.sys.country;
           const description = response.weather[0].description
           event.preventDefault();

       
        if (description == "light rain" || description == "moderate rain") {
        
          var par = document.getElementById('imageDiv');
          var img = document.createElement('img');
          img.src = "./picture/rain.jpg";
          par.appendChild(img);
        }
        else {
           
          var par = document.getElementById('imageDiv');
          var img = document.createElement('img');
          img.src = "./picture/sun.png";
          par.appendChild(img);
        }

  });          
}



function bindButtons_image(){
          document.getElementById('button_image').addEventListener('click', function(event){     
          var req =new XMLHttpRequest();         
          var image_name= document.getElementById('imageName').value;        

          req.open("GET","https://wiki-webscraper.herokuapp.com/api/"+ image_name, false);
          
          
           req.send(null);
           var response = JSON.parse(req.responseText);
           document.getElementById("image_url").textContent = response.return_image;
           event.preventDefault();
           
        });
 
  }


  
