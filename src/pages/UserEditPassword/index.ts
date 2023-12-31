import { tmpl } from './userEditPassword.tmpl'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Avatar } from '../../components/Avatar'
import Block from '../../core/Block'
import './userEditPassword.scss'
import { UserController } from '../../controllers/UserController'
import { IState, store, withStore } from '../../core/Store'
import { RESOURSES_URL } from '../../core/HTTPTransport'

export class BaseUserEditPassword extends Block {
  constructor () {
   super('div', mapStateToProps(store.getState()));
  }

  init () {
    this.children.avaAvatar = new Avatar({
      imageName: `${RESOURSES_URL}/${this.props.avatar}`,
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
      events: { click: () => {
      const formData = {
      oldPassword: this.children.inputOldPassword.takeValue,
      newPassword: this.children.inputNewPassword.takeValue
    };
       UserController.editPassword(formData) 
       } },
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
  console.log(formData)
  } else {
  console.log("Некорректно")
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


export const UserEditPassword = withStore(mapStateToProps)(BaseUserEditPassword)
