import { tmpl } from './userEditPassword.tmpl';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Avatar } from '../../components/Avatar';
import Block from '../../utils/Block';

export class UserEditPassword extends Block{
constructor(){
super('div',{titte:'1'})
}
init(){
  this.children.avaAvatar = new Avatar({
    imageName: 'https://i.pinimg.com/originals/01/4e/f2/014ef2f860e8e56b27d4a3267e0a193a.jpg',
    imageText: 'no photo',
    imageClass: 'user-avatar'
  })
  this.children.inputOldPassword = new Input({
    placeholder: '',
    name: 'oldPassword',
    value: '',
    type:"password",
    class:'transparent-input'
  })
  this.children.inputNewPassword = new Input({
    placeholder: '',
    name: 'newPassword',
    value: '',
    type:"password",
    class:'input-edit'
  })
  this.children.inputNewRepeatPassword = new Input({
    placeholder: '',
    name: 'newPasswordAgain',
    value: '',
    type:"password",
    class:'input-edit'
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

