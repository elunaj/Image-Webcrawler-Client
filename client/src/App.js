import React from 'react';
import UserSearch from './Components/UserSearch/UserSearch.js';
import DisplayImages from './Components/DisplayImages/DisplayImages.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      userImages: [],
      userImagesFetchStatus: false
    }
  }

  handleUserInput = event => {

    console.log(event.target.value);

    this.setState({
      userInput: event.target.value
    })

  }

  handleSubmit = event => {
    event.preventDefault();

    fetch("http://localhost:8080/search?url=" + this.state.userInput, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .then(images => {
      this.setState({
        userImages: [...images],
        userImagesFetchStatus: true
      })
    })
    .catch(err => console.log(err));
  }


  render() {
    return(
        <div>
          <UserSearch
            handleSubmit={ this.handleSubmit }
            handleUserInput={ this.handleUserInput } />
          <DisplayImages
            userImages={ this.state.userImages } 
            userImagesFetchStatus= {this.state.userImagesFetchStatus }
            />
        </div>
        );
    }

}

export default App;
