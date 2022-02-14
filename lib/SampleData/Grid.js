"use strict";

/**
 * An example Sample class with function definitions.
 */
export default class Grid {

  constructor(rows, columns, center) {
    this.rows = rows;
    this.columns = columns;
    this.center = center;

    this.rowHeightMultiplier = 20;
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
    for (const i in this.rows) {
      for (const j in this.columns) {
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
      ...this.rows[row],
      ...this.columns[column],
    };
  }

  /**
   * Answer a feature for cell in our grid.
   *
   * @param {int} row The row index.
   * @param {int} column The column index.
   * @param {int} zoom The zoom level we're building for.
   *
   * @return {object} The GeoJSON feature.
   */
  getFeature(row, column, zoom) {
    return {
      "type": "Feature",
      "geometry": this.getFeatureGeometry(row, column, zoom),
      "properties": this.getFeatureProperties(row, column, zoom),
    };
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
    return this.columnWidthMultiplier / numColumns / Math.pow(2, zoom - 4);
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
    return this.rowHeightMultiplier / numRows / Math.pow(2, zoom - 4);
  }

  /**
   * Set a callback function to customize the width of columns for this instance.
   *
   * @param {function} callback The callback will be called with zoom and number of columns.
   */
  setColumnWidthCallback(callback) {
    if (typeof callback !== "function") {
      throw "Callback must be a function.";
    }
    this.columnWidthCallback = callback;
  }

  /**
   * Set a callback function to customize the height of rows for this instance.
   *
   * @param {function} callback The callback will be called with:
   * zoom and number of rows.
   */
  setRowHeightCallback(callback) {
    if (typeof callback !== "function") {
      throw "Callback must be a function.";
    }
    this.rowHeightCallback = callback;
  }

}
