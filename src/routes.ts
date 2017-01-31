export default routesConfig;
import {articlesModule} from './app/articles/index';
import {main} from './app/main';
import {mainArticles} from './app/main-articles';



/** @ngInject */
function routesConfig( $stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  //$locationProvider.html5Mode(false);
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      abstract: true,
      template: "<ui-view id='mainview'/>",
    })
    .state('main.app', {
      url: '',
      views: {
        'body@': {
          component: "app",
        }
      }
    })
    .state("sources",
      {
        abstract: true,
        url: "/sources",
      })
    .state('sources.edit', {
      url: "/:sourceId",
      views: {
        'body@': {
          component: "mainArticles",
        }
      }
      // this works in normal condirtions
      // resolve: {
      //   articlesPromiseCallback: ($http: angular.IHttpService, $stateParams: ng.ui.IStateParamsService) => {
      //     if ($stateParams["sourceId"].length !== 0) {
      //       let articleId = 0;
      //       articleId = parseInt($stateParams["sourceId"]);
      //     }
      //     return $http.get("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=826f6a337dd847f0bcae91911c264247");
      //     //return $stateParams['sourceId'];
      //   },
      //   // articleId: ($http: angular.IHttpService, $stateParams: ng.ui.IStateParamsService) => {
      //   //   //return $stateParams['sourceId'];
      //   // }
      // }
  });
}
