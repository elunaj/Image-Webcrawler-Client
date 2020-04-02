import React from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import UserSearch from './Components/UserSearch/UserSearch.js';
import DisplayImages from './Components/DisplayImages/DisplayImages.js';
import WebsiteInfo from './Components/WebsiteInfo/WebsiteInfo.js';
import './App.css';

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

  downloadImage = link => {

    console.log(link)
    fetch("http://localhost:8080/download?imageLink=" + link, {
      method: 'GET',
      headers: {
        'Content-Type': 'image/jpeg'
      },
    })
    .then(response => response.blob())
    .then()
    .catch(err => console.log(err))

  }

  render() {

    return(
        <div className="App">
          <Navigation />
            <div className="Body">
              <WebsiteInfo />
              <UserSearch
                handleSubmit={ this.handleSubmit }
                handleUserInput={ this.handleUserInput } />
              <DisplayImages
                userImages={ this.state.userImages } 
                userImagesFetchStatus= {this.state.userImagesFetchStatus }
                downloadImage={ this.downloadImage }
                />
            </div>
        </div>
      );
   }

}

export default App;
