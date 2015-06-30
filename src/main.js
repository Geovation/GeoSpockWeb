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
  root.GeoVationWeb = root.GeoVationWeb || {};
  root.GeoVationWeb.VERSION = "js1.0.0"; // TODO: gulp build should change it.
}(this));

/**
 * main sdk
 */
(function(root) {

    root.GeoVationWeb = root.GeoVationWeb || {};

    /**
    * Contains all GeoVationWeb API classes and functions.
    * @name GeoVationWeb
    * @namespace
    *
    * Contains all GeoVationWeb API classes and functions.
    */
    var GeoVationWeb = root.GeoVationWeb;

    // If jQuery has been included, grab a reference to it.
    if (typeof(root.$) !== "undefined") {
        GeoVationWeb.$ = root.$;
    }

    // Set the server for GeoVationWeb to talk to.
    // GeoVationWeb.serverURL = "https://en.wikipedia.org";

    // /**
    //  * Call this method first to set your authentication key.
    //  * @param {String} API Token
    //  */
    // GeoVationWeb.Initialize = function(apiToken) {
    //   GeoVationWeb.apiToken = apiToken;
    // };

    // /**
    //  * Get data according to a wikipedia page.
    //  * @param {string} title of a wikipedia page like 'Cheese'
    //  */
    // GeoVationWeb.GetPage = function(title) {
    //   GeoVationWeb._requestSample(title, function(data) {
    //     var rawtext = data.query.pages[Object.keys(data.query.pages)[0]].revisions[0]["*"];
    //     var upperCaseTest = GeoVationWeb.WikiTextHelper._upperCase(rawtext);
    //
    //     GeoVationWeb.$( "body" ).append( '<p>'+title+':</p>' );
    //     GeoVationWeb.$( "body" ).append( '<p>'+rawtext.substring(0, 250)+'</p>' );
    //     GeoVationWeb.$( "body" ).append( '<p>'+upperCaseTest.substring(0, 250)+'</p>' );
    //   });
    // };

    // /**
    //  * sample request to our api server
    //  * @param  {string} title
    //  * @param  {function} successCallback
    //  */
    // GeoVationWeb._requestSample = function(title, successCallback) {
    //
    //     var url = GeoVationWeb.serverURL+
    //               "/w/api.php?rvprop=content&format=json&prop=revisions|categories&rvprop=content&action=query&titles="+
    //               encodeURI(title)+
    //               "&token="+
    //               encodeURI(GeoVationWeb.apiToken);
    //
    //     var jqxhr =
    //       GeoVationWeb.$.ajax({
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
