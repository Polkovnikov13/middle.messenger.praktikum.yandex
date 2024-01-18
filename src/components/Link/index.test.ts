import { Link } from './index.ts';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Link', () => {
  it('should render', () => {
    new Link({ to: '/' });
  });

  it('element should return div', () => {
    const link = new Link({ to: '/' });
    const element = link.element;

    expect(element).to.be.instanceof(window.HTMLDivElement)
  });

  it('should be clickable', () => {
    const callback = sinon.stub();
    const props = {
      to: '/',
      text: 'Кнопка',
      events: {
        click: callback,
      },
    };
    const link = new Link(props);
    const element = link.element as HTMLDivElement;

    element.click();
    expect(callback.calledOnce).to.eq(true);
  });
});

