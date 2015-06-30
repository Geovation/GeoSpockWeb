(function () {
    "use strict";

    describe("GeoSpockWeb", function () {

        it("should find jQuery", function () {
          expect(true).toBe(true);
          expect($).toBe(jQuery);
        });

        it("should expose the sdk", function () {
            expect(GeoSpockWeb).toBeDefined();
        });

        // it("should call the requestSample method when getting a page", function () {
        //     spyOn(GeoSpockWeb, '_requestSample');
        //     GeoSpockWeb.GetPage('Cheese');
        //     expect(GeoSpockWeb._requestSample.calls.length).toEqual(1);
        // });
    });

    describe("GeoSpockWeb.Initialize", function () {
      it("should have a method called Initialize", function () {
        expect(GeoSpockWeb.Initialize).toBeDefined();
      });

      it("should initialize the serverUrl and the apiToken", function () {
        var serverUrl="http://www.example.com";
        var apiToken="anInterestingToken";
        GeoSpockWeb.Initialize(serverUrl,apiToken);
        expect(GeoSpockWeb.serverUrl).toBe(serverUrl);
        expect(GeoSpockWeb.apiToken).toBe(apiToken);
      });

      
    });


})();
