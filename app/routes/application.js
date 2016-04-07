import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },
    transitionToCategory(category) {
      this.transitionTo('/category/' + category.id);
    },
  }
});
