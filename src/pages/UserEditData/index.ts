import { tmpl } from './userEditData.tmpl'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Avatar } from '../../components/Avatar'
import Block from '../../utils/Block'

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
        focus: () => { console.log(this.children.inputEmail.isValidEmail) }
      },
    });
    this.children.inputLogin = new Input({
      placeholder: 'Логин',
      name: 'login',
      type: 'text',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputLogin.isValidLogin) }
      },
    });
    this.children.inputName = new Input({
      placeholder: ' Имя...',
      name: 'first_name',
      type: 'text',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputName.isValidNameFirstSecondName) }
      },
    });
    this.children.inputSecondName = new Input({
      placeholder: 'Фамилия...',
      name: 'second_name',
      type: 'text',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputSecondName.isValidNameFirstSecondName) }
      },
    });
    this.children.inputPhone = new Input({
      placeholder: 'Телефон...',
      name: 'phone',
      type: 'text',
      class: 'detail-value',
      events: {
        focus: () => { console.log(this.children.inputPhone.isValidPhone) }
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
      events: { click: () => { this.handleSubmit(); } }
  });
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
