$(document).ready(function() {
	//var url = "http://localhost:1234/demo.html";
	$("#boton").click(function() {
		/*
		$.ajax({
			url: "http://localhost:1234/demo.html",
			type: "GET",
			success: function(response) {
				$("#ajax").html(response);
			}
		});
		*/
		$("#ajax").load("../demo.html");
		/*
		$.get("http://localhost:1234/demo.html", function(response) {
			$("#ajax").html(response);
		});
		*/
	});
});









