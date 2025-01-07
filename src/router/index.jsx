import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from '../utils/routeConfig';
import { usePrefetch, setCacheHeaders } from '../utils/optimization';
import { AnimatePresence, motion } from 'framer-motion';
import {
  pageVariants,
  pageTransition,
  fadeVariants,
  fadeTransition,
  slideVariants,
  slideTransition,
  scaleVariants,
  scaleTransition,
  rotateVariants,
  rotateTransition,
  bounceVariants,
  bounceTransition,
  staggerContainer,
  staggerItem,
  keyframeVariants,
  pathVariants,
  hoverVariants,
  tapVariants,
  dragConstraints,
  exitVariants,
  colorVariants,
  textVariants,
  letterVariants,
  svgVariants,
} from '../utils/FramerAnimation';

// Loading component for Suspense fallback
const Loading = () => (
	<div className='flex items-center justify-center min-h-screen'>
		<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-pink'></div>
	</div>
);

const OptimizedRoute = ({ route }) => {
	const componentRef = usePrefetch(route);

	return (
		<div ref={componentRef}>
			<Suspense fallback={<Loading />}>
				<route.component />
			</Suspense>
		</div>
	);
};

const AppRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				{routes.map((route) => {
					// Set cache headers for the route
					setCacheHeaders(route.cacheControl);

					return (
						<Route
							key={route.path}
							path={route.path}
							element={
								<motion.div
									initial='init'
									animate='anim'
									exit='last'
									variants={slideVariants}
									transition={slideTransition}
								>
									<OptimizedRoute route={route} />
								</motion.div>
							}
						/>
					);
				})}
			</Routes>
		</AnimatePresence>
	);
};

export default AppRoutes;
