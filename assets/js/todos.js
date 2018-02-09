//console.log("connection successful");
//check off specific todos by clicking
$("li").click(function() {
	//if line is gray
	console.log($(this).css("color"));
	if ($(this).css("color") === "rgb(128, 128, 128)") {
		console.log("it is gray");
		//turn it black
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	} else {
		//turn it gray
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}
});