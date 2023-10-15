import { tmpl } from './link.tmpl'
import Block from '../../utils/Block'

interface LinkProps {
  to: string
  text: string
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
