import Handlebars from 'handlebars';
import { tmpl } from './userEditPassword.tmpl';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const UserEditPassword = () => {
  return Handlebars.compile(tmpl)({
    inputOldPassword: Input({placeholder: '',name: 'oldPassword',value: '',type:"password",class:'transparent-input'}),
    inputNewPassword: Input({placeholder: '',name: 'newPassword',value: '',type:"password",class:'input-edit'}),
    inputNewRepeatPassword: Input({placeholder: '',name: 'newPasswordAgain',value: '',type:"password",class:'input-edit'}),
    saveButton: Button({ type: 'submit', text: 'Сохранить'}),
  });
};