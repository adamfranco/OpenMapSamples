"use strict";

/**
 * An example Sample class with function definitions.
 */
export default class ExampleSample {

  /**
   * Return the starting location of this Sample as [lon, lat].
   *
   * @return {Array}
   */
  getCenter() {
    return [103.5, 0.0];
  }

  /**
   * Return the starting zoom level of this Sample.
   *
   * @return {number}
   */
  getZoom() {
    return 11;
  }

  /**
   * Return the GeoJSON for this Sample.
   *
   * @return {object}
   */
  getGeoJson() {
    return {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [102.0, 0.5]
           },
           "properties": {
             "prop0": "value0"
           }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [102.0, 0.0],
              [103.0, 1.0],
              [104.0, 0.0],
              [105.0, 1.0]
            ]
          },
          "properties": {
            "prop0": "value0",
            "prop1": 0.0
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [100.0, 0.0],
                [101.0, 0.0],
                [101.0, 1.0],
                [100.0, 1.0],
                [100.0, 0.0]
              ]
            ]
          },
          "properties": {
            "prop0": "value0",
            "prop1": {
              "this": "that"
            }
          }
        }
      ]
    };
  }

}
