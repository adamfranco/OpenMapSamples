"use strict";

import gjv from "../../node_modules/geojson-validation/index.js";
// const gjv = require("../node_modules/geojson-validation");

/**
 * An example Sample class with function definitions.
 */
export default class SimpleSample {

  constructor(center=[0.0, 0.0], zoom=1, geoJson=null) {
    this.setCenter(center);
    this.setZoom(zoom);
    if (geoJson) {
      this.setGeoJson(geoJson);
    } else {
      this.geoJson = null;
    }
  }

  /**
   * Return the starting location of this Sample as [lon, lat].
   *
   * @return {Array}
   */
  getCenter() {
    return this.center;
  }

  /**
   * Return the starting zoom level of this Sample.
   *
   * @return {float|int}
   */
  getZoom() {
    return this.zoom;
  }

  /**
   * Return the GeoJSON for this Sample.
   *
   * @return {object}
   */
  getGeoJson() {
    return this.geoJson;
  }

  /**
   * Set the starting location of this Sample as [lon, lat].
   *
   * @return {Array}
   */
  setCenter(center) {
    if (typeof center !== "object") {
      throw "center must be an Array of [lon, lat] format.";
    }
    if (typeof center[0] !== "number") {
      throw "center[0] must be a numeric longitude value.";
    }
    if (typeof center[1] !== "number") {
      throw "center[1] must be a numeric latitude value.";
    }
    this.center = center;
  }

  /**
   * Return the starting zoom level of this Sample.
   *
   * @param {number} zoom
   */
  setZoom(zoom) {
    if (typeof zoom !== "number" || zoom < 0) {
      throw "zoom must be a positive number.";
    }
    this.zoom = zoom;
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
