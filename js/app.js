$(document).ready(function() {
	$('#submit-weather').click(function(){
		let city = $('#city').val();
	
	if(city != '') {

		$.ajax('http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + 
				 "&APPID=a8eb3bb7297afc2d6356acc7f8cff8fe").done(function(resp) {
					 let temp = resp.weather.main;
					 console.log(resp.timezone)
				 })

	} else{
			$('#error').html('Введите название города');
		}
	});
});

