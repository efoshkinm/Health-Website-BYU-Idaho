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
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
	<script>
	jQuery(document).ready(function($) {
	  $.ajax({
	  url : 'http://api.wunderground.com/api/Your_Key/geolookup/conditions/q/' + lat +',' + long + '.json',
	  dataType : "jsonp",
	  success : function(data) {
		  console.log(data);
	  var location = data['location']['city'] + ',' + data['location']['state'];
	  var temp = data['current_observation']['temp_f'];
	  var current = data ['current_observation']['weather'];
	  
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
