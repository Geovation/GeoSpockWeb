/*
*  This boilerplate javascript sdk is a collection of methods designed to make working with
*  an Api as easy as possible.
*
*  Learn more at https://github.com/monbro/javascript-sdk-boilerplate
*
*  @author Michael Klein (klein@monbro.de)
*/

/**
 * The browser console
 *
 * @property console
 * @private
 * @type object
 */
window.console = window.console || {};
window.console.log = this.console.log || function() {};

/**
 * expose our sdk
 */
(function(root) {
  root.GeoSpockWeb = root.GeoSpockWeb || {};
  root.GeoSpockWeb.VERSION="REPLACE_ME_PLEASE"; // It will be replaced by the build script
}(this));

/**
 * main sdk
 */
(function(root) {
    root.GeoSpockWeb = root.GeoSpockWeb || {};
    var BASE_PATH = "/_ah/api/locatables/v2";
    var INT_MAX = 2147483647;

    /**
    * Contains all GeoSpockWeb API classes and functions.
    * @name GeoSpockWeb
    * @namespace
    *
    * Contains all GeoSpockWeb API classes and functions.
    */
    var GeoSpockWeb = root.GeoSpockWeb;

    // If jQuery has been included, grab a reference to it.
    if (typeof(root.$) !== "undefined") {
        GeoSpockWeb.$ = root.$;
    }

    // Set the server for GeoSpockWeb to talk to.
    // GeoSpockWeb.serverURL = "https://en.wikipedia.org";

    /**
     * Call this method first to set your authentication key.
     * @param {String} API Token
     */
    GeoSpockWeb.init = function(serverUrl, collideKey) {
      GeoSpockWeb.serverUrl = serverUrl;
      GeoSpockWeb.CollideKey = collideKey;

      // Set ajax defaults
      root.$.ajaxSetup({
        url: serverUrl + BASE_PATH,
        headers: {
          'Content-Type': 'application/json',
          'CollideKey': collideKey
        }
      });
    };

    /**
     * http://docs.geospock.apiary.io/#reference/locatables/uploading-data/create-new-locatables
    */
    GeoSpockWeb.post = function(data, type) {
      var type = type || 0;

      if (type > INT_MAX) {
        var deferred = root.$.Deferred();
        deferred.reject();
        return deferred;
      }

      return root.$.ajax({
        url: root.$.ajaxSettings.url + "/" + type,
        method: 'POST',
        data: data
      });
    };

}(this));
