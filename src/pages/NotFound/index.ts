// import Handlebars from 'handlebars';
// import './notfound.scss';
// import { tmpl } from './notfound.tmpl';
// import { Link } from '../../components/Link';

// export const NotFound = () => {
//   return Handlebars.compile(tmpl)({
//     mainPageLink: Link({ to: '/main', text: 'Вернуться на основную страницу' }),
//   });
// };
import Block from '../../utils/Block';

export class NotFound extends Block{
  constructor(){
  super('div', {tittle: 'Страница 404'})
  }

  render(){
  return this.compile('<h1>{{tittle}}</h1>',this.props)
  }
}
