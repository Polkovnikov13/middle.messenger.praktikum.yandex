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

it('should set href correctly', () => {
  const to = '/path';
  const link = new Link({ to });
  const element = link.element as HTMLDivElement;

  expect(element.getAttribute('data-href')).to.equal(to);
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
  it('should not set event handlers when events are not provided', () => {
  const link = new Link({ to: '/' });
  const element = link.element as HTMLDivElement;
  expect(element.onclick).to.be.null;
});
  it('should render text correctly', () => {
  const text = 'Ссылка';
  const link = new Link({ to: '/', text });
  const element = link.element as HTMLDivElement;
  expect(element.textContent).to.equal(text);
});
  it('should not render text when text is not provided', () => {
  const link = new Link({ to: '/' });
  const element = link.element as HTMLDivElement;
  expect(element.textContent).to.equal('');
});


});

