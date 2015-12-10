'use strict';

angular.module('gezondheidApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


