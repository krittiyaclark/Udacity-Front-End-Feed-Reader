/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL defined and that the URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
            });
         });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name defined and that the name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy(); 
            });
         });
    });


    /* The menu suite */
    describe('The menu', function() {


        /* This test ensures the menu element is
         * hidden by default. 
         */
         it('ensures the menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
         /* This test ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('visibility when the menu icon is clicked', function() {
            var menuIcon = $('.menu-icon-link');

            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /* Initial Entries suite */
    describe('Initial Entries', function() {

     
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
        */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('should be at least one entry', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
    /* New Feed Selection suite */
    describe('New Feed Selection', function() {


        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        var checkFeedOne; 
        var checkFeedTwo;

        beforeEach(function(done) {
            loadFeed(0, function() {
                checkFeedOne = $('.feed').html();
                done();
            });
        });

        it('content loaded', function(done) {
            loadFeed(1, function() {
                checkFeedTwo = $('.feed').html();
                expect(checkFeedTwo).not.toEqual(checkFeedOne);
                done();
            });
        });
    });
}());
