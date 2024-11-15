import { createBrowserRouter } from 'react-router-dom';

import Layout from '../views/Layout';
import Home from '../views/Home';
import Posts from '../components/posts/Posts';
import Single from '../components/posts/Single';
import Write from '../components/posts/Write';
import AboutUs from '../views/AboutUs';

import Register from '../views/Register';
import Login from '../views/Login';

import MDC from '../views/MDC';
import OHS from '../views/OHS';
import EnvirementalHealth from '../views/EnvirementalHealth';
import PatientGuidanceSupport from '../views/PatientGuidanceSupport';
import PrivateRoute from '../router/PrivateRoute';
import CircularText from '../components/dx-prevention/Circle';
import DynamicDietPage from '../components/qualitative-diets/DynamicDietPage';
import Users from '../views/Users';
import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
import BookAppointment from '../components/forms/BookAppointment';
import { FoodSafetyTable } from '../components/Table/FoodSafetyTable';

import PreventiveHealthPatientServices from '../views/PreventiveHealthPatientServices';
import PublicHealthInterventions from '../views/PublicHealthInterventions';
import PublicHealthAcademy from '../views/PublicHealthAcademy';
import { columns } from '../components/Table/columns';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/table',
				element: <FoodSafetyTable columns={columns} data={FoodSafetyTable} />,
			},

			{
				path: '/book-appointment',
				element: <BookAppointment />,
			},
			{
				path: '/qualitative-diets ',
				element: <QualitativeDiets />,
			},
			{
				path: '/:dietName',
				element: <DynamicDietPage />,
			},
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/preventive-health-patient-services',
				element: <PreventiveHealthPatientServices />,
			},
			{
				path: '/public-health-interventions',
				element: <PublicHealthInterventions />,
			},
			{
				path: '/public-health-academy',
				element: <PublicHealthAcademy />,
			},
			{
				path: '/users',
				element: <Users />,
			},
			{
				path: '/2',
				element: <CircularText />,
			},
			{
				path: '/posts',
				element: <Posts />,
			},
			{
				path: '/post/:id',
				element: <Single />,
			},
			{
				path: '/write',
				element: (
					<PrivateRoute>
						<Write />
					</PrivateRoute>
				),
			},
			{
				path: '/mdc',
				element: (
					// <PrivateRoute>
					<MDC />
					// </PrivateRoute>
				),
			},
			{
				path: '/ohs',
				element: (
					// <PrivateRoute>
					<OHS />
					// </PrivateRoute>
				),
			},
			{
				path: '/environmental-health',
				element: (
					// <PrivateRoute>
					<EnvirementalHealth />
					// </PrivateRoute>
				),
			},
			{
				path: '/patient-guidance-support',
				element: (
					// <PrivateRoute>
					<PatientGuidanceSupport />
					// </PrivateRoute>
				),
			},
			{
				path: '/about-us',
				element: <AboutUs />,
			},
		],
	},

	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]);
export default router;
