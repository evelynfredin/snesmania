import React, { useState } from 'react';
import SearchField from '../../components/SearchField';
import GetBlogData from '../../functions/GetBlogData';
import Title from '../../components/Title';
import ArticleList from '../../components/ArticleList';
import './search.css';

const SearchResults = () => {
	let [searchText, setSearchText] = useState('');
	const { data, error, isLoading } = GetBlogData('wp/v2/posts');

	return (
		<section className="container">
			<div className="search">
				<Title cname="latest" title="Search Reviews" />
				<SearchField handleChange={(e) => setSearchText(e.target.value)} />
			</div>

			{isLoading && <div className="message">Loading page...</div>}
			{error && <div className="message">{error}</div>}

			{data
				.filter((item) => {
					const postName = item.title.rendered.toLowerCase();
					return postName.includes(searchText.toLowerCase());
				})
				.map((item, key) => (
					<ArticleList
						key={key}
						picture={item.featured_media_src_url}
						altText={item.title.rendered}
						title={item.title.rendered}
						date={new Date(item.date).toISOString().split('T')[0]}
						excerpt={item.excerpt.rendered}
						id={item.id}
					/>
				))}
		</section>
	);
};

export default SearchResults;
