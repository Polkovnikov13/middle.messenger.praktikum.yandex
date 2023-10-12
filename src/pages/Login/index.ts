import Block from '../../utils/Block';
import './login.scss' ;
import { tmpl} from './login.tmpl'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export class Login extends Block{
  constructor(){
  super('div', {tittle: 'Вход'})
  }

  init() {
    this.children.login = new Input({
      class:'login-title',
      name: 'login',
      type: 'text',
      placeholder: 'Логин...'
    });
    this.children.password = new Input({
      class:'login-title',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль...'
    });
     this.children.button = new Button({
      class:'login-button',
      type: 'submit',
      label: 'Авторизоваться',
      events: { click: () => console.log('Авторизоваться!') },
    });
     this.children.buttonLink = new Button({
      class:'login-button',
      type: 'button',
      label: 'Регистрация',
      events: { click: () => console.log('Регистрация!') },
     })
  } 

  render(){
  return this.compile(tmpl,this.props)
  }
}

