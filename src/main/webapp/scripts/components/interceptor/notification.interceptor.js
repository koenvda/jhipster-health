 'use strict';

angular.module('gezondheidApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-gezondheidApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-gezondheidApp-params')});
                }
                return response;
            }
        };
    });
