import React, { Component } from "react";
import FeatureList from "./FeatureList";
import Header from "./Header"
import "bootstrap/dist/css/bootstrap.css";

// Import CSS

import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<FeatureList />
			</div>
		);
	}
}

export default App;
