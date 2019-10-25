$(document).ready(function() {
	$('#submit-weather').click(function(){
		let city = $('#city').val();
	
	if(city != '') {

		$.ajax({

			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + 
				 "&APPID=a8eb3bb7297afc2d6356acc7f8cff8fe",
			type: "GET",
			dataType: "jsonp",
			success: function(data){
				console.log(data);
			}
		});

		}else{
			$('#error').html('Введите название города');
		}
	});
});

