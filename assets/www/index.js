function initMap(){
    var dis= {lat:33.753057, lng:-84.385498};
    var map= new google.maps.Map(document.getElementById('ui-content'),{
        zoom:17,
        center: dis
    });
    var marker= new google.maps.Marker({
        position:dis,
        map:map
    });
}