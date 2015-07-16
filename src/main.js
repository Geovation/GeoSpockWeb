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
// module.exports = {
//   init: function() {}
// };

module.exports = function(serverUrl, collideKey) {
  'use strict';

  if (!serverUrl || !collideKey) {
    throw new Error('serverUrl and collideKey are mandatory');
  }

  this.serverUrl = serverUrl;
  this.collideKey = collideKey;

  var BASE_PATH = "/_ah/api/locatables/v2";
  var INT_MAX = 2147483647;
  var rest = require('rest');
  var console = require("console-browserify");
  var pathPrefix = require('rest/interceptor/pathPrefix');
  var defaultRequest = require('rest/interceptor/defaultRequest');


  // exposes low level
  this.rest = rest;

  // For some reason this code breaks the tests. For now we are using rest
  // without wraps which is a really petty as we are loosing all the REST.js
  // benefits, but until we cannot fix the tests, we don't have other alternatives.
  this.client = rest
    .wrap(defaultRequest, {
      headers: {
        'Content-Type': 'application/json',
        'CollideKey': collideKey
      }
    })
    .wrap(pathPrefix, { prefix: serverUrl + BASE_PATH });

};


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

//};
