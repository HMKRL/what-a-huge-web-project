$(document).ready(function(){

	//hover and the white underline show
	var item_element = document.getElementById('item').children;
	for (var i = 0; i < item_element.length; i++) {
		console.log(i);
		$(item_element[i]).hover(function() {
			/* Stuff to do when the mouse enters the element */
			var ele = this.children;
			$(ele[1]).animate({opacity: 1.0}, 150);
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			var ele = this.children;
			$(ele[1]).animate({opacity: 0}, 150);
		});
	}

	//click to show the intersection
	var inneroption = document.getElementById('inneroption').children;
	var introsec = document.getElementById('introsection').children;
	for (var i = 0; i < introsec.length-1; i++) {
		console.log(introsec[i]);
		$(introsec[i]).hide();
	}
	$(introsec[0]).show();


	for (var i = inneroption.length-1; i >= 0; i--) {
		//$(introsec[i+1]).slideDown(500);
		$(inneroption[i]).click(function(event) {
			/* Act on the event */
			console.log(this);
			for(var j = 0; j < introsec.length-1; j++) {
				if(inneroption[j] !== this && introsec[introsec.length-j-2].style.display == "block") {
					$(introsec[introsec.length-j-2]).slideUp(500);
				}
			}
			for(var j = 0; j < introsec.length-1; j++) {
				if(inneroption[j] === this && introsec[introsec.length-j-2].style.display == "none") {
					$(introsec[introsec.length-j-2]).slideDown(500);
				}
			}
		});
	}
});
