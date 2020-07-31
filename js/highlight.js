// add any new items here:
var SQL1link = document.getElementById('SQL-1-link');
var SQL1text = document.getElementById('SQL-1-text');

var SQL2link = document.getElementById('SQL-2-link');
var SQL2text = document.getElementById('SQL-2-text');

var DBD1link = document.getElementById('DBD-1-link');
var DBD1text = document.getElementById('DBD-1-text');

var DBD2link = document.getElementById('DBD-2-link');
var DBD2text = document.getElementById('DBD-2-text');


$(window).load(function pullSourceText(){
	// add any new items here:
	var SQL1container = document.getElementById('SQL-1-container');
	var SQL2container = document.getElementById('SQL-2-container');
	var DBD1container = document.getElementById('DBD-1-container');
	var DBD2container = document.getElementById('DBD-2-container');

	// ...and here:
	SQL1container.innerHTML = SQL1text.innerHTML; 
	SQL2container.innerHTML = SQL2text.innerHTML; 
	DBD1container.innerHTML = DBD1text.innerHTML; 
	DBD2container.innerHTML = DBD2text.innerHTML; 

});


function fadeButton(){
	// add any new items here:
  	$(SQL1text).css('background-color', 'transparent');
  	$(SQL2text).css('background-color', 'transparent');
  	$(DBD1text).css('background-color', 'transparent');
  	$(DBD2text).css('background-color', 'transparent');
  	

  	$('#back-to-skills').css('opacity', '0');
  	$('#close').css('opacity', '0');
	$('#back-to-skills').remove();
	$('#close').remove();
	
	return;
};


function scrollHighlight(text){
	var backButtonDOM = "<div id='button-container'><a id='back-to-skills' class='button' href='#skills' onclick='fadeButton()'>Back to Skills</a><a id='close' onclick='fadeButton()'></a></div>"; //smoothscroll not working?
	$(text).css('background-color', 'lemonchiffon');
	$(text).css('transition', 'background-color 0.3s ease');
	$(text).after(backButtonDOM);
};


// when click link, scrollHighlight

// add any new items here:
$(SQL1link).on('click', function() { scrollHighlight(SQL1text); });
$(SQL2link).on('click', function() { scrollHighlight(SQL2text); });
$(DBD1link).on('click', function() { scrollHighlight(DBD1text); });
$(DBD2link).on('click', function() { scrollHighlight(DBD2text); });




// when scroll away from highlighted text, fade 'Back to Skills' button and highlight
	// setTimeout(ifScrolled, 3000);

	// function ifScrolled(e){		

	// 	window.addEventListener('scroll', function(e) {

	// 		var SQLposition = document.getElementById('SQL-1');

	// 		if (window.scrollY != SQLposition.scrollHeight ){
	// 			fadeButton();
	// 			console.log('running fadeButton');
	// 			return;	
	// 		}
	// 	});
	// };