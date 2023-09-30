import Handlebars from 'handlebars';
import './user.scss'
import { tmpl } from './user.tmpl';
import { Link } from '../../components/Link';

export const User = () => {
  return Handlebars.compile(tmpl)({
    editUserMainLink: Link({ to: '/user-edit-data', text: 'Изменить данные'}),
    editUserPasswordLink: Link({ to: '/user-edit-password', text: 'Изменить пароль'}),
    exitLink: Link({ to: '/', text: 'Выйти'}),
  });
};