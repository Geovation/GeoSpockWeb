// Used for Web and AMD
var GeoSpockWeb = require('./main.js');
if (typeof global.window.define === 'function' && global.window.define.amd) {
  global.window.define('GeoSpockWeb', function () { return GeoSpockWeb; });
} else {
  global.window.GeoSpockWeb = GeoSpockWeb;
}
