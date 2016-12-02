var returned;

$('#query').keyup(function(){
  var value = $('#query').val();
  var rExp = new RegExp(value, "i");
  $.getJSON("http://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
	console.log(data);
	returned = data;
	
	
	


    // Begin building output
    var output = '<ol>';
    $.each(data.RESULTS, function(key, val) {
      if (val.name.search(rExp) != -1) {
        output += '<li>';
        output += '<a href="http://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
        output += '</li>';
      }
    }); // end each
    output += '</ol>';
    $("#searchResults").html(output); // send results to the page
  }); // end getJSON





// Intercept the menu link clicks
$("#searchResults").on("click", "a", function (evt) {
  evt.preventDefault();
  // With the text value get the needed value from the weather.json file
  var jsonCity = $(this).text(); // Franklin, etc...
  console.log(jsonCity);
  index = $(this).index("a");
  console.log(index);
  console.log(returned);
	getData(returned.RESULTS[index].lat, returned.results[index].lon);
 }); // end keyup
});
  

   // Get the data from the wunderground API
  function getData(lat, lon){
    $.ajax({
	  url:'https://api.wunderground.com/api/aebb2a7c6f18a650/geolookup/conditions/q/' + lat + ',' + lon + '.json',
	  dataType: "jsonp",
	  success: function(data){
	
	  var locate = data['location']['city'] + ',' + data['location']['state'];
	  var temp = data['current_observation']['temp_f'];
	  var current = data['current_observation']['weather'];
	  var windchill_c = data['current_observation']['windchill_c'];
	  var windchill_f = data['current_observation']['windchill_f'];
	  var wind_mph = data['current_observation']['wind_mph'];
	  
	  $("#cityDisplay").html(data['location']['city']+", "+data['location']['state']);
	  $("#currentTemp").html(Math.round(temp)+'&#176;F');
	  $("#summary").html(toTitleCase(current));
	  $("#add2").html('Windchill in Celsius: ' + (windchill_c) + 'C&#176;');
	  $("#add3").html('Windchill in Farenheit: ' + (windchill_f) + '&#176;F');
	  $("#add4").html('Wind miles per hour: ' + (wind_mph) + 'mph');
		$("#cover").fadeOut(250);
  }
  });
  }
 
  
  


 // A function for changing a string to TitleCase
  //function toTitleCase(str){
   // return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
 // };
  

