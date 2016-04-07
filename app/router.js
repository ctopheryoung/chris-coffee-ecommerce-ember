import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('coffee');
  this.route('accessories');
  this.route('category', {path: '/category/:category_id'});
});

export default Router;
