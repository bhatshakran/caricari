import React from 'react';
import Banner from '../components/Banner';
import Shows from '../components/Shows';
import Reviews from '../components/Reviews';
import GestureCarousel from '../components/GestureCarousel';

const Home = () => {
	return (
		<>
			<Banner />
			<GestureCarousel />
			<Shows />
			<Reviews />
		</>
	);
};

export default Home;
