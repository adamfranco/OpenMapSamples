"use strict";

import SampleSet from "../lib/SampleSet.js";
import ExampleSample from "../lib/Sample/ExampleSample.js";
import SimpleSample from "../lib/Sample/SimpleSample.js";

// Create a new set to hold some samples.
var set = new SampleSet("Test", "This is a test set of samples.");

// Create a Sample and add it to the set.
var exampleSample = new ExampleSample();
set.addSample(exampleSample);

// Create a SimpleSample and set its GeoJSON.
var simpleSample = new SimpleSample([100.3, 0], 12);
simpleSample.setGeoJson(exampleSample.getGeoJson());
set.addSample(simpleSample);

// Make sure the SimpleSample validates its GeoJSON.
try {
  simpleSample.setGeoJson({});
  console.log("Error: Should not have reached this point.");
} catch (e) {
  console.log("Succesfully caught invalid GeoJSON.");
  console.log("\t" + e);
}


console.log(set);
