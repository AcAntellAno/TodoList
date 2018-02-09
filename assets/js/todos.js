//console.log("connection successful");
//check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //-> this refers to li
	}); //this is the span that we clicked on, parent gives li
	event.stopPropagation(); //prevents bubbling up and wont trigger anything else
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //13 is enter key
		var todoText = $(this).val();
		$(this).val(""); //clears input
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});

