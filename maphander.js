	    var map;
		function initialize() {
		  // Create a simple map.
		  map = new google.maps.Map(document.getElementById('display'), {
		    zoom: 13,
		    center: {lat: 45.47, lng: 9.18}
		  });
		
		  // Load a GeoJSON from the same server as our demo.
		  map.data.loadGeoJson('milan_trans.json');
		  map.data.setStyle({
		  	strokeColor: 'green',
		  	strokeWeight: 3
		  });
		  
		  map.data.addListener('mouseover', function(event) {
    	  document.getElementById('info-box').textContent =
        	event.feature.getProperty('OSMID');
  		 });
		  
		}
	
		google.maps.event.addDomListener(window, 'load', initialize);    
		
		