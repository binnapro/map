import React, { Component } from 'react';
import List from './App'
import Detail from './Detail'

export default class App extends Component {
	constructor() {
		super();

		this.state = {};
	}

	componentDidMount() {

	}

	render() {
		const id = window.location.search.slice(1).split("=")[1];
		return (
			<div>
				{
					!id ?
						<List />:<Detail />
				}
			</div>
		)
	}
}