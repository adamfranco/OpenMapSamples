"use strict";

export default class Sample {

  constructor(id, name, description = "", center=[0.0, 0.0], zoom=1) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.samples = [];
    this.setCenter(center);
    this.setZoom(zoom);
    this.layers = {};
  }

  /**
   * Answer the id of this sample.
   *
   * @return {string}
   */
  getId() {
    return this.id;
  }

  /**
   * Answer the name.
   *
   * @return {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Answer the description.
   *
   * @return {string}
   */
  getDescription() {
    return this.description;
  }

  /**
   * Set the starting location of this Sample as [lon, lat].
   *
   * @return {Array}
   */
  setCenter(center) {
    if (typeof center !== "object") {
      throw "center must be an Array of [lon, lat] format.";
    }
    if (typeof center[0] !== "number") {
      throw "center[0] must be a numeric longitude value.";
    }
    if (typeof center[1] !== "number") {
      throw "center[1] must be a numeric latitude value.";
    }
    this.center = center;
  }

  /**
   * Return the starting zoom level of this Sample.
   *
   * @param {number} zoom
   */
  setZoom(zoom) {
    if (typeof zoom !== "number" || zoom < 0) {
      throw "zoom must be a positive number.";
    }
    this.zoom = zoom;
  }

  /**
   * Return the starting location of this Sample as [lon, lat].
   *
   * @return {Array}
   */
  getCenter() {
    return this.center;
  }

  /**
   * Return the starting zoom level of this Sample.
   *
   * @return {float|int}
   */
  getZoom() {
    return this.zoom;
  }

  /**
   * Add a Layer to this Sample.
   *
   * Layers must implement the following functions:
   *
   *  getId()
   *    Return the layer-id of this layer. If mocking a data-source like
   *    OpenMapTiles, the id should match OMT's layer ids.
   *  getGeoJson()
   *    Return the GeoJSON data for this Layer.
   *
   * @param {object} Layer
   * @returns {object} Layer that was added.
   */
  addLayer(layer) {
    if (typeof layer.getId !== "function") {
      throw "Layers must implement getId().";
    }
    if (typeof layer.getGeoJson !== "function") {
      throw "Layers must implement getGeoJson().";
    }
    if (this.layers[layer.getId()]) {
      throw "A layer already exists with id: " + layer.getId();
    }

    this.layers[layer.getId()] = layer;
    return layer;
  }

  /**
   * Remove a layer from this Sample by id.
   *
   * @param {string} id
   */
  removeLayer(id) {
    if (!this.layers[id]) {
      throw "No layer exists with id: " + id;
    }
    delete this.layers[id];
  }

  /**
   * Get a layer from this Sample by id.
   *
   * @param {string} id
   */
  getLayer(id) {
    if (!this.layers[id]) {
      throw "No layer exists with id: " + id;
    }
    return this.layers[id];
  }

  /**
   * Answer true if this Sample has a Layer with this id.
   *
   * @param {string} id
   */
  hasLayer(id) {
    return (this.layers[id]);
  }

  /**
   * Return the registered layers.
   *
   * @return {object}
   */
  getLayers() {
    return this.layers;
  }

}
