"use strict";

/**
 * An example Sample class with function definitions.
 */
export default class RemovePropertiesTransformation {

  constructor(sampleData, propertiesToRemove = []) {
    this.sampleData = sampleData;
    this.propertiesToRemove = propertiesToRemove;
  }

  /**
   * Return the GeoJSON for this Sample.
   *
   * @param {int} z The zoom level for which to fetch data. Some types
   *   of SampleData may return different data at different zooms.
   * @return {object}
   */
  getGeoJson(z) {
    var geoJson = this.sampleData.getGeoJson(z);
    geoJson['features'].forEach((feature) => {
      this.removePropertiesInFeature(feature);
    });
    return geoJson;
  }

  removePropertiesInFeature(feature) {
    // Copy the values of mapped properties to all target keys.
    if (this.propertiesToRemove.length) {
      this.propertiesToRemove.forEach((key) => {
        if (feature['properties'][key]) {
          delete feature['properties'][key];
        }
      });
    }
  }
}
