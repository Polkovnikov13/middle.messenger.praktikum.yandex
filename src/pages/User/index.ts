import Handlebars from 'handlebars';

import { tmpl } from './user.tmpl';

export const User = () => {
  return Handlebars.compile(tmpl)({});
};