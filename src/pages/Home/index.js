import React from 'react';
import Title from '../../components/Title';
import FeaturedArticle from '../../components/FeaturedArticle';
import GameImg from '../../assets/images/game.jpeg';
import './home.css';

const Home = () => {
	return (
		<section className="container">
			<Title cname="featured" title="Featured" />
			<div className="content">
				<div>
					<FeaturedArticle
						title="Monster Hunter Rise Review"
						picture={GameImg}
						altText="Monster hunter hero in dark flames"
						excerpt="Monster Hunter Rise's Wirebug mechanics and further quality of life improvements from World makes it one of the best games in the series to date."
						author="Evelyn"
						date="April 8, 2021"
					/>
				</div>
				<div className="morecontent">More content</div>
			</div>
		</section>
	);
};

export default Home;
