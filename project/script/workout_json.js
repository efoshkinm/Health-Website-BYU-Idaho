$(function () {
	console.log("working")
	$.getJSON("/project/script/health.json", function (data){
		console.log(data);
	  var push_ups = data['Exercises']['Push-ups'];
	  var pull_ups = data['Exercises']['Pull-ups'];
	  var chin_ups = data['Exercises']['Chin-ups'];
	  var run = data['Exercises']['Run'];
	  var jump = data['Exercises']['Jump'];
	  var abs = data['Exercises']['Abs'];
	  
	  $("#push_ups").html(push_ups);
	  $("#pull_ups").html(pull_ups);
	  $("#chin_ups").html(chin_ups);
	  $("#run").html(run);
	  $("#jump").html(jump);
	  $("#abs").html(abs);
	
  });
  });
