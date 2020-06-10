class Artist {
    constructor(id, name = '') {
        this._id = id;
        this._name = name;
        this._albuns = null;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get albuns() {
        return this._albuns;
    }

    set albuns(albuns) {
        this._albuns = albuns; 
    }
}

export default Artist;