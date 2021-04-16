import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import themes from './theme/themes';
import Header from './components/Header';
import SingleBlog from './pages/SingleBlog';
import Footer from './components/Footer';
import ScrollToTop from './functions/ScrollToTop';
import './App.css';

// Pages
import Home from './pages/Home';

function App() {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		const updateTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(updateTheme);
	};

	return (
		<main style={themes[theme]}>
			<Router>
				<ScrollToTop>
					<Header handleClick={toggleTheme} />
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/blog/:id/">
						<SingleBlog />
					</Route>
					<Footer />
				</ScrollToTop>
			</Router>
		</main>
	);
}

export default App;
