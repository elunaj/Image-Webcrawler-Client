import React from 'react';
import { Typography, Grid, FormHelperText } from '@material-ui/core';

const ErrorDisplay = ( {searchErrorStatus, searchError,
	downloadErrorStatus, downloadError }) => {

		return (
			 
			<Grid 
    	  container
      	direction="row"
      	alignItems= "center"
      	justify="center"
        >  { searchErrorStatus
       
        ? ( <FormHelperText 
              style={{'color': 'red',
              	'fontSize': '1rem',
              	'marginTop': '-2.5rem'
          	}}
              id="helper-text">
            {searchError}
          </FormHelperText>

      ) : downloadErrorStatus

        ? ( <FormHelperText 
              style={{'color': 'red',
                'fontSize': '1rem',
              	'marginTop': '-2.5rem'
          	}}
              id="helper-text">
            {downloadError}
          </FormHelperText>
        
      ) : null}

		 </Grid>
	);
}

export default ErrorDisplay;


					 