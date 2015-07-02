(function () {
  "use strict";

  var serverUrl="http://www.example.com";
  var collideKey="anInterestingToken";

  describe("GeoSpockWeb", function () {
    it("should find jQuery", function () {
      expect($).toBe(jQuery);
    });

    it("should expose the sdk", function () {
      expect(GeoSpockWeb).toBeDefined();
    });
  });

  describe("GeoSpockWeb.init", function () {
    it("should have a method called init", function () {
      expect(GeoSpockWeb.init).toBeDefined();
    });

    it("should initialize the serverUrl and the CollideKey", function () {
      GeoSpockWeb.init(serverUrl ,collideKey);
      expect(GeoSpockWeb.serverUrl).toBe(serverUrl);
      expect(GeoSpockWeb.CollideKey).toBe(collideKey);
    });

    it('sets ajax default url', function() {
      GeoSpockWeb.init(serverUrl,collideKey);
      var url = $.ajaxSetup();
      expect($.ajaxSetup().url).toContain(serverUrl);
    });

    it('should inizialize the ajax header with the token in CollideKey', function() {
      GeoSpockWeb.init(serverUrl,collideKey);
      var url = $.ajaxSetup();
      expect($.ajaxSetup().headers.CollideKey).toBe(collideKey);
    });

    it('should inizialize the ajax header with the content type', function() {
      GeoSpockWeb.init(serverUrl,collideKey);
      var url = $.ajaxSetup();
      expect($.ajaxSetup().headers['Content-Type']).toBe('application/json');
    });
  });

  describe("GeoSpockWeb.post", function() {
    it('should be defined', function() {
      expect(GeoSpockWeb.post).toBeDefined();
    });

    it('should default type to 0', function() {
      spyOn($, "ajax").and.callFake(function(req) {
        expect(req.url.slice(-2)).toBe("/0");
      });
      GeoSpockWeb.init(serverUrl,collideKey);
      GeoSpockWeb.post({somedata:'somedata'});
    });

    it('should fail if the type is > 2,147,483,647 (INT_MAX)', function(done) {
      GeoSpockWeb.init(serverUrl,collideKey);
      var TYPE = 3000000000;

      GeoSpockWeb.post({somedata:'somedata'}, TYPE)
        .fail(function() {
          done();
          expect(true).toBe(true);
        });
    });

//    it('should post the given object with the given type', function() {});
  });


})();
