import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './app/App';

const Notification = ({}) => (
	<div>I'm a notification LOL</div>
)

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app')
);

ReactDOM.render(
	<Notification />,
	document.getElementById('notifications')
);

