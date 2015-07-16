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
module.exports = function(serverUrl, collideKey) {
  'use strict';

  if (!serverUrl || !collideKey) {
    throw new Error('serverUrl and collideKey are mandatory');
  }

  this.serverUrl = serverUrl;
  this.collideKey = collideKey;

  var BASE_PATH = "/_ah/api/locatables/v2";
  var prefix = serverUrl + BASE_PATH;
  var INT_MAX = 2147483647;
  var rest = require('rest');
  var when = require('when');
  var console = require("console-browserify");
  var pathPrefix = require('rest/interceptor/pathPrefix');
  var defaultRequest = require('rest/interceptor/defaultRequest');
  var headers = {
    'Content-Type': 'application/json',
    'CollideKey': collideKey
  };


  // exposes low level
  this.rest = rest;

  // For some reason this code breaks the tests. For now we are using rest
  // without wraps which is a really petty as we are loosing all the REST.js
  // benefits, but until we cannot fix the tests, we don't have other alternatives.
  this.client = rest
    .wrap(defaultRequest, {
      headers: headers
    })
    .wrap(pathPrefix, { prefix: prefix });

  /**
   * http://docs.geospock.apiary.io/#reference/locatables/uploading-data/create-new-locatables
   */
  this.post = function(data, _type) {
    var type = _type || 0;

    if (!data) {
      return when.reject('data parameter is mandatory.');
    }

    if (type > INT_MAX) {
      return when.reject('type parameter cannot be bigger than ' + INT_MAX);
    }

    return rest({
      headers: headers,
      method: 'POST',
      path: prefix + "/" + type,
      entity: JSON.stringify(data)
    });
  };

  /**
   * http://docs.geospock.apiary.io/#reference/locatables/single-locatable-object/get-a-single-locatable
   */
  this.get = function(id, _type) {
    var type = _type || 0;

    if (!id) {
      return when.reject('id parameter is mandatory.');
    }

    if (type > INT_MAX) {
      return when.reject('type parameter cannot be bigger than ' + INT_MAX);
    }

    return rest({
      headers: headers,
      method: 'GET',
      path: prefix + "/" + type + "/" + id
    });
  };

  /**
  * http://docs.geospock.apiary.io/#reference/locatables/single-locatable-object/update-a-single-locatable
  */
  this.put = function(id, data, _type) {
    var type = _type || 0;

    if (!id) {
      return when.reject('id parameter is mandatory.');
    }

    if (!data) {
      return when.reject('data parameter is mandatory.');
    }

    if (type > INT_MAX) {
      return when.reject('type parameter cannot be bigger than ' + INT_MAX);
    }

    return rest({
      headers: headers,
      method: 'PUT',
      path: prefix + "/" + type + "/" + id,
      entity: JSON.stringify(data)
    });
  };

  /**
   * http://docs.geospock.apiary.io/#reference/locatables/single-locatable-object/delete-a-single-locatable
   */
  this.delete = function(id, _type) {
    var type = _type || 0;

    if (!id) {
      return when.reject('id parameter is mandatory.');
    }

    if (type > INT_MAX) {
      return when.reject('type parameter cannot be bigger than ' + INT_MAX);
    }

    return rest({
      headers: headers,
      method: 'DELETE',
      path: prefix + "/" + type + "/" + id
    });
  };

};








//};
