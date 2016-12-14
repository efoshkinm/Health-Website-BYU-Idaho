$(function () {
	console.log("working")
	$.getJSON("/project/script/health.json", function (data){
		console.log(data);
	  var pushups = data['Exercises']['Push-ups'];
	  var pullups = data['Exercises']['Pull-ups'];
	  var chinups = data['Exercises']['Chin-ups'];
	  var run = data['Exercises']['Run'];
	  var jump = data['Exercises']['Jump'];
	  var abs = data['Exercises']['Abs'];
	  
	  $("#pushups").html(pushups);
	  $("#pullups").html(pullups);
	  $("#chinups").html(chinups);
	  $("#run").html(run);
	  $("#jump").html(jump);
	  $("#abs").html(abs);
	
  });
  });
