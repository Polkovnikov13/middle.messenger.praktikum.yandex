const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

interface Options {
  method: string;
  data?: Record<string, any>;
  headers?: Record<string, string>;
  timeout?: number;
}

class HTTPTransport {
  request(url: string, options: Options, timeout = 5000): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const requestUrl = options.method === METHODS.GET && options.data ?
       `${url}?${queryStringify(options.data)}` : url;

      xhr.open(options.method, requestUrl);
      xhr.timeout = timeout;

      if (options.headers) {
        for (const key in options.headers) {
          if (options.headers.hasOwnProperty(key)) {
            xhr.setRequestHeader(key, options.headers[key]);
          }
        }
      }

      xhr.onload = function () {
        resolve(xhr.responseText);
      };
      xhr.ontimeout = function () {
        reject(new Error('Request timeout'));
      };
      xhr.onerror = function () {
        reject(new Error('Request failed'));
      };

      if (options.method !== METHODS.GET && options.data) {
        const data = JSON.stringify(options.data);
        xhr.send(data);
      } else {
        xhr.send();
      }
    });
  }

  get(url: string, options: Options = {}): Promise<string> {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  }

  put(url: string, options: Options = {}): Promise<string> {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  }

  post(url: string, options: Options = {}): Promise<string> {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  }

  delete(url: string, options: Options = {}): Promise<string> {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  }
}

