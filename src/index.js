import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App.js';




class Intro extends React.Component{
	render(){
		return <h2> Hello World </h2>;
	}
}

ReactDOM.render(<App />,document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

