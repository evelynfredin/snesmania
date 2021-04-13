import React from 'react';
import Article from '../Article';
import GameImg from '../../assets/images/game.jpeg';
import Axios from 'axios';

const ArticleList = () => {
	const [blogData, setBlogData] = React.useState([]);
	React.useEffect(() => {
		Axios.get('https://blog.noisereactor.com/wp-json/wp/v2/posts').then((res) => {
			setBlogData(res.data);
		});
	}, [setBlogData, blogData]);

	return (
		<>
			{blogData.map((item, key) => (
				<Article
					key={key}
					picture={GameImg}
					altText={item.title.rendered}
					title={item.title.rendered}
					date={item.date}
					excerpt={item.excerpt.rendered}
				/>
			))}
		</>
	);
};

export default ArticleList;
