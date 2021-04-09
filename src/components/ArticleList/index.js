import React from 'react';
import Article from '../Article';
import GameImg from '../../assets/images/game.jpeg';

const index = () => {
	return (
		<>
			<Article
				picture={GameImg}
				altText="Game"
				title="Megaman X 2"
				excerpt="Kaze and the Wild Masks is exceptionally average in every way, and excels at its goal to create a clean, enjoyable, and nostalgic '90s platformer."
				author="Evelyn"
				date="23, September, 2021"
			/>
		</>
	);
};

export default index;
