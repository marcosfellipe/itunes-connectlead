import React, { Component } from 'react';
import ApiController from '../controllers/ApiController';
import '../../css/App.css';
import Header from './Header';
import Albuns from './Albuns';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this._api = new ApiController();
    this.state = {
      artist: null,
      isConnected: true
    }
  }

  async componentDidMount() {
    if (this.state.isConnected) {
      let artist = await this._api.getArtist('sia').catch(err => {
        console.log(err);
        this.setState({ isConnected: false });
        return;
      });

      this.setState({ artist });
    }     
  }

  render () {
    return (
      <div className="App">
        {
          this.state.artist ?
          <>
          <Header artistName={this.state.artist.name} />
          <Albuns albuns={this.state.artist.albuns} />
          </>
          :
          <Loading isConnected={this.state.isConnected}/>
        }
        
      </div>
    );
  }
}

export default App;
