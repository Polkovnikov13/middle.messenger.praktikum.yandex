/* eslint-disable max-len */
import { WS } from './ws';

export interface WSMessage  {
  map(arg0: (message: WSMessage) => { name: string | undefined; content: string; type?: string | undefined; chat_id?: number | undefined; file?: string | undefined; id?: number | undefined; is_read?: boolean | undefined; time?: string | undefined; user_id?: string | undefined; }): unknown;
  content: string;
  type?: string;
  chat_id?: number;
  file?: string;
  id?: number;
  is_read?: boolean;
  time?: string;
  user_id?: string;
}


class ChatWS extends WS {
  constructor() {
    super('/');
  }
  openWS(url: string) {
    return this.ws.connect(url);
  }

  sendWS(data: WSMessage) {
    return this.ws.send(data);
  }
  closeWS() {
    return this.ws.close();
  }
}

export default new ChatWS();
