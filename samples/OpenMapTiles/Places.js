"use strict";

import Sample from "../../lib/Sample.js";
import Layer from "../../lib/Layer.js";
import PointRowsSampleData from "../../lib/SampleData/PointRowsSampleData.js";
import CopyPropertiesTransformation from "../../lib/Transformation/CopyPropertiesTransformation.js";

var sample = new Sample(
  'places',
  'Places',
  'A grid of <a href="https://openmaptiles.org/schema/#place">places</a>, modified by rank. (<a href="https://github.com/adamfranco/OpenMapSamples/blob/main/samples/OpenMapTiles/Places.js">source</a>)',
  [0, 0],
  8
);

var sampleData = new PointRowsSampleData(
  [
    { 'name': 'continent', 'class': 'continent' },
    { 'name': 'country', 'class': 'country' },
    { 'name': 'state', 'class': 'state' },
    { 'name': 'province', 'class': 'province' },
    { 'name': 'capital city 2', 'class': 'city', 'capital': 2 },
    { 'name': 'capital city 4', 'class': 'city', 'capital': 4 },
    { 'name': 'city', 'class': 'city' },
    { 'name': 'town', 'class': 'town' },
    { 'name': 'village', 'class': 'village' },
    { 'name': 'hamlet', 'class': 'hamlet' },
    { 'name': 'suburb', 'class': 'suburb' },
    { 'name': 'quarter', 'class': 'quarter' },
    { 'name': 'neighbourhood', 'class': 'neighbourhood' },
    { 'name': 'isolated_dwelling', 'class': 'isolated_dwelling' },
  ],
  [
    {},
    { 'name': 'rank 1', 'rank': 1 },
    { 'name': 'rank 2', 'rank': 2 },
    { 'name': 'rank 3', 'rank': 3 },
    { 'name': 'rank 4', 'rank': 4 },
    { 'name': 'rank 5', 'rank': 5 },
    { 'name': 'rank 6', 'rank': 6 },
    { 'name': 'rank 7', 'rank': 7 },
    { 'name': 'rank 8', 'rank': 8 },
    { 'name': 'rank 9', 'rank': 9 },
    { 'name': 'rank 10', 'rank': 10 },
    { 'name': 'rank 11', 'rank': 11 },
    { 'name': 'rank 12', 'rank': 12 },
    { 'name': 'rank 13', 'rank': 13 },
    { 'name': 'rank 14', 'rank': 14 },
    { 'name': 'rank 15', 'rank': 15 },
    { 'name': 'rank 16', 'rank': 16 },
    { 'name': 'rank 17', 'rank': 17 },
    { 'name': 'rank 18', 'rank': 18 },
    { 'name': 'rank 19', 'rank': 19 },
    { 'name': 'rank 20', 'rank': 20 },
  ],
  [0, 0]
);
sampleData.columnWidthMultiplier = 60;

sample.addLayer(new Layer('place')).addSampleData(
  new CopyPropertiesTransformation(
    sampleData,
    { 'name': ['name_en', 'name_de', 'name_int', 'name:latin'] }
  )
);

for (var i = 0; i <= 20; i = i + 1) {
  sample.setZoomVariant(i);
}

export { sample as default, sampleData as sampleData};
