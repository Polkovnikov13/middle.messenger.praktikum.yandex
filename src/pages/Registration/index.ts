import Handlebars from 'handlebars';

import { tmpl } from './registration.tmpl';

export const Registration = () => {
  return Handlebars.compile(tmpl)({});
};