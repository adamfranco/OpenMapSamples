"use strict";

import Sample from "../../lib/Sample.js";
import Layer from "../../lib/Layer.js";
import WayRowsSampleData from "../../lib/SampleData/WayRowsSampleData.js";
import CopyPropertiesTransformation from "../../lib/Transformation/CopyPropertiesTransformation.js";
import RemovePropertiesTransformation from "../../lib/Transformation/RemovePropertiesTransformation.js";

var sample = new Sample(
  'highway-attributes',
  'Highway Attributes',
  'A grid of highways showing possible attribute combinations. (<a href="https://github.com/adamfranco/OpenMapSamples/blob/main/samples/OpenMapTiles/HighwayAttributes.js">source</a>)',
  [-100, 40],
  15
);

var sampleData = new WayRowsSampleData(
  [
    { 'name': 'motorway', 'class': 'motorway' },
    { 'name': 'trunk', 'class': 'trunk' },
    { 'name': 'trnk expy', 'class': 'trunk', 'expressway': 1},
    { 'name': 'primary', 'class': 'primary' },
    { 'name': 'pri expy', 'class': 'primary', 'expressway': 1},
    { 'name': 'secondary', 'class': 'secondary' },
    { 'name': 'sec expy', 'class': 'secondary', 'expressway': 1},
    { 'name': 'tertiary', 'class': 'tertiary' },
    { 'name': 'ter expy', 'class': 'tertiary', 'expressway': 1},
    { 'name': 'minor', 'class': 'minor' },
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
sample.addLayer(new Layer('transportation')).addSampleData(
  new RemovePropertiesTransformation(sampleData, ['name'])
);
sample.addLayer(new Layer('transportation_name')).addSampleData(
  new CopyPropertiesTransformation(
    new RemovePropertiesTransformation(
      sampleData,
      ['brunnel', 'layer', 'surface', 'expressway', 'oneway']
    ),
    { 'name': ['name_en', 'name_de', 'name_int', 'name:latin'] }
  )
);

for (var i = 4; i <= 20; i = i + 1) {
  sample.setZoomVariant(i);
}

export { sample as default, sampleData as sampleData};
