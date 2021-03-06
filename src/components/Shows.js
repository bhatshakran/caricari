import React from 'react';
import Show from './Show';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import benny from '../images/Imgbenny.png';
import andrea from '../images/Imgandrea.png';
import shilpa from '../images/ImgShilpa.png';
import cari from '../images/Imgcari.jpg';
import { Swiper } from 'swiper/react';
import 'swiper/swiper.scss';

const useStyles = makeStyles(theme => ({
	shows: {
		background: '#0A0B1A',
		// paddingLeft: '8rem',

		width: '100%',
	},
	heading: {
		fontFamily: 'Libre Baskerville',
		marginTop: '8rem',
		color: '#fff',
	},
	line: {
		minHeight: '3px',
		width: '30px',
		display: 'block',
		background: '#0259EB',
		marginTop: '0.7rem',
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
}));
const Shows = () => {
	const classes = useStyles();
	// React.useEffect(() => {
	// 	const swiper = new Swiper('.swiper-container');
	// }, []);
	return (
		<div>
			<div className={` ${classes.shows}`}>
				<Typography variant='h4' className={classes.heading}>
					Upcoming Shows
				</Typography>
				<span className={classes.line}></span>
				<Swiper
					className={classes.cardContainer}
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}>
					<Show img={benny} cat='Folk' name='Benny Dayal' />
					<Show img={cari} cat='Bollywood' name='Vijay Yesudas' />
					<Show img={andrea} cat='Folk' name='Andrea Jeremiah' />
					<Show img={shilpa} cat='Folk' name='Shilpa Rao' />
				</Swiper>
			</div>
		</div>
	);
};

export default Shows;
