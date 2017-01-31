export default routesConfig;



/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state("sources",
      {
        abstract: true,
        url: "/sources",
        template: "<ui-view id='mainview'/>",
      })
    .state('sources.edit', {
      url: "/{sourceId:[0-9a-zA-Z]}",
      views: {
        "": {
          controller:"SourceController",
          controllerAs: "vm",
          template: require("./app/source.html"),
        }
      },
      // resolve: {
      //   sourceId: ($stateParams: ng.ui.IStateParamsService) => {
      //     return $stateParams['sourceId'];
      //   }
      // }
  });
}
