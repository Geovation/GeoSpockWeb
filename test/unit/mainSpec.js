(function () {
  "use strict";

  describe("GeoSpockWeb", function() {
    var serverUrl="http://www.example.com";
    var collideKey="anInterestingToken";

    var xhr, requests;

    beforeEach(function() {
      jasmine.Ajax.install();
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });

    describe("GeoSpockWeb object", function () {
      it("should expose the sdk", function () {
        expect(GeoSpockWeb).toBeDefined();
      });
    });

    describe("GeoSpockWeb constructor", function () {
      it("should be a function", function () {
        expect(typeof GeoSpockWeb).toBe('function');
      });

      it("should initialize the serverUrl and the collideKey", function () {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);

        expect(geoSpockWeb.serverUrl).toBe(serverUrl);
        expect(geoSpockWeb.collideKey).toBe(collideKey);
      });

      it("should fail if wrong parameters", function() {
        expect(function() {new GeoSpockWeb()}).toThrow(new Error("serverUrl and collideKey are mandatory"));
        expect(function() {new GeoSpockWeb(serverUrl)}).toThrow(new Error("serverUrl and collideKey are mandatory"));
        expect(function() {new GeoSpockWeb(null, collideKey)}).toThrow(new Error("serverUrl and collideKey are mandatory"));
        expect(function() {new GeoSpockWeb(null, null)}).toThrow(new Error("serverUrl and collideKey are mandatory"));
      });

    });

    describe("GeoSpockWeb.post", function() {
      it('should be defined', function() {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        expect(geoSpockWeb.post).toBeDefined();
      });

      it('should fail if the data is not defined', function(done) {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);

        geoSpockWeb.post()
          .then(function(result) {
            expect(result).toBe('failed');
            done();
          })
          .catch(function(result) {
            expect(result).toBe('data parameter is mandatory.');
            done();
          });
      });

      it('should fail if the type is > 2,147,483,647 (INT_MAX)', function(done) {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        var TYPE = 3000000000;

        geoSpockWeb.post({}, TYPE)
          .then(function(result) {
            expect(result).toBe('failed');
            done();
          })
          .catch(function(result) {
            expect(result).toBe('type parameter cannot be bigger than 2147483647');
            done();
          });
      });

      it('should default type to 0', function() {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        geoSpockWeb.post({somedata:'somedata'});

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.url.slice(-2)).toBe("/0");
      });

      it('should post the given object', function() {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        var DATA = {"somedata" : "somedata"};
        geoSpockWeb.post(DATA);

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.method).toBe('POST');
        expect(request.params).toEqual(DATA);
      });
    });

    describe("GeoSpockWeb.get", function() {
      it('should be defined', function() {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        expect(geoSpockWeb.get).toBeDefined();
      });

      it('should fail if the type is > 2,147,483,647 (INT_MAX)', function(done) {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        var TYPE = 3000000000;
        var ID = 1234;

        geoSpockWeb.get(ID, TYPE)
          .then(function(result) {
            expect(result).toBe('failed');
            done();
          })
          .catch(function(result) {
            expect(result).toBe('type parameter cannot be bigger than 2147483647');
            done();
          });
      });

      it('should fail if the id is not defined', function(done) {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);

        geoSpockWeb.get()
          .then(function(result) {
            expect(result).toBe('failed');
            done();
          })
          .catch(function(result) {
            expect(result).toBe('id parameter is mandatory.');
            done();
          });
      });

      it('should default type to 0', function() {
        var ID = 1234;
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        geoSpockWeb.get(ID);

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.url.slice(-3-("" + ID).length )).toBe("/0/"+ ID);
      });
    });



    describe("GeoSpockWeb.put", function() {
      it('should be defined', function() {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        expect(geoSpockWeb.put).toBeDefined();
      });

      it('should default type to 0', function() {
        var DATA = {"somedata" : "some data"};
        var ID = 1234;
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        geoSpockWeb.put(ID, DATA);

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.url.slice(-3-("" + ID).length )).toBe("/0/"+ ID);
      });

      it('should fail if the type is > 2,147,483,647 (INT_MAX)', function(done) {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        var TYPE = 3000000000;
        var ID = 1234;
        var DATA = {"somedata" : "some data"};

        geoSpockWeb.put(ID, DATA, TYPE)
          .then(function(result) {
            expect(result).toBe('failed');
            done();
          })
          .catch(function(result) {
            expect(result).toBe('type parameter cannot be bigger than 2147483647');
            done();
          });
      });

      it('should fail if the id is not defined', function(done) {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);

        geoSpockWeb.put()
          .then(function(result) {
            expect(result).toBe('failed');
            done();
          })
          .catch(function(result) {
            expect(result).toBe('id parameter is mandatory.');
            done();
          });
      });

      it('should fail if the data is not defined', function(done) {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        var ID = 1234;

        geoSpockWeb.put(ID)
          .then(function(result) {
            expect(result).toBe('failed');
            done();
          })
          .catch(function(result) {
            expect(result).toBe('data parameter is mandatory.');
            done();
          });
      });

      it('should post the given object', function() {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        var DATA = {"somedata" : "some data"};
        var ID = 1234;
        geoSpockWeb.put(ID, DATA);

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.method).toBe('PUT');
        expect(request.params).toEqual(DATA);
      });

    });



    describe("GeoSpockWeb.delete", function() {
      it('should be defined', function() {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        expect(geoSpockWeb.delete).toBeDefined();
      });

      it('should default type to 0', function() {
        var ID = 1234;
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        geoSpockWeb.delete(ID);

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.url.slice(-3-("" + ID).length )).toBe("/0/"+ ID);
      });

      it('should fail if the type is > 2,147,483,647 (INT_MAX)', function(done) {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
        var TYPE = 3000000000;
        var ID = 1234;

        geoSpockWeb.delete(ID, TYPE)
          .then(function(result) {
            expect(result).toBe('failed');
            done();
          })
          .catch(function(result) {
            expect(result).toBe('type parameter cannot be bigger than 2147483647');
            done();
          });
      });

      it('should fail if the id is not defined', function(done) {
        var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);

        geoSpockWeb.delete()
          .then(function(result) {
            expect(result).toBe('failed');
            done();
          })
          .catch(function(result) {
            expect(result).toBe('id parameter is mandatory.');
            done();
          });
      });
    });

  });


})();
