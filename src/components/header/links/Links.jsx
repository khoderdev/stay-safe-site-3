import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import './links.css';

const menuItems = [
	{ id: 1, text: 'Home', route: '/' },
	{
		id: 2,
		text: 'Patient Services',
		submenu: [
			{
				id: 21,
				text: 'Preventive Health',
				route: '/preventive-health-patient-services',
			},
			{ id: 22, text: 'Medical Dietary Clinic', route: '/mdc' },
			{ id: 23, text: 'Vitrack', route: '/vitrack' },
		],
	},
	{ id: 3, text: 'Health & Safety', route: '/health-and-safety' },
	{
		id: 4,
		text: 'Public Health Interventions',
		route: '/public-health-interventions',
	},
	{ id: 5, text: 'Public Health Academy', route: '/public-health-academy' },
	{
		id: 6,
		text: 'About us',
		route: '/about-us',
		submenu: [
			{ id: 61, text: 'Contact us', route: '/contact-us' },
			{ id: 62, text: 'Volunteers', route: '/volunteering' },
		],
	},
];

const variants = {
	open: {
		transition: { staggerChildren: 0.1, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const itemVariants = {
	open: {
		y: 0,
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 24,
			duration: 0.4,
		},
	},
	closed: {
		y: 50,
		x: -20,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: [0.4, 0, 0.2, 1],
		},
	},
};

const submenuVariants = {
	open: {
		clipPath: 'inset(0% 0% 0% 0%)',
		opacity: 1,
		height: 'auto',
		transition: {
			type: 'spring',
			bounce: 0,
			duration: 0.5,
			delayChildren: 0.2,
			staggerChildren: 0.1,
		},
	},
	closed: {
		clipPath: 'inset(0% 0% 100% 0%)',
		opacity: 0,
		height: 0,
		transition: {
			type: 'spring',
			bounce: 0,
			duration: 0.4,
		},
	},
};

const submenuItemVariants = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 24,
		},
	},
	closed: {
		x: -20,
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

const MenuItem = ({ item, onNavigate }) => {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const location = useLocation();

	const isActive = (path) => {
		if (path === '/') {
			return location.pathname === path;
		}
		return location.pathname.startsWith(path);
	};

	const toggleSubmenu = (e) => {
		if (item.submenu) {
			e.preventDefault();
			setIsSubmenuOpen(!isSubmenuOpen);
		}
	};

	const handleNavigation = () => {
		if (!item.submenu) {
			onNavigate();
		}
	};

	const handleSubmenuNavigation = () => {
		onNavigate();
		setIsSubmenuOpen(false);
	};

	return (
		<motion.div
			variants={itemVariants}
			className='border-b border-gray-100/10 dark:border-gray-800/50 last:border-b-0'
		>
			<Link
				to={item.route}
				className={`block w-full px-8 py-4 text-lg relative group transition-all duration-200
          ${
						isActive(item.route)
							? 'text-pink dark:text-pink '
							: 'text-gray-700 dark:text-gray-200'
					}`}
				onClick={(e) => {
					toggleSubmenu(e);
					handleNavigation();
				}}
			>
				<motion.div
					className='inline-flex items-center justify-between w-full'
					whileTap={{ scale: 0.98 }}
				>
					<span className='relative'>
						{item.text}
						<span
							className={`absolute -bottom-1 left-0 h-0.5 bg-pink transition-all duration-300
              ${isActive(item.route) ? 'w-full' : 'w-0 group-hover:w-full'}`}
						></span>
					</span>
					{item.submenu && (
						<motion.div
							animate={{
								rotate: isSubmenuOpen ? 180 : 0,
								color:
									isSubmenuOpen || isActive(item.route)
										? 'var(--color-pink)' // Use explicit color value
										: 'rgb(107, 114, 128)', // Use explicit color value
							}}
							transition={{ duration: 0.3, ease: 'anticipate' }}
							style={{ color: 'rgb(107, 114, 128)' }} // Set initial color explicitly
						>
							<IoChevronDown className='w-5 h-5' />
						</motion.div>
					)}
				</motion.div>
			</Link>

			<AnimatePresence>
				{item.submenu && isSubmenuOpen && (
					<motion.div
						variants={submenuVariants}
						initial='closed'
						animate='open'
						exit='closed'
						className='overflow-hidden bg-gray-50/5 dark:bg-black backdrop-blur-sm'
					>
						<div className='py-2'>
							{item.submenu.map((subItem) => (
								<motion.div
									key={subItem.id}
									variants={submenuItemVariants}
									className='relative'
								>
									<Link
										to={subItem.route}
										className={`block py-3.5 px-12 text-base relative group/item transition-all duration-200
                      ${
												isActive(subItem.route)
													? 'text-pink dark:text-pink '
													: 'text-gray-600 dark:text-gray-100 hover:text-pink dark:hover:text-pink'
											}`}
										onClick={handleSubmenuNavigation}
									>
										<span className='relative z-10'>
											{subItem.text}
											<span
												className={`absolute -bottom-1 left-0 h-0.5 bg-pink transition-all duration-300
                        ${
													isActive(subItem.route)
														? 'w-full'
														: 'w-0 group-hover/item:w-full'
												}`}
											></span>
										</span>
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

const MenuLinks = ({ onNavigate }) => {
	return (
		<motion.div
			className='flex flex-col w-full pt-4'
			variants={variants}
			initial='closed'
			animate='open'
		>
			{menuItems.map((item) => (
				<MenuItem key={item.id} item={item} onNavigate={onNavigate} />
			))}
		</motion.div>
	);
};

export default MenuLinks;
