import Handlebars from 'handlebars';
import './login.scss';
import { tmpl } from './login.tmpl';
import { Link } from '../../components/Link';

export const Login = () => {
  return Handlebars.compile(tmpl)({
   userPageLink: Link({ to: '/registration', text: 'Регистрация' }),
  });
};