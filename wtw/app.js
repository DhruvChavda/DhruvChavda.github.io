var button = document.querySelector('.btn');
var cityName = document.querySelector('.inputValue');
var subHead = document.querySelector('.subhead');
var city = document.querySelector('.title');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var wind = document.querySelector('.wind');
var tabname = document.querySelector('title');
var fav = document.querySelector('.fav');
var weather = document.querySelector('.weather')


button.addEventListener('click', function(){
    console.log(cityName.value);
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityName.value+'&appid=c285c71ecc5ae39c11952d253c4da325&units=metric')
        .then((res) => res.json())
        .then((data) => {
            city.innerHTML = cityName.value;
            subHead.innerHTML="";
            temp.innerHTML = "Temperature : " + data.list[0].main.temp + " Degrees Celsius";
            desc.innerHTML = "Description : " + data.list[0].weather[0].description;
            wind.innerHTML = "Wind is blowing at " + data.list[0].wind.speed + " mph in " + data.list[0].wind.deg + " degrees ";
            tabname.innerHTML = cityName.value;
            fav.href='http://openweathermap.org/img/wn/'+data.list[0].weather[0].icon+'@2x.png';
            weather.src='http://openweathermap.org/img/wn/'+data.list[0].weather[0].icon+'@2x.png';
        })
        .catch((err)=>alert("Wrong City Name! Please Try Again!"));

    
});

// API key
// afce24837e0dfd36a50d0f693e45928d