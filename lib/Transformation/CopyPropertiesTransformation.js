"use strict";

/**
 * An example Sample class with function definitions.
 */
export default class CopyPropertiesTransformation {

  constructor(sampleData, propertyMapping = {}) {
    this.sampleData = sampleData;
    this.propertyMapping = propertyMapping;
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
      this.copyPropertiesInFeature(feature);
    });
    return geoJson;
  }

  copyPropertiesInFeature(feature) {
    // Copy the values of mapped properties to all target keys.
    if (this.propertyMapping) {
      for (const key in this.propertyMapping) {
        if (feature['properties'][key]) {
          const targets = this.propertyMapping[key];
          targets.forEach((target) => {
            feature['properties'][target] = feature['properties'][key];
          });
        }
      }
    }
  }
}
