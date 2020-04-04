import React from 'react';
import { Grid, AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from '../Images/logo.svg';
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
			  		src={Logo} 
	                height="50" 
	                width="50"
	                alt="Logo"
	                  />  

			    </Grid>

			    <Grid 
			    	container
					direction="row"
					alignItems = 'center'
					justify="flex-end"
			    	>

				   <Typography 
				    	className="grid-items"
				    	style={{'color': '#E3242B',
                      	'fontSize': '1.3rem'
                      	}}
				    	>
				    Image-Crawl
				    </Typography>
				

			    </Grid>
			  </Toolbar>
			</AppBar>


		);
	
	}

export default Navigation;

