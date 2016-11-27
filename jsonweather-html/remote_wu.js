// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, lon);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, lon){
    $.ajax({
	  url:'https://api.wunderground.com/api/aebb2a7c6f18a650/geolookup/conditions/q/' + lat + ',' + lon + '.json',
	  dataType: "jsonp",
	  success: function(data){
	
	  var locate = data['location']['city'] + ',' + data['location']['state'];
	  var temp = data['current_observation']['temp_f'];
	  var current = data['current_observation']['weather'];
	  var tz_long = data['nearby_weather_stations']['tz_long'];
	  var windchill_c = data['current_observation']['windchill_c'];
	  var windchill_f = data['current_observation']['windchill_f'];
	  var wind_mph = data['current_observation']['wind_mph'];
	  
	  $("#cityDisplay").html([locate]);
	  $("#currentTemp").html(Math.round(temp)+'&#176;F');
	  $("#summary").html(toTitleCase(current));
	  $("#add1").html('Time zone: ' + (tz_long));
	  $("#add2").html('Windchill in Celsius: ' + (windchill_c) + 'C');
	  $("#add3").html('Windchill in Farenheit: ' + (windchill_f) + '&#176;F');
	  $("#add4").html('Wind miles per hour: ' + (wind_mph) + 'mph');
	  $("#cover").fadeOut(250);
  }
  });


      
    }
 

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
