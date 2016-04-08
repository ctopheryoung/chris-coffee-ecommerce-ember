import Ember from 'ember';

export function pageName(params, hash) {
  console.log(window.location);
  return window.location.pathname;
}

export default Ember.Helper.helper(pageName);
