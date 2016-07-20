(function() {
    'use strict';
    angular
        .module('mozhotelsbookingApp')
        .factory('InstanceRoomType', InstanceRoomType);

    InstanceRoomType.$inject = ['$resource'];

    function InstanceRoomType ($resource) {
        var resourceUrl =  'api/instance-room-types/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
