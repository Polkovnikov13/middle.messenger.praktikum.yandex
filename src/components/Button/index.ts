// import Handlebars from 'handlebars';
import Block from '../../utils/Block'
import { tmpl } from './button.tmpl';
import './button.scss'

interface ButtonProps {
  type?: string;
  label: string;
  events: {
  click:()=>void
  }
}

export class Button extends Block{
  constructor(props:ButtonProps) {
  super('button',props)
  }

  render(){
  return this.compile(tmpl, this.props)
  }
}
