'use strict';

angular.module('nevermore')
  .factory('forecastFactory', function($resource, BASE_URL) {

	this.query = function(headers) {
		return $resource(BASE_URL + '/predictData/:tableName/list', {
			tableName: '@tableName'
		}, {
			'get': {
				method: 'GET',
				headers: headers
			}
		});
	};

	return this;

	})

  .factory('forecastFactory_Power', function($resource, BASE_URL) {

	this.query = function(headers) {
		return $resource(BASE_URL + '/predictData/:tableName/list', {
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