import { tmpl } from './input.tmpl';
import Block from '../../utils/Block'
interface InputProps {
  name: string;
  type: string;
  class: string;
  placeholder: string; 
  value?: string;
  events?: {
  click:()=>void
  }
}
export class Input extends Block{
  constructor(props:InputProps) {
  super('div',props)
  }

  //  get isValid() {
  //   return (this.element! as HTMLInputElement).value.length > 10;
  // }

  render(){
  return this.compile(tmpl, this.props)
  }
}
