(function () {
    'use strict';

    angular
        .module('avivaaApp')
        .config(materialDesignConfig);

    function materialDesignConfig() {
        // Initialize material design
        $.material.init();
    }
})();
