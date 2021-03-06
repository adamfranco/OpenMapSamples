# OpenMapSamples

OpenMapSamples is a library to generate and provide sample data for testing vector-based map renderings. Sample data is returned as GeoJSON and can be rendered by mapping systems and styles to validate their coverage of combinations of data.

You can view a demonstration of this control at https://adamfranco.github.io/OpenMapSamples-examples/.

## Structure

### Library classes
OpenMapSamples allows the creation, registration, and return of a collection of `Sample`s for rendering. Each `Sample` has a name and description plus a list of 0 or more `Layer`s.

Each `Sample` has methods to return a starting zoom level, center coordinate, and can access the GeoJSON data of its layers.

Each `Layer` can have 0 or more `SampleData` added to it. The only requirement of `SampleData` classes that they implement a `getGeoJson(z)` method.

 * A `SimpleSample` returns hand-coded GeoJSON.
 * A `WayRowsSample` takes a list of tags for each row, and a list of tags for each column and applies those to dynamically generate GeoJSON for each zoom/center requested.  (For example, showing different highway types with bridge, tunnel, embankment, etc tags applied at each level). Lengths and spacing are dynamically chosen based on the zoom requested.
 * A `WayIntersectionSample` takes a list of tags for each row/column, then builds a cross-hatched grid that show each type of way intersecting with each other type.
 * A `WayOverlapSample` is the same as the `WayIntersectionSample`, but with ways overlapping rather than intersecting on shared nodes (For example, showing tunnel and bridge levels overlapping).
 * Other samples could auto generate overlapping or non-overlapping grids of areas, nodes, etc.

### Samples
The `samples/` directory contains a repository of samples with full data that can be used directly to test map renderings. While users are welcome to utilize the library classes to develop their own data-sets, consider contributing useful samples to back to this project.

#### OpenMapTiles
The `samples/OpenMapTiles/` directory contains samples with properties matching the [OpenMapTiles vector-data schema](https://openmaptiles.org/schema/).

Example screenshots of the OpenMapTiles samples as rendered by the MapTiler "OSM Standard" style:

![Highway Attributes](https://user-images.githubusercontent.com/25242/153935470-9e2fb1a6-7577-4b3b-8720-55281bc9b87f.png)

![Highway Intersections](https://user-images.githubusercontent.com/25242/153935474-387884dc-100e-43c7-9b74-b731a0e282ee.png)

![Highway Bridge & Tunnel](https://user-images.githubusercontent.com/25242/153935476-453918ed-41a9-47d7-8190-aa4ebfc4dbd7.png)

## Controls and integrations

The OpenMapSamples classes and Samples are renderer agnostic and may be used by any map display system.

### MapLibre
See [adamfranco/OpenMapSamples-MapLibre](https://github.com/adamfranco/OpenMapSamples-MapLibre) for a MapLibre control that can be added to MapLibre based maps. This control provides a dialog selecting samples and temporarily replacing map content with sample data.

### OpenLayers
_To do..._

## Development

To add an additional sample data set in the OpenMapTiles schema:

1. Add a new script under `samples/OpenMapTiles/`. This script should export a `Sample` as default.
2. Add the new Sample to `samples/OpenMapTiles/index.js` to register it for use.
3. Run `npm run test` to ensure that your new sample is returning valid GeoJSON.

To test your sample in a browser, clone the [OpenMapTilesSamples-examples](https://github.com/adamfranco/OpenMapSamples-examples) repository in the same parent-directory as `OpenMapSamples/` and configure it:

    cd ../
    git clone git@github.com:adamfranco/OpenMapSamples-examples.git
    cd OpenMapSamples-examples/
    npm install
    npm run config
    # Edit config.js and add your MapTiler cloud key.
    npm run dev-openmapsamples
    npm start
