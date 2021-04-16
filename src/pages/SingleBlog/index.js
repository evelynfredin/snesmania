import React from 'react';
import { useParams } from 'react-router-dom';
import SingleArtcicle from '../../components/ArticleSingle';
import GetBlogData from '../../functions/GetBlogData';

const SingleBlog = () => {
	const { id } = useParams();

	const { data, isLoading, error } = GetBlogData('review-grp/acf');

	return (
		<div>
			{isLoading && <div className="message">Loading article...</div>}
			{error && <div className="message">{error}</div>}

			{data
				.filter((item) => item.ID === parseInt(id))
				.map((item, key) => (
					<SingleArtcicle
						key={key}
						title={item.post_title}
						picture={item.attached_images[0]}
						altText={item.post_title}
						content={item.post_content}
						rating={item.rating}
						genre={item.genre}
						publisher={item.publisher}
						year={item.release_year}
					/>
				))}
		</div>
	);
};

export default SingleBlog;
