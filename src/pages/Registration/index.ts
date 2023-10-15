import './registration.scss'
import { tmpl } from './registration.tmpl';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import Block from '../../utils/Block';

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
  },
})
this.children.inputLogin = new Input({
      class:'registration-title',
      name: 'login',
      type: 'text',
      placeholder: 'Логин...',
      events: {
      focus: () => { console.log(this.children.inputLogin.isValidLogin); },
  },
})
this.children.inputName = new Input({
      class:'registration-title',
      name: 'first_name',
      type: 'text',
      placeholder: 'Имя...',
      events: {
      focus: () => { console.log(this.children.inputName.isValidNameFirstSecondName); },
  },
})
this.children.inputSecondName = new Input({
      class:'registration-title',
      name: 'second_name',
      type: 'text',
      placeholder: 'Фамилия ...',
      events: {
      focus: () => { console.log(this.children.inputSecondName.isValidNameFirstSecondName); },
  }, 
})
this.children.inputPhone = new Input({
      class:'registration-title',
      name: 'phone',
      type: 'text',
      placeholder: 'Телефон ...', 
      events: {
      focus: () => { console.log(this.children.inputPhone.isValidPhone); },
  }, 
})
this.children.inputPassword = new Input({
      class:'registration-title',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль ...',
      events: {
      focus: () => { console.log(this.children.inputPassword.isValidPassword); },
  },
})
this.children.inputConfirmPassword = new Input({
      class:'registration-title',
      name: 'confirm_password',
      type: 'password',
      placeholder: 'Повторите пароль ...',
      events: {
      focus: () => { console.log(this.children.inputConfirmPassword.isValidPassword); },
  },
})
this.children.MainButton = new Button({
      type: 'submit',
      label: 'Создать аккаунт',
      events: { click: () => this.handleSubmit() },
    });
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
    console.log(formData,'registrationForm');
  } else {
  console.log("Неккоректно")
  }
  }

render(){
  return this.compile(tmpl,this.props)
  }
}
