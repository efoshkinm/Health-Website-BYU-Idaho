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
	  
	  $("#pushups").html("The number of Push ups: " + pushups);
	  $("#pullups").html("The number of Pull ups: " + pullups);
	  $("#chinups").html("The number of Chin ups: " + chinups);
	  $("#run").html("Time of running: " + run);
	  $("#jump").html("The number of Jumps to do: " + jump);
	  $("#abs").html("The number of Abs wourkout repetitions: " + abs);
	
  });
  });
