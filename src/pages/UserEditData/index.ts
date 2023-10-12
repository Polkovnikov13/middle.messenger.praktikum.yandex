import { tmpl } from './userEditData.tmpl';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Avatar } from '../../components/Avatar';
import Block from '../../utils/Block';

export class  UserEditData extends Block{
constructor(){
super('div', {tittle:'123'})
}
init(){
  this.children.avaAvatar = new Avatar({
    imageName: 'https://i.pinimg.com/originals/01/4e/f2/014ef2f860e8e56b27d4a3267e0a193a.jpg',
    imageText: 'no photo',
    imageClass: 'user-avatar'
  })
  this.children.inputEmail = new Input({
    placeholder: 'Почта...',
    name: 'email',
    value: '',
    type:"email",
    class:'detail-value'
  })
  this.children.inputLogin = new Input({
    placeholder: 'Логин',
    name: 'login',
    value: '',
    type:"text",
    class:'detail-value'
  })
  this.children.inputName = new Input({
    placeholder: ' Имя...',
    name: 'first_name',
    value: '',
    type:"text",
    class:'detail-value'
  })
  this.children.inputSecondName = new Input({
    placeholder: 'Фамилия...',
    name: 'second_name',
    value: '',
    type:"text",
    class:'detail-value'
  })
  this.children.inputPhone = new Input({
    placeholder: 'Телефон...',
    name: 'phone',
    value: '',
    type:"text",
    class:'detail-value'
  })
  this.children.inputDisplayName = new Input({
    placeholder: 'Никнейм...',
    name: 'display_name',
    value: '',type:"text",
    class:'detail-value'
  })
  this.children.saveButton = new Button({
    type: 'submit',
    label: 'Сохранить'
  })
}
render(){
return this.compile(tmpl, this.props)
}
}
