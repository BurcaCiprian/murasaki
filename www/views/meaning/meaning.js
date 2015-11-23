/* Licensed Materials - Property of IBM
*  (C) Copyright IBM Corp. 2015 All Rights Reserved.
*/
angular.module('controllers')

.controller('MeaningCtrl', function($state, $timeout) {

  this.goBack = function(section) {
      console.log('--> goBack');

      $state.go('main');
  };

});
