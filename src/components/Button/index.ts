import Handlebars from 'handlebars';
import './button.scss'
import { tmpl } from './button.tmpl';

interface ButtonProps {
  type: string;
  text: string;
}

export const Button = (props: ButtonProps) => {
  return Handlebars.compile(tmpl)(props);
};
