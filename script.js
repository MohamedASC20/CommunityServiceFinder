


function initMap(){
    let db = firebase.database().ref();
    var options = {
        zoom: 10,
        center:{lat:40.8116,lng:-73.9465}  
    }

    
    var map = new 
    google.maps.Map(document.getElementById('map'),options);

     var marker = new google.maps.Marker({
         position:{lat:40.812894,lng:-73.939472},
         map:map,
        title: 'Community Center',
        icon: 'images/verifiedEventMarker1.png'
    });
    
  var infoWindow = new google.maps.InfoWindow({
 content:'<h2>'+ 'Community Center'+ '</h2>' + '<br>' + '<strong>Start Time: </strong>'+'9AM' + '<br>' + '<strong>End Time: </strong>' + '6PM' + '<br>' + '<strong>Contact Email: </strong>' + 'mdrame1109@gmail.com' + '<br>' + '<strong>Contact Phone Number: </strong>' + '123456789' + '<br>' + '<strong>Description: </strong>' + 'test',

    })
    marker.addListener('click',function(){
        infoWindow.open(map, marker)
    })
    
var latElement = document.getElementById("lat");
var lngElement = document.getElementById("lng");
var descriptionElement = document.getElementById("description");
var nameElement = document.getElementById("eventName");
var emailElement = document.getElementById("email");
var numberElement = document.getElementById("phone");
var startTimeElement = document.getElementById("sTime");
var endTimeElement = document.getElementById("eTime");
var startAMPMElement = document.getElementById("sAMPM");
var endAMPMElement = document.getElementById("eAMPM");

const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

function updateDB(event){
    event.preventDefault();

   
var userLat = parseFloat(latElement.value);
var userLng = parseFloat(lngElement.value);
var userDescription = descriptionElement.value;
var eventName = nameElement.value;
var email = emailElement.value;
var pNum = numberElement.value;
var startTime = startTimeElement.value;
var sAMPM = startAMPMElement.value;
var endTime = endTimeElement.value;
var eAMPM = endAMPMElement.value;


 let userInput = {
        Latitude : userLat,
        Longitude: userLng,
        Description: userDescription,
        EventName: eventName,
        Email: email,
        PhoneNumber: pNum,
        StartTime: startTime + sAMPM,
        EndTime: endTime + eAMPM,

    }

    db.push(userInput);

var userMarker = new google.maps.Marker({
    position:{lat:userLat,lng:userLng},
    map:map,
});

var userInfoWindow = new google.maps.InfoWindow({
content:'<h2>'+ userInput.EventName+ '</h2>' + '<br>' + '<strong>Start Time: </strong>'+ userInput.StartTime + '<br>' + '<strong>End Time: </strong>' + userInput.EndTime + '<br>' + '<strong>Contact Email: </strong>' + userInput.Email + '<br>' + '<strong>Contact Phone Number: </strong>' + userInput.PhoneNumber + '<br>' + '<strong>Description: </strong>' + userInput.Description,

})
userMarker.addListener('click',function(){
   userInfoWindow.open(map, userMarker)
})




}
}