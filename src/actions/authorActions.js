import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
//This function returns an action, an action needs to have a type. Don't need to write course: course since we're using ES6. You may have to create a LOAD_COURSES_ERROR to handle errors
export function loadAuthorsSuccess(authors){
  return { type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return dispatch =>{
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors()
    .then(authors =>{
      dispatch(loadAuthorsSuccess(authors));
    })
    .catch(error =>{
      throw(error);
    })
  }
}
