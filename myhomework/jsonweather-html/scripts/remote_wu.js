// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
		
		<script>
			jQuery(document).ready(function($) {
			  $.ajax({
			  url : "http://api.wunderground.com/api/a32eecbfb7d1c488/geolookup/conditions/q/IA/Cedar_Rapids.json",
			  dataType : "jsonp",
			  success : function(parsed_json) {
			  var location = parsed_json['location']['city'];
			  var temp_f = parsed_json['current_observation']['temp_f'];
			  alert("Current temperature in " + location + " is: " + temp_f);
			  }
			  });
			});
		</script>







      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
