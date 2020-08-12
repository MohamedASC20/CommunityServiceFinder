
function setup(){ var eventSubmitted = document.getElementById('eS');
eventSubmitted.style.display = 'none';}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      console.log('Space pressed')
    }
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
    eventSubmitted.style.display = 'none';
   
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




function initMap(){
  
    

    
    var options = {
        zoom: 11,
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

    var marker = new google.maps.Marker({
        position:{lat:40.822894,lng:-73.919472},
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
   var marker = new google.maps.Marker({
    position:{lat:40.722894,lng:-73.939472},
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
var marker = new google.maps.Marker({
    position:{lat:40.801111,lng:-73.949472},
    map:map,
   title: 'Community Center',
  
});

var infoWindow = new google.maps.InfoWindow({
content:'<h2>'+ 'Community Center'+ '</h2>' + '<br>' + '<strong>Start Time: </strong>'+'9AM' + '<br>' + '<strong>End Time: </strong>' + '6PM' + '<br>' + '<strong>Contact Email: </strong>' + 'mdrame1109@gmail.com' + '<br>' + '<strong>Contact Phone Number: </strong>' + '123456789' + '<br>' + '<strong>Description: </strong>' + 'test',

})
marker.addListener('click',function(){
   infoWindow.open(map, marker)
})
var marker = new google.maps.Marker({
    position:{lat:40.712894,lng:-73.969472},
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
var marker = new google.maps.Marker({
    position:{lat:40.762894,lng:-73.939472},
    map:map,
   title: 'Community Center',
   
});

var infoWindow = new google.maps.InfoWindow({
content:'<h2>'+ 'Community Center'+ '</h2>' + '<br>' + '<strong>Start Time: </strong>'+'9AM' + '<br>' + '<strong>End Time: </strong>' + '6PM' + '<br>' + '<strong>Contact Email: </strong>' + 'mdrame1109@gmail.com' + '<br>' + '<strong>Contact Phone Number: </strong>' + '123456789' + '<br>' + '<strong>Description: </strong>' + 'test',

})
marker.addListener('click',function(){
   infoWindow.open(map, marker)
})
var marker = new google.maps.Marker({
    position:{lat:40.763894,lng:-73.989472},
    map:map,
   title: 'Community Center',
   icon: 'images/verifiedEventMarker1.png'
});

var infoWindow = new google.maps.InfoWindow({
content:'<h2>'+ 'Community Center'+ '</h2>' + '<br>' + '<strong>Start Time: </strong>'+'9AM' + '<br>' + '<strong>End Time: </strong>' + '6PM' + '<br>' + '<strong>Contact Email: </strong>' + 'hansboroughcenter@gmail.com' + '<br>' + '<strong>Contact Phone Number: </strong>' + '718-234-5729' + '<br>' + '<strong>Description: </strong>' + 'Come together as a community',

})
marker.addListener('click',function(){
   infoWindow.open(map, marker)
})
    

document.addEventListener('keyup', event => {
    if (event.code === 'Digit2') {
        var marker1 = new google.maps.Marker({
            position:{lat:40.6782,lng:-73.9442},
            map:map,
           title: 'Community Center',
          
        });
        
        var infoWindow1 = new google.maps.InfoWindow({
        content:'<h2>'+ 'Test'+ '</h2>' + '<br>' + '<strong>Start Time: </strong>'+'4AM' + '<br>' + '<strong>End Time: </strong>' + '5AM' + '<br>' + '<strong>Contact Email: </strong>' + 'mdrame7377@bths.edu' + '<br>' + '<strong>Contact Phone Number: </strong>' + '12345678' + '<br>' + '<strong>Description: </strong>' + 'pick up trash',
        
        })
        marker1.addListener('click',function(){
           infoWindow1.open(map, marker1)
        })
    }
  })

}


