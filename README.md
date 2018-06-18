# Project Overview

In this project using testing framework [Jasmine](http://jasmine.github.io/) to test an application. The project you are a web-based application that reads RSS feeds.


## Setup

```
$ git@github.com:krittiyaclark/Udacity-Front-End-Feed-Reader.git
$ cd frontend-feedreader
```

## Run App

```
$ open index.html
```

Tests that are green have passed and red have failed.

## Testing

1. Tests to make sure that the allFeeds variable has been defined and that it is not empty.
2. Tests that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
3. Tests that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
4. Tests that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5. Tests that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
6. Tests that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

