import React from 'react';
import { Typography } from '@material-ui/core';
import './WebsiteInfo.css';


const WebsiteInfo = () => {

		return (
			<div className="websiteInfo">

			 <Typography 
			 	style={{
			 		'marginTop': '2rem',
			 		'display': 'block'
			 	}}
			 	variant="h3">Search & Download Images Below:
			 	</Typography>

			 <Typography 
			 	style={{
			 		'marginTop': '0.5rem',
			 		'margin': '0.5 0.5rem'
			 	}}
			 	variant="subtitle1">
			 	Enter a full web address to find all of the
			 	images on the web page
			 	</Typography>
					 
			</div>
		);
}

export default WebsiteInfo;

