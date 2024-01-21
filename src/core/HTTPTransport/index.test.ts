/* eslint-disable @typescript-eslint/ban-ts-comment */
import { expect } from 'chai';
import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic} from 'sinon';
import { HTTPTransport, Method } from './index.ts';

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  const instance = new HTTPTransport('');
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-expect-error
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (req) => {
      requests.push(req);
    };
  });

  afterEach(() => {
    requests.length = 0;
    xhr.restore();
  });

  describe('Method', () => {
    it('get() should be called with GET method', () => {
      instance.get('/');
      expect(requests[0].method).to.eq(Method.Get);
    });

    it('post() should be called with POST method', () => {
      instance.post('/');
      expect(requests[0].method).to.eq(Method.Post);
    });

    it('put() should be called with PUT method', () => {
      const data = { key: 'value' };
      instance.put('/', data);
      expect(requests[0].method).to.eq(Method.Put);
    });

    it('delete() should be called with DELETE method', () => {
      instance.delete('/');
      expect(requests[0].method).to.eq(Method.Delete);
    });
  });
});

