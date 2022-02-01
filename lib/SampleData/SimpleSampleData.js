"use strict";

import gjv from "geojson-validation";

/**
 * An example Sample class with function definitions.
 */
export default class SimpleSampleData {

  constructor(geoJson=null) {
    if (geoJson) {
      this.setGeoJson(geoJson);
    } else {
      this.geoJson = null;
    }
  }

  /**
   * Return the GeoJSON for this Sample.
   *
   * @param {int} z The zoom level for which to fetch data. Some types
   *   of SampleData may return different data at different zooms.
   * @return {object}
   */
  getGeoJson(z) {
    return this.geoJson;
  }

  /**
   * Set the GeoJSON for this Sample.
   *
   * @param {object} geoJson
   */
  setGeoJson(geoJson) {
    if (gjv.valid(geoJson)) {
      this.geoJson = geoJson;
    } else {
      throw "Invalid geoJson: " + gjv.isFeature(geoJson, true);
    }
  }


}
