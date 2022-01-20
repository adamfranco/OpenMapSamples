# OpenMapSamples

OpenMapSamples is a library to generate and provide sample data for testing vector-based map renderings. Sample data is returned as GeoJSON and can be rendered by mapping systems and styles to validate their coverage of combinations of data.

## Structure
OpenMapSamples [will] allow creation, registration, and return of a list of `SampleSet`s for rendering. Each `SampleSet` has a name and description plus a list of 0 or more `Sample`s.

Each `Sample` has methods to return a starting zoom level, center coordinate, and GeoJSON data.

 * A `SimpleSample` has a single zoom & center and returns hand-coded GeoJSON.
 * A `SampleCollection` has one or more samples registered in it and returns their collective center and lowest starting zoom.
 * A `WayRowsSample` takes as input a zoom, center, a list of tags for each row, and a list of tags for each column and applies those to dynamically generate GeoJSON.  (For example, showing different highway types with bridge, tunnel, embankment, etc tags applied at each level). Lengths and spacing are dynamically chosen based on zoom.
 * A `WayIntersectionSample` takes a list of tags for each row/column, then builds a cross-hatched grid that show each type of way intersecting with each other type.
 * A `WayOverlapSample` is the same as the `WayIntersectionSample`, but with ways overlapping rather than intersecting on shared nodes (For example, showing tunnel and bridge levels overlapping).
 * Other samples could auto generate overlapping or non-overlapping grids of areas, nodes, etc.

It could also include an optional helper control (Maplibre specific) to allow selecting and jumping to a `SampleSet` and then stepping through its provided zoom levels. This helper control could then be added to the dev/example versions of Americana to allow easy viewing of the current state of the style rendering during development.
