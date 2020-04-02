import React from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import UserSearch from './Components/UserSearch/UserSearch.js';
import DisplayImages from './Components/DisplayImages/DisplayImages.js';
import WebsiteInfo from './Components/WebsiteInfo/WebsiteInfo.js';
import ErrorDisplay from './Components/ErrorDisplay/ErrorDisplay.js';
import Footer from './Components/Footer/Footer.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      userImages: [],
      userImagesFetchStatus: false,
      searchErrorStatus: false,
      searchError: "",
      downloadErrorStatus: false,
      downloadError: "",
      loading: false
    }
  }

  handleUserInput = event => {

    event.preventDefault();

    this.setState({
      userInput: event.target.value
    })

  }

  handleSubmit = event => {
    event.preventDefault();

     this.setState({
        loading: true
      })

    fetch("http://localhost:8080/search?url=" + this.state.userInput, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(images => {
      this.setState({
        userImages: [...images],
        userImagesFetchStatus: true,
        searchErrorStatus: false,
        searchError: "",
        loading: false
      })
    })
    .catch(err => {

      this.setState({
        searchErrorStatus: true,
        searchError: "Please enter a valid web address.",
        loading: false
      })

    });
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
    .then(image => {

      if (image.size > 0) {
        const url = window.URL.createObjectURL(new Blob([image]));
        const link = document.createElement('a');
        link.href = url;
        let str = image.type;
        let n = str.lastIndexOf("/");
        let result = str.substring(n + 1);
        link.setAttribute('download', 'image.' + result);
        document.body.appendChild(link);
        link.click();

        this.setState({
          downloadErrorStatus: false,
          downloadError: ""
        });
      } else {
        this.setState({
          downloadErrorStatus: true,
          downloadError: "Download error. Please try again."
        });
      }
  
    })
    .catch(err => {

    })

  }

  render() {

    return(
        <div>
          <div className="App">
            <Navigation />
              <div className="Body">
                <WebsiteInfo />
                <UserSearch
                  handleSubmit={ this.handleSubmit }
                  handleUserInput={ this.handleUserInput } />
                <ErrorDisplay 
                  searchErrorStatus={ this.state.searchErrorStatus }
                  searchError={ this.state.searchError }
                  downloadErrorStatus={ this.state.downloadErrorStatus }
                  downloadError={ this.state.downloadError } />
                <DisplayImages
                  loading={ this.state.loading }
                  userImages={ this.state.userImages } 
                  userImagesFetchStatus= {this.state.userImagesFetchStatus }
                  downloadImage={ this.downloadImage }
                  />
              </div>
            </div>
            <Footer />
          </div>
      );
   }

}

export default App;
