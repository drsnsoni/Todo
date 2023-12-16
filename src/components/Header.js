import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props){
	return(
			//also write like Header({title}) and access it {title}
			<>
		<h2>{props.title}</h2>
		 
		<h2>{props.login? <h2>Log out</h2> : "log in" }</h2>
			

		<h2> {props.text}</h2>
		</>

		)
}

Header.defaultProps = {

	text: "Username"
}

Header.propTypes = {
	title: PropTypes.string
}