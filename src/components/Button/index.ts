import Block from '../../utils/Block'
import './button.scss'

interface ButtonProps {
  type: string
  label: string
  class?: string
  events?: {
    click: () => void
  }
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props)
    this.element!.classList.add(props.class || 'button')
    this.element!.setAttribute('type', props.type);
    this.element!.textContent = props.label;
  }

  render() {
    return this.compile('', this.props)
  }
}
