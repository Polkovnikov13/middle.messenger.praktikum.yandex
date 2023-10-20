import { tmpl } from './userEditPassword.tmpl'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Avatar } from '../../components/Avatar'
import Block from '../../utils/Block'
import './userEditPassword.scss'

export class UserEditPassword extends Block {
  constructor () {
    super('div', {});
  }

  init () {
    this.children.avaAvatar = new Avatar({
      imageName: 'https://i.pinimg.com/originals/01/4e/f2/014ef2f860e8e56b27d4a3267e0a193a.jpg',
      imageText: 'no photo',
      imageClass: 'user-avatar',
  });
    this.children.inputOldPassword = new Input({
      placeholder: '',
      name: 'oldPassword',
      type: 'password',
      class: 'transparent-input',
      events: {
        focus: () => { console.log(this.children.inputOldPassword.isValidPassword) },
        blur: () => { this.handleOldPasswordValidation(); }
      },
    });
    this.children.inputNewPassword = new Input({
      placeholder: '',
      name: 'newPassword',
      type: 'password',
      class: 'input-edit',
      events: {
        focus: () => { console.log(this.children.inputNewPassword.isValidPassword) },
        blur: () => { this.handleNewPasswordValidation(); }
      },
    });
    this.children.inputNewRepeatPassword = new Input({
      placeholder: '',
      name: 'newPasswordAgain',
      type: 'password',
      class: 'input-edit',
      events: {
        focus: () => { console.log(this.children.inputNewRepeatPassword.isValidPassword) },
         blur: () => { this.handleNewRepeatPasswordValidation(); }
      },
    });
    this.children.saveButton = new Button({
      type: 'submit',
      label: 'Сохранить',
      events: { click: () => { this.handleSubmit(); } }
  });
  }
handleNewRepeatPasswordValidation(){
  const errorMessage = document.getElementById('error-message-NewRepeatpassword');
   if (!this.children.inputNewRepeatPassword.isValidPassword) {
   if (errorMessage) { 
      errorMessage.textContent = 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра';
      errorMessage.style.color = 'red'; 
    }
  } else {
    if (errorMessage) {
      errorMessage.textContent = '';
    }
  }
}

handleOldPasswordValidation() {
  const errorMessage = document.getElementById('error-message-Oldpassword');
   if (!this.children.inputOldPassword.isValidPassword) {
   if (errorMessage) { 
      errorMessage.textContent = 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра';
      errorMessage.style.color = 'red'; 
    }
  } else {
    if (errorMessage) {
      errorMessage.textContent = '';
    }
  }
}
handleNewPasswordValidation() {
  const errorMessage = document.getElementById('error-message-Newpassword');
   if (!this.children.inputNewPassword.isValidPassword) {
   if (errorMessage) { 
      errorMessage.textContent = 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра';
      errorMessage.style.color = 'red'; 
    }
  } else {
    if (errorMessage) {
      errorMessage.textContent = '';
    }
  }
}

  handleSubmit () {
  if(this.children.inputOldPassword.isValidPassword && 
  this.children.inputNewPassword.isValidPassword 
  && this.children.inputNewRepeatPassword.isValidPassword){
      const formData = {
      oldPassword: this.children.inputOldPassword.takeValue,
      newPassword: this.children.inputNewPassword.takeValue,
      newPasswordAgain: this.children.inputNewRepeatPassword.takeValue
    };
    console.log(formData, 'Formdata Login')
  } else {
  console.log("Некорректно")
  }
  }

  render () {
    return this.compile(tmpl, this.props);
  }
}
