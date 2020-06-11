import $ from 'jquery';

class Connection {
    
    static async get(url) {
        return $.getJSON(url)
            .done(res => res)
            .fail(err => {
                throw new Error(`Request Failed: ${err}`);
            });
    }
}

export default Connection;