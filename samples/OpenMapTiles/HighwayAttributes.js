"use strict";

import Sample from "../../lib/Sample.js";
import Layer from "../../lib/Layer.js";
import WayRowsSampleData from "../../lib/SampleData/WayRowsSampleData.js";

var sample = new Sample(
  'highway-attributes',
  'Highway Attributes',
  'A grid of highways showing possible attribute combinations.',
  [-100, 40],
  12
);

var sampleData = new WayRowsSampleData(
  [
    { 'name': 'motorway', 'class': 'motorway' },
    { 'name': 'trunk', 'class': 'trunk' },
    { 'name': 'primary', 'class': 'primary' },
    { 'name': 'secondary', 'class': 'secondary' },
    { 'name': 'tertiary', 'class': 'tertiary' },
    { 'name': 'minor', 'class': 'minor' },
    { 'name': 'residential', 'class': 'residential' },
    { 'name': 'service', 'class': 'service' },
    { 'name': 'driveway', 'class': 'service', 'service': 'driveway' },
    { 'name': 'alley', 'class': 'service', 'service': 'alley' },
    { 'name': 'parking_aisle', 'class': 'service', 'service': 'parking_aisle' },
    { 'name': 'raceway', 'class': 'raceway' },
    { 'name': 'track', 'class': 'track' },
    { 'name': 'path', 'class': 'path', 'subclass': 'path' },
    { 'name': 'cycleway', 'class': 'path', 'subclass': 'cycleway' },
    { 'name': 'bridleway', 'class': 'path', 'subclass': 'bridleway' },
    { 'name': 'footway', 'class': 'path', 'subclass': 'footway' },
    { 'name': 'steps', 'class': 'path', 'subclass': 'steps' },
  ],
  [
    {},
    { 'name': 'bridge', 'brunnel': 'bridge', 'layer': 1 },
    { 'name': 'tunnel', 'brunnel': 'tunnel', 'layer': -1 },
    { 'name': 'ford', 'brunnel': 'ford' },
    { 'name': 'oneway', 'oneway': 1 },
    { 'name': 'paved', 'surface': 'paved' },
    { 'name': 'unpaved', 'surface': 'unpaved' },
  ],
  [-100, 40]
);
sample.addLayer(new Layer('transportation')).addSampleData(sampleData);
sample.addLayer(new Layer('transportation_names')).addSampleData(sampleData);

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
