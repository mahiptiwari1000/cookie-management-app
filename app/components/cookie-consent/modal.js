import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';

export default class CookieConsentModalComponent extends Component{

  @tracked preferences = {...this.args.preferences};

  @action
  toggle(category, event){
    this.preferences = {
      ...this.preferences,
      [category]: event.target.checked,
    }
  }

  @action
  save(){
    this.args.savePreferences(this.preferences);
  }


}
