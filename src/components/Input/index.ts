import Handlebars from 'handlebars';
import { tmpl } from './input.tmpl';

interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  type: string;
  class: string;
}

export const Input = (props: InputProps) => {
  return Handlebars.compile(tmpl)(props);
};
