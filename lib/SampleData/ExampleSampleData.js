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
    };
  }

}
