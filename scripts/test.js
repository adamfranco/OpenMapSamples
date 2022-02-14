"use strict";

import {default as OpenMapTilesSamples} from "../samples/OpenMapTiles/index.js";
import gjv from "geojson-validation";

// console.log(OpenMapTilesSamples);
// console.log(OpenMapTilesSamples[0].getLayer('transportation').getGeoJson(12)['features'][2]['geometry']);

// Ensure that all samples layers with valid names and GeoJSON.
OpenMapTilesSamples.forEach((sample, i) => {
  console.log('Validating ' + sample.getName() + '...');
  if (sample.getId().length < 1) {
    console.log(sample);
    throw "sample.getID() must return a non-empty string. Got: " + sample.getId();
  }

  if (sample.getName().length < 1) {
    console.log(sample);
    throw "sample.getName() must return a non-empty string. Got: " + sample.getName();
  }

  const zoomVariants = sample.getZoomVariants();
  const zoomVariantZooms = Object.keys(zoomVariants);
  if (zoomVariantZooms.length < 1) {
    console.log(zoomVariants);
    throw "sample.getZoomVariants() must return a non-empty map. Got: " + sample.getZoomVariants();
  }

  const layers = sample.getLayers();
  const layerIds = Object.keys(layers);
  if (layerIds.length < 1) {
    console.log(layers);
    throw "sample.getLayers() should return a non-empty array.";
  }

  // Check each layer at each zoom variant to ensure that they return valid GeoJSON.
  layerIds.forEach((layerId, i) => {
    const layer = sample.getLayer(layerId);
    zoomVariantZooms.forEach((z, i) => {
      if (!gjv.valid(layer.getGeoJson(z))) {
        console.log(layer.getGeoJson(z));
        throw "layer.getGeoJson(z) must return valid GeoJSON. Got: " + gjv.isFeature(layer.getGeoJson(z), true);
      }
    });
  });
});

console.log("Tests completed successfully.");
