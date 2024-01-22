import { tmpl } from './link.tmpl.ts'
import Block from '../../core/Block/index.ts';

interface LinkProps {
  to: string
  text?: string
  events?: {
    click: () => void
  }
}

export class Link extends Block {
  constructor (props: LinkProps) {
    super('div', props);
  }

  render () {
    return this.compile(tmpl, this.props);
  }
}
