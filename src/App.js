import React from 'react';
import themes from './theme/themes';
import Header from './components/Header';
import './App.css';

// Pages
import Home from './pages/Home';

function App() {
	const [theme, setTheme] = React.useState('light');
	const toggleTheme = () => {
		const updateTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(updateTheme);
	};

	return (
		<main style={themes[theme]}>
			<Header handleClick={toggleTheme} />
			<Home />
		</main>
	);
}

export default App;
