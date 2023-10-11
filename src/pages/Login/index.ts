import Block from '../../utils/Block';
import './login.scss' ;
import { tmpl} from './login.tmpl'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';

export class Login extends Block{
  constructor(){
  super('div', {tittle: 'Вход'})
  }

  init() {

    this.children.login = new Input({
      name: 'login',
      type: 'text',
      placeholder: 'Логин...'
    });
    this.children.password = new Input({
      name: 'password',
      type: 'password',
      placeholder: 'Пароль...'
    });
     this.children.button = new Button({
      type: 'submit',
      label: 'Авторизоваться',
      events: { click: () => console.log('Авторизоваться!') },
    });
     this.children.link = new Link({
      to: '/registration',
      text:'Регистрация'
     })
  } 

  render(){
  return this.compile(tmpl
  ,this.props)
  }
}

