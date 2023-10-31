import { AuthContoller } from '../../controllers/AuthController';
import Block from '../../core/Block'
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
        focus: () => { console.log(this.children.inputLogin.isValidLogin) },
         blur: () => { this.handleLoginValidation(); }
      },
    });
    this.children.inputPassword = new Input({
      class: 'login-title',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль...',
      events: {
        focus: () => { console.log(this.children.inputPassword.isValidPassword) },
        blur: () => { this.handlePasswordValidation(); }
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

handleLoginValidation() {
  const errorMessage = document.getElementById('error-message-login');
  if (!this.children.inputLogin.isValidLogin) {
    if (errorMessage) { 
      errorMessage.classList.remove('visible'); 
      // eslint-disable-next-line max-len
      errorMessage.textContent = ' от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)';
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.add('hidden');
    }
  }
}

handlePasswordValidation() {
  const errorMessage = document.getElementById('error-message-password');
   if (!this.children.inputPassword.isValidPassword) {
   if (errorMessage) { 
      errorMessage.classList.remove('visible');
      errorMessage.textContent = 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра';
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.add('hidden');
    }
  }
}
  handleSubmit () {
  if(this.children.inputPassword.isValidPassword && this.children.inputLogin.isValidLogin) {
      const formData = {
      login: this.children.inputLogin.takeValue,
      password: this.children.inputPassword.takeValue
    };
    AuthContoller.signin(formData)
    console.log(formData, 'Formdata Login')
  } else {
  console.log('Неккоректно')
  }
  }

  render () {
    return this.compile(tmpl, this.props);
  }
}
