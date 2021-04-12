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
		monochrome: false
	},

	start: function () {
		var self = this;

		setInterval(() => {
			self.updateDom();
		}, this.config.interval * 60000);
	},

	getStyles: function () {
		let styles = ['MMM-Buienradar.css'];

		if (this.config.monochrome) {
			styles.push('MMM-Buienradar-monochrome.css')
		}

		return styles;
	},

	getDom: function () {
		var mapContainer = document.createElement('div');
		mapContainer.className = 'mapContainer';

		var zoom;

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
		frame.src = 'https://gadgets.buienradar.nl/gadget/zoommap/?lat=' + this.config.lat + '&lng=' + this.config.lon + '&overname=2&zoom=' + zoom + '&size=2b&voor=' + (this.config.forecast ? '1' : '0');
		mapContainer.appendChild(frame);

		return mapContainer;
	}
});
