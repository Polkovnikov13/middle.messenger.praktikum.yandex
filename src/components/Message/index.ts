import { tmpl } from './message.tmpl'
import Block from '../../utils/Block'

interface MessageProps {
  class: string
  text: string
}

export class Message extends Block {
  constructor (props: MessageProps) {
    super('div', props);
  }

  get isValidMessage () {
    const { value } = (this.element! as HTMLInputElement);
    return value.trim() !== '';
  }

  render () {
    return this.compile(tmpl, this.props);
  }
}
