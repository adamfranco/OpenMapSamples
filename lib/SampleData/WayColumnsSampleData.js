"use strict";

import WayRowsSampleData from "./WayRowsSampleData.js";

/**
 * An example Sample class with function definitions.
 */
export default class WayColumnsSampleData extends WayRowsSampleData {

  constructor(columns, rows, center) {
    super(rows, columns, center);
    this.rowHeightMultiplier = 30;
    this.columnWidthMultiplier = 20;
  }

  /**
   * Return the GeoJSON for this Sample.
   *
   * @param {int} z The zoom level for which to fetch data. Some types
   *   of SampleData may return different data at different zooms.
   * @return {object}
   */
  getGeoJson(z) {
    var features = [];
    for (const j in this.columns) {
      for (const i in this.rows) {
        features.push(this.getFeature(i, j, z));
      }
    }
    return {
      "type": "FeatureCollection",
      "features": features,
    };
  }

  /**
   * Answer the feature properties for the cell in our grid.
   *
   * @param {int} row The row index.
   * @param {int} column The column index.
   * @param {int} zoom The zoom level we're building for.
   *
   * @return {object} The GeoJSON properties.
   */
  getFeatureProperties(row, column, zoom) {
    return {
      ...this.columns[column],
      ...this.rows[row],
    };
  }

  /**
   * Answer the feature geometry for the cell in our grid.
   *
   * @param {int} row The row index.
   * @param {int} column The column index.
   * @param {int} zoom The zoom level we're building for.
   *
   * @return {fload} The longitude coordinate.
   */
  getEndLon(row, column, zoom) {
    return this.getStartLon(row, column, zoom);
  }

  /**
   * Answer the feature geometry for the cell in our grid.
   *
   * @param {int} row The row index.
   * @param {int} column The column index.
   * @param {int} zoom The zoom level we're building for.
   *
   * @return {float} The latitude coordinate.
   */
  getEndLat(row, column, zoom) {
    return this.getStartLat(row, column, zoom) - this.getRowHeight(zoom, row, this.rows.length);
  }

}
