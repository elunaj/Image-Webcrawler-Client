import React from "react";
import { Form, Button } from 'react-bootstrap';

const UserSearch = ( {handleSubmit, handleUserInput} ) => {
  
  return (
    <div>
      <Form>
        <Form.Group controlId="formInput">
          <Form.Label>Web Search</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="web address"
            onChange={ handleUserInput }  />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button 
          variant="primary" 
          type="submit"
          onClick={ handleSubmit }>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UserSearch;