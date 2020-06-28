# MMM-Buienradar

This is a module for [MagicMirror²](https://github.com/MichMich/MagicMirror/).

This module will show a map with the weather data provided by [Buienradar](https://www.buienradar.nl).

**Note:** Since this module uses [Buienradar](https://www.buienradar.nl), it'll only work for locations in the Netherlands & Belgium

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
              forecast: true,
              zoom: 1,
              interval: 10,
              grayscale: 0,
              displaysize: "mediumlarge"
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
| `forecast`       | *Optional* Three hour forecast (true) or last hour overview (false)<br>*Default:* true
| `zoom`           | *Optional* The zoom level of the map.<br>*Possible values:* 1-4<br>*Default:* 1
| `interval`       | *Optional* The update interval of the map in minutes<br>*Default:* 10
| `grayscale`      | *Optional* Set a grayscale filter.<br>*Possible values:* 0-100, grayscale is best at 90-100, use a lower value for a less bright color image.<br>*Default:* 0 (=off)
| `displaysize`    | *Optional* The displaysize of the frame.<br>*Possible values:* `"small"`, `"mediumsmall"`, `"mediumlarge"`, `"large"`<br>*Default:* `"mediumlarge"`

## Screenshot

This is a screenshot with zoom level 3

![Screenshot on zoom level 3](https://github.com/StefanNienhuis/MMM-Buienradar/raw/master/Screenshot.png)

