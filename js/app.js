$(document).ready(function() {
	let hiddenCardWrapper = document.querySelector(".card-wrapper").setAttribute("hidden", "");
	$('#submit-weather').click(function(){
		document.querySelector(".card-wrapper").removeAttribute("hidden");
		let city = $('#city').val();
	
	if(city != '') {

		$.ajax('http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + 
			"&APPID=a8eb3bb7297afc2d6356acc7f8cff8fe").done(function(resp) {
				const temp = Math.floor(resp.main.temp);
				const timeSunrise = new Date(resp.sys.sunrise * 1000);
				const timeSunset = new Date(resp.sys.sunset * 1000);
				const sunrise_Hour = timeSunrise.getHours() + 'h';
				const sunrise_Min = timeSunrise.getMinutes() + 'min';
				const sunset_Hour = timeSunset.getHours() + 'h';
				const sunset_Min = timeSunset.getMinutes() + 'min';
				const sunriseMain = sunrise_Hour + ' ' + sunrise_Min;
				const sunsetMain = sunset_Hour + ' ' + sunset_Min;
				console.log(resp);				
				$(".card-lviv .card-temp").text(temp);
				$(".card-header").text(city);
				$(".card-info-sunrise").text(sunriseMain);			 
				$(".card-info-sunset").text(sunsetMain);
			if (resp.weather[0].main = 'Clear') {
				console.log('Солнечно!');
			} else if (resp.weather[0].main = 'Rain') {
				console.log('Дождь!');
			} else {
				
			}
							 
			});
				 
	} else{
			$('#error').html('Введите название города');
		}		
	});
});
