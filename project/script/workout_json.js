$(function () {
	console.log("working")
	$.getJSON("/project/script/health.json", function (data){
		console.log(data);
	  var push-ups = data['Exercises']['Push-ups'];
	  var pull-ups = data['Exercises']['Pull-ups'];
	  var chin-ups = data['Exercises']['Chin-ups'];
	  var run = data['Exercises']['Run'];
	  var jump = data['Exercises']['Jump'];
	  var abs = data['Exercises']['Abs'];
	  
	  $("#push-ups").html(push-ups);
	  $("#pull-ups").html(pull-ups);
	  $("#chin-ups").html(chin-ups);
	  $("#run").html(run);
	  $("#jump").html(jump);
	  $("#abs").html(abs);
	
  });
  });
