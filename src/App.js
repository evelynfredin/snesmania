import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import themes from './theme/themes';
import Header from './components/Header';
import SingleBlog from './pages/SingleBlog';
import Reviews from './pages/AllReviews';
import Footer from './components/Footer';
import ScrollToTop from './functions/ScrollToTop';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import NotFoud from './pages/NotFound';

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
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/blog/:id/">
							<SingleBlog />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/reviews">
							<Reviews />
						</Route>
						<Route path="*">
							<NotFoud />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</Router>
		</main>
	);
}

export default App;
