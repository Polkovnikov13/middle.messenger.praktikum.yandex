import Handlebars from 'handlebars';
import './user.scss'
import { tmpl } from './user.tmpl';
import { Link } from '../../components/Link';
import { Avatar } from '../../components/Avatar';

export const User = () => {
  return Handlebars.compile(tmpl)({
    avaAvatar: Avatar({imageName: '../../assets/avatars/photo_2023-08-25_09-53-52.jpg', imageText: 'no photo',imageClass: 'user-avatar'}),
    editUserMainLink: Link({ to: '/user-edit-data', text: 'Изменить данные'}),
    editUserPasswordLink: Link({ to: '/user-edit-password', text: 'Изменить пароль'}),
    exitLink: Link({ to: '/', text: 'Выйти'}),
  });
};
