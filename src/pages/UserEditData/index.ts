/* eslint-disable max-len */
import { tmpl } from './userEditData.tmpl'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Avatar } from '../../components/Avatar'
import Block from '../../utils/Block'
import './userEditData.scss'

export class UserEditData extends Block {
  constructor () {
    super('div', {});
  }

  init () {
    this.children.avaAvatar = new Avatar({
      imageName: 'https://i.pinimg.com/originals/01/4e/f2/014ef2f860e8e56b27d4a3267e0a193a.jpg',
      imageText: 'no photo',
      imageClass: 'user-avatar',
  });
    this.children.inputEmail = new Input({
      placeholder: 'Почта...',
      name: 'email',
      type: 'email',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputEmail.isValidEmail) },
        blur: () => { this.handleEmail(); }
      },
    });
    this.children.inputLogin = new Input({
      placeholder: 'Логин',
      name: 'login',
      type: 'text',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputLogin.isValidLogin) },
        blur: () => { this.handleLogin(); }
      },
    });
    this.children.inputName = new Input({
      placeholder: ' Имя...',
      name: 'first_name',
      type: 'text',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputName.isValidNameFirstSecondName) },
        blur: () => { this.handleName(); }
      },
    });
    this.children.inputSecondName = new Input({
      placeholder: 'Фамилия...',
      name: 'second_name',
      type: 'text',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputSecondName.isValidNameFirstSecondName) },
         blur: () => { this.handleName2(); }
      },
    });
    this.children.inputPhone = new Input({
      placeholder: 'Телефон...',
      name: 'phone',
      type: 'text',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputPhone.isValidPhone) },
        blur: () => { this.handlePhone(); }
      },
    });
    this.children.inputDisplayName = new Input({
      placeholder: 'Никнейм...',
      name: 'display_name',
      type: 'text',
      class: 'detail-value',
  });
    this.children.saveButton = new Button({
      type: 'submit',
      label: 'Сохранить',
      events: { click: () => { this.handleSubmit(); } },
  });
  }

  handlePhone(){
  const errorMessage = document.getElementById('error-phone');
   if (!this.children.inputPhone.isValidPhone) {
   if (errorMessage) { 
      errorMessage.textContent = 'от 10 до 15 символов, состоит из цифр, может начинается с плюса';
      errorMessage.style.color = 'red'; 
    }
  } else {
    if (errorMessage) {
      errorMessage.textContent = '';
    }
  }
  }

  handleName2(){
   const errorMessage = document.getElementById('error-second-name');
   if (!this.children.inputSecondName.isValidNameFirstSecondName) {
   if (errorMessage) { 
      errorMessage.textContent = 'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)';
      errorMessage.style.color = 'red'; 
    }
  } else {
    if (errorMessage) {
      errorMessage.textContent = '';
    }
  }
  }

  handleName(){
   const errorMessage = document.getElementById('error-name');
   if (!this.children.inputName.isValidNameFirstSecondName) {
   if (errorMessage) { 
      errorMessage.textContent = 'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)';
      errorMessage.style.color = 'red'; 
    }
  } else {
    if (errorMessage) {
      errorMessage.textContent = '';
    }
  }
  }

  handleLogin(){
  const errorMessage = document.getElementById('error-login');
   if (!this.children.inputLogin.isValidLogin) {
   if (errorMessage) { 
      errorMessage.textContent = 'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)';
      errorMessage.style.color = 'red'; 
    }
  } else {
    if (errorMessage) {
      errorMessage.textContent = '';
    }
  }
  }
  handleEmail(){
  const errorMessage = document.getElementById('error-email');
   if (!this.children.inputEmail.isValidEmail) {
   if (errorMessage) { 
      errorMessage.textContent = 'латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.';
      errorMessage.style.color = 'red'; 
    }
  } else {
    if (errorMessage) {
      errorMessage.textContent = '';
    }
  }
  }

  handleSubmit () {
  if(this.children.inputEmail.isValidEmail && this.children.inputLogin.isValidLogin
  && this.children.inputName.isValidNameFirstSecondName 
  && this.children.inputSecondName.isValidNameFirstSecondName  
  && this.children.inputPhone.isValidPhone){
  const formData = {
      email: this.children.inputEmail.takeValue,
      login: this.children.inputLogin.takeValue,
      first_name: this.children.inputName.takeValue,
      second_name: this.children.inputSecondName.takeValue,
      phone: this.children.inputPhone.takeValue
    };
    console.log(formData, 'UserEditData')
  } else {
  console.log('Некорректно')
  }  
  }

  render () {
    return this.compile(tmpl, this.props);
  }
}
