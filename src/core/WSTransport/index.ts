import { EventBus } from "../EventBus";
import { store } from "../Store";

export enum WSTransportEvents {
  Connected = 'Connected',
  Error = 'Error',
  Message = 'Message',
  Close = 'Close',
}

export class WSTransport extends EventBus{
  private socket?: WebSocket ;
  private pingInterval?: ReturnType<typeof setInterval>;
  private readonly pingIntervalTime = 30000;
<<<<<<< HEAD

  constructor(_url: string) {
    super();
=======
  private url: string;

  constructor(url: string) {
    super();
    this.url = url;
>>>>>>> changes1.0
  }

public send(data: string | number| object) {
    if (!this.socket) {
      throw new Error('Socket is not connected');
    }

    this.socket.send(JSON.stringify(data));
  }

  public connect(endpoint:string): Promise<void> {
    if(this.socket) {
        throw new Error('Socket is already connected');
    } 

    this.socket = new WebSocket('wss://ya-praktikum.tech/ws/chats/'+ endpoint)
    this.subscribe(this.socket);
    this.setupPing();

   return new Promise((resolve, rej) => {
      this.on(WSTransportEvents.Error, rej);
      this.on(WSTransportEvents.Connected, () => {
        this.off(WSTransportEvents.Error, rej);
        resolve();
      });
    });
  }

  public close() {
    this.socket?.close();
    this.socket = undefined;
    clearInterval(this.pingInterval);
  }

  private setupPing() {
    this.pingInterval = setInterval(() => {
      this.send({ type: 'ping' });
    }, this.pingIntervalTime);

    this.on(WSTransportEvents.Close, () => {
      clearInterval(this.pingInterval);
      this.pingInterval = undefined;
    });
  }

  private subscribe(socket: WebSocket) {
    socket.addEventListener('open', () => {
      this.emit(WSTransportEvents.Connected);
    });
    socket.addEventListener('close', () => {
      this.emit(WSTransportEvents.Close);
    });
    socket.addEventListener('error', (e) => {
      this.emit(WSTransportEvents.Error, e);
    });
    socket.addEventListener('message', (message: MessageEvent<any>) => {
      try {
        const data = JSON.parse(message.data);
        if (['pong', 'user connected'].includes(data?.type)) {
          return;
        }
        this.emit(WSTransportEvents.Message, data);
       
        data.reverse()
        store.set("wsMessage", data)
      } catch (e) {
        console.log('ошибка: ', e);
      }
    });
  }
}
