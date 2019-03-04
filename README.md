# MMM-Buienradar

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

This module will show a map with the weather forecast provided by [Buienradar](https://www.buienradar.nl).

**Note:** Since this module uses [Buienradar](https://www.buienradar.nl), this module will only work for locations in the Netherlands & Belgium

## Installation
1. Navigate to your MagicMirror's modules folder, and run the following command: `git clone https://github.com/StefanNienhuis/MMM-Buienradar.git`
2. Add the module and a valid configuration to your `config/config.js` file

## Using the module

This is an example configuration for your `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: 'MMM-Buienradar',
            position: 'top_left',
            config: {
              lat: 52.1015474,
              lon: 5.1758052,
              zoom: 1,
              forecast: 1,
            }
        }
    ]
}
```

## Configuration options

| Option           | Description
|----------------- |-----------
| `lat`            | *Required* The latitude of the location
| `lon`            | *Required* The longitude of the location
| `zoom`           | *Optional* The zoom level of the map (1 - 4)<br>*Default*: 1
| `forecast`       | *Optional* Last hour overview (0), or three hour forecast (1)<br/>*Default*: 0
| `update`         | *Optional* update freqency in minutes, minimal 5 minutes<br/>*Default*: 30

## Screenshot

This is a screenshot with zoom level 3

![Screenshot on zoom level 2](https://github.com/StefanNienhuis/MMM-Buienradar/raw/master/Screenshot.png)
