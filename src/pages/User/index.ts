import './user.scss'
import { tmpl } from './user.tmpl';
import { Link } from '../../components/Link';
import { Avatar } from '../../components/Avatar';
import Block from '../../utils/Block';

export class User extends Block{
constructor(){
super('div', {tittle:'123'})
}
init(){
this.children.editUserMainLink = new Link({
    to: '/user-edit-data',
    text: 'Изменить данные'
})
this.children.editUserPasswordLink = new Link({
    to: '/user-edit-password',
    text: 'Изменить пароль'
})
this.children.exitLink = new Link({
    to: '/',
    text: 'Выйти'
})
this.children.avaAvatar = new Avatar({
    imageName: 'https://i.pinimg.com/originals/01/4e/f2/014ef2f860e8e56b27d4a3267e0a193a.jpg',
    imageText: 'no photo',
    imageClass: 'user-avatar'
})
}
render(){
return this.compile(tmpl,this.props)
}
}

