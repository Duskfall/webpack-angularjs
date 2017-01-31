import * as angular from 'angular';

import {techsModule} from './app/techs/index';
import {articlesModule} from './app/articles/index';
import TableFilters from './app/filters/startFrom';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-growl-v2';
import "angular-animate";

import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.scss';
import {mainArticles} from "./app/main-articles";

class SourceController {
  /** @ngInject */
  constructor($stateParams: ng.ui.IStateParamsService) {
    console.log($stateParams);
  }

}

angular
  .module('app', [techsModule, articlesModule, "ui.bootstrap", "ui.router", "ngAnimate", "angular-growl"])
  .config(routesConfig)
  .component('app', main)
  .component('mainArticles', mainArticles)
  .run(["$rootScope", "growl", ($rootScope: angular.IRootScopeService, growl: angular.growl.IGrowlService) => {
    $rootScope.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams, error) => {
      console.log(event);
    });
    $rootScope.$on("$stateNotFound", (event, toState, toParams, fromState, fromParams, error) => {
      console.log(event);
    });
    $rootScope.$on("$stateChangeSuccess", (event, toState, toParams, fromState, fromParams, error) => {
      console.log(event);
    });
    $rootScope.$on("$stateChangeError", (event, toState, toParams, fromState, fromParams, error) => {
      console.log(event);
    });
    $rootScope.$on("$viewContentLoading", (event, toState, toParams, fromState, fromParams, error) => {
      console.log(event);
    });
    $rootScope.$on("$viewContentLoaded", (event, toState, toParams, fromState, fromParams, error) => {
      console.log(event);
    });
  }])
  .filter("startFrom", TableFilters)
  .controller("SourceController", SourceController)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
