class Album {
    constructor(id, name, releaseDate, artwork) {
        this._id = id;
        this._name = name;
        this._releaseDate = new Date(releaseDate).getFullYear();
        this._artwork = artwork;
        this._tracks = null;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get releaseDate() {
        return this._releaseDate;
    }

    get artwork() {
        return this._artwork;
    }

    get tracks() {
        return this._tracks;
    }

    set tracks(tracks) {
        this._tracks = tracks;
    }
}

export default Album;