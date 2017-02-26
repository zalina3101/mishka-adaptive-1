var latlng = new google.maps.LatLng("59.938783", "30.323062");

var myOptions = {
  zoom: 17,
  center: latlng,
  navigationControlOptions: {
    style: google.maps.NavigationControlStyle.SMALL
  },
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("google-map"),myOptions);
map.scrollwheel=true;
map.setOptions({ mapTypeControl:true});

var marker = new google.maps.Marker({
  position: {lat: 59.938783, lng: 30.323062},
  map: map,
  title: 'Mishka',
  icon: {
    url: window.devicePixelRatio > 1 ? "../img/icon-map@2x.png" : "../img/icon-map.png",
    scaledSize: new google.maps.Size(67, 100)
  }
});
