import Block from '../../utils/Block'
import './login.scss' 
import { tmpl } from './login.tmpl';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export class Login extends Block {
  constructor () {
    super('div', { tittle: 'Вход' });
  }

  init () {
    this.children.inputLogin = new Input({
      class: 'login-title',
      name: 'login',
      type: 'text',
      placeholder: 'Логин...',
      events: {
        focus: () => { console.log(this.children.inputLogin.isValidLogin) }
      },
    });
    this.children.inputPassword = new Input({
      class: 'login-title',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль...',
      events: {
        focus: () => { console.log(this.children.inputPassword.isValidPassword) }
      },
    });
    this.children.button = new Button({
      type: 'submit',
      label: 'Авторизоваться',
      events: { click: () => { this.handleSubmit(); } }
    });
    this.children.buttonLink = new Button({
      type: 'button',
      label: 'Регистрация',
      events: { click: () => { console.log('Регистрация!'); } }
     });
  }

  handleSubmit () {
  if(this.children.inputPassword.isValidPassword && this.children.inputLogin.isValidLogin) {
      const formData = {
      login: this.children.inputLogin.takeValue,
      password: this.children.inputPassword.takeValue
    };
    console.log(formData, 'Formdata Login')
  } else {
  console.log('Неккоректно')
  }
  }

  render () {
    return this.compile(tmpl, this.props);
  }
}
