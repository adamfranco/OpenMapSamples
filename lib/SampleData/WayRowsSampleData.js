"use strict";

import Grid from "./Grid.js";

/**
 * An example Sample class with function definitions.
 */
export default class WayRowsSampleData extends Grid {

  constructor(rows, columns, center) {
    super(rows, columns, center);
    this.rowHeightMultiplier = 20;
    this.columnWidthMultiplier = 36;
  }

  /**
   * Answer the feature geometry for the cell in our grid.
   *
   * @param {int} row The row index.
   * @param {int} column The column index.
   * @param {int} zoom The zoom level we're building for.
   *
   * @return {object} The GeoJSON geometry.
   */
  getFeatureGeometry(row, column, zoom) {
    return {
      "type": "LineString",
      "coordinates": [
        [this.getStartLon(row, column, zoom), this.getStartLat(row, column, zoom)],
        [this.getEndLon(row, column, zoom), this.getEndLat(row, column, zoom)],
      ]
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
  getStartLon(row, column, zoom) {
    return this.center[0] + (this.getColumnOffset(column) * this.getColumnWidth(zoom, column, this.columns.length));
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
    return this.getStartLon(row, column, zoom) + this.getColumnWidth(zoom, column, this.columns.length);
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
  getStartLat(row, column, zoom) {
    return this.center[1] + (this.getRowOffset(row) * this.getRowHeight(zoom, row, this.rows.length));
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
    return this.getStartLat(row, column, zoom);
  }

}
