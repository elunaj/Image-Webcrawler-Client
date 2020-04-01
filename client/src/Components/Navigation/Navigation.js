import React from 'react';
import { Grid, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
// import Logo from '../Images/logo.svg';
import './Navigation.css';


const Navigation = ( ) => {

		return (

			<AppBar position="static">

			  <Toolbar>
			    <Grid 
			  	container
				direction="row"
				alignItems="center"
				justify="flex-start"
			  	>
			  	<img 
			  		className="marginRight"
			  		// src={Logo} 
	                height="50" 
	                width="50"
	                alt="Logo"
	                  />  
			    <Typography 
			    	className="grid-items"
			    	>
			    ImageCrawler
			    </Typography>

			    </Grid>

			    <Grid 
			    	container
					direction="row"
					alignItems = 'center'
					justify="flex-end"
			    	>	
					 <Typography 
					 	id="email">
					 	
			    	</Typography>

					 <Typography 
					 	style={{'marginLeft': '5px'}}
				    	variant="h6">
				      ||
			    	</Typography>

			    </Grid>
			  </Toolbar>
			</AppBar>


		);
	
	}

export default Navigation;

