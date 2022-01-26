"use strict";

/**
 * An example Sample class with function definitions.
 */
export default class ExampleSample {

  constructor() {

  }

  /**
   * Return the starting location of this Sample as [lon, lat].
   *
   * @return {Array}
   */
  getCenter() {
    return [-100.85664, 39.71282];
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
          "id": "place",
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [-100.85664, 39.71282]
               },
               "properties": {
                 'title': 'Example City Title',
                 "name": "Example City",
                 "name_en": "Example City",
                 "capital": 2,
                 "class": "city",
                 "iso_a2": "US",
                 "rank": 10,
               }
            }
          ]
        }
      ]
    };
  }

}
