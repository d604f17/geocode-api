import qs from 'qs';
import rp from 'request-promise';

export default class Geocode {
    constructor(key, format) {
        this.key = key;
        this.url = 'https://maps.googleapis.com/maps/api/geocode/' + format
    }

    query(address) {
        const query = qs.stringify({
            key: this.key,
            address: address
        });

        return rp({
            url: this.url + '?' + query,
            json: true
        });
    }
}