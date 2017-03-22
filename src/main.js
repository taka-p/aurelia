import 'bootstrap';
import {UserAuth} from 'services/user-auth'

export function configure(aurelia) {
  aurelia.use
  .standardConfiguration()
  .developmentLogging();
  
  // 初期化後にアプリケーションを起動
  aurelia.start().then(a => a.setRoot());
}
