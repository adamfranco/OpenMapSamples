"use strict";

import Sample from "../../lib/Sample.js";
import Layer from "../../lib/Layer.js";
import WayRowsSampleData from "../../lib/SampleData/WayRowsSampleData.js";

var sample = new Sample(
  'highway-attributes',
  'Highway Attributes',
  'A grid of highways showing possible attribute combinations. (<a href="https://github.com/adamfranco/OpenMapSamples/blob/main/samples/OpenMapTiles/HighwayAttributes.js">source</a>)',
  [-100, 40],
  15
);

var sampleData = new WayRowsSampleData(
  [
    { 'name:latin': 'motorway', 'class': 'motorway' },
    { 'name:latin': 'trunk', 'class': 'trunk' },
    { 'name:latin': 'trnk expy', 'class': 'trunk', 'expressway': 1},
    { 'name:latin': 'primary', 'class': 'primary' },
    { 'name:latin': 'pri expy', 'class': 'primary', 'expressway': 1},
    { 'name:latin': 'secondary', 'class': 'secondary' },
    { 'name:latin': 'sec expy', 'class': 'secondary', 'expressway': 1},
    { 'name:latin': 'tertiary', 'class': 'tertiary' },
    { 'name:latin': 'ter expy', 'class': 'tertiary', 'expressway': 1},
    { 'name:latin': 'minor', 'class': 'minor' },
    { 'name:latin': 'service', 'class': 'service' },
    { 'name:latin': 'driveway', 'class': 'service', 'service': 'driveway' },
    { 'name:latin': 'alley', 'class': 'service', 'service': 'alley' },
    { 'name:latin': 'parking_aisle', 'class': 'service', 'service': 'parking_aisle' },
    { 'name:latin': 'raceway', 'class': 'raceway' },
    { 'name:latin': 'track', 'class': 'track' },
    { 'name:latin': 'path', 'class': 'path', 'subclass': 'path' },
    { 'name:latin': 'cycleway', 'class': 'path', 'subclass': 'cycleway' },
    { 'name:latin': 'bridleway', 'class': 'path', 'subclass': 'bridleway' },
    { 'name:latin': 'footway', 'class': 'path', 'subclass': 'footway' },
    { 'name:latin': 'steps', 'class': 'path', 'subclass': 'steps' },
  ],
  [
    {},
    { 'name:latin': 'bridge', 'brunnel': 'bridge', 'layer': 1 },
    { 'name:latin': 'tunnel', 'brunnel': 'tunnel', 'layer': -1 },
    { 'name:latin': 'ford', 'brunnel': 'ford' },
    { 'name:latin': 'oneway', 'oneway': 1 },
    { 'name:latin': 'paved', 'surface': 'paved' },
    { 'name:latin': 'unpaved', 'surface': 'unpaved' },
  ],
  [-100, 40]
);
sample.addLayer(new Layer('transportation')).addSampleData(sampleData);
sample.addLayer(new Layer('transportation_name')).addSampleData(sampleData);

for (var i = 4; i <= 20; i = i + 1) {
  sample.setZoomVariant(i);
}

// Set a custom row-hight callback to give more space to motorways at high zooms.
sampleData.setRowHeightCallback(function(zoom, row, numRows) {
  if (zoom > 18 && row < 1) {
    return 24 / numRows / Math.pow(2, zoom - 4);
  } else if (zoom > 16 && row < 1) {
    return 22 / numRows / Math.pow(2, zoom - 4);
  } else {
    return 20 / numRows / Math.pow(2, zoom - 4);
  }
});

export { sample as default};
