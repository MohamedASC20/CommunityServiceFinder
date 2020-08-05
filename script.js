function initMap(){
    var options = {
        zoom: 10,
        center:{lat:40.8116,lng:-73.9465}  
    }

    
    var map = new 
    google.maps.Map(document.getElementById('map'),options);
/*
    var marker = new google.maps.Marker({
         position:{lat:40.812894,lng:-73.939472},
         map:map,
    });
    var infoWindow = new google.maps.InfoWindow({
     content: '<h1>Community Center</h1>'
    })
    marker.addListener('click',function(){
        infoWindow.open(map, marker)
    }
    
    
    )*/
    addMarker({lat:40.812894,lng:-73.939472})
    addMarker({lat:40.812894,lng:-73.939472})
    addMarker({lat:40.612882,lng:-73.938482})
   
    function addMarker(coords){
     var marker = new google.maps.Marker({
         position:coords,
         map:map,
    });
    }

 }

