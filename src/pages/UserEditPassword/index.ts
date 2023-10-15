import { tmpl } from './userEditPassword.tmpl'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Avatar } from '../../components/Avatar'
import Block from '../../utils/Block'

export class UserEditPassword extends Block {
  constructor () {
    super('div', { titte: '1' });
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
        focus: () => { console.log(this.children.inputOldPassword.isValidPassword) }
      },
    });
    this.children.inputNewPassword = new Input({
      placeholder: '',
      name: 'newPassword',
      type: 'password',
      class: 'input-edit',
      events: {
        focus: () => { console.log(this.children.inputNewPassword.isValidPassword) }
      },
    });
    this.children.inputNewRepeatPassword = new Input({
      placeholder: '',
      name: 'newPasswordAgain',
      type: 'password',
      class: 'input-edit',
      events: {
        focus: () => { console.log(this.children.inputNewRepeatPassword.isValidPassword) }
      },
    });
    this.children.saveButton = new Button({
      type: 'submit',
      label: 'Сохранить',
      events: { click: () => { this.handleSubmit(); } }
  });
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
