import {inject} from 'aurelia-framework';
//import {HttpClient} from 'aurelia-fetch-client';
import ApiClient from './services/api';

@inject(ApiClient)
export class Welcome {
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;

  // コンストラクタを追加し、注入されたアカウント情報を取得する
  constructor(api) {
    this.api = api;
  }

  bind() {
    this.api.post('/api/hello', {
      name: this.firstName + this.lastName
    }).then(json => {
      console.log(json);
    });
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
