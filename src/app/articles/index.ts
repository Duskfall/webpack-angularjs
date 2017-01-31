import * as angular from 'angular';

import {article} from './article';
import {articles} from './articles';

export const articlesModule = 'articles';

angular
  .module(articlesModule, [])
  .component('article', article)
  .component('articles', articles)
