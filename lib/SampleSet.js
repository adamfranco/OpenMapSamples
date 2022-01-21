"use strict";

export default class SampleSet {

  constructor(name, description = "") {
    this.name = name;
    this.description = description;
    this.samples = [];
  }

  /**
   * Answer the name.
   *
   * @return {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Answer the description.
   *
   * @return {string}
   */
  getDescription() {
    return this.description;
  }

  /**
   * Add a Sample to this set.
   *
   * Samples must implement the following functions:
   *
   *  getCenter()
   *    Return the starting location an array of floating
   *    point longitude and latitude: [lon, lat]
   *  getZoom()
   *    Return the starting zoom as floating point number.
   *  getGeoJson()
   *    Return the GeoJSON data from this Sample.
   *
   * @param {object} sample
   * @returns {void}
   */
  addSample(sample) {
    if (typeof sample.getCenter !== "function") {
      throw "Samples must implement getCenter().";
    }
    if (typeof sample.getZoom !== "function") {
      throw "Samples must implement getZoom().";
    }
    if (typeof sample.getGeoJson !== "function") {
      throw "Samples must implement getGeoJson().";
    }

    this.samples.push(sample);
  }

  /**
   * Return the registered samples.
   *
   * @return {Array}
   */
  getSamples() {
    return this.samples;
  }

}
