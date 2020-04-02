import React from 'react';
import { Typography } from '@material-ui/core';


const WebsiteInfo = () => {

		return (
			<div className="main">

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
			 	Enter a valid web address to find all of the
			 	downloadable images on a web page
			 	</Typography>
					 
			</div>
		);
}

export default WebsiteInfo;

