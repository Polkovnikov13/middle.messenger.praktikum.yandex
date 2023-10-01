import Handlebars from 'handlebars';
import { tmpl } from './input.tmpl';

interface AvatarProps {
  imageName: string;
  imageText: string;
  imageClass: string;
 
}

export const Avatar = (props: AvatarProps) => {
  return Handlebars.compile(tmpl)(props);
};
