import * as angular from 'angular';

import {techsModule} from './app/techs/index';
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

class SourceController {
  /** @ngInject */
  constructor($stateParams: ng.ui.IStateParamsService) {
    console.log($stateParams);
  }

}

angular
  .module('app', [techsModule, "ui.bootstrap", "ui.router", "ngAnimate", "angular-growl"])
  .config(routesConfig)
  .component('app', main)
  .filter("startFrom", TableFilters)
  .controller("SourceController",SourceController)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
