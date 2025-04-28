import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';

export default class CookieConsentComponent extends Component{

  @tracked showManageModal = false;
  @tracked preferences = {
    globalCookies: false,
    localCookies: false,
    analyticsCookies:false,
  };


  @action
  toggleManageCookies(){
    this.showManageModal = !this.showManageModal;
  }

  @action
  acceptAll(){
    this.preferences = {
      globalCookies : true,
      localCookies : true,
      analyticsCookies : true,
    }

    this.saveToLocalStorage();
    this.showManageModal = false;
  };
  @action
  declineAll(){
    this.preferences = {
      globalCookies : false,
      localCookies : false,
      analyticsCookies : false,
    }

    this.saveToLocalStorage();
    this.showManageModal = false;
  }

  @action
  savePreferences(updatedPreferences){
    this.preferences = updatedPreferences;
    this.saveToLocalStorage();
    this.showManageModal = false;
  }

  saveToLocalStorage(){
    localStorage.setItem('cookiePreferences', JSON.stringify(this.preferences));
  }
}
