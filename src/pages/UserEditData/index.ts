import Handlebars from 'handlebars';
import { tmpl } from './userEditData.tmpl';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Avatar } from '../../components/Avatar';

export const UserEditData = () => {
  return Handlebars.compile(tmpl)({
    avaAvatar: Avatar({imageName: '../../assets/avatars/photo_2023-08-25_09-53-52.jpg', imageText: 'no photo',imageClass: 'user-avatar'}), 
    inputEmail: Input({placeholder: 'Почта...',name: 'email',value: '',type:"email",class:'detail-value'}),
    inputLogin: Input({placeholder: 'Логин',name: 'login',value: '',type:"text",class:'detail-value'}),
    inputName: Input({placeholder: ' Имя...',name: 'first_name',value: '',type:"text",class:'detail-value'}),
    inputSecondName: Input({placeholder: 'Фамилия...',name: 'second_name',value: '',type:"text",class:'detail-value'}),
    inputPhone: Input({placeholder: 'Телефон...',name: 'phone',value: '',type:"text",class:'detail-value'}),
    inputDisplayName: Input({placeholder: 'Никнейм...',name: 'display_name',value: '',type:"text",class:'detail-value'}),
    saveButton: Button({ type: 'submit', text: 'Сохранить'}),
  });
};
