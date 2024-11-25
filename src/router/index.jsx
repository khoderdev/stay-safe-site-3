// import { createBrowserRouter } from 'react-router-dom';

// import Layout from '../views/Layout';
// import Home from '../views/Home';
// import Posts from '../components/posts/Posts';
// import Single from '../components/posts/Single';
// import Write from '../components/posts/Write';
// import AboutUs from '../views/AboutUs';
// import Register from '../views/Register';
// import Login from '../views/Login';
// import MDC from '../views/MDC';
// import OHS from '../views/OHS';
// import EnvirementalHealth from '../views/EnvirementalHealth';
// import PrivateRoute from '../router/PrivateRoute';
// import CircularText from '../components/dx-prevention/Circle';
// import DynamicDietPage from '../components/qualitative-diets/DynamicDietPage';
// import Users from '../views/Users';
// import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
// import BookAppointment from '../components/forms/BookAppointment';

// import PreventiveHealthPatientServices from '../views/PreventiveHealthPatientServices';
// import PublicHealthInterventions from '../views/PublicHealthInterventions';
// import PublicHealthAcademy from '../views/PublicHealthAcademy';
// import FoodSafetyPage from '../views/FoodSafetyPage';
// import Sample1 from '../components/buttons/Sample1';
// import HealthAndSafety from '../views/HealthAndSafety';

// const Router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Layout />,
// 		children: [
// 			{
// 				path: '/table',
// 				element: <FoodSafetyPage />,
// 			},

// 			{
// 				path: '/buttons',
// 				element: <Sample1 />,
// 			},
// 			{
// 				path: '/book-appointment',
// 				element: <BookAppointment />,
// 			},
// 			{
// 				path: '/qualitative-diets ',
// 				element: <QualitativeDiets />,
// 			},
// 			{
// 				path: '/:dietName',
// 				element: <DynamicDietPage />,
// 			},
// 			{
// 				path: '/',
// 				element: <Home />,
// 			},
// 			{
// 				path: '/preventive-health-patient-services',
// 				element: <PreventiveHealthPatientServices />,
// 			},
// 			{
// 				path: '/public-health-interventions',
// 				element: <PublicHealthInterventions />,
// 			},
// 			{
// 				path: '/public-health-academy',
// 				element: <PublicHealthAcademy />,
// 			},
// 			{
// 				path: '/health-and-safety',
// 				element: <HealthAndSafety />,
// 			},
// 			{
// 				path: '/users',
// 				element: <Users />,
// 			},
// 			{
// 				path: '/2',
// 				element: <CircularText />,
// 			},
// 			{
// 				path: '/posts',
// 				element: <Posts />,
// 			},
// 			{
// 				path: '/post/:id',
// 				element: <Single />,
// 			},
// 			{
// 				path: '/write',
// 				element: (
// 					<PrivateRoute>
// 						<Write />
// 					</PrivateRoute>
// 				),
// 			},
// 			{
// 				path: '/mdc',
// 				element: (
// 					// <PrivateRoute>
// 					<MDC />
// 					// </PrivateRoute>
// 				),
// 			},
// 			{
// 				path: '/ohs',
// 				element: (
// 					// <PrivateRoute>
// 					<OHS />
// 					// </PrivateRoute>
// 				),
// 			},
// 			{
// 				path: '/environmental-health',
// 				element: (
// 					// <PrivateRoute>
// 					<EnvirementalHealth />
// 					// </PrivateRoute>
// 				),
// 			},

// 			{
// 				path: '/about-us',
// 				element: <AboutUs />,
// 			},
// 		],
// 	},

// 	{
// 		path: '/register',
// 		element: <Register />,
// 	},
// 	{
// 		path: '/login',
// 		element: <Login />,
// 	},
// ]);
// export default Router;

import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Layout from '../views/Layout';
import Posts from '../components/posts/Posts';
import Single from '../components/posts/Single';
import Write from '../components/posts/Write';
import AboutUs from '../views/AboutUs';
import Register from '../views/Register';
import Login from '../views/Login';
import MDC from '../views/MDC';
import OHS from '../views/OHS';
import EnvirementalHealth from '../views/EnvirementalHealth';
import PrivateRoute from '../router/PrivateRoute';
import CircularText from '../components/dx-prevention/Circle';
import DynamicDietPage from '../components/qualitative-diets/DynamicDietPage';
import Users from '../views/Users';
import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
import BookAppointment from '../components/forms/BookAppointment';
import Vitrack from '../components/Vitrack/Vitrack';

import PreventiveHealthPatientServices from '../views/PreventiveHealthPatientServices';
import PublicHealthInterventions from '../views/PublicHealthInterventions';
import PublicHealthAcademy from '../views/PublicHealthAcademy';
import FoodSafetyPage from '../views/FoodSafetyPage';
import Sample1 from '../components/buttons/Sample1';
import HealthAndSafety from '../views/HealthAndSafety';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/mdc' element={<MDC />} />
			<Route path='/book-appointment' element={<BookAppointment />} />
			<Route path='/qualitative-diets' element={<QualitativeDiets />} />
			<Route path='/:dietName' element={<DynamicDietPage />} />
			<Route
				path='/preventive-health-patient-services'
				element={<PreventiveHealthPatientServices />}
			/>
			<Route
				path='/vitrack'
				element={<Vitrack />}
			/>
			<Route
				path='/public-health-interventions'
				element={<PublicHealthInterventions />}
			/>
			<Route path='/public-health-academy' element={<PublicHealthAcademy />} />
			<Route path='/health-and-safety' element={<HealthAndSafety />} />
			<Route path='/ohs' element={<OHS />} />
			<Route path='/environmental-health' element={<EnvirementalHealth />} />
			<Route path='/about-us' element={<AboutUs />} />

			<Route path='/users' element={<Users />} />
			<Route path='/posts' element={<Posts />} />
			<Route path='/post/:id' element={<Single />} />
			<Route path='/write' element={<Write />} />
			<Route path='/users' element={<Users />} />
		</Routes>
	);
};

export default AppRoutes;
