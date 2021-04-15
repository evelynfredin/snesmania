import React from 'react';
import Axios from 'axios';
import Title from '../../components/Title';
import Article from '../Article';
import FeaturedArticle from '../FeaturedArticle';

const ArticleList = () => {
	const [blogData, setBlogData] = React.useState([]);
	React.useEffect(() => {
		Axios.get('https://blog.noisereactor.com/wp-json/wp/v2/posts').then((res) => {
			setBlogData(res.data);
		});
	}, [setBlogData, blogData]);

	return (
		<>
			<Title cname="featured" title="Featured" />
			{blogData
				.filter((item) => item.sticky === true)
				.map((item, key) => (
					<FeaturedArticle
						key={key}
						title={item.title.rendered}
						picture={item.featured_media_src_url}
						altText={item.title.rendered}
						excerpt={item.excerpt.rendered}
						id={item.id}
						author="Evelyn"
						date={new Date(item.date).toISOString().split('T')[0]}
					/>
				))}

			<Title cname="latest" title="Latest" />
			{blogData
				.filter((item) => item.sticky === false)
				.map((item, key) => (
					<Article
						key={key}
						picture={item.featured_media_src_url}
						altText={item.title.rendered}
						title={item.title.rendered}
						date={new Date(item.date).toISOString().split('T')[0]}
						excerpt={item.excerpt.rendered}
						id={item.id}
					/>
				))}
		</>
	);
};

export default ArticleList;
