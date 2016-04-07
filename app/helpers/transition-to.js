import Ember from 'ember';

export function transitionTo(params/*, hash*/) {
  var route = params[0];
  console.log(route);
  this.transitionTo(route);
}

export default Ember.Helper.helper(transitionTo);
