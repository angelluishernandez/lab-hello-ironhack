import React, { Component } from "react";

import { render } from "react-dom";
import NavBar from "./NavBar";

class Header extends Component {
	render() {
		return (
      <div className="container bg-dark">
        
        <NavBar />
        <div className="container">
        <h1 className="display-1 w-50 mt-5 ml-5 text-light">Say hello to ReactJS</h1>
        <p className="w-25 mt-5 ml-5 text-light">You will learn a Frontend framework from scratch, to became a Ninja Developer</p>
        <button className="btn btn-light m-5"><b>Awesome!</b></button>
        </div>
			</div>
		);
	}
}

export default Header;
