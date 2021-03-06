"use strict";

import Sample from "../../lib/Sample.js";
import Layer from "../../lib/Layer.js";
import WayRowsSampleData from "../../lib/SampleData/WayRowsSampleData.js";
import CopyPropertiesTransformation from "../../lib/Transformation/CopyPropertiesTransformation.js";
import RemovePropertiesTransformation from "../../lib/Transformation/RemovePropertiesTransformation.js";

var sample = new Sample(
  'highway-toll-attributes',
  'Highway Toll Attributes',
  'A grid of highways and links showing possible attribute combinations with toll=1. The left side is standard, the right side is toll=1. (<a href="https://github.com/adamfranco/OpenMapSamples/blob/main/samples/OpenMapTiles/HighwayTollAttributes.js">source</a>)',
  [0, 0],
  15
);

var sampleData = new WayRowsSampleData(
  [
    { 'name': 'motorway', 'class': 'motorway' },
    { 'name': 'moto link', 'class': 'motorway', 'ramp': 1 },
    { 'name': 'trunk', 'class': 'trunk' },
    { 'name': 'trnk expy', 'class': 'trunk', 'expressway': 1},
    { 'name': 'trnk link', 'class': 'trunk', 'ramp': 1 },
    { 'name': 'primary', 'class': 'primary' },
    { 'name': 'pri expy', 'class': 'primary', 'expressway': 1},
    { 'name': 'pri link', 'class': 'primary', 'ramp': 1 },
    { 'name': 'secondary', 'class': 'secondary' },
    { 'name': 'sec expy', 'class': 'secondary', 'expressway': 1},
    { 'name': 'sec link', 'class': 'secondary', 'ramp': 1 },
    { 'name': 'tertiary', 'class': 'tertiary' },
    { 'name': 'ter expy', 'class': 'tertiary', 'expressway': 1},
    { 'name': 'ter link', 'class': 'tertiary', 'ramp': 1 },
    { 'name': 'minor', 'class': 'minor' },
    { 'name': 'service', 'class': 'service' },
  ],
  [
    {},
    { 'name': 'bridge', 'brunnel': 'bridge', 'layer': 1 },
    { 'name': 'tunnel', 'brunnel': 'tunnel', 'layer': -1 },
    { 'name': 'ford', 'brunnel': 'ford' },
    { 'name': 'oneway', 'oneway': 1 },
    { 'name': 'paved', 'surface': 'paved' },
    { 'name': 'unpaved', 'surface': 'unpaved' },
    { 'name': 'toll', 'toll': 1 },
    { 'name': 'bridge', 'brunnel': 'bridge', 'layer': 1 , 'toll': 1 },
    { 'name': 'tunnel', 'brunnel': 'tunnel', 'layer': -1 , 'toll': 1 },
    { 'name': 'ford', 'brunnel': 'ford' , 'toll': 1 },
    { 'name': 'oneway', 'oneway': 1 , 'toll': 1 },
    { 'name': 'paved', 'surface': 'paved' , 'toll': 1 },
    { 'name': 'unpaved', 'surface': 'unpaved' , 'toll': 1 },
  ],
  [0, 0]
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
