/* Licensed Materials - Property of IBM
*  (C) Copyright IBM Corp. 2015 All Rights Reserved.
*/
angular.module('controllers')

.controller('MainCtrl', function($state, $timeout) {

  this.sectionTap = function(section) {
      console.log('--> sectionTap --> ' + section);

      $timeout(function() {

         switch (section) {
           case 'seeColors':
             $state.go('colors');
             break;
          case 'meaning':
               $state.go('meaning');
               break;
          case 'play':
              $state.go('play');
              break;
          case 'learn':
              $state.go('learn');
              break;
           default:

         }
    }, 400);
  };

});
