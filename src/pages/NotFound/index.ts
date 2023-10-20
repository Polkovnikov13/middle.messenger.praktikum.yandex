import { Link } from '../../components/Link'
import Block from '../../utils/Block'
import { tmpl } from './notfound.tmpl'

export class NotFound extends Block {
  constructor () {
    super('div', { tittle: 'Страница 404' });
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
