# MMM-Buienradar

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

This module will show a map with weather the forecast provided by [Buienradar](https://www.buienradar.nl).

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
              zoom: 1
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
