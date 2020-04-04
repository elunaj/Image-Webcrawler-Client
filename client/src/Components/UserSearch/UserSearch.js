import React from 'react';
import { TextField, Button } from '@material-ui/core';

const UserSearch = ({ handleSubmit, handleUserInput, 
  searchErrorStatus, downloadErrorStatus, searchError, downloadError }) => {
  return (

    <div 
      style={{
        'marginTop': '3rem',
        'marginBottom': '3rem'
      }}
      noValidate autoComplete="off">

        <TextField id="outlined-basic"
          className="textfield"
          label="Enter web address" 
          variant="filled" 
          onChange={ handleUserInput } 
        />
        <Button
          style={{
            height: '3rem',
            'marginLeft': '2px',
            'marginTop': '3px',
            'color:': 'black'
          }}
          variant="contained" 
          onClick={ handleSubmit }
          color="primary"
          >Search
        </Button>

    </div>

  );
}

export default UserSearch;
