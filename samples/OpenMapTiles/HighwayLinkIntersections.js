"use strict";

import Sample from "../../lib/Sample.js";
import Layer from "../../lib/Layer.js";
import WayRowsSampleData from "../../lib/SampleData/WayRowsSampleData.js";
import WayColumnsSampleData from "../../lib/SampleData/WayColumnsSampleData.js";
import CopyPropertiesTransformation from "../../lib/Transformation/CopyPropertiesTransformation.js";
import RemovePropertiesTransformation from "../../lib/Transformation/RemovePropertiesTransformation.js";

var sample = new Sample(
  'highway-link-intersections',
  'Highway Link Intersections',
  'A grid of highway intesections for each class and link. (<a href="https://github.com/adamfranco/OpenMapSamples/blob/main/samples/OpenMapTiles/HighwayLinkIntersections.js">source</a>)',
  [0, 0],
  15
);

const highwayClasses = [
  {},
  { 'name': 'motorway', 'class': 'motorway' },
  { 'name': 'motorway link', 'class': 'motorway', 'ramp': 1 },
  { 'name': 'trunk', 'class': 'trunk' },
  { 'name': 'trunk expressway', 'class': 'trunk', 'expressway': 1},
  { 'name': 'trunk link', 'class': 'trunk' },
  { 'name': 'primary', 'class': 'primary' },
  { 'name': 'primary expressway', 'class': 'primary', 'expressway': 1},
  { 'name': 'primary link', 'class': 'primary', 'ramp': 1 },
  { 'name': 'secondary', 'class': 'secondary' },
  { 'name': 'secondary expressway', 'class': 'secondary', 'expressway': 1},
  { 'name': 'secondary link', 'class': 'secondary', 'ramp': 1 },
  { 'name': 'tertiary', 'class': 'tertiary' },
  { 'name': 'tertiary expressway', 'class': 'tertiary', 'expressway': 1},
  { 'name': 'tertiary link', 'class': 'tertiary', 'ramp': 1 },
  { 'name': 'minor', 'class': 'minor' },
  { 'name': 'service', 'class': 'service' },
];
var sampleDataRows = new WayRowsSampleData(
  highwayClasses,
  [
    {},
    { 'name': ''},
    { 'name': ''},
    { 'name': ''},
    { 'name': ''},
  ],
  [0, 0]
);
var sampleDataColumns = new WayColumnsSampleData(
  highwayClasses,
  [
    {},
    { 'name': ''},
    { 'name': ''},
    { 'name': ''},
    { 'name': ''},
  ],
  [0, 0]
);

var transportation = sample.addLayer(new Layer('transportation'));
transportation.addSampleData(
  new RemovePropertiesTransformation(sampleDataRows, ['name'])
);
transportation.addSampleData(
  new RemovePropertiesTransformation(sampleDataColumns, ['name'])
);

var transportationName = sample.addLayer(new Layer('transportation_name'));
transportationName.addSampleData(
  new CopyPropertiesTransformation(
    new RemovePropertiesTransformation(
      sampleDataRows,
      ['brunnel', 'layer', 'surface', 'expressway', 'oneway']
    ),
    { 'name': ['name_en', 'name_de', 'name_int', 'name:latin'] }
  )
);
transportationName.addSampleData(
  new CopyPropertiesTransformation(
    new RemovePropertiesTransformation(
      sampleDataColumns,
      ['brunnel', 'layer', 'surface', 'expressway', 'oneway']
    ),
    { 'name': ['name_en', 'name_de', 'name_int', 'name:latin'] }
  )
);

for (var i = 4; i <= 20; i = i + 1) {
  sample.setZoomVariant(i);
}

export { sample as default };
