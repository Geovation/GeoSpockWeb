(function () {
  "use strict";

  describe("GeoSpockWeb", function() {
    var serverUrl="http://www.example.com";
    var collideKey="anInterestingToken";

    var xhr, requests;

    beforeEach(function() {
      jasmine.Ajax.install();

      // // sinon.config = {
      // //   useFakeServer: sinon.fakeServerWithClock
      // // };
      // xhr = sinon.useFakeXMLHttpRequest();
      // requests = [];
      // xhr.onCreate = function (req) { requests.push(req); };

      // var testData = { foo: 'bar', name: 'phil' };
      // this.server = sinon.fakeServer.create();
      // this.server.respondWith("GET", "/api/testmodel/1", [200, { "Content-Type": "application/json" }, JSON.stringify(testData)]);
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
      // xhr.restore();
      // this.server.restore();
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


    //   it('The Other Fake', function(done){
    //     jasmine.Ajax.install();
    //
    //   //  var doneFn = jasmine.createSpy("success");
    //
    //     // jasmine.Ajax.stubRequest('/another/url').andReturn({
    //     //   "responseText": 'immediate response'
    //     // });
    //
    //
    //
    //
    //   var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
    //
    //
    //
    //   geoSpockWeb
    // //    .client('/')
    //     .rest('/')
    //     .then(function(response) {
    //       console.log("11111111111111  " + JSON.stringify(response));
    //       //
    //       // var request = jasmine.Ajax.requests.mostRecent();
    //       //
    //       // expect(request.url).toContain(serverUrl);
    //       done();
    //     }, function(response) {
    //       console.log("44444444444  " + JSON.stringify(response));
    //       //
    //       // var request = jasmine.Ajax.requests.mostRecent();
    //       //
    //       // expect(request.url).toContain(serverUrl);
    //       done();
    //     })
    //     .catch(function(response) {
    //       console.log("222222222222222 " + JSON.stringify(response));
    //
    //       expect(JSON.stringify(response)).toBe(undefined);
    //       done();
    //     });
    //
    //     console.log("33333 " + JSON.stringify(jasmine.Ajax.requests.mostRecent()));
    //
    //
    //
    //
    //
    //
    //     //
    //     // var oReq = new XMLHttpRequest();
    //     //
    //     // oReq.onreadystatechange = function() {
    //     //   console.log('FAKE SERVER >> ' + oReq.readyState + " -> " + oReq.status + " -> " + JSON.stringify(oReq));
    //     //   if (oReq.readyState==4) done();
    //     // }
    //     //
    //     // oReq.open('GET', '/another/url');
    //     // oReq.send();
    //     //
    //     // console.log('FAKE SERVER >> -- <<' + JSON.stringify(jasmine.Ajax.requests.mostRecent()));
    //     //
    //     // console.log(jasmine.Ajax.requests.mostRecent().response);
    //     // console.log(jasmine.Ajax.requests.mostRecent().respondWith);
    //
    //
    //
    //
    //     jasmine.Ajax.requests.mostRecent().respondWith({
    //       "status": 200,
    //       "contentType": 'text/plain',
    //       "responseText": 'awesome response'
    //     });
    //
    //
    //
    //     console.log('FAKE SERVER >> -- <<' + JSON.stringify(jasmine.Ajax.requests.mostRecent()));
    //
    //
    //
    //
    //
    //
    //   });




      // it('FAKE SERVER SINON', function(done) {
      //
      //
      //   var oReq = new XMLHttpRequest();
      //   oReq.onreadystatechange = function() {
      //     console.log('FAKE SERVER >> ' + oReq.readyState + " -> " + oReq.status + " -> " + JSON.stringify(oReq));
      //     if (oReq.readyState==4) done();
      //   }
      //   try {
      //     oReq.open('GET', '/api/testmodel/1');
      //     oReq.send();
      //   }
      //   catch (ex) {
      //     console.log('FAKE SERVER >> ' + ex);
      //   }
      //
      //   console.log('FAKE SERVER >> -- <<');
      //
      //
      //
      //
      //   // var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
      //   // geoSpockWeb
      //   //   .client('/')
      //   //   .then(function(response) {
      //   //     console.log("11111111111111  " + JSON.stringify(response));
      //   //     //
      //   //     // var request = jasmine.Ajax.requests.mostRecent();
      //   //     //
      //   //     // expect(request.url).toContain(serverUrl);
      //   //     done();
      //   //   })
      //   //   .catch(function(response) {
      //   //     console.log("222222222222222 " + JSON.stringify(response));
      //   //
      //   //     expect(JSON.stringify(response)).toBe(undefined);
      //   //     done();
      //   //   });
      //   //
      //   //   console.log("33333 ");
      //
      //
      // });






      // it('sets ajax default url', function(done) {
      //   var geoSpockWeb = new GeoSpockWeb(serverUrl ,collideKey);
      //
      //   geoSpockWeb
      //     .client({ method: 'GET', entity: 'defaulted' })
      //     .then(function(response) {
      //       console.log("11111111111111  " + JSON.stringify(response));
      //
      //       var request = jasmine.Ajax.requests.mostRecent();
      //
      //       expect(request.url).toContain(serverUrl);
      //       done();
      //     })
      //     .catch(function(response) {
      //       console.log("222222222222222 " + JSON.stringify(response));
      //
      //       expect(JSON.stringify(response)).toBe(undefined);
      //       done();
      //     });
      //
      //     console.log("333333333");
      //
      //
      //
      // });

      //
      // it('sets ajax default url', function() {
      //   GeoSpockWeb.init(serverUrl,collideKey);
      //   var url = $.ajaxSetup();
      //   expect($.ajaxSetup().url).toContain(serverUrl);
      // });
      //
      // it('should inizialize the ajax header with the token in CollideKey', function() {
      //   GeoSpockWeb.init(serverUrl,collideKey);
      //   var url = $.ajaxSetup();
      //   expect($.ajaxSetup().headers.CollideKey).toBe(collideKey);
      // });
      //
      // it('should inizialize the ajax header with the content type', function() {
      //   GeoSpockWeb.init(serverUrl,collideKey);
      //   var url = $.ajaxSetup();
      //   expect($.ajaxSetup().headers['Content-Type']).toBe('application/json');
      // });
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



    // describe("GeoSpockWeb.delete", function() {
    //   it("should be defined", function () {
    //     expect(GeoSpockWeb.delete).toBeDefined();
    //   });
    //
    //   it('should default type to 0', function() {
    //     var ID = 1234;
    //     GeoSpockWeb.init(serverUrl,collideKey);
    //     GeoSpockWeb.delete(ID);
    //
    //     var request = jasmine.Ajax.requests.mostRecent();
    //     expect(request.url.slice(-3-("" + ID).length )).toBe("/0/"+ ID);
    //   });
    //
    //   it('should fail if the type is > 2,147,483,647 (INT_MAX)', function(done) {
    //     GeoSpockWeb.init(serverUrl,collideKey);
    //     var TYPE = 3000000000;
    //     var ID = 1234;
    //
    //     GeoSpockWeb.delete(ID, TYPE)
    //       .fail(function() {
    //         done();
    //         expect(true).toBe(true);
    //       });
    //   });
    //
    //   it('should fail if the ID is not defined', function(done) {
    //     GeoSpockWeb.init(serverUrl,collideKey);
    //
    //     GeoSpockWeb.delete()
    //       .fail(function() {
    //         done();
    //         expect(true).toBe(true);
    //       });
    //   });
    // });

  });


})();
