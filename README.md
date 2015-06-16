# hello-webcomponent-template
A simple example of Hello World written with HTML5 Web Components utilizing the [Template DOM element](http://www.w3.org/TR/html51/semantics.html#the-template-element).

## Do this first
Before looking at the HTML5 Web Component `<template>` element take a look at how to achieve this in [Plain HTML and JavaScript](https://github.com/DevelopIntelligenceBoulder/hello-plain-old-javascript) and take a look how to achieve this with [HTML Imports via Web Components](https://github.com/DevelopIntelligenceBoulder/hello-webcomponent-import).

## Browser Support
Check out [Can I Use](http://caniuse.com/#feat=template) to see if/when [IE](https://status.modern.ie/templateelement) will adopt the use of the `<template>` element.

## What is this?
This example shows how to utilize templates the HTML5 Web Component Specification. The`<template>`holds reusable HTML elements and are populated with model properties.

### Within the js/main.js
The application namespace is created. It is a simple JavaScript namespace that the application architecture is attached too.

### Within the js/hello-component.js
A JavaScript module is created to handle component logic. The component exposes a render function that is invoked to merge the model properties into the DOM template. 

### Within the js/application-controller.js
An initialization function is utilized to start the view interaction. This method is invoked when the DOM is ready to be interacted with. The controller hands the component the model that is to be applied.

### Within the index.html
The index.html contains the application element, just a plain old HTML element. In this case a `<div id="app">`. 

## Instructions
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. jQuery & Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/src/` in your web browser

##Where to go from here?
[DevelopIntelligence](http://www.developintelligence.com/) offers a variety of [classes on HTML5](http://www.developintelligence.com/catalog/web-development-training/html-html5) and [classes on JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript). Check out the [Introduction to JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript/introduction-to-javascript), the [Introduction to HTML5](http://www.developintelligence.com/catalog/web-development-training/html-html5/introduction-to-html5) or the [Mobile Web Development Bootcamp](http://www.developintelligence.com/catalog/web-development-training/mobile-web-development-boot-camp) to get your team up to speed.

