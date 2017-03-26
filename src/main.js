import 'bootstrap';
import {UserAuth} from 'services/user-auth'

export function configure(aurelia) {
  aurelia.use
  .standardConfiguration()
  .developmentLogging();
  
  // 初期化後にアプリケーションを起動
  //aurelia.start().then(a => a.setRoot());
  aurelia.start().then(a => {
    let rootComponent = isLoggedIn() ? 'app' : 'login';
    a.setRoot(rootComponent, document.body);
  });
}

const isLoggedIn = () => {
  return true;
  //do your magic here
  //check if the current user has a valid authorisation token
};
