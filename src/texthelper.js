/*
*  This boilerplate javascript sdk is a collection of methods designed to make working with
*  an Api as easy as possible.
*
*  Learn more at https://github.com/monbro/javascript-sdk-boilerplate
*
*  @author Michael Klein (klein@monbro.de)
*/

/**
 * sdk text helper class
 */
(function(root) {
    root.GeoSpockWeb = root.GeoSpockWeb || {};
    var GeoSpockWeb = root.GeoSpockWeb;

    /**
     * @namespace Provides an interface to GeoSpockWeb's wiki text processing helper.
     */
    GeoSpockWeb.WikiTextHelper = GeoSpockWeb.WikiTextHelper || {};

    GeoSpockWeb.WikiTextHelper._upperCase = function(content) {
        return content.toUpperCase();
    };
}(this));
