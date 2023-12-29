/* eslint-disable max-len */
import { tmpl } from './userEditData.tmpl'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Avatar } from '../../components/Avatar'
import Block from '../../core/Block'
import './userEditData.scss'
import { UserController } from '../../controllers/UserController'
import { IState, store, withStore } from '../../core/Store'
import { RESOURSES_URL } from '../../core/HTTPTransport'

export class BaseUserEditData extends Block {
  constructor () {
    super('div', mapStateToProps(store.getState()));
  }

  init () {

    this.children.avaAvatar = new Avatar({
      imageName: `${RESOURSES_URL}${this.props.avatar}`,
      imageText: 'no photo',
      imageClass: 'user-avatar',
  });

  this.children.inputChangeAvatar = new Input({
    placeholder: 'Выберите файл',
    name: 'avatar',
    type: 'file',
    class: 'detail-value',
    events: {
        change: (event) => { this.changeAvatar(event); }
    },
  });

    this.children.inputEmail = new Input({
      placeholder: this.props.email,
      value: this.props.email,
      name: 'email',
      type: 'email',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputEmail.isValidEmail) },
        blur: () => { this.handleEmail(); }
      },
    });
    this.children.inputLogin = new Input({
      placeholder: this.props.login,
      value: this.props.login,
      name: 'login',
      type: 'text',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputLogin.isValidLogin) },
        blur: () => { this.handleLogin(); }
      },
    });
    this.children.inputName = new Input({
      placeholder: this.props.first_name ,
      value: this.props.first_name,
      name: 'first_name',
      type: 'text',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputName.isValidNameFirstSecondName) },
        blur: () => { this.handleName(); }
      },
    });
    this.children.inputSecondName = new Input({
      placeholder: this.props.second_name ,
      value: this.props.second_name,
      name: 'second_name',
      type: 'text',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputSecondName.isValidNameFirstSecondName) },
         blur: () => { this.handleName2(); }
      },
    });
    this.children.inputPhone = new Input({
      placeholder: this.props.phone ,
      value: this.props.phone,
      name: 'phone',
      type: 'text',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputPhone.isValidPhone) },
        blur: () => { this.handlePhone(); }
      },
    });
    this.children.inputDisplayName = new Input({
      placeholder: this.props.display_name ,
      value: this.props.display_name,
      name: 'display_name',
      type: 'text',
      class: 'detail-value',
  });
   this.children.saveButton = new Button({
      type: 'button',
      label: 'Сохранить',
      events: {
        click: () => {
          this.handleSubmit();
        },
      },
    });
  }
  
changeAvatar(e:Event) {
    const inputElement = e.target as HTMLInputElement;
    if (inputElement.files) {
        const formData = new FormData();
        const file = inputElement.files[0]
        console.log('File!=>',file)
        formData.append('avatar', file);
        console.log('Дата!=>',formData)
        UserController.editAvatar(formData);
        console.log('0000', file);
        console.log('0000', file.name);
    }
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

handleSubmit() {
    if (
      this.children.inputEmail.isValidEmail &&
      this.children.inputLogin.isValidLogin &&
      this.children.inputName.isValidNameFirstSecondName &&
      this.children.inputSecondName.isValidNameFirstSecondName &&
      this.children.inputPhone.isValidPhone
    ) {
      const formData = {
        email: this.children.inputEmail.takeValue,
        login: this.children.inputLogin.takeValue,
        first_name: this.children.inputName.takeValue,
        second_name: this.children.inputSecondName.takeValue,
        phone: this.children.inputPhone.takeValue,
        display_name: this.children.inputDisplayName.takeValue || undefined,
      };
      console.log(formData, 'UserEditData');
      // Perform the form submission
      UserController.editData(formData);
    } else {
      console.log('Form validation failed');
      // Display error messages or handle invalid form data
    }
  }

  render () {
    return this.compile(tmpl, this.props);
  }
}

const mapStateToProps = (state: IState) => ({
  id:state.user?.id,
  avatar: state.user?.avatar,
  first_name: state.user?.first_name,
  second_name: state.user?.second_name,
  login: state.user?.login,
  email: state.user?.email,
  phone: state.user?.phone,
  display_name: state.user?.display_name
})


export const UserEditData = withStore(mapStateToProps)(BaseUserEditData)

