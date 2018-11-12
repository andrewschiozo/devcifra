$(function(){
	loadMenu();

	 //Search
	$("#pesquisar").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$(".list-group li").filter(function() {
		  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	// On menu item click
	$('#menu').on('click', '.nav-item', function(data){
		loadView($(this).attr('file'), $('#content'));
		$('#btnMenu').trigger('click');
	});

	//On list item click
	$('#content').on('click', '.list-group > li', function(data){
		loadView($(this).attr('file'), $('#content'));
	});
});

function loadView(viewName, target)
{
	$.get(viewName, function(response){target.html(response)})
}

function loadMenu()
{
	$.get('data/menu.json', function(response){
		$.each(response, function(index, value){
			var link = $('<a></a>');
			link.addClass('nav-link');
			link.attr('href', '#');
			link.text(value.name);

			var item = $('<li></li>');
			item.addClass('nav-item');
			item.attr('file', value.file);
			item.append(link);

			$('#menu').append(item);
		})
	});
}

function loadCifras()
{
	$.get('data/cifra.json', function(response){
	    $.each(response, function(index, value){
	    	var item = $('<li></li>');
	    	item.addClass('list-group-item');
	    	item.addClass('list-group-item-action');
	    	item.attr('file', value.file);
	    	item.text(value.artist + ' - ' + value.title);
	    	$('#cifras').append(item);
   		});
	});
}

function loadRepertorios()
{	
	$.get('data/repertorio.json', function(response){
	    $.each(response, function(index, value){
	    	var item = $('<li></li>');
	    	item.addClass('list-group-item');
	    	item.addClass('list-group-item-action');
	    	item.attr('file', value.file);
	    	item.text(value.title);
	    	$('#repertorios').append(item);
	    });
	});
}
