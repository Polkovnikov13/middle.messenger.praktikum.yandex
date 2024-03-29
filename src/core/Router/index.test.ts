import { expect } from 'chai';
import Router from './index.ts';
import sinon from 'sinon';
import Block from '../Block/index.ts';

describe('Router', () => {
  const sandbox = sinon.createSandbox();

  before(function () {
    sandbox.spy(Router, 'go');
    sandbox.spy(Router, 'back');
    sandbox.spy(Router, 'forward');
    sandbox.stub(Block);
  });

  beforeEach(function () {
    (Router as any).routes = [];
  });

  after(function () {
    sandbox.restore();
  });

  it('should increment length of routes', () => {
    Router.use('/any', Block).use('/new', Block).use('/new2', Block);
    const routes = (Router as any).routes;
    expect(routes).to.have.lengthOf(3);
  });

  it('should go by path', () => {
    const resultPath = '/any';
    Router.use(resultPath, Block).use('/new', Block).start();
    Router.go(resultPath);
    expect(window.location.pathname).to.eq(resultPath);
  });

  it('should go back', () => {
    Router.use('/any', Block).use('/new', Block).start();
    Router.back();
    const routes = (Router as any).routes;
    expect(routes).to.have.lengthOf(2);
  });

  it('should go forward', () => {
    Router.use('/some', Block).use('/new', Block).start();
    Router.forward();
    const routes = (Router as any).routes;
    expect(routes).to.have.lengthOf(2);
  });

  it('should render block content', () => {
    const resultPath = '/any';
    const blockSpy = sandbox.spy(Block.prototype, 'getContent');
    Router.use(resultPath, Block).start();
    Router.go(resultPath);
    expect(blockSpy.calledOnce).to.be.true;
  });
});

