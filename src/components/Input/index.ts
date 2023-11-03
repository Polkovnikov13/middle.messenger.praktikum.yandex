import Block from '../../core/Block'

interface InputProps {
  hasValidationErrorFirstSecondName?: boolean
  hasValidationErrorLogin?: boolean
  hasValidationErrorPassword?: boolean
  hasValidationErrorEmail?: boolean
  hasValidationErrorPhone?: boolean
  hasValidationErrorMessage?: boolean
  value?: string
  accept?: string
  name: string
  type: string

  class: string
  id?: string
  placeholder: string
  events?: {
    focus?: () => void;
    blur?: () => void; 
    change?: (event: Event) => void;
  }
}
export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props)
    
    this.element!.classList.add(props.class);
    this.element!.setAttribute('placeholder', props.placeholder);
    this.element!.setAttribute('name', props.name);
    this.element!.setAttribute('type', props.type);
    this.element!.setAttribute('accept', props.accept || '')
    if (props.events?.change) {
      this.element!.addEventListener('change', props.events.change);
    }
  }
  
  get takeValue() {
    return (this.element! as HTMLInputElement).value
  }

  clearInput() {
    if (this.element instanceof HTMLInputElement) {
      this.element.value = ''; // Set the input field value to an empty string
    }
  }

  _validateWithRegex(regex: RegExp) {
    const { value } = (this.element! as HTMLInputElement)
    return regex.test(value);
  }

  get isValidNameFirstSecondName() {
    const isVal =  this._validateWithRegex(/^[А-ЯЁA-Z][а-яёa-z-]*$/);
    // eslint-disable-next-line max-len
    if(isVal && this.props.hasValidationErrorFirstSecondName) this.setProps({ hasValidationErrorFirstSecondName: false});
    if(!isVal) this.setProps({ hasValidationErrorFirstSecondName: true});
    return isVal
  }

  get isValidLogin() {
    // eslint-disable-next-line no-useless-escape
    const isVal = this._validateWithRegex(/^[A-Za-z0-9_\-]{3,20}$/);
    if(isVal && this.props.hasValidationErrorLogin) this.setProps({ hasValidationErrorLogin: false});
    if(!isVal) this.setProps({ hasValidationErrorLogin: true});
    return isVal
  }

  get isValidEmail() {
    const isVal =  this._validateWithRegex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/); 
    if(isVal && this.props.hasValidationErrorEmail) this.setProps({ hasValidationErrorEmail: false});
    if(!isVal) this.setProps({ hasValidationErrorEmail: true});
    return isVal
  }

  get isValidPassword() {
    const isVal = this._validateWithRegex(/^(?=.*[A-Z])(?=.*\d).{8,40}$/);
    if(isVal && this.props.hasValidationErrorPassword) this.setProps({ hasValidationErrorPassword: false});
    if(!isVal) this.setProps({ hasValidationErrorPassword: true});
    return isVal
  }

  get isValidPhone() {
    const isVal = this._validateWithRegex(/^(\+\d{10,15}|\d{10,15})$/);
    if(isVal && this.props.hasValidationErrorPhone) this.setProps({ hasValidationErrorPhone: false});
    if(!isVal) this.setProps({ hasValidationErrorPhone: true});
    return isVal
  }

  get isValidMessage () {
    const { value } = (this.element! as HTMLInputElement);
    const isVal =  value.trim() !== '';
    if(isVal && this.props.hasValidationErrorMessage) this.setProps({ hasValidationErrorMessage: false});
    if(!isVal) this.setProps({ hasValidationErrorMessage: true});
    return isVal
  }

  render() {
    return this.compile('', this.props)
  }
}
