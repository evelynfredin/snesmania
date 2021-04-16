import Title from '../../components/Title';
import Article from '../Article';
import FeaturedArticle from '../FeaturedArticle';
import GetBlogData from '../../functions/GetBlogData';

const ArticleList = () => {
	const { data, isLoading, error } = GetBlogData('wp/v2/posts');

	return (
		<>
			{isLoading && <div className="message">Loading page...</div>}
			{error && <div className="message">{error}</div>}

			<Title cname="featured" title="Featured" />
			{data
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
			{data
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
