'use strict';

angular.module('nevermore')
  .factory('rawFactory', function($resource, BASE_URL) {

	this.query = function(headers) {
		return $resource(BASE_URL + '/rawData/:tableName/list', {
			tableName: '@tableName'
		}, {
			'get': {
				method: 'GET',
				headers: headers
			}
		});
	};

	return this;

	});