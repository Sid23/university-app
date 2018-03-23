import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

// Import of custom pages
import Login from './pages/login';
import StudentHome from './pages/student';
import StudentExams from './pages/student/exams';
import StudentCourses from './pages/student/courses';
import CoursesList from './pages/courses';

// Definition on all application routes
export default(
    <Route path="/" component={App} >
        <Route exact path="/" component={Login} />
        <Route path="student" component={StudentHome} >
            <Route path="courses" component={StudentCourses} />
            <Route path="exams" component={StudentExams} />
        </Route>
        <Route path="courses" component={CoursesList} />
        <Route path="login" component={Login} />
        <Route path="*" component={Login} />
    </Route>
);