import * as _ from "lodash";

/**
 * The article object that is used to map the dto and show the details
 */
class Article {
  constructor(public title: string,
              public description: string,
              public url: string,
              public urlToImage: string,
              public publishedAt: Date) {
  }
}


/**
 * The articles controller that handles the second page which represents the list of the articles.
 * On entering a source the constructor is called and the query to the API is made.
 * The result is pushed( or we could map) to the articles property.
 */
export default class ArticlesController {
  public articles: Article[];
  public source: string;

  /** @ngInject */
  constructor($http: angular.IHttpService,
              $stateParams: ng.ui.IStateParamsService) {
    if (_.isEmpty($stateParams["sourceId"])) {
      return;
    }

    $http.get(`https://newsapi.org/v1/articles?source=${$stateParams["sourceId"]}&apiKey=826f6a337dd847f0bcae91911c264247`).then((result) => {
      this.articles = (result.data as any).articles as Article[];
      this.source = (result.data as any).source as string;
    })

  }
}

export const articles: angular.IComponentOptions = {
  template: require('./articles.html'),
  controller: ArticlesController
};
