$(function () {
	$.getJSON("/project/script/health.json", function (data){
		console.log(data);
	  var cabbage = data['Vegies']['0'];
	  var garlic = data['Vegies']['1'];
	  var potatoes = data['Vegies']['2'];
	  var onions = data['Vegies']['3'];
	  var tomatoes = data['Vegies']['4'];
	  
	  $("#cabbage").html(cabbage);
	  $("#garlic").html('garlic');
	  $("#potatoes").html('potatoes');
	  $("#onions").html('onions');
	  $("#tomatoes").html('tomatoes');
	
  });
  });
