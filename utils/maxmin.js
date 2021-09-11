'use strict';

const maxmin = {
  getMinTemp(station) {
    let minTemp = null;
    if (station.readings.length > 0) {
      minTemp = station.readings[0].temp;
      for (let i = 1; i < station.readings.length; i++) {
        if (parseFloat(station.readings[i].temp) < minTemp) {
          minTemp = station.readings[i].temp;
        }
      }
    }
    return minTemp;
  },

  getMaxTemp(station) {
    let maxTemp = null;
    if (station.readings.length > 0) {
      maxTemp = station.readings[0].temp;
      for (let i = 1; i < station.readings.length; i++) {
        if (parseFloat(station.readings[i].temp) > maxTemp) {
          maxTemp = station.readings[i].temp;
        }
      }
    }
    return maxTemp;
  },

    getMinPressure(station) {
      let minPressure = null;
      if (station.readings.length > 0) {
        minPressure = station.readings[0].pressure;
        for (let i = 1; i < station.readings.length; i++) {
          if (parseFloat(station.readings[i].pressure) < minPressure) {
            minPressure = station.readings[i].pressure;
          }
        }
      }
      return minPressure;
    },

    getMaxPressure(station) {
      let maxPressure = null;
      if (station.readings.length > 0) {
        maxPressure = station.readings[0].pressure;
        for (let i = 1; i < station.readings.length; i++) {
          if (parseFloat(station.readings[i].pressure) > maxPressure) {
            maxPressure = station.readings[i].pressure;
          }
        }
      }
      return maxPressure;
    },

  getMinWindSpeed(station) {
    let minWindSpeed = null;
    if (station.readings.length > 0) {
      minWindSpeed = station.readings[0].windspeed;
      for (let i = 1; i < station.readings.length; i++) {
        if (parseFloat(station.readings[i].windspeed) < minWindSpeed) {
          minWindSpeed = station.readings[i].windspeed;
        }
      }
    }
    return minWindSpeed;
  },

  getMaxWindSpeed(station) {
    let maxWindSpeed = null;
    if (station.readings.length > 0) {
      maxWindSpeed = station.readings[0].windspeed;
      for (let i = 1; i < station.readings.length; i++) {
        if (parseFloat(station.readings[i].windspeed) > maxWindSpeed) {
          maxWindSpeed = station.readings[i].windspeed;
        }
      }
    }
    return maxWindSpeed;
  }

}

module.exports = maxmin;