import { useState, useEffect } from 'react';
import Axios from 'axios';

const GetBlogData = (endpoint) => {
	let url = `https://blog.noisereactor.com/wp-json/${endpoint}`;
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		Axios.get(url)
			.then((res) => {
				setData(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				setError((err = 'On noes! Problem fetching data'));
			});
	}, [url]);

	return { data, isLoading, error };
};

export default GetBlogData;
