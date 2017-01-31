import * as _ from "lodash";

/**
 * Model that represents a class with the news
 */
class Channel {
  constructor(public id: string,
              public name: string,
              public description: string,
              public url: string,
              public urlsToLogos: _.Dictionary<string>,
              public category: string) {
  }
}


class Category {
  constructor(public id: number,
              public name: string) {
  }
}


/**
 * The controller that handles the calls to the news API
 */
class TechsController {
  public channels: Channel[] = [];
  public filteredChannels: Channel[] = [];
  public viewRecords = 6;
  public currentPage = 1;

  public categories: Category[] = [];

  /** @ngInject */
  constructor(private $http: angular.IHttpService) {
    $http.get("https://newsapi.org/v1/sources?language=en")
      .then(response => {
        // get unique categories
        this.categories = _.uniqBy(_.map((response.data as any).sources, (d: Channel, i) => {
          return {id: i + 1, name: d.category}
        }), "name");
        // get the news data
        this.channels = (response.data as any).sources as Channel[];
      });
  }

  /**
   * Get the news by category.
   * If the category is null/empty we get all news of all categories, otherwise we filter by category
   * @param category The category to be filtered
   */
  public filterByCategory(category: Category): void {
    let generatedRequest = `https://newsapi.org/v1/sources?language=en`;
    if (category) {
      generatedRequest += `&category=${category.name}`;
    }

    this.$http.get(generatedRequest)
      .then(response => {
        this.channels = (response.data as any).sources as Channel[];
      });
  }
}

export const main: angular.IComponentOptions = {
  template: require('./main.html'),
  controller: TechsController,
  controllerAs: "vm"
};
