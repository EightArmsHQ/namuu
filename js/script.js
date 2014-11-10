/*

	Create our letters pool
	
*/
var pool = {
	"all":null,
	"pool_v":null,
	"pool_c":null,
};

var words = [];
var shortlist = [];
var word = "";

function create_pool(){

	var pool_s = $("#letters-pool").val().replace(/(\r\n|\n|\r| )/gm,"");
	var vowels = ["a","i","e","o","u"];

	pool.all = pool_s.split("");
	pool.c = _.difference(pool.all, vowels);
	pool.v = _.difference(pool.all, pool.c);

}


function init(){
	create_pool();
	add_letter();
	add_letter();
	add_letter();
	spin_letters();
}

function log_word(){
	$("#all-words-wrap").slideUp();
	word = "";
	$("#letters .js-letter-control").each(function(){
		word += $(this).find('h1.letter').text();
	});
	if(word != ""){
		words.push(word);	
	}

	console.log("The word is", word)

	shortlist = words.slice(Math.max(words.length - 3, 0));

	$("#last-3-words").empty();
	$.each(shortlist, function(index, value) {
		$("#last-3-words").append("<li>" + value + "</li>");
	});
}

function check_domain(){
	api_key_data = $("#api-key").val();
	domain_name_data = word + $("#domain").val();
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "check_api.php",
		data: { 
			api_key: api_key_data,
			domain_name: domain_name_data

		}
	}).done(function(return_data) {
		if(return_data.status == "success"){
			var phrase = " is NOT ";
			if(return_data.available){
				phrase = " IS ";
			}
			alert("The domain "+return_data.domain+phrase+"available.");
		}else{
			alert("The API request failed, please check your key, please check your key or try again later.");
		}
		
	}).fail(function() {
		alert("The API request failed, please check your key or try again later.");
	});
}

function spin_letters(){
	$(".js-letter-control").not(".held").each(function(){
		random_letter($(this));
	});
	log_word();
}

function add_letter(){
	$(".js-letter-control:first").clone().removeClass("held").appendTo("#letters");
	log_word();
}

function remove_letter(){
	$(".js-letter-control:last").remove();
	log_word();
}


function manual_edit($letter){
	var $input = $letter.find(".letter-input");
	var $h1 = $letter.find("h1");
	$input.val($h1.text());
	$letter.addClass("manual");
	$input.focus().select();

	$input.blur(function(){
		set_letter($letter, $h1, $input);
	});
	$input.keyup(function(){
		set_letter($letter, $h1, $input);
	});

}

function set_letter($letter, $h1, $input){
	$letter.removeClass("manual");
	$h1.text($input.val());
	log_word();
}

function random_letter($letter){
	var $letter;
	var $h1 = $letter.find(".letter");
	var pool_label = $letter.find(".type option:selected").val();
	var letter_pool = pool[pool_label];
	var marker = Math.floor(Math.random() * letter_pool.length);
	
	$h1.text(letter_pool[marker]);

}

$("#update-pool").click(function(){
	create_pool();
	$("#pool-wrap").toggleClass("shown");
});

$("#spin").click(function(){
	spin_letters();
});

$("#add-letter").click(function(){
	add_letter();
});

$("#api-key").change(function(){
	if($("#api-key").val() != ""){
		$("body").addClass("key-activated");
	}else{
		$("body").removeClass("key-activated");
	}
});

$("#remove-letter").click(function(){
	remove_letter();
});

$("#show-hide-pool").click(function(){
	$("#pool-wrap").toggleClass("shown");
});
$("#letters").on("click", ".hold", function(){
	$(this).closest(".js-letter-control").toggleClass("held");
});
$("#letters").on("click", ".nudge", function(){
	random_letter($(this).closest(".js-letter-control"));
	log_word();
});
$("#letters").on("click", "h1", function(){
	manual_edit($(this).closest(".js-letter-control"));
});
$("#show-all").click(function(){
	$("#all-words").val(words.join("\n"));
	$("#all-words-wrap").slideDown();
});

$("#check-domain").click(function(){
	check_domain();
});

$('.popup-modal').magnificPopup({
	type: 'inline',
	preloader: false,
	focus: '#username',
	modal: true
});
$(document).on('click', '.popup-modal-dismiss', function (e) {
	e.preventDefault();
	$.magnificPopup.close();
});

init();