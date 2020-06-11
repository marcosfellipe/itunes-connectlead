import Connection from "../services/Connection"
import Artist from "../models/Artist";
import Album from "../models/Album";
import Track from "../models/Track";

class ApiController {
    async getArtist(name) {
        const artistUrl = `https://itunes.apple.com/search?term=${name}&entity=allArtist&attribute=allArtistTerm&limit=1&callback=`;
        let artist = await Connection.get(artistUrl)
        .then(res => res.results[0])
        .then(res => new Artist(res.artistId, res.artistName))
        .catch(err => { throw err });

        let albuns = await this._getAlbuns(artist.id);
        for (let i = 0; i < albuns.length; i++) {
            albuns[i].tracks = await this._getTracks(albuns[i].id);
        }
        artist.albuns = albuns; 
        return artist; 
    }

    async _getAlbuns(artistId) {
        const albumUrl = `https://itunes.apple.com/lookup?id=${artistId}&entity=album&sort=recent&limit=15&callback=`;
        return Connection.get(albumUrl)
            .then(res => res.results.slice(1))
            .then(res => res.map(res => new Album(res.collectionId, res.collectionName, res.releaseDate, res.artworkUrl100)))
            .catch(err => { throw err });
    }

    async _getTracks(albumId) {
        const urlTracks = `https://itunes.apple.com/lookup?id=${albumId}&entity=song&callback=`;
        return Connection.get(urlTracks)
            .then(res => res.results.slice(1))
            .then(res => res.map(track => new Track(track.trackId, track.trackName, track.trackTimeMillis)))
            .catch(err => { throw err });
    }
}

export default ApiController;