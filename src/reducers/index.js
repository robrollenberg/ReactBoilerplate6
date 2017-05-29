import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';

import exampleReducer from './SeasonReducer';

export default combineReducers({
  season: SeasonReducer
});
