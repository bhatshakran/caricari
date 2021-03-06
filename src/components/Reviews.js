import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import hellen from '../images/Imghellen.png';
import isaac from '../images/Imgisaac.png';
import jummy from '../images/Imgjummy.png';
import italy from '../images/italy.png';
import us from '../images/us.png';

const useStyles = makeStyles(theme => ({
	reviewsContainer: {
		background: '#0A0B1A',
		paddingLeft: '8rem',
		paddingTop: '8rem',
		width: '100%',
		[theme.breakpoints.down('md')]: {
			paddingLeft: '1rem',
		},
	},
	reviewsHeading: {
		color: '#fff',
		fontFamily: 'Libre Baskerville',
	},
	line: {
		minHeight: '3px',
		width: '30px',
		display: 'block',
		background: '#0259EB',
		marginTop: '0.7rem',
	},
	reviewCards: {
		marginTop: '3rem',
	},
	reviewCard: {
		margin: '2rem 0 ',
		boxShadow: '12px 0px 0px   #276C73 , 12px -12px 0px  #276C73 ',
		border: '2px solid #E5AF56',
		minWidth: '360px',
		height: '240px',
		borderRadius: '16px',
		padding: '1.5rem 2rem',
		display: 'flex',
		flexDirection: 'column',
	},
	authorInfo: {
		marginLeft: '2rem',
	},
	reviewAuthor: {
		color: '#fff',
		fontFamily: 'Quattrocento',
	},
	reviewAddress: {
		color: '#E5C558',
	},
	topCard: {
		display: 'flex',
		marginBottom: '2rem',
	},
	cardBody: {
		color: '#fff',
		fontSize: '1rem',
	},
	flagHolder: {
		display: 'flex',
	},
}));
const Reviews = () => {
	const classes = useStyles();
	return (
		<div className={classes.reviewsContainer}>
			<Typography variant='h4' className={classes.reviewsHeading}>
				Reviews
			</Typography>

			<span className={classes.line}></span>
			<Swiper
				className={`${classes.reviewCards} swiper-container`}
				breakpoints={{
					// when window width is >= 640px
					640: {
						width: 640,
						slidesPerView: 3,
					},
				}}
				spaceBetween={50}
				slidesPerView={1}>
				<SwiperSlide className={classes.reviewCard}>
					<div className={classes.topCard}>
						<img src={hellen} alt='' className={classes.reviewCardImg} />
						<div className={classes.authorInfo}>
							<Typography variant='body1' className={classes.reviewAuthor}>
								Helen Jummy
							</Typography>
							<div className={classes.flagHolder}>
								<img src={us} alt='' />
								<Typography
									variant='subtitle2'
									className={classes.reviewAddress}>
									PAOLO ALTO, CA
								</Typography>
							</div>
						</div>
					</div>
					<div>
						<Typography variant='h6' className={classes.cardBody}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
							donec in nisi vitae. Vestibulum pellentesque eget laoreet
							adipiscing.
						</Typography>
					</div>
				</SwiperSlide>
				<SwiperSlide className={classes.reviewCard}>
					<div className={classes.topCard}>
						<img src={isaac} alt='' className={classes.reviewCardImg} />
						<div className={classes.authorInfo}>
							<Typography variant='body1' className={classes.reviewAuthor}>
								Isaac Oluwatemilorun
							</Typography>
							<div className={classes.flagHolder}>
								<img src={italy} alt='' />
								<Typography
									variant='subtitle2'
									className={classes.reviewAddress}>
									PAOLO ALTO, CA
								</Typography>
							</div>
						</div>
					</div>
					<div>
						<Typography variant='h6' className={classes.cardBody}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
							donec in nisi vitae. Vestibulum pellentesque eget laoreet
							adipiscing.
						</Typography>
					</div>
				</SwiperSlide>
				<SwiperSlide className={classes.reviewCard}>
					<div className={classes.topCard}>
						<img src={jummy} alt='' className={classes.reviewCardImg} />
						<div className={classes.authorInfo}>
							<Typography variant='body1' className={classes.reviewAuthor}>
								Helen Jummy
							</Typography>
							<div className={classes.flagHolder}>
								<img src={us} alt='' />
								<Typography
									variant='subtitle2'
									className={classes.reviewAddress}>
									PAOLO ALTO, CA
								</Typography>
							</div>
						</div>
					</div>
					<div>
						<Typography variant='h6' className={classes.cardBody}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
							donec in nisi vitae. Vestibulum pellentesque eget laoreet
							adipiscing.
						</Typography>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Reviews;
