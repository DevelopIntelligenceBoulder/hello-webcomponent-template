(function() {
    'use strict';

    /**
     * Hello Component module used to handle UI rendering
     */
    DI.App.HelloComponent = (function() {

        /**
         * Handles the rendering of this Component
         * @param elementID The id of the element the component will be placed within
         * @param model The model object holding dynamic data
         */
        var render = function render(elementID, model) {
            //Grab the template node
            var template = document.getElementById('hello-template');

            //Clone the node ... Import node if coming from a template in index.html
            var importTemplate = document.importNode(template.content, true);

            //Inject model (i.e. "place")
            importTemplate.querySelector('[data-model="place"]').textContent = model.place;

            //Attach template to DOM
            document.getElementById(elementID).appendChild(importTemplate);
        };

        //API for Module Revealing Pattern
        return {
            render: render
        };

    })();

})();