import {AuthContoller}  from '../../controllers/AuthController';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Block from '../../core/Block';
import { tmpl } from './registration.tmpl'
import './registration.scss'

export class Registration extends Block{
constructor(){
super("div",{});
}

init(){
this.children.inputEmail = new Input({
      class:'registration-title',
      name: 'email',
      type: 'email',
      placeholder: 'Почта...',
      events: {
      focus: () => { console.log(this.children.inputEmail.isValidEmail); },
      blur: () => { this.handleEmailValidation();}
  },
})
this.children.inputLogin = new Input({
      class:'registration-title',
      name: 'login',
      type: 'text',
      placeholder: 'Логин...',
      events: {
      focus: () => { console.log(this.children.inputLogin.isValidLogin); },
      blur: () => { this.handleLoginValidation();}
  },
})
this.children.inputName = new Input({
      class:'registration-title',
      name: 'first_name',
      type: 'text',
      placeholder: 'Имя...',
      events: {
      focus: () => { console.log(this.children.inputName.isValidNameFirstSecondName)},
      blur: () => { this.handleFirstNameSecondValidation();}
  },
})
this.children.inputSecondName = new Input({
      class:'registration-title',
      name: 'second_name',
      type: 'text',
      placeholder: 'Фамилия ...',
      events: {
      focus: () => { console.log(this.children.inputSecondName.isValidNameFirstSecondName); },
      blur: () => { this.handleFirstNameSecondValidation2();}
  }, 
})
this.children.inputPhone = new Input({
      class:'registration-title',
      name: 'phone',
      type: 'text',
      placeholder: 'Телефон ...', 
      events: {
      focus: () => { console.log(this.children.inputPhone.isValidPhone); },
      blur: () => { this.handlePhone();}
  }, 
})
this.children.inputPassword = new Input({
      class:'registration-title',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль ...',
      events: {
      focus: () => { console.log(this.children.inputPassword.isValidPassword); },
      blur: () => { this.handlePassword();}
  },
})
this.children.inputConfirmPassword = new Input({
      class:'registration-title',
      name: 'confirm_password',
      type: 'password',
      placeholder: 'Повторите пароль ...',
      events: {
      focus: () => { console.log(this.children.inputConfirmPassword.isValidPassword); },
      blur: () => { this.handlePassword2();}
  },
})
this.children.MainButton = new Button({
      type: 'submit',
      label: 'Создать аккаунт',
      events: { click: () => this.handleSubmit() },
    });
}
handlePassword2(){
const errorMessage = document.getElementById('error-message-password-confirm');
  if (!this.children.inputConfirmPassword.isValidPassword) {
    if (errorMessage) { 
      errorMessage.classList.remove('visible'); 
      // eslint-disable-next-line max-len
      errorMessage.textContent = ' от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра';
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.add('hidden');
    }
  }
}

handlePassword(){
const errorMessage = document.getElementById('reg-error-message-password');
  if (!this.children.inputPassword.isValidPassword) {
    if (errorMessage) { 
      errorMessage.classList.remove('visible'); 
      // eslint-disable-next-line max-len
      errorMessage.textContent = ' от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра';
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.add('hidden');
    }
  }
}

handlePhone(){
const errorMessage = document.getElementById('error-message-phone');
  if (!this.children.inputPhone.isValidPhone) {
    if (errorMessage) { 
      errorMessage.classList.remove('visible'); 
      // eslint-disable-next-line max-len
      errorMessage.textContent = 'от 10 до 15 символов, состоит из цифр, может начинается с плюса';
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.add('hidden');
    }
  }
}


handleEmailValidation(){
const errorMessage = document.getElementById('error-message-email');
  if (!this.children.inputEmail.isValidEmail) {
    if (errorMessage) { 
      errorMessage.classList.remove('visible'); 
      // eslint-disable-next-line max-len
      errorMessage.textContent = 'латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы';
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.add('hidden');
    }
  }
}

handleLoginValidation(){
const errorMessage = document.getElementById('reg-error-message-login');
  if (!this.children.inputLogin.isValidLogin) {
    if (errorMessage) { 
      errorMessage.classList.remove('visible'); 
      // eslint-disable-next-line max-len
      errorMessage.textContent = 'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)';
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.add('hidden');
    }
  }
}

handleFirstNameSecondValidation(){
const errorMessage = document.getElementById('error-message-name');
  if (!this.children.inputName.isValidNameFirstSecondName) {
    if (errorMessage) { 
      errorMessage.classList.remove('visible'); 
      // eslint-disable-next-line max-len
      errorMessage.textContent = 'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)';
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.add('hidden');
    }
  }
}
handleFirstNameSecondValidation2(){
const errorMessage = document.getElementById('error-message-second-name');
  if (!this.children.inputSecondName.isValidNameFirstSecondName) {
    if (errorMessage) { 
      errorMessage.classList.remove('visible'); 
      // eslint-disable-next-line max-len
      errorMessage.textContent = 'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)';
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.add('hidden');
    }
  }
}

handleSubmit() {
if(this.children.inputEmail.isValidEmail && this.children.inputLogin.isValidLogin 
&& this.children.inputName.isValidNameFirstSecondName && this.children.inputPhone.isValidPhone
&& this.children.inputPassword.isValidPassword){
   const formData = {
      email: this.children.inputEmail.takeValue,
      login: this.children.inputLogin.takeValue,
      first_name: this.children.inputName.takeValue,
      second_name: this.children.inputSecondName.takeValue,
      phone: this.children.inputPhone.takeValue,
      password: this.children.inputPassword.takeValue,
      confirm_password: this.children.inputConfirmPassword.takeValue,
    };
    AuthContoller.signup(formData)
  } else {
  console.log("Неккоректно")
  }
  }

render(){
  return this.compile(tmpl,this.props)
  }
}
