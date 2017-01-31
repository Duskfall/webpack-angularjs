import * as angular from 'angular';

import {tech} from './tech';

export const techsModule = 'techs';

angular
  .module(techsModule, [])
  .component('fountainTech', tech)
