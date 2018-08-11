/* Magic Mirror
 * Module: MMM-Buienradar
 *
 * By stefannienhuis
 * ISC Licensed.
 */

Module.register("MMM-Buienradar", {
	defaults: {
    lat: 52.1015474, // latitude
    lon: 5.1758052, // longitude
    zoom: 1 // 4: city, 3: region, 2: province, 1: country
  },

	getScripts: function() {
    return ['https://www.amcharts.com/lib/3/amcharts.js', 'https://www.amcharts.com/lib/3/serial.js', 'https://www.amcharts.com/lib/3/themes/light.js']
  },

  getStyles: function() {
    return ['MMM-Buienradar.css']
  },

  getDom: function() {
    var mapContainer = document.createElement('div');
    mapContainer.className = 'mapContainer';

		var zoom;

		console.error(this.config.zoom);

		switch (this.config.zoom) {
			case 4:
				zoom = 13;
				break;
			case 3:
				zoom = 11;
				break;
			case 2:
				zoom = 8;
				break;
			case 1:
				zoom = 6;
				break;
			default:
				zoom = 6;
				break;
		}

		var frame = document.createElement('iframe');
		frame.className = 'map';
		frame.src = 'https://gadgets.buienradar.nl/gadget/zoommap/?lat=' + this.config.lat + '&lng=' + this.config.lon + '&overname=2&zoom=' + zoom + '&size=2b&voor=0';
		mapContainer.appendChild(frame);

    return mapContainer;
  }
});
