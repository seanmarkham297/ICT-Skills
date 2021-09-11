'use strict';

const maxmin = {
  getMinTemp(station) {
    let minTemp = null;
    if (station.readings.length > 0) {
      minTemp = station.readings[i].temp;
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temp < minTemp.temp) {
          minTemp = station;
        }
      }
    }
    return minTemp;
  },

  getMaxTemp(station) {
    let maxTemp = null;
    if (station.readings.length > 0) {
      maxTemp = station.readings[i].temp;
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temp > maxTemp.temp) {
          maxTemp = station;
        }
      }
    }
    return maxTemp;
  }
}

module.exports = maxmin;