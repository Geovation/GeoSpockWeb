(function () {
  "use strict";

  var serverUrl="http://www.example.com";
  var collideKey="anInterestingToken";

  describe("GeoSpockWeb", function () {
    it("should find jQuery", function () {
      expect(true).toBe(true);
      expect($).toBe(jQuery);
    });

    it("should expose the sdk", function () {
      expect(GeoSpockWeb).toBeDefined();
    });
  });

  describe("GeoSpockWeb.Initialize", function () {
    it("should have a method called Initialize", function () {
      expect(GeoSpockWeb.Initialize).toBeDefined();
    });

    it("should initialize the serverUrl and the CollideKey", function () {
      GeoSpockWeb.Initialize(serverUrl ,collideKey);
      expect(GeoSpockWeb.serverUrl).toBe(serverUrl);
      expect(GeoSpockWeb.CollideKey).toBe(collideKey);
    });

    it('sets ajax default url', function() {
      GeoSpockWeb.Initialize(serverUrl,collideKey);
      var url = $.ajaxSetup();
      expect($.ajaxSetup().url).toContain(serverUrl);
    });

    it('should inizialize the ajax header with the token in CollideKey', function() {
      GeoSpockWeb.Initialize(serverUrl,collideKey);
      var url = $.ajaxSetup();
      expect($.ajaxSetup().headers.CollideKey).toBe(collideKey);
    });

    it('should inizialize the ajax header with the content type', function() {
      GeoSpockWeb.Initialize(serverUrl,collideKey);
      var url = $.ajaxSetup();
      expect($.ajaxSetup().headers['Content-Type']).toBe('application/json');
    });
  });


})();
