"use strict";

export default class Layer {

  constructor(id) {
    this.id = id;
    this.sampleData = [];
  }

  /**
   * Answer the id of this sample.
   *
   * @return {string}
   */
  getId() {
    return this.id;
  }

  /**
   * Add sample data to this layer.
   *
   * Data must implement the following functions:
   *
   *  getGeoJson()
   *    Return the GeoJSON data from this SampleData.
   *
   * @param {object} SampleData
   * @returns {object} SampleData that was added.
   */
  addSampleData(sampleData) {
    if (typeof sampleData.getGeoJson !== "function") {
      throw "Samples must implement getGeoJson().";
    }
    this.sampleData.push(sampleData);
    return sampleData;
  }

  /**
   * Return the registered samples.
   *
   * @return {Array}
   */
  getSampleData() {
    return this.sampleData;
  }

  /**
   * Return the GeoJSON for all SampleData in this layer.
   *
   * Note: The outer FeatureCollection will be stripped and the inner Features
   * combined to create a single valid GeoJSON object.
   *
   * @param {int} z The zoom level for which to fetch data.
   * @return {object}
   */
  getGeoJson(z) {
    var features = [];
    this.sampleData.forEach((sampleData) => {
      sampleData.getGeoJson(z)['features'].forEach((feature, i) => {
        features.push(feature);
      });
    });
    return {
      "type": "FeatureCollection",
      "features": features
    };
  }

}
