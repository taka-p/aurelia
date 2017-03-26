import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export default class ApiClient {
  constructor(client) {
    client.configure(config => {
      config
        .withBaseUrl('http://localhost:5678')
        .withDefaults({
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + 'token'
          }
        })
        .withInterceptor({
          request(request) {
            console.log(`Requesting ${request.method} ${request.url}`);
            return request;
          },
          response(response) {
            console.log(`Received ${response.status} ${response.url}`);
          }
        });
    });
    this.client = client;
  }

  get(url, params = {}) {
    const _params = _.isEmpty(params) ? '' : '?' + _.map(params, (value, key) => {
      return `${key}=${value}`;
    }).join('&');
    return this.client.fetch(url + _params).then(res => res.json());
  }

  post(url, params) {
    return this.client.fetch(url, {
      method: 'POST',
      body: json(params),
    }).then(res => res);
  }
}
