"use strict";

import Sample from "../../lib/Sample.js";
import Layer from "../../lib/Layer.js";
import WayRowsSampleData from "../../lib/SampleData/WayRowsSampleData.js";
import CopyPropertiesTransformation from "../../lib/Transformation/CopyPropertiesTransformation.js";
import RemovePropertiesTransformation from "../../lib/Transformation/RemovePropertiesTransformation.js";

var sample = new Sample(
  'highway-construction-attributes',
  'Highway Construction Attributes',
  'A grid of highways under construction showing possible attribute combinations. (<a href="https://github.com/adamfranco/OpenMapSamples/blob/main/samples/OpenMapTiles/HighwayConstructionAttributes.js">source</a>)',
  [0, 0],
  15
);

var sampleData = new WayRowsSampleData(
  [
    { 'name': 'motorway', 'class': 'motorway_construction' },
    { 'name': 'trunk', 'class': 'trunk_construction' },
    { 'name': 'trnk expy', 'class': 'trunk_construction', 'expressway': 1},
    { 'name': 'primary', 'class': 'primary_construction' },
    { 'name': 'pri expy', 'class': 'primary_construction', 'expressway': 1},
    { 'name': 'secondary', 'class': 'secondary_construction' },
    { 'name': 'sec expy', 'class': 'secondary_construction', 'expressway': 1},
    { 'name': 'tertiary', 'class': 'tertiary_construction' },
    { 'name': 'ter expy', 'class': 'tertiary_construction', 'expressway': 1},
    { 'name': 'minor', 'class': 'minor_construction' },
    { 'name': 'service', 'class': 'service_construction' },
    { 'name': 'driveway', 'class': 'service_construction', 'service': 'driveway' },
    { 'name': 'alley', 'class': 'service_construction', 'service': 'alley' },
    { 'name': 'parking_aisle', 'class': 'service_construction', 'service': 'parking_aisle' },
    { 'name': 'raceway', 'class': 'raceway_construction' },
    { 'name': 'track', 'class': 'track_construction' },
    { 'name': 'path', 'class': 'path_construction', 'subclass': 'path' },
    { 'name': 'cycleway', 'class': 'path_construction', 'subclass': 'cycleway' },
    { 'name': 'bridleway', 'class': 'path_construction', 'subclass': 'bridleway' },
    { 'name': 'footway', 'class': 'path_construction', 'subclass': 'footway' },
    { 'name': 'steps', 'class': 'path_construction', 'subclass': 'steps' },
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
