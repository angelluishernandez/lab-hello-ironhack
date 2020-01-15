import React, { Component } from "react";


const Feature = ({ title, img, description }) => {
	return (
		<div className="container">
			<li className="featureItem">
			<img src={img} className="text-align-center"></img>
			<h4>{title}</h4>
			<p>{description}</p>
			</li>
		</div>
	);
};


export default Feature