import Handlebars from 'handlebars';
import './errorpage.scss';
import { tmpl } from './errorpage.tmpl';
import { Link } from '../../components/Link';

export const ErrorPage = () => {
  return Handlebars.compile(tmpl)({
    mainPageLink: Link({ to: '/main', text: 'Вернуться на основную страницу' }),
  });
};
