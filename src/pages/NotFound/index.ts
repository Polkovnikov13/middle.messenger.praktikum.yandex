import Handlebars from 'handlebars';
import './notfound.scss';
import { tmpl } from './notfound.tmpl';
import { Link } from '../../components/Link';

export const NotFound = () => {
  return Handlebars.compile(tmpl)({
    mainPageLink: Link({ to: '/main', text: 'Вернуться на основную страницу' }),
  });
};
