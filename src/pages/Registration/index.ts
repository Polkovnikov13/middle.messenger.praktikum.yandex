import './registration.scss'
import { tmpl } from './registration.tmpl';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import Block from '../../utils/Block';

export class Registration extends Block{
constructor(){
super("div",{tittle:'register'});
}

init(){
this.children.inputEmail = new Input({
      class:'registration-title',
      name: 'email',
      type: 'email',
      placeholder: 'Почта...'
})
this.children.inputLogin = new Input({
      class:'registration-title',
      name: 'login',
      type: 'text',
      placeholder: 'Логин...'
})
this.children.inputName = new Input({
      class:'registration-title',
      name: 'first_name',
      type: 'text',
      placeholder: 'Имя...'
})
this.children.inputSecondName = new Input({
      class:'registration-title',
      name: 'second_name',
      type: 'text',
      placeholder: 'Фамилия ...' 
})
this.children.inputPhone = new Input({
      class:'registration-title',
      name: 'phone',
      type: 'text',
      placeholder: 'Телефон ...' 
})
this.children.inputPassword = new Input({
      class:'registration-title',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль ...'
})
this.children.inputConfirmPassword = new Input({
      class:'registration-title',
      name: 'confirm_password',
      type: 'password',
      placeholder: 'Повторите пароль ...'
})
this.children.MainButton = new Button({
      type: 'submit',
      label: 'Создать аккаунт',
      events: { click: () => console.log('Авторизоваться!') },
    });
}

render(){
  return this.compile(tmpl,this.props)
  }
}
