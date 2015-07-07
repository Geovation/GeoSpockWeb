GeoSpock Web [![Build Status](https://semaphoreci.com/api/v1/projects/cd83ab84-c088-4739-8f11-988eedbbef58/467989/badge.svg)](https://semaphoreci.com/sebastianovide/geospockweb)
============

A Web SDK for using GeoSpock APIs. Check out the [demo](https://raw.githubusercontent.com/Geovation/GeoSpockWeb/master/example/example1.html).
This SDK is a wrapper around JQuery.ajax (see http://api.jquery.com/jquery.ajax/) and it laverages JQuery defers. All the SDK methods returns a deferred which is resolved when the ajax call succeed and fails if the ajax call enconters errors.

### 1. Installation
* ```bower install GeoSpockWeb```

### 2. Usage
* Add it and its dependencies (JQuery) to your site
```
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/GeoSpockWeb/dist/geospockweb.min.js"></script>
```
* Initialize it
```
GeoSpockWeb.init(serverUrl, apiKey);
```
* GET
```
GeoSpockWeb
  .get(id, type)
  .then(function(response) {
    console.log("Response from the server: " + response);
  })
  .fail(function(response){
    console.log("Something went wrong doing get: " + response);
  });
```
* POST
```
GeoSpockWeb
  .post(data, type)
  .then(function(response) {
    console.log("Response from the server: " + response);
    });
  })
  .fail(function(response){
    console.log("Something went wrong doing get: " + response);
  });
```
* PUT
```
GeoSpockWeb
  .put(id, data, type)
  .then(function(response) {
    console.log("Response from the server: " + response);
  })
  .fail(function(response){
    console.log("Something went wrong doing get: " + response);
  });
```
* DELETE
```
GeoSpockWeb
  .delete(id, type)
  .then(function(response) {
    console.log("Response from the server: " + response);
  })
  .fail(function(response){
    console.log("Something went wrong doing get: " + response);
  });
```


### 3. GitHuh contributions
* fork https://github.com/Geovation/GeoSpockWeb
* work on it, commit and push into your repo
* from GitHub ask for a pull request

### 4. Development
* install node (I like nvm)
* ```npm install -g gulp```
* ```npm install```
* ```gulp``` to see the list of available tasks

### 5. Essential Gulp Task
* ```gulp test``` runs the tests and linting for all files in the folder ```src```.
