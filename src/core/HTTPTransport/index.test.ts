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

    //@ts-expect-error
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
      instance.put('/',{});
      expect(requests[0].method).to.eq(Method.Put);
    });
    it('delete() should be called with DELETE method', () => {
      instance.delete('/');
      expect(requests[0].method).to.eq(Method.Delete);
    });
  });

    it('post() should send data in the request body', () => {
      const data = { key: 'value' };
      instance.post('/', data);
      expect(requests[0].requestBody).to.eq(JSON.stringify(data));
});
    it('put() should send data in the request body', () => {
      const data = { key: 'value' };
      instance.put('/', data);
      expect(requests[0].requestBody).to.eq(JSON.stringify(data));
});
    it('patch() should send data in the request body', () => {
      const data = { key: 'value' };
      instance.patch('/', data);
      expect(requests[0].requestBody).to.eq(JSON.stringify(data));
});
    it('should set Content-Type header for POST requests', () => {
      const formData = new FormData();
      instance.post('/', formData);
      expect(requests[0].requestHeaders['Content-Type']).to.be.undefined;
});
    it('should send data as FormData for specific requests', () => {
      const formData = new FormData();
      instance.post('/', formData);
      expect(requests[0].requestBody).to.eq(null);
      zc 
});
});
