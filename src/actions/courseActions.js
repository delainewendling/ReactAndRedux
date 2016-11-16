import * as types from './actionTypes'
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions';
//This function returns an action, an action needs to have a type. Don't need to write course: course since we're using ES6. You may have to create a LOAD_COURSES_ERROR to handle errors
export function loadCoursesSuccess(courses){
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course){
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course){
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
  return dispatch =>{
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
    .then(courses =>{
      dispatch(loadCoursesSuccess(courses));
    })
    .catch(error =>{
      throw(error);
    })
  }
}

export function saveCourse(course) {
  return function (dispatch, getState){
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse =>{
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    })
    .catch(error =>{
      throw(error);
    })
  }
}
