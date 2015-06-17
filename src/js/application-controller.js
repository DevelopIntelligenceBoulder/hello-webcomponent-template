(function() {
    'use strict';

    //The element id specifying where the web application will reside
    var APP_ELEMENT_ID = 'app';

    /**
     * Initiates the component interaction.
     * @param model The data to be applied to the component
     */
    var initializeHelloComponent = function initializeHelloComponent(model) {
        DI.App.HelloComponent.render(APP_ELEMENT_ID, model);
    };

    /**
     * "Main" functionality for the application
     * Is invoked when the DOM Ready event is fired thanks to jQuery.
     */
    $(function() {

        //Hello model containing place information
        var helloModel = {
            place: 'World'
        };

        //Get the Hello component setup for the application
        initializeHelloComponent(helloModel);

    });

})();