import Handlebars from 'handlebars';
import './login.scss';
import { tmpl } from './login.tmpl';
import { Link } from '../../components/Link';
import { Input } from '../../components/Input';

export const Login = () => {
  return Handlebars.compile(tmpl)({
   inputLogin: Input({placeholder: 'Логин...',name: 'login',value: '',type:"text",class:'login-title'}),
   inputPassword: Input({placeholder: 'Пароль...',name: 'password',value: '',type:"password",class:'login-title'}),
   userPageLink: Link({ to: '/main', text: 'Авторизоваться'}),
   registrationPageLink: Link({ to: '/registration', text: 'Регистрация' }),
  });
};