import { tmpl } from './avatar.tmpl'
import Block from '../../core/Block'

interface AvatarProps {
  imageName: string
  imageText?: string
  imageClass?: string

}

export class Avatar extends Block {
  constructor (props: AvatarProps) {
    super('div', props)
  }

  render () {
    return this.compile(tmpl, this.props);
  }
}
