import Home from './pages/Home';
import './App.css';
import { Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
		</Switch>
	);
};

export default App;
