/*
*  GeoSpockWeb SDK.
*
*  Learn more at https://github.com/Geovation/GeoSpockWeb
*
*  @author Sebastian Ovide (sebastian.ovide@geovation.uk)
*/

/**
 * main sdk
 */
module.exports = function() {
    var rest = require('rest');
    var console = require("console-browserify");

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

    // Set the server for GeoSpockWeb to talk to.
    // GeoSpockWeb.serverURL = "https://en.wikipedia.org";

    /**
     * Call this method first to set your authentication key.
     * @param {String} API Token
     */
    // GeoSpockWeb.init = function(serverUrl, collideKey) {
    //   GeoSpockWeb.serverUrl = serverUrl;
    //   GeoSpockWeb.CollideKey = collideKey;
    //
    //   // Set ajax defaults
    //   root.$.ajaxSetup({
    //     url: serverUrl + BASE_PATH,
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'CollideKey': collideKey
    //     }
    //   });
    // };

    /**
     * http://docs.geospock.apiary.io/#reference/locatables/uploading-data/create-new-locatables
     */
    // GeoSpockWeb.post = function(data, type) {
    //   var type = type || 0;
    //
    //   if (!data || type > INT_MAX) {
    //     return root.$.Deferred().reject();
    //   }
    //
    //   return root.$.ajax({
    //     url: root.$.ajaxSettings.url + "/" + type,
    //     method: 'POST',
    //     data: JSON.stringify(data)
    //   });
    // };

    /**
     * http://docs.geospock.apiary.io/#reference/locatables/single-locatable-object/get-a-single-locatable
     */
    // GeoSpockWeb.get = function(id, type) {
    //   var type = type || 0;
    //
    //   if (!id || type > INT_MAX) {
    //     return root.$.Deferred().reject();
    //   }
    //
    //   return root.$.ajax({
    //     url: root.$.ajaxSettings.url + "/" + type + "/" + id,
    //     method: 'GET'
    //   });
    // };

    /**
     * http://docs.geospock.apiary.io/#reference/locatables/single-locatable-object/update-a-single-locatable
     */
    // GeoSpockWeb.put = function(id, data, type) {
    //   var type = type || 0;
    //
    //   if (!data || !id || type > INT_MAX) {
    //     return root.$.Deferred().reject();
    //   }
    //
    //   return root.$.ajax({
    //     url: root.$.ajaxSettings.url + "/" + type + "/" + id,
    //     method: 'PUT',
    //     data: JSON.stringify(data)
    //   });
    // };

    /**
     * http://docs.geospock.apiary.io/#reference/locatables/single-locatable-object/delete-a-single-locatable
     */
    // GeoSpockWeb.delete = function(id, type) {
    //   var type = type || 0;
    //
    //   if (!id || type > INT_MAX) {
    //     return root.$.Deferred().reject();
    //   }
    //
    //   return root.$.ajax({
    //     url: root.$.ajaxSettings.url + "/" + type + "/" + id,
    //     method: 'DELETE'
    //   });
    // };

};
