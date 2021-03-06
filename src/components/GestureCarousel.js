import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import { makeStyles } from '@material-ui/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const useStyles = makeStyles(theme => ({
	circleHolder: {
		position: 'absolute',
		bottom: '30px',
	},
	cardItem: {
		minWidth: '144px',
		height: '144px',
		borderRadius: '50%',
		border: '1px solid #fff',
		marginRight: '20px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'Libre Baskerville',
	},
	symbol: {
		color: '#fff',
	},
	number: {
		color: '#fff',
	},
	cardTxt: {
		color: '#fff',
		fontSize: '0.7rem',
		fontFamily: 'Nunito',
	},
}));
const GestureCarousel = () => {
	const classes = useStyles();

	return (
		<div className={`gesture-carousel ${classes.circleHolder}`}>
			<Swiper
				className='track'
				breakpoints={{
					// when window width is >= 640px
					640: {
						width: 640,
						slidesPerView: 4,
					},
				}}
				spaceBetween={70}
				slidesPerView={3}>
				<SwiperSlide className={classes.cardItem}>
					<div className={classes.symbol}>
						<FavoriteBorderIcon />
					</div>
					<div className={classes.number}>456</div>
					<div className={classes.cardTxt}>Likes everyday</div>
				</SwiperSlide>
				<SwiperSlide className={classes.cardItem}>
					<div className={classes.symbol}>
						<InsertInvitationIcon />
					</div>
					<div className={classes.number}>0</div>
					<div className={classes.cardTxt}>Label</div>
				</SwiperSlide>
				<SwiperSlide className={classes.cardItem}>
					<div className={classes.symbol}>
						<InsertInvitationIcon />
					</div>
					<div className={classes.number}>0</div>
					<div className={classes.cardTxt}>Label</div>
				</SwiperSlide>
				<SwiperSlide className={classes.cardItem}>
					<div className={classes.symbol}>
						<InsertInvitationIcon />
					</div>
					<div className={classes.number}> 0 </div>
					<div className={classes.cardTxt}>Label</div>{' '}
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default GestureCarousel;
