(function () {
  "use strict";

  describe("GeoSpockWeb", function() {
    var serverUrl="http://www.example.com";
    var collideKey="anInterestingToken";

    beforeEach(function() {
      jasmine.Ajax.install();
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });

    describe("GeoSpockWeb object", function () {
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
        GeoSpockWeb.init(serverUrl,collideKey);
        GeoSpockWeb.post({somedata:'somedata'});

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.url.slice(-2)).toBe("/0");
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

      it('should fail if the data is not defined', function(done) {
        GeoSpockWeb.init(serverUrl,collideKey);

        GeoSpockWeb.post()
          .fail(function() {
            done();
            expect(true).toBe(true);
          });
      });

      it('should post the given object', function() {
        var DATA = {"somedata" : "somedata"};
        GeoSpockWeb.init(serverUrl,collideKey);
        GeoSpockWeb.post(DATA);

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.method).toBe('POST');
        expect(request.data()).toEqual(DATA);
      });
    });

    describe("GeoSpockWeb.get", function() {
      it('should be defined', function() {
        expect(GeoSpockWeb.get).toBeDefined();
      });

      it('should default type to 0', function() {
        var ID = 1234;
        GeoSpockWeb.init(serverUrl,collideKey);
        GeoSpockWeb.get(ID);

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.url.slice(-3-("" + ID).length )).toBe("/0/"+ ID);
      });

      it('should fail if the type is > 2,147,483,647 (INT_MAX)', function(done) {
        GeoSpockWeb.init(serverUrl,collideKey);
        var TYPE = 3000000000;
        var ID = 1234;

        GeoSpockWeb.get(ID, TYPE)
          .fail(function() {
            done();
            expect(true).toBe(true);
          });
      });

      it('should fail if the ID is not defined', function(done) {
        GeoSpockWeb.init(serverUrl,collideKey);

        GeoSpockWeb.get()
          .fail(function() {
            done();
            expect(true).toBe(true);
          });
      });
    });

    describe("GeoSpockWeb.put", function() {
      it('should be defined', function() {
        expect(GeoSpockWeb.put).toBeDefined();
      });

      it('should default type to 0', function() {
        var DATA = {"somedata" : "some data"};
        var ID = 1234;
        GeoSpockWeb.init(serverUrl,collideKey);
        GeoSpockWeb.put(ID, DATA);

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.url.slice(-3-("" + ID).length )).toBe("/0/"+ ID);
      });

      it('should fail if the type is > 2,147,483,647 (INT_MAX)', function(done) {
        GeoSpockWeb.init(serverUrl,collideKey);
        var TYPE = 3000000000;
        var ID = 1234;
        var DATA = {"somedata" : "some data"};

        GeoSpockWeb.put(ID, DATA, TYPE)
          .fail(function() {
            done();
            expect(true).toBe(true);
          });
      });

      it('should fail if the data is not defined', function(done) {
        GeoSpockWeb.init(serverUrl,collideKey);
        var ID = 1234;
        GeoSpockWeb.put(ID)
          .fail(function() {
            done();
            expect(true).toBe(true);
          });
      });

      it('should fail if the ID is not defined', function(done) {
        GeoSpockWeb.init(serverUrl,collideKey);

        GeoSpockWeb.put()
          .fail(function() {
            done();
            expect(true).toBe(true);
          });
      });

      it('should put the given object', function() {
        var DATA = {"somedata" : "some data"};
        var ID = 1234;
        GeoSpockWeb.init(serverUrl,collideKey);
        GeoSpockWeb.put(ID, DATA);

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.method).toBe('PUT');
        expect(request.data()).toEqual(DATA);
      });
    });

    describe("GeoSpockWeb.delete", function() {
      it("should be defined", function () {
        expect(GeoSpockWeb.delete).toBeDefined();
      });

      it('should default type to 0', function() {
        var ID = 1234;
        GeoSpockWeb.init(serverUrl,collideKey);
        GeoSpockWeb.delete(ID);

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.url.slice(-3-("" + ID).length )).toBe("/0/"+ ID);
      });

      it('should fail if the type is > 2,147,483,647 (INT_MAX)', function(done) {
        GeoSpockWeb.init(serverUrl,collideKey);
        var TYPE = 3000000000;
        var ID = 1234;

        GeoSpockWeb.delete(ID, TYPE)
          .fail(function() {
            done();
            expect(true).toBe(true);
          });
      });

      it('should fail if the ID is not defined', function(done) {
        GeoSpockWeb.init(serverUrl,collideKey);

        GeoSpockWeb.delete()
          .fail(function() {
            done();
            expect(true).toBe(true);
          });
      });
    });
  });


})();
