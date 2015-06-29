(function () {
    "use strict";

    describe("GeoSpockWeb", function () {
        it("sanity check", function () {
            expect(true).toBe(true);
        });

        it("should expose the sdk", function () {
            expect( GeoSpockWeb ).toBeDefined();
            expect( GeoSpockWeb.WikiTextHelper ).toBeDefined();
        });

        it("should have a method called GetPage", function () {
            expect( GeoSpockWeb.GetPage ).toBeDefined();
        });

        it("should call the requestSample method when getting a page", function () {
            spyOn(GeoSpockWeb, '_requestSample');
            GeoSpockWeb.GetPage('Cheese');
            expect(GeoSpockWeb._requestSample.calls.length).toEqual(1);
        });
    });

    describe("GeoSpockWeb.WikiTextHelper", function () {
        it("should convert a given text to upper case", function () {
            var upperCase = GeoSpockWeb.WikiTextHelper._upperCase('some text I got');
            expect(upperCase).toBe('SOME TEXT I GOT');
        });
    });

})();
