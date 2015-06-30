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
  root.GeoSpockWeb.VERSION="0.0.2"; // It will be replaced by the build script
}(this));

/**
 * main sdk
 */
(function(root) {

    root.GeoSpockWeb = root.GeoSpockWeb || {};

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

    // /**
    //  * Call this method first to set your authentication key.
    //  * @param {String} API Token
    //  */
    // GeoSpockWeb.Initialize = function(apiToken) {
    //   GeoSpockWeb.apiToken = apiToken;
    // };

    // /**
    //  * Get data according to a wikipedia page.
    //  * @param {string} title of a wikipedia page like 'Cheese'
    //  */
    // GeoSpockWeb.GetPage = function(title) {
    //   GeoSpockWeb._requestSample(title, function(data) {
    //     var rawtext = data.query.pages[Object.keys(data.query.pages)[0]].revisions[0]["*"];
    //     var upperCaseTest = GeoSpockWeb.WikiTextHelper._upperCase(rawtext);
    //
    //     GeoSpockWeb.$( "body" ).append( '<p>'+title+':</p>' );
    //     GeoSpockWeb.$( "body" ).append( '<p>'+rawtext.substring(0, 250)+'</p>' );
    //     GeoSpockWeb.$( "body" ).append( '<p>'+upperCaseTest.substring(0, 250)+'</p>' );
    //   });
    // };

    // /**
    //  * sample request to our api server
    //  * @param  {string} title
    //  * @param  {function} successCallback
    //  */
    // GeoSpockWeb._requestSample = function(title, successCallback) {
    //
    //     var url = GeoSpockWeb.serverURL+
    //               "/w/api.php?rvprop=content&format=json&prop=revisions|categories&rvprop=content&action=query&titles="+
    //               encodeURI(title)+
    //               "&token="+
    //               encodeURI(GeoSpockWeb.apiToken);
    //
    //     var jqxhr =
    //       GeoSpockWeb.$.ajax({
    //           url: url,
    //           dataType: 'jsonp',
    //           type: 'GET'
    //       })
    //       .success (function(result) {
    //           successCallback(result);
    //       })
    //       .error   (function()     {
    //           console.log('Http request failed');
    //           // throw eror here
    //       })
    //       ;
    // };

}(this));
