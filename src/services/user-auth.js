import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class UserAuth {
  auth = false;
  token = '';

  constructor(client) {
    this.client = client;
  }
  
  activate() {
    return new Promise().then(resolve => {
      if (this.auth) {
        resolve();
      } else {
        this.checkAuth().then(() => resolve());
      }
    });
  }

  checkAuth() {
    return this.client.fetch('api/init').then(res => {
      this.token = res.token;
    });
  }
}
