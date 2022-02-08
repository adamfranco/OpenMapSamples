"use strict";

import Sample from "../lib/Sample.js";
import Layer from "../lib/Layer.js";
import { ExamplePlaceData, ExampleTransportationData } from "../lib/SampleData/ExampleSampleData.js";
import SimpleSampleData from "../lib/SampleData/SimpleSampleData.js";
import {default as OpenMapTilesSamples} from "../samples/OpenMapTiles/index.js";

// Create a new set to hold some samples.
var sample = new Sample("Test", "This is a test samples.");
var placeLayer = sample.addLayer(new Layer('place'));

// Create a Sample and add it to the set.
var exampleSampleData = new ExamplePlaceData();
placeLayer.addSampleData(exampleSampleData);

// Create a SimpleSample and set its GeoJSON.
var simpleSampleData = placeLayer.addSampleData(new SimpleSampleData());
simpleSampleData.setGeoJson(exampleSampleData.getGeoJson(12));

// Make sure the SimpleSample validates its GeoJSON.
try {
  simpleSampleData.setGeoJson({});
  console.log("Error: Should not have reached this point.");
} catch (e) {
  console.log("Succesfully caught invalid GeoJSON.");
  console.log("\t" + e);
}

var placeLayer2 = sample.getLayer('place');
console.log(placeLayer2.getGeoJson(10));

// Register some zoom variants.
console.log(sample.getZoomVariants());
sample.setZoomVariant(6, [-101, 39]);
console.log(sample.getZoomVariants());

console.log(OpenMapTilesSamples);
console.log(OpenMapTilesSamples[0].getLayer('transportation').getGeoJson(12)['features'][2]['geometry']);
