"use strict";

import Sample from "../../lib/Sample.js";
import Layer from "../../lib/Layer.js";
import WayRowsSampleData from "../../lib/SampleData/WayRowsSampleData.js";
import WayColumnsSampleData from "../../lib/SampleData/WayColumnsSampleData.js";
import CopyPropertiesTransformation from "../../lib/Transformation/CopyPropertiesTransformation.js";
import RemovePropertiesTransformation from "../../lib/Transformation/RemovePropertiesTransformation.js";

var sample = new Sample(
  'highway-bridge-tunnel',
  'Highway Bridge & Tunnel',
  'A grid of highways at different bridge and tunnel layers. Rows are <code>highway=motorway</code> while columns are <code>highway=primary</code> (<a href="https://github.com/adamfranco/OpenMapSamples/blob/main/samples/OpenMapTiles/HighwayBridgeAndTunnel.js">source</a>)',
  [0, 0],
  15
);

var sampleDataRows = new WayRowsSampleData(
  [
    { 'name': 'bridge layer=-1', 'class': 'motorway', 'layer': -1, 'brunnel': 'bridge' },
    { 'name': 'bridge layer=0', 'class': 'motorway', 'layer': 0, 'brunnel': 'bridge' },
    { 'name': 'bridge layer=1', 'class': 'motorway', 'layer': 1, 'brunnel': 'bridge' },
    { 'name': 'bridge layer=2', 'class': 'motorway', 'layer': 2, 'brunnel': 'bridge' },
    { 'name': 'tunnel layer=-1', 'class': 'motorway', 'layer': -1, 'brunnel': 'tunnel' },
    { 'name': 'tunnel layer=0', 'class': 'motorway', 'layer': 0, 'brunnel': 'tunnel' },
    { 'name': 'tunnel layer=1', 'class': 'motorway', 'layer': 1, 'brunnel': 'tunnel' },
    { 'name': 'tunnel layer=2', 'class': 'motorway', 'layer': 2, 'brunnel': 'tunnel' },
    { 'name': 'normal layer=-1', 'class': 'motorway', 'layer': -1 },
    { 'name': 'normal layer=0', 'class': 'motorway', 'layer': 0 },
    { 'name': 'normal layer=1', 'class': 'motorway', 'layer': 1 },
    { 'name': 'normal layer=2', 'class': 'motorway', 'layer': 2 },
  ],
  [
    {},
    { 'name': ''},
    { 'name': ''},
    { 'name': ''},
    { 'name': ''},
    { 'name': ''},
  ],
  [0, 0]
);
var sampleDataColumns = new WayColumnsSampleData(
  [
    { 'name': 'bridge layer=-1', 'class': 'primary', 'layer': -1, 'brunnel': 'bridge' },
    { 'name': 'bridge layer=0', 'class': 'primary', 'layer': 0, 'brunnel': 'bridge' },
    { 'name': 'bridge layer=1', 'class': 'primary', 'layer': 1, 'brunnel': 'bridge' },
    { 'name': 'bridge layer=2', 'class': 'primary', 'layer': 2, 'brunnel': 'bridge' },
    { 'name': 'tunnel layer=-1', 'class': 'primary', 'layer': -1, 'brunnel': 'tunnel' },
    { 'name': 'tunnel layer=0', 'class': 'primary', 'layer': 0, 'brunnel': 'tunnel' },
    { 'name': 'tunnel layer=1', 'class': 'primary', 'layer': 1, 'brunnel': 'tunnel' },
    { 'name': 'tunnel layer=2', 'class': 'primary', 'layer': 2, 'brunnel': 'tunnel' },
    { 'name': 'normal layer=-1', 'class': 'primary', 'layer': -1 },
    { 'name': 'normal layer=0', 'class': 'primary', 'layer': 0 },
    { 'name': 'normal layer=1', 'class': 'primary', 'layer': 1 },
    { 'name': 'normal layer=2', 'class': 'primary', 'layer': 2 },
  ],
  [
    {},
    { 'name': ''},
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
