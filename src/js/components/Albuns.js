import React, { Component } from 'react';
import '../../css/Albuns.css';
import Slider from './Slider';

class Albuns extends Component {
    _populateTracks(tracks) {
        return tracks.map(track => {
            return (
                <li key={track.id} className="track">
                    <div>{track.name}</div>
                    <div className="track-duration">{track.duration}</div>
                </li>
                );
            });
    }

    _populateAlbuns(albuns) {
        return albuns.map(album => {
            return (
                <div key={album.id} className="album-wrapper">
                    <div className="artwork-container">
                        <img src={album.artwork} alt={`${album.name} cover artwork`} className="album-artwork" loading="lazy" />
                    </div>
                    <div>
                        <div className="vertical-line"></div>
                    </div>
                    <div className="tracks-container">
                        <div className="album-title-wrapper">
                            <p className="album-date">{album.releaseDate}</p>
                            <p className="album-name">{album.name}</p>
                        </div>
                        <ol className="track-list">
                            {this._populateTracks(album.tracks)}
                        </ol>
                    </div>
                </div>
            )
        });
    }

    render () {
        if (this.props.albuns) {
            return (
                <>
                <main id="contentContainer" className="content-wrapper">
                    {this._populateAlbuns(this.props.albuns)}
                </main>
                <Slider />
                </>
            );
        } else {
            return <p>Loading....</p>
        }
    }
}

export default Albuns;