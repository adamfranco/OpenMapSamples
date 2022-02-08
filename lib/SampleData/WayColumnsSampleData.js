"use strict";

import WayRowsSampleData from "./WayRowsSampleData.js";

/**
 * An example Sample class with function definitions.
 */
export default class WayColumnsSampleData extends WayRowsSampleData {

  constructor(columns, rows, center) {
    super(rows, columns, center);
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
    return this.getStartLat(row, column, zoom) - this.getRowHeight(zoom, row, this.rows.length);
  }

  /**
   * Answer the offset from center for column.
   *
   * @param {int} column
   *
   * @return {int} The offset, with 0 as the center.
   */
  getColumnOffset(column) {
    const center = this.columns.length / 2;
    return column - center;
  }

  /**
   * Answer the offset from center for row.
   *
   * @param {int} row
   *
   * @return {int} The offset, with 0 as the center.
   */
  getRowOffset(row) {
    const center = this.rows.length / 2;
    return (row - center) * -1;
  }

  /**
   * Answer the width of columns at a given zoom in degrees.
   *
   * @param {int} zoom
   *
   * @return {float} The column width
   */
  getColumnWidth(zoom, column, numColumns) {
    if (typeof this.columnWidthCallback == "function") {
      return this.columnWidthCallback(zoom, column, numColumns);
    }
    return 20 / numColumns / Math.pow(2, zoom - 4);
  }

  /**
   * Answer the width of columns at a given zoom in degrees.
   *
   * @param {int} zoom
   *
   * @return {float} The column width
   */
  getRowHeight(zoom, row, numRows) {
    if (typeof this.rowHeightCallback == "function") {
      return this.rowHeightCallback(zoom, row, numRows);
    }
    return 30 / numRows / Math.pow(2, zoom - 4);
  }

}
