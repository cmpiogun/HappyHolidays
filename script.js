//import {startConfetti} from './confetti';

var h1 = document.querySelector("h1");
var p = document.querySelector("p");
var date = new Date();
var formatDate = date.getFullYear() + '-' + (((date.getMonth() + 1) < 10) ? '0' : '') + (date.getMonth() + 1) + '-' + ((date.getDate() < 10) ? '0' : '') + date.getDate();


var apiURL = "https://calendarific.com/api/v2/holidays?&api_key=4e11145d721964a521b78852e0ee32214b55959b&country=UK&year=2020";

document.addEventListener('DOMContentLoaded', async function() {
    const res = await fetch(`${apiURL}`);
    const data = await res.json();

    for(var i = 0; i < data.response.holidays.length; i++){
        if(data.response.holidays[i].date.iso == formatDate){       
            h1.innerHTML = "Happy " + data.response.holidays[i].name + " Mum";
            p.innerHTML = data.response.holidays[i].description;
            //startConfetti();
            //sendMessage(); 
            
        }
    }

}, false);
