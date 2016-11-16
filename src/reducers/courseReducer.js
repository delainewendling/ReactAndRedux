import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
  switch(action.type){
    //What the ES6 spread operator does is return a new instance of the state array. Then you can use Object.assign to create a deep copy of the array with a new item.
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ]
    case types.UPDATE_COURSE_SUCCESS:
        return [
          ...state.filter(course => course.id !== action.course.id),
          Object.assign({}, action.course)
        ]
    default:
      return state;
  }
}
