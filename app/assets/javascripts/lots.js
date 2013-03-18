var ip = 'http://192.168.137.37/'

$(document).on('click', '#park_button', function () {
	var bay_number = $('#bay_number').val();
	$.ajax({
		type: 'GET',
		data: bay_number,
		dataType: 'jsonp',
		url: ip+'p/'
	});
});

$(document).on('click', '#retrieve_button', function () {
	var ticket_number = $('#ticket_number').val();
	$.ajax({
		type: 'GET',
		data: ticket_number,
		dataType: 'jsonp',
		url: ip+'r/'
	});
});