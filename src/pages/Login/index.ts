import Handlebars from 'handlebars';
import './login.scss';
import { tmpl } from './login.tmpl';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const Login = () => {
  return Handlebars.compile(tmpl)({
   inputLogin: Input({placeholder: 'Логин...',name: 'login',value: '',type:"text",class:'login-title'}),
   inputPassword: Input({placeholder: 'Пароль...',name: 'password',value: '',type:"password",class:'login-title'}),
   MainButton: Button({ type: 'submit', text: 'Авторизоваться'}),
   RegistrationButton: Button({ type: 'button', text: 'Регистрация'}),
  });
};
