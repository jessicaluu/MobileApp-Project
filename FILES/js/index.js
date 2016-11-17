  var geocoder;
  var map;
  var address;
  var eventName;
  var eventDate;
  var eventTime;
  function initMap() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(33.753057, -84.385498);
    var mapOptions = {
      zoom: 12,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  function codeAddress() {
    address = document.getElementById('street').value + ', ';
    address += document.getElementById('city').value + ", ";
    address += document.getElementById('state').value + " ";
    address += document.getElementById('zipcode').value;
    eventName = document.getElementById('event_name').value + '<br>';
    eventDate = document.getElementById('date').value + '<br>';
    eventTime = 'From ' +document.getElementById('startTime').value +' to '+document.getElementById('endTime').value + '<br>';
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var contentString = eventName;
            contentString += eventDate;
            contentString += eventTime;
            contentString += address;
        var infowindow = new google.maps.InfoWindow({
                  content: contentString
                });
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        marker.addListener('click', function() {
                  infowindow.open(map, marker);
                });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
        }
    });
    updateEvents();
  }

  function checkLogin(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('passwd').value;

    if(username == "admin" | username=="edurham"){
        if(password=="admin"){
            location.href="home.html";
        } else{
            alert("Invalid Password");
        }
    } else{
        alert("User does not exist");
    }
  }

  function updateEvents(){
    address = document.getElementById('street').value + ', ';
    address += document.getElementById('city').value + ", ";
    address += document.getElementById('state').value + " ";
    address += document.getElementById('zipcode').value;
    eventName = document.getElementById('event_name').value + '<br>';
    eventDate = document.getElementById('date').value + '<br>';
    eventTime = 'From ' +document.getElementById('startTime').value +' to '+document.getElementById('endTime').value + '<br>';

    var table = document.getElementById("events-created");
    var row= table.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3= row.insertCell(2);
    var cell4= row.insertCell(3);

    cell1.innerHTML = eventName;
    cell2.innerHTML = address;
    cell3.innerHTML = eventDate;
    cell4.innerHTML = eventTime;
  }