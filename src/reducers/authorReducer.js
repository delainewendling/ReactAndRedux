import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action){
  switch(action.type){
    //What the ES6 spread operator does is return a new instance of the state array. Then you can use Object.assign to create a deep copy of the array with a new item.
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
