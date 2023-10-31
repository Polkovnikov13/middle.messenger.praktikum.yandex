import { WSTransport } from '../core/WSTransport';

export abstract class WS {
  protected ws: WSTransport;

  protected constructor(endpoint: string) {
    this.ws = new WSTransport(endpoint);
  }
}
