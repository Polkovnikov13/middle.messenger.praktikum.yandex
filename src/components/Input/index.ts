import Block from '../../utils/Block'

interface InputProps {
  name: string
  type: string
  class: string
  placeholder: string
  events?: {
    focus: () => void 
  }
}
export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props)
    
    this.element!.classList.add(props.class);
    this.element!.setAttribute('placeholder', props.placeholder);
    this.element!.setAttribute('name', props.name);
    this.element!.setAttribute('type', props.type);
  }

  get takeValue() {
    return (this.element! as HTMLInputElement).value
  }

  _validateWithRegex(regex: RegExp) {
    const { value } = (this.element! as HTMLInputElement)
    return regex.test(value);
  }

  get isValidNameFirstSecondName() {
    return this._validateWithRegex(/^[А-ЯЁA-Z][а-яёa-z-]*$/);
  }

  get isValidLogin() {
    // eslint-disable-next-line no-useless-escape
    return this._validateWithRegex(/^[A-Za-z0-9_\-]{3,20}$/);
  }

  get isValidEmail() {
    return this._validateWithRegex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
  }

  get isValidPassword() {
    return this._validateWithRegex(/^(?=.*[A-Z])(?=.*\d).{8,40}$/);
  }

  get isValidPhone() {
    return this._validateWithRegex(/^(\+\d{10,15}|\d{10,15})$/);
  }



  render() {
    return this.compile('', this.props)
  }
}
