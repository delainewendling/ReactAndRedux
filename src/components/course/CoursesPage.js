import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    //This is binding 'this' to the CoursePage component rather than changing the this later in the component
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }
  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }
  render(){
    const {courses} = this.props;
    return (
      <div>
        <h1> Courses </h1>
        <input type="submit"
          value="add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
}
function mapStateToProps(state, ownProps){
  return {
    //We're accessing the courses data in the Redux Store
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch){
  //This will go through all of the actions and dispatch them, if they match the called function above.
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
