function initMap() {
	// Specify the location of the University of Northampton
	var uon = {lat: 52.2379, lng: -0.9027};
	
	// Create a new Google Map centered on the University of Northampton
	var map = new google.maps.Map(document.getElementById('map'), {
		center: uon,
		zoom: 14
	});
	
	// Add a pointer at the location of the University of Nottingham with the UoN logo
	var marker = new google.maps.Marker({
		position: uon,
		map: map,
		title: 'University of Northampton',
		icon: {
			url: 'Uon-logo.png',
			scaledSize: new google.maps.Size(50, 50)
		}
	});
}