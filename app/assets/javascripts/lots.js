var ip = 'http://192.168.137.37/'

$(document).on('click', '#car_park_button', function () {
	var bay_number = $('#bay_number').val();
	$.ajax({
		type: 'POST',
		data: bay_number,
		dataType: 'jsonp',
		url: ip
	});
	$('#park_result').html('<h1 style="text-align: center;">Your Car is being Parked, Please Exit the Parking Lot...</h1>');
});

$(document).on('click', '#car_retrieve_button', function () {
	var ticket_number = $('#ticket_number').val();
	$.ajax({
		type: 'POST',
		data: ticket_number,
		dataType: 'jsonp',
		url: ip
	});
	$('#retrieve_result').html('<h1 style="text-align: center;">Your Car is being Fetched, Kindly Wait at the Exit Area...</h1>');
});

$(document).on('click', '#park_button', function () {
	$.ajax({
		type: 'POST',
		url: ip,
		data: 'p',
		dataType: 'jsonp'
	});
});

$(document).on('click', '#retrieve_button', function () {
	$.ajax({
		type: 'POST',
		data: 'r',
		dataType: 'jsonp',
		url: ip
	});
});