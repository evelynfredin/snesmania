import React from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleArtcicle from '../../components/ArticleSingle';

const SingleBlog = () => {
	const { id } = useParams();
	const [blogData, setBlogData] = React.useState([]);
	React.useEffect(() => {
		Axios.get('https://blog.noisereactor.com/wp-json/review-grp/acf').then((res) => {
			setBlogData(res.data);
		});
	}, [setBlogData, blogData]);

	return (
		<div>
			{blogData
				.filter((item) => item.ID === parseInt(id))
				.map((item, key) => (
					<SingleArtcicle
						key={key}
						title={item.post_title}
						picture={item.attached_images[0]}
						altText={item.post_title}
						content={item.post_content}
					/>
				))}
		</div>
	);
};

export default SingleBlog;
