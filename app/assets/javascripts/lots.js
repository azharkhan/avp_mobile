var ip = 'http://192.168.137.37/'

$(document).on('click', '#car_park_button', function () {
	var bay_number = $('#bay_number').val();
	$.ajax({
		type: 'GET',
		data: bay_number,
		dataType: 'jsonp',
		url: ip
	});
});

$(document).on('click', '#car_retrieve_button', function () {
	var ticket_number = $('#ticket_number').val();
	$.ajax({
		type: 'GET',
		data: ticket_number,
		dataType: 'jsonp',
		url: ip
	});
});

$(document).on('click', '#park_button', function () {
	$.ajax({
		type: 'GET',
		data: 'p',
		dataType: 'jsonp',
		url: ip
	});
});

$(document).on('click', '#retrieve_button', function () {
	$.ajax({
		type: 'GET',
		data: 'r',
		dataType: 'jsonp',
		url: ip
	});
});