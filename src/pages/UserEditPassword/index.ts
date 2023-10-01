import Handlebars from 'handlebars';
import { tmpl } from './userEditPassword.tmpl';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Avatar } from '../../components/Avatar';

export const UserEditPassword = () => {
  return Handlebars.compile(tmpl)({
    avaAvatar: Avatar({imageName: '../../images/avatars/photo_2023.jpg', imageText: 'no photo',imageClass: 'user-avatar'}), 
    inputOldPassword: Input({placeholder: '',name: 'oldPassword',value: '',type:"password",class:'transparent-input'}),
    inputNewPassword: Input({placeholder: '',name: 'newPassword',value: '',type:"password",class:'input-edit'}),
    inputNewRepeatPassword: Input({placeholder: '',name: 'newPasswordAgain',value: '',type:"password",class:'input-edit'}),
    saveButton: Button({ type: 'submit', text: 'Сохранить'}),
  });
};
