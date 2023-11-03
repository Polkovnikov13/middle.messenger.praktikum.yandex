import { Link } from '../../components/Link'
import Block from '../../core/Block'
import { tmpl } from './notfound.tmpl'

export class NotFound extends Block {
  constructor () {
    super('div', { tittle: 'Страница 404' });
  }

  init () {
    this.children.mainPageLink = new Link({
      to: '/messenger',
      text: 'Вернуться на основную страницу',
  });
  }

  render () {
    return this.compile(tmpl, this.props);
  }
}
