import {inject} from 'aurelia-framework';    // 追加
import {Account} from 'services/api-facade'             // 追加

@inject(Account)                             // 追加
export class Welcome {
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;

  // コンストラクタを追加し、注入されたアカウント情報を取得する
  constructor(account) {
    this.firstName = account.firstName;
    this.lastName = account.lastName;
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
