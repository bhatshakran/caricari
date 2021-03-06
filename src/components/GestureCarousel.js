import React, { useEffect } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import { makeStyles } from '@material-ui/styles';
import Utilities from '../gesturecontrol';

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
	useEffect(() => {
		Utilities();
	}, []);
	return (
		<div className={`gesture-carousel ${classes.circleHolder}`}>
			<div className='track'>
				<div className={classes.cardItem}>
					<div className={classes.symbol}>
						<FavoriteBorderIcon />
					</div>
					<div className={classes.number}>456</div>
					<div className={classes.cardTxt}>Likes everyday</div>
				</div>
				<div className={classes.cardItem}>
					<div className={classes.symbol}>
						<InsertInvitationIcon />
					</div>
					<div className={classes.number}>0</div>
					<div className={classes.cardTxt}>Label</div>
				</div>
				<div className={classes.cardItem}>
					<div className={classes.symbol}>
						<InsertInvitationIcon />
					</div>
					<div className={classes.number}>0</div>
					<div className={classes.cardTxt}>Label</div>
				</div>
				<div className={classes.cardItem}>
					<div className={classes.symbol}>
						<InsertInvitationIcon />
					</div>
					<div className={classes.number}> 0 </div>
					<div className={classes.cardTxt}>Label</div>{' '}
				</div>
			</div>
		</div>
	);
};

export default GestureCarousel;
