module.exports = function(config){
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath : '..',

        // list of files / patterns to load in the browser
        files : [
          // the reason we load unit tests next is because they don't depend on the app. On the contrary,
          // they set mocks ahead of time for the units so they have to be loaded first
          'test/unit/**/*.js',

          // now all the dependencies have been sorted, the app code can be loaded
          'build/js/*.js',
          // 'node_modules/fakerest/dist/FakeRest.min.js',
          // 'node_modules/sinon/pkg/sinon.js'
        ],

        // list of files to exclude
        exclude : [
            '**/3rd/**/*.js',
            '**/istanbul-middleware-port/**/*',
            'karma.conf.js'
        ],

        frameworks : ['jasmine-ajax', 'jasmine'],

        coverageReporter : {
            type: 'text-summary',
            dir: 'build/reports/coverage/',
            file: 'coverage.txt'
        },

        junitReporter: {
            outputFile: 'build/reports/TEST-UnitTests.xml',
            suite: ''
        },

        htmlReporter: {
          outputDir: 'build/reports/', // where to put the reports
          templatePath: null, // set if you moved jasmine_template.html
          focusOnFailures: true, // reports show failures on start
          namedFiles: false, // name files instead of creating sub-directories
          pageTitle: null, // page title for reports; browser info by default
          urlFriendlyName: false, // simply replaces spaces with _ for files/dirs


          // experimental
          preserveDescribeNesting: false, // folded suites stay folded
          foldAll: false, // reports start folded (only with preserveDescribeNesting)
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit'
        reporters : ['mocha', 'coverage', 'junit', 'html'],

        // web server port
        port : 9876,

        // cli runner port
        runnerPort : 9100,

        // enable / disable colors in the output (reporters and logs)
        colors : true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel : config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch : false,

        customLaunchers: {
          'PhantomJS_Custom': {
            base: 'PhantomJS',
            options: {
              settings: {
                webSecurityEnabled: false
              },
            },
            debug: false
          }
        },

        phantomjsLauncher: {
          // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
          exitOnResourceError: true
        },

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
//        browsers : ['PhantomJS_Custom'],
//        browsers : ['Chrome'],
        browsers : ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout : 60000,

    //    browserNoActivityTimeout : 100000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun : true
    });
};
