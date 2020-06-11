class Track {
    constructor(id, name, duration) {
        this._id = id;
        this._name = name;
        this._duration = duration;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get duration() {
        let roundToSecond = 1000 * Math.round(this._duration / 1000);
        let minutes = new Date(roundToSecond);
        let seconds = minutes.getUTCSeconds();
        return `${minutes.getUTCMinutes()}:${seconds < 10 ? 0 : ''}${seconds}`;
    }
}

export default Track;