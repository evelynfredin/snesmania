import React, { useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleArtcicle from '../../components/ArticleSingle';

const SingleBlog = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [blogData, setBlogData] = React.useState([]);
	React.useEffect(() => {
		Axios.get('https://blog.noisereactor.com/wp-json/review-grp/acf').then((res) => {
			setBlogData(res.data);
			setIsLoading(false);
		});
	}, [setBlogData, blogData]);

	return (
		<div>
			{isLoading && <div className="loading">Loading article...</div>}

			{blogData
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
