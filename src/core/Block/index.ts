import Handlebars from 'handlebars'
import { nanoid } from 'nanoid'
import { EventBus } from '../EventBus/index.ts'

export class Block<P extends Record<string, any> = any> {
  [x: string]: any
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  } as const

  public id = nanoid(6)
  protected props: P
  // public children: Record<string, Block | Block[]>;
  public children: Record<string, Block>
  private readonly eventBus: () => EventBus
  private _element: HTMLElement | null = null
  private readonly _meta: { tagName: string, props: P }

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor (tagName = 'div', propsWithChildren: P) {
    const eventBus = new EventBus()

    const { props, children } = this._getChildrenAndProps(propsWithChildren)

    this._meta = {
      tagName,
      props
    };

    this.children = children
    this.props = this._makePropsProxy(props)

    this.eventBus = () => eventBus

    this._registerEvents(eventBus)

    eventBus.emit(Block.EVENTS.INIT)
  }

  _getChildrenAndProps (childrenAndProps: P): { props: P, children: Record<string, Block> } {
    const props: Record<string, unknown> = {}
    const children: Record<string, Block> = {}

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value
      } else {
        props[key] = value
      }
    })

    return { props: props as P, children }
  }

  _addEvents () {
    const { events = {} } = this.props as P & { events: Record<string, () => void> }

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName])
    });
  }

  _removeEvents (){
    const { events = {} } = this.props as P & { events: Record<string, () => void> }

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName])
    });
  }

  _registerEvents (eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  _createResources () {
    const { tagName } = this._meta
    this._element = this._createDocumentElement(tagName)
  }

  private _init () {
    this._createResources()

    this.init()

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  protected init () {}

  _componentDidMount () {
    console.log("componentDidMount",this.element?.tagName)
    this.componentDidMount()
  }

  protected componentDidMount () {
      console.log("componentDidMount",this.element?.tagName)
  }

  public dispatchComponentDidMount () {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
     console.log("dispatchComponentDidMount",this.element?.tagName)
    Object.values(this.children).forEach((child) => { child.dispatchComponentDidMount() });
  }

  private _componentDidUpdate (oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }
     console.log("_componentDidUpdate",this.element?.tagName)
  }

  protected componentDidUpdate (_oldProps: P, _newProps: P) {
    return true
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element () {
    return this._element
  }

  private _render () {
    const fragment = this.render()

    this._removeEvents()

    this._element!.innerHTML = ''

    this._element!.append(fragment)


    this._addEvents()
  }

  protected compile (template: string, context: any) {
    const contextAndStubs = { ...context }

    Object.entries(this.children).forEach(([name, component]) => {
      contextAndStubs[name] = `<div data-id="${component.id}"></div>`
    });

    const html = Handlebars.compile(template)(contextAndStubs)

    const temp = document.createElement('template')

    temp.innerHTML = html

    Object.entries(this.children).forEach(([_, component]) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`)

      if (!stub) {
        return
      }

      component.getContent()?.append(...Array.from(stub.childNodes))

      stub.replaceWith(component.getContent()!)
    });

    return temp.content
  }

  protected render (): DocumentFragment {
    return new DocumentFragment()
  }

  getContent () {
    return this.element
  }

  _makePropsProxy (props: P) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this

    return new Proxy(props, {
      get (target, prop: string) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set (target, prop: string, value) {
        const oldTarget = { ...target }

        target[prop as keyof P] = value

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target)
        return true
      },
      deleteProperty () {
        throw new Error('Нет доступа')
      },
    })
  }

  _createDocumentElement (tagName: string) {
    return document.createElement(tagName)
  }

  show () {
    this.getContent()!.style.display = 'block'
  }

  hide () {
    this.getContent()!.style.display = 'none'
  }
}

export default Block
