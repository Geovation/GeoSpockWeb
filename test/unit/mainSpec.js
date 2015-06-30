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

        // it("should have a method called Initialize", function () {
        //     expect( GeoSpockWeb.Initialize ).toBeDefined();
        // });

        // it("should call the requestSample method when getting a page", function () {
        //     spyOn(GeoSpockWeb, '_requestSample');
        //     GeoSpockWeb.GetPage('Cheese');
        //     expect(GeoSpockWeb._requestSample.calls.length).toEqual(1);
        // });
    });

    // describe("GeoSpockWeb.WikiTextHelper", function () {
    //     it("should convert a given text to upper case", function () {
    //         var upperCase = GeoSpockWeb.WikiTextHelper._upperCase('some text I got');
    //         expect(upperCase).toBe('SOME TEXT I GOT');
    //     });
    // });

})();
