'use strict';

angular.module('gezondheidApp')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('gezondheidApp.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });