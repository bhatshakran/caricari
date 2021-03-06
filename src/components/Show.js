import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { SwiperSlide } from 'swiper/react';

const useStyles = makeStyles(theme => ({
	showCard: {
		width: '268px',
		height: '387px',
		borderRadius: '8px',
		boxShadow: '3px 12px 12px  #301A68 , -3px -12px 12px  #301A68 ',
		marginRight: '2rem',
		marginTop: '53px',
		background: '#111229',
		color: '#fff',
		position: 'relative',
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
const Show = ({ cat, name, img }) => {
	const classes = useStyles();
	return (
		<SwiperSlide className={classes.showCard}>
			<img src={img} alt='' className={classes.showCardImg} />
			<div className={classes.label}>
				<p className={classes.labelTxt}>{cat}</p>
			</div>
			<div className={classes.showcardText}>{name}</div>
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
	);
};

export default Show;
