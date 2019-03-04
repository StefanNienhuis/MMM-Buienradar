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
    zoom: 1, // 4: city, 3: region, 2: province, 1: country
    forecast: 0, // 0: last hour overview, 1: 3 hour forecast. Default is 0 for backwards compatibility.
    update:  30, // updates every <update> minutes
  },

	getScripts: function() {
    return ['https://www.amcharts.com/lib/3/amcharts.js', 'https://www.amcharts.com/lib/3/serial.js', 'https://www.amcharts.com/lib/3/themes/light.js']
  },

  getStyles: function() {
    return ['MMM-Buienradar.css']
  },

  start: function() {
    Log.info("Starting module: " + this.name);

    // some sanity checks
    if (this.config.update < 5) {
        Log.error(this.name + ": invalid or too low value for 'update' ('" + this.config.update + "')," +
                              " now using default ('" + this.defaults.update + "')");
        this.config.update = this.defaults.update;
    }

    if (this.config.forecast != 0 && this.config.forecast != 1) {
        Log.error(this.name + ": invalid value for 'forecast' ('" + this.config.forecast + "')," +
                              " now using default ('" + this.defaults.forecast + "')");
        this.config.forecast = this.defaults.forecast;
    }
    this.config.forecast = this.config.forecast ? 1 : 0;   // to convert true and false

    // schedule updates
    var self = this;
    setInterval(function() { self.updateDom(); }, this.config.update * 60 * 1000);
  },

  getDom: function() {
    var mapContainer = document.createElement('div');
    mapContainer.className = 'mapContainer';

		var zoom;

		//console.error(this.config.zoom);

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
		frame.src = 'https://gadgets.buienradar.nl/gadget/zoommap/?lat=' + this.config.lat + '&lng=' + this.config.lon +
                    '&overname=2&zoom=' + zoom + '&size=2b&voor=' + this.config.forecast;
		mapContainer.appendChild(frame);

    return mapContainer;
  }
});
