import './errorpage.scss'
import { tmpl } from './errorpage.tmpl'
import { Link } from '../../components/Link'
import Block from '../../utils/Block'

export class ErrorPage extends Block {
  constructor () {
    super('dev', { tittle: '123' });
  }

  init () {
    this.children.mainPageLink = new Link({
      to: '/main',
      text: 'Вернуться на основную страницу',
});
  }

  render () {
    return this.compile(tmpl, this.props);
  }
}
