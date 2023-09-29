import Handlebars from 'handlebars';

import { tmpl } from './main.tmpl';

export const Main = () => {
  return Handlebars.compile(tmpl)({});
};