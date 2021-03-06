import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import benny from '../images/Imgbenny.png';
import andrea from '../images/Imgandrea.png';
import shilpa from '../images/ImgShilpa.png';
import cari from '../images/Imgcari.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles(theme => ({
	shows: {
		background: '#0A0B1A',
		paddingLeft: '8rem',
		paddingTop: '8rem',
		width: '100%',
		[theme.breakpoints.down('md')]: {
			paddingLeft: '1rem',
		},
	},
	heading: {
		fontFamily: 'Libre Baskerville',
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
	showCard: {
		minWidth: '268px',
		height: '387px',
		borderRadius: '8px',
		boxShadow: '12px 0px 0px  #301A68 , 12px -12px 0px  #301A68 ',
		marginRight: '2rem',
		marginTop: '53px',
		background: '#111229',
		color: '#fff',
		position: 'relative',
		[theme.breakpoints.down('md')]: {
			maxWidth: '300px',
		},
	},
	label: {
		color: '#682F26',
		margin: '2rem 1rem 1rem 1rem',
		display: 'inline-block',
	},
	labelTxt: {
		background: '#E5C558',
		padding: '0.2rem',
	},
	showcardText: {
		fontFamily: 'Libre Baskerville',
		margin: '0 0 1rem 1rem',
		fontSize: '1.3rem',
	},
	showCardImg: {
		width: '100%',
		height: '230px',
		borderRadius: '8px',
	},
	more: {
		display: 'flex',
		alignItems: 'center',
	},
	moreInfo: {
		marginLeft: '1rem',
	},
	cardRec: {
		position: 'absolute',
		bottom: '3px',
		right: '5px',
	},
}));
const Shows = () => {
	const classes = useStyles();

	return (
		<div>
			<div className={` ${classes.shows}`}>
				<Typography variant='h4' className={classes.heading}>
					Upcoming Shows
				</Typography>
				<span className={classes.line}></span>
				<Swiper
					className={`${classes.cardContainer} swiper-container`}
					breakpoints={{
						// when window width is >= 640px
						640: {
							width: 640,
							slidesPerView: 3,
						},
					}}
					spaceBetween={50}
					slidesPerView={1}>
					<SwiperSlide className={classes.showCard}>
						<img src={benny} alt='' className={classes.showCardImg} />
						<div className={classes.label}>
							<p className={classes.labelTxt}>Folk</p>
						</div>
						<div className={classes.showcardText}>Benny dayal</div>
						<div className={classes.more}>
							<Link to='#' className={classes.moreInfo}>
								More info
							</Link>
							<ArrowForwardIcon />
						</div>
						<div className={classes.cardRec}>
							<ReceiptIcon />
						</div>
					</SwiperSlide>

					<SwiperSlide className={classes.showCard}>
						<img src={cari} alt='' className={classes.showCardImg} />
						<div className={classes.label}>
							<p className={classes.labelTxt}>Bollywood</p>
						</div>
						<div className={classes.showcardText}>Vijay Yesudas</div>
						<div className={classes.more}>
							<Link to='#' className={classes.moreInfo}>
								More info
							</Link>
							<ArrowForwardIcon />
						</div>
						<div className={classes.cardRec}>
							<ReceiptIcon />
						</div>
					</SwiperSlide>
					<SwiperSlide className={classes.showCard}>
						<img src={andrea} alt='' className={classes.showCardImg} />
						<div className={classes.label}>
							<p className={classes.labelTxt}>Folk</p>
						</div>
						<div className={classes.showcardText}>Andrea Jeremiah</div>
						<div className={classes.more}>
							<Link to='#' className={classes.moreInfo}>
								More info
							</Link>
							<ArrowForwardIcon />
						</div>
						<div className={classes.cardRec}>
							<ReceiptIcon />
						</div>
					</SwiperSlide>
					<SwiperSlide className={classes.showCard}>
						<img src={shilpa} alt='' className={classes.showCardImg} />
						<div className={classes.label}>
							<p className={classes.labelTxt}>Folk</p>
						</div>
						<div className={classes.showcardText}>Shilpa Rao</div>
						<div className={classes.more}>
							<Link to='#' className={classes.moreInfo}>
								More info
							</Link>
							<ArrowForwardIcon />
						</div>
						<div className={classes.cardRec}>
							<ReceiptIcon />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Shows;
