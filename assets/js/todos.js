//console.log("connection successful");
//check off specific todos by clicking
$("li").click(function() {
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //-> this refers to li
	}); //this is the span that we clicked on, parent gives li
	event.stopPropagation(); //prevents bubbling up and wont trigger anything else
});

