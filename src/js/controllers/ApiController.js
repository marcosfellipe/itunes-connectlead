import Connection from "../services/Connection"
import Artist from "../models/Artist";
import Album from "../models/Album";
import Track from "../models/Track";

class ApiController {
    constructor() {
        this.artist = {};
    }

    async getArtist(name) {
        const artistUrl = `https://itunes.apple.com/search?term=${name}&entity=allArtist&attribute=allArtistTerm&limit=1&callback=`;
        return Connection.get(artistUrl)
            .then(res => res.results[0])
            .then(res => {
                this.artist = new Artist(res.artistId, res.artistName);
                this.artist.albuns = this._getAlbuns(res.artistId);
                return this.artist;
            }).catch(err => err);
    }

    async _getAlbuns(artistId) {
        const albumUrl = `https://itunes.apple.com/lookup?id=${artistId}&entity=album&sort=recent&limit=15&callback=`;
        return await Connection.get(albumUrl)
            .then(res => res.results.slice(1))
            .then(res => {
                return res.map(res => {
                    let album = new Album(res.collectionId, res.collectionName, res.releaseDate, res.artworkUrl100);
                    album.tracks = this._getTracks(album.id); 
                    return album;
                });
            })
            .catch(err => err);
    }

    async _getTracks(albumId) {
        const urlTracks = `https://itunes.apple.com/lookup?id=${albumId}&entity=song&callback=`;
        return await Connection.get(urlTracks)
            .then(res => res.results.slice(1))
            .then(res => {
                return res.map(track => {
                    return new Track(track.trackId, track.trackName);
                })
            }).catch(err => err);
    }
}

export default ApiController;