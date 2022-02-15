"use strict";

import Grid from "./Grid.js";

/**
 * An example Sample class with function definitions.
 */
export default class PointRowsSampleData extends Grid {

  constructor(rows, columns, center) {
    super(rows, columns, center);
    this.rowHeightMultiplier = 40;
    this.columnWidthMultiplier = 40;
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
      "type": "Point",
      "coordinates": [
        this.getLon(row, column, zoom), this.getLat(row, column, zoom),
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
  getLon(row, column, zoom) {
    return this.center[0] + (this.getColumnOffset(column) * this.getColumnWidth(zoom, column, this.columns.length));
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
  getLat(row, column, zoom) {
    return this.center[1] + (this.getRowOffset(row) * this.getRowHeight(zoom, row, this.rows.length));
  }

}
