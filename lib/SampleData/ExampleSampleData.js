"use strict";

/**
 * An example Sample class with function definitions.
 */
export class ExamplePlaceData {

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
             "name:latin": "Example City",
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
             "name:latin": "Second City",
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


/**
 * An example Sample class with function definitions.
 */
export class ExampleTransportationData {

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
            "type": "LineString",
            "coordinates": [
              [-103.1, 40.3],
              [-100.1, 40.1],
              [-99.9, 39.8],
            ]
           },
           "properties": {
             "class": "trunk",
             "oneway": 0,
             "ramp": 0,
             "surface": "paved",
             "name": "Captain Picard Highway",
             "name_en": "Captain Picard Highway",
             "name:latin": "Captain Picard Highway",
             "ref": "999",
             "network": "us-highway",
           }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [-99.9, 40.1],
              [-100.1, 39.9],
            ]
           },
           "properties": {
             "class": "primary",
             "oneway": 0,
             "ramp": 0,
             "surface": "paved",
             "name": "Captain Kirk Highway",
             "name_en": "Captain Kirk Highway",
             "name:latin": "Captain Kirk Highway",
             "ref": "998",
             "network": "us-highway",
           }
        },
      ]
    };
  }

}
