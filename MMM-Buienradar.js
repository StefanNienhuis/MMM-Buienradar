/* Magic Mirror
 * Module: MMM-Buienradar
 *
 * By stefannienhuis
 * ISC Licensed.
 */

Module.register("MMM-Buienradar", {
	defaults: {
		lat: 52.1015474, // Latitude (De Bilt)
		lon: 5.1758052, // Longitude (De Bilt)
		forecast: true, // Three hour forecast (true) or last hour overview (false)
		zoom: 1, // Map zoom level
		interval: 10, // Update interval (in minutes)
		grayscale: 0, // To use a grayscale filter, set this value between 90 to 100 for optimal results, and a lower value also produces a less bright color image.
		displaysize: "mediumlarge" // Can be "small", "mediumsmall" "mediumlarge", "large"
	},
	
	start: function() {
		var self = this;

		setInterval(() => {
			self.updateDom();
		}, this.config.interval * 60000);
	},

	getStyles: function() {
		return ['MMM-Buienradar.css']
	},

	getDom: function() {
		var mapContainer = document.createElement('div');
		mapContainer.className = 'mapContainer';
		var zoom;
		var size;

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
		if (this.config.grayscale > 0) frame.style.filter = "grayscale(" + this.config.grayscale + "%)";
		frame.className = 'map';
		if (this.config.displaysize === "small") {
			frame.width = '120';
			frame.height = '200';
			size = '1';
		} else if (this.config.displaysize === "mediumsmall") {
			frame.width = '256';
			frame.height = '256';
			size = '2';
		} else if (this.config.displaysize === "large") {
			frame.width = '550';
			frame.height = '512';
			size = '3';
		} else { // default to mediumlarge
			frame.width = '330';
			frame.height = '330';
			size = '2b';
		}
		frame.src = 'https://gadgets.buienradar.nl/gadget/zoommap/?lat=' + this.config.lat + '&lng=' + this.config.lon + '&overname=2&zoom=' + zoom + '&size=' + size + '&voor=' + (this.config.forecast ? '1' : '0');
		mapContainer.appendChild(frame);

    return mapContainer;
	}
});
