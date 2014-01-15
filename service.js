'use strict';

angular.module('local.storage', [])
  .factory('LocalStorage', function($timeout){
		function supportsHtml5Storage() {
		  try {
		    return 'ls' in window && window['localStorage'] !== null;
		  } catch (e) {
		    return false;
		  }
		};
		return {
			isSupported: supportsHtml5Storage,
			put: function(key, object) {
				if(supportsHtml5Storage) {
					$timeout(function(){localStorage[key] = angular.toJson(object);}, 0);
				}
			},
			get: function(key) {
				if(supportsHtml5Storage) {
					return angular.fromJson(localStorage[key]);
				}
			},
			clear: function (key) {
				if(supportsHtml5Storage) {
					localStorage.removeItem(key);
				}
			}
		}
	});


