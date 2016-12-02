var returned;

$('#query').keyup(function(){
  var value = $('#query').val();
  var rExp = new RegExp(value, "i");
  $.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
	//console.log(data);
	returned = data;


    // Begin building output
    var output = '<ol>';
    $.each(data.RESULTS, function(key, val) {
      if (val.name.search(rExp) != -1) {
        output += '<li>';
        output += '<a href="https://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
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
  //console.log(jsonCity);
  index = $(this).index("#searchResults a");
  //console.log(index);
 // console.log(returned);
  getData(returned.RESULTS[index].lat, returned.RESULTS[index].lon);
   //$("#searchResults").html("");
 }); // end keyup
  
});
  

   // Get the data from the wunderground API
  function getData(lat, lon){
	 
    $.ajax({
	  url:'https://api.wunderground.com/api/88e646fed71de22e/geolookup/conditions/forecast/q/' + lat + ',' + lon + '.json',
	  dataType: "jsonp",
	  success: function(data){
		console.log(data)
	  var locate = data['location']['city'] + ',' + data['location']['state'];
	  var temp = data['current_observation']['temp_f'];
	  var current = data['current_observation']['weather'];
	  var windchill_c = data['current_observation']['windchill_c'];
	  var windchill_f = data['current_observation']['windchill_f'];
	  var wind_mph = data['current_observation']['wind_mph'];
	  var temp_high_c = data['forcast']['simpleforecast']['forecastday']['0']['high']['celsius'];
	  var temp_high_f = data['forcast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'];
	  var temp_low_c = data['forcast']['simpleforecast']['forecastday']['0']['low']['celsius'];
	  var temp_low_f = data['forcast']['simpleforecast']['forecastday']['0']['low']['fahrenheit'];
	
	  
	  
	  $("#cityDisplay").html(data['location']['city']+", "+data['location']['state']);
	  $("#currentTemp").html('Current temperatur: '+ Math.round(temp)+'&#176;F');
	  $("#summary").html('Summary: '+toTitleCase(current));
	  $("#windchill_c").html('Windchill in Celsius: ' + windchill_c + 'C&#176;');
	  $("#windchill_f").html('Windchill in Farenheit: ' + windchill_f + '&#176;F');
	  $("#wind_mph").html('Wind miles per hour: ' + wind_mph + 'mph');
	  $("#temp_high_f").html('Temperature High Fahrenheit: ' + temp_high_f + '&#176;F');
	  $("#temp_high_c").html('Temperature High Celsius: ' + temp_high_c + 'C&#176;');
	  $("#temp_low_f").html('Temperature Low Fahrenheit: ' + temp_low_f + '&#176;F');
	  $("#temp_low_c").html('Temperature Low Celsius: ' + temp_low_c + 'C&#176;');
	  $("#cover").fadeOut(250);
  }
   });
  
	};
  


 // A function for changing a string to TitleCase
 function toTitleCase(str){
   return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };
  

