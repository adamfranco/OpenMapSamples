"use strict";

/**
 * An example Sample class with function definitions.
 */
export default class ExampleSampleData {

  constructor() {

  }

  /**
   * Return the GeoJSON for this SampleData.
   *
   * @param {int} z The zoom level for which to fetch data. Some types
   *   of SampleData may return different data at different zooms.
   * @return {object}
   */
  getGeoJson(z) {
    return {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-100.0, 40.0]
           },
           "properties": {
             'title': 'Example City Title',
             "name": "Example City",
             "name_en": "Example City",
             "name:en": "Example City",
             "capital": 2,
             "class": "city",
             "iso_a2": "US",
             "rank": 1,
           }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-100.1, 40.1]
           },
           "properties": {
             'title': 'Second City Title',
             "name": "Second City",
             "name_en": "Second City",
             "name:en": "Second City",
             "capital": 2,
             "class": "city",
             "iso_a2": "US",
             "rank": 1,
           }
        }
      ]
    };
  }

}
