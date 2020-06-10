import $ from 'jquery';

class Connection {
    static async get(url) {
        return $.getJSON(url)
            .then(res => res)
            .catch(err => {
                throw new Error(`Request Failed: ${err}`);
            });
    }
}

export default Connection;