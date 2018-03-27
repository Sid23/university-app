// Import of custom pages
import Login from './pages/login';
import StudentHome from './pages/student';
import StudentExams from './pages/student/exams';
import StudentCourses from './pages/student/courses';
import CoursesList from './pages/courses';

// Definition on all application routes
const appRoutes = [ 
        {
            path: '/',
            exact: true,
            component: Login
        },
        {
            path: '/students/:id/courses',
            component: StudentCourses
        },
        {
            path: '/students/:id/exams',
            component: StudentExams
        },
        {
            path: '/students/:id',
            exact: true,
            component: StudentHome,
        },
        {
            path: '/courses',
            component: CoursesList
        },
        {
            path: '**',
            component: Login
        }
]
export default appRoutes;