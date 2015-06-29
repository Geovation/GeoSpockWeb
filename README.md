GeoSpock Web [![Build Status](https://semaphoreci.com/api/v1/projects/cd83ab84-c088-4739-8f11-988eedbbef58/467989/badge.svg)](https://semaphoreci.com/sebastianovide/geospockweb)
============

A Web SDK for using GeoSpock APIs. Check out the [demo](https://raw.githubusercontent.com/Geovation/GeoSpockWeb/master/example/example1.html).

### 1. Installation

* ```bower install -s geospockweb```

### 2. GitHuh contributions
* fork https://github.com/Geovation/GeoSpockWeb
* work on it, commit and push into your fork
* from GitHub ask for a pull request

### 3. Development
* install node (I like nvm)
* ```npm install -g gulp```
* ```npm install```
* ```gulp``` to see the list of available tasks

### 4. Essential Gulp Tasks
* ```gulp build``` dumps a plain and a minified file from all files in the folder ```src``` into the folder ```dist```.
* ```gulp clean``` removes all files in the folder ```dist```.
* ```gulp test``` runs the tests and linting for all files in the folder ```src```.
* ```gulp bump-patch``` increases the version by ```0.0.1``` for the last git commit and pushes the new tag to the remote repository.
* ```gulp bump-minor``` increases the version by ```0.1.0``` for the last git commit and pushes the new tag to the remote repository.
* ```gulp bump-major``` increases the version by ```1.0.0``` for the last git commit and pushes the new tag to the remote repository.
