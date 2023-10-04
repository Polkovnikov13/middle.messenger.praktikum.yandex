import Handlebars from 'handlebars';
import './registration.scss'
import { tmpl } from './registration.tmpl';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const Registration = () => {
  return Handlebars.compile(tmpl)({
  inputEmail: Input({placeholder: 'Почта...',name: 'email',value: '',type:"email",class:'registration-title'}),
  inputLogin: Input({placeholder: 'Логин',name: 'login',value: '',type:"text",class:'registration-title'}),
  inputName: Input({placeholder: ' Имя...',name: 'first_name',value: '',type:"text",class:'registration-title'}),
  inputSecondName: Input({placeholder: 'Фамилия...',name: 'second_name',value: '',type:"text",class:'registration-title'}),
  inputPhone: Input({placeholder: 'Телефон...',name: 'phone',value: '',type:"text",class:'registration-title'}),
  inputPassword: Input({placeholder: 'Пароль...',name: 'password',value: '',type:"password",class:'registration-title'}),
  inputConfirmPassword: Input({placeholder: 'Пароль еще раз...',name: 'confirm_password',value: '',type:"password",class:'registration-title'}),
  MainButton: Button({ type: 'submit', text: 'Авторизоваться'}),
  });
};
