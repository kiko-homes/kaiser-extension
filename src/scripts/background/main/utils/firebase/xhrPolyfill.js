import EventEmitter3 from 'eventemitter3';

export class XMLHttpRequestPolyfill {
  constructor() {
    this.eventEmitter = new EventEmitter3();
    this.requestHeaders = {};
    this.response = null;
  }

  addEventListener(eventName, listener) {
    this.eventEmitter.on(eventName, listener);
  }

  removeEventListener(eventName, listener) {
    this.eventEmitter.off(eventName, listener);
  }

  open(method, url) {
    this.method = method;
    this.url = url;
  }

  setRequestHeader(key, value) {
    this.requestHeaders[key] = value;
  }

  send(body) {
    this.controller = new AbortController();
    this.controller.signal.addEventListener('abort', () =>
      this.eventEmitter.emit('abort'),
    );
    fetch(this.url, {
      method: this.method,
      headers: this.requestHeaders,
      body,
      signal: this.controller.signal,
    })
      .then((response) => {
        this.status = response.status;
        this.responseHeaders = response.headers;
        return response.text();
      })
      .then((responseText) => {
        this.response = responseText;
        this.responseText = responseText;
        this.eventEmitter.emit('load');
      })
      .catch(() => this.eventEmitter.emit('error'));
  }

  abort() {
    this.controller.abort();
  }

  getResponseHeader(key) {
    return this.responseHeaders.get(key);
  }
}

global.globalThis.XMLHttpRequest = XMLHttpRequestPolyfill;
