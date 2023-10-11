import Block from '../../utils/Block';

export class Main extends Block{
  constructor(){
  super('div', {tittle: 'Здесь  Page чат'})
  }

  render(){
  return this.compile('<h1>{{tittle}}</h1>',this.props)
  }
}
