// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('murasaki', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// intercept navigation and perform authorization checks for the target
.run(function($rootScope, $state) {



    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeStart to', toState, toParams, 'from', fromState, fromParams);
    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        console.log('$stateChangeError to', toState.name, toParams, 'from', fromState.name, fromParams);

        $state.go('splash');
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeSuccess to', toState.name, toParams, 'from', fromState.name, fromParams);
    });

    $rootScope.$on('$viewContentLoaded', function(event) {
        console.log('$viewContentLoaded', event);
    });

    $rootScope.$on('$locationChangeStart', function(event, toUrl, fromUrl) {
        console.log('$locationChangeStart to', new URL(toUrl).hash, 'from', new URL(fromUrl).hash);
    });

    $rootScope.$on('$locationChangeSuccess', function(event, toUrl, fromUrl) {
        console.log('$locationChangeSuccess to', new URL(toUrl).hash, 'from', new URL(fromUrl).hash);
    });

    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
        console.log('$stateNotFound', unfoundState, 'from', fromState, fromParams);
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // BVC: Custom settings
  // give the tabs on android the same look and feel as for ios
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.tabs.style('standard');
  // center titles - even for android
  $ionicConfigProvider.navBar.alignTitle('center');
  // remove text for back icon (terms and conditions screen)
  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.views.transition('none')

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('splash', {
      url: '/splash',
      templateUrl: 'views/splash/splash.html'
  })

  .state('main', {
      url: '/main',
      templateUrl: 'views/main/main.html'
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});
