import * as redux from 'redux';
import thunk from 'redux-thunk';

//var exampleReducer = require('../reducers/exampleReducer');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    example: exampleReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
