import React from 'react';
import Navbar from './Navbar';
import cari from '../images/cari.png';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import GestureCarousel from './GestureCarousel';

const useStyles = makeStyles(theme => ({
	banner: {
		width: '100%',
		position: 'relative',
		overflow: 'hidden',
		height: '600px',
		[theme.breakpoints.up('sm')]: {
			height: '500px',
		},
		[theme.breakpoints.up('md')]: {
			height: '862px',
		},
	},
	bannerImg: {
		width: '100%',
		transform: 'scaleX(2)',
		height: '600px',

		[theme.breakpoints.up('sm')]: {
			transform: 'scaleX(1)',
			height: '100%',
		},
		[theme.breakpoints.up('md')]: {
			transform: 'scaleX(1)',
			height: '100%',
		},
	},
	text: {
		color: '#fff',
		position: 'absolute',
		top: '30%',
		left: '70px',
		maxWidth: '600px',
		[theme.breakpoints.down('sm')]: {
			left: '20px',
		},
	},
	bannerTxt: {
		fontFamily: 'Libre Baskerville',
		fontSize: '4rem',
		[theme.breakpoints.up('md')]: {
			fontSize: '7rem',
		},
	},
	subtitle: {
		fontFamily: 'Nunito',
		maxWidth: '400px',
	},
}));
const Banner = () => {
	const classes = useStyles();
	return (
		<>
			<Navbar />
			<div className={classes.banner}>
				<img src={cari} alt='' className={classes.bannerImg} />

				<div className={classes.text}>
					<Typography variant='h2' className={classes.bannerTxt}>
						Cari Cari
					</Typography>
					<Typography variant='subtitle1' className={classes.subtitle}>
						Live from their sofa to yours. Get closer to your favorite artists,
						and never miss out.
					</Typography>
				</div>
				<GestureCarousel />
			</div>
		</>
	);
};

export default Banner;
