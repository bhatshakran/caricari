import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	nav: {
		background: 'transparent',
		position: 'absolute',
		top: '0',
		width: '100%',
		zIndex: '4',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '0 1rem',
	},

	navNav: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		[theme.breakpoints.up('sm')]: {
			minWidth: '400px',
		},
	},
	navGroup: {
		display: 'none',
		listStyle: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			position: 'relative',
			top: '0',
			flexDirection: 'row',
			background: 'transparent',
		},
	},
	active: {
		display: 'flex',
		flexDirection: 'column',
		background: 'black',
		width: '100%',
		position: 'absolute',
		top: '55px',
		left: '0%',
		height: '100vh',
		zIndex: '4',
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			position: 'relative',
			top: '0',
			flexDirection: 'row',
			background: 'transparent',
		},
	},
	navItem: {
		display: 'flex',
		alignItems: 'center',
		margin: '1rem',
	},
	link: {
		fontFamily: 'Open Sans',
		'&:hover': {
			color: 'darkblue',
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: '1rem',
		},
	},
	searchPara: {
		fontFamily: 'Open Sans',
		display: 'none',
		background: 'rgba(255,255,255,0.4)',
		borderRadius: '5px',
		padding: '0 4px',
		minWidth: '150px',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	srchtxt: {
		color: '#fff',
	},
	searchactive: {
		display: 'block',
	},
	input: {
		height: '22px',
	},
	icon: {
		cursor: 'pointer',
		color: '#fff',
		fontSize: '1.2rem',
		'&:hover': {
			color: 'darkblue',
		},
	},
	toggleBtn: {
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	bag: {
		marginRight: '1rem',
		cursor: 'pointer',
		alignSelf: 'center',
	},
}));
const Navbar = () => {
	const classes = useStyles();
	const [isOpen, setIsOpen] = React.useState(false);
	const [isSearch, setIsSearch] = React.useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const searchHandler = () => {
		setIsSearch(!isSearch);
	};
	return (
		<nav className={classes.nav}>
			<div className={classes.navLogo}>
				<img src={Logo} alt='' />
			</div>
			<div className={classes.navNav}>
				<div className={classes.searchBtn}>
					<li className={classes.navItem}>
						<SearchIcon className={classes.icon} onClick={searchHandler} />

						<div
							className={
								isSearch
									? `${classes.searchPara} ${classes.searchactive} search-para `
									: `${classes.searchPara}  search-para`
							}>
							<InputBase placeholder='Search' className={classes.input} />
						</div>
					</li>
				</div>

				<ul
					className={
						isOpen
							? `${classes.navGroup} ${classes.active}`
							: `${classes.navGroup}`
					}>
					<li className={classes.navItem}>
						<Link to='/'>
							<Typography variant='h5' className={classes.link}>
								{' '}
								Help
							</Typography>
						</Link>
					</li>
					<li className={classes.navItem}>
						<Link to='/'>
							<Typography variant='h5' className={classes.link}>
								Account
							</Typography>
						</Link>
					</li>
				</ul>
				<div className={classes.bag}>
					<LocalMallIcon className={classes.icon} />
				</div>
				<div className={classes.toggleBtn} onClick={toggleMenu}>
					<MenuIcon className={classes.icon} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
