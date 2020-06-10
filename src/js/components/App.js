import React, { Component } from 'react';
import ApiController from '../controllers/ApiController';
import '../../css/App.css';
import Header from './Header';
import Albuns from './Albuns';

class App extends Component {
  constructor(props) {
    super(props);
    this.api = new ApiController();
    this.state = {
      artist: null
    }
  }

  async componentDidMount() {
    let artist = await this.api.getArtist('sia');
    this.setState({
      artist: artist
    });   
  }

  render () {
    return (
      <div className="App">
        {
          this.state.artist ?
          <>
          <Header artistName={this.state.artist.name} />
          <main>{<Albuns albuns={this.state.artist.albuns} />}</main>
          </>
          :
          <p>Loading...</p>
        }
        
      </div>
    );
  }
}

export default App;
