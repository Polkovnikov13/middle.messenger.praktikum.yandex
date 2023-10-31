/* eslint-disable max-len */
import './user.scss';
import  {AuthContoller}  from '../../controllers/AuthController';
import { tmpl } from './user.tmpl'
import { Link } from '../../components/Link'
import { Avatar } from '../../components/Avatar'
import Block from '../../core/Block'
import { Button } from '../../components/Button';
import { IState, store, withStore } from '../../core/Store';
import { RESOURSES_URL } from '../../core/HTTPTransport';

export class BaseUser extends Block {
  constructor () {
    super('div',  mapStateToProps(store.getState()));
  }

  init () {
   this.children.messengerLink = new Link({
      to: '/messenger',
      text: 'Чаты',
});
    this.children.editUserMainLink = new Link({
      to: '/user-edit-data',
      text: 'Изменить данные',
});
    this.children.editUserPasswordLink = new Link({
      to: '/user-edit-password',
      text: 'Изменить пароль',
});
 this.children.exitButton = new Button({
      type: 'button',
      label: 'Выйти',
      events: { click: () => { AuthContoller.logout() } }
     });
    this.children.avaAvatar = new Avatar({
      imageName: `${RESOURSES_URL}${this.props.avatar}`,
      imageText: 'no photo',
      imageClass: 'user-avatar',
});

  }

    componentDidMount(): void {
    AuthContoller.fetchUser()
  }

  render () {
    return this.compile(tmpl, this.props);
  }
}

const mapStateToProps = (state: IState) => ({
  id:state.user?.id,
  avatar: state.user?.avatar,
  first_name: state.user?.first_name,
  second_name: state.user?.second_name,
  login: state.user?.login,
  email: state.user?.email,
  phone: state.user?.phone,
  display_name: state.user?.display_name
})


export const User = withStore(mapStateToProps)(BaseUser)

