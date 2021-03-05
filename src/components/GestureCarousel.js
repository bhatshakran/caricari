import React, { useEffect } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import { makeStyles } from '@material-ui/styles';
import Utilites from '../gesturecontrol';
import Utilities from '../gesturecontrol';

const useStyles = makeStyles(theme => ({
	circleHolder: {
		position: 'absolute',
		bottom: '0',
	},
	cardItem: {
		width: '144px',
		height: '144px',
		borderRadius: '50%',
		border: '1px solid #fff',
		marginRight: '20px',
	},
	symbol: {
		color: '#fff',
	},
	number: {
		color: '#fff',
	},
	cardTxt: {
		color: '#fff',
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
