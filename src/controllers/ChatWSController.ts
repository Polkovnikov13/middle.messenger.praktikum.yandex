/* eslint-disable max-len */
import ChatWS, { WSMessage } from '../api/ChatWS';
import { store } from '../core/Store';
import { ChatController } from './ChatController';

export class ChatWSController {
  static async openWS(chatId: number, token: string) {
    try {
      this.closeWS();
      const { user } = store.getState();
      await ChatWS.openWS(`/${user?.id}/${chatId}/${token}`);
      await ChatWS.sendWS({
        content: '0',
        type: 'get old',
        map: function (_arg0: (message: WSMessage) => { name: string | undefined; content: string; type?: string | undefined; chat_id?: number | undefined; file?: string | undefined; id?: number | undefined; is_read?: boolean | undefined; time?: string | undefined; user_id?: string | undefined; }): unknown {
          throw new Error('Function not implemented.');
        }
      });
    } catch (err) {
      console.log('Ошибка открытия WebSocket-соединения: ', err);
    }
  }

  static async sendMessage(data: WSMessage) {
    try {
      data = { ...data, type: 'message' };
      await ChatWS.sendWS(data);
      await ChatWS.sendWS({
        content: '0',
        type: 'get old',
        map: function (_arg0: (message: WSMessage) => { name: string | undefined; content: string; type?: string | undefined; chat_id?: number | undefined; file?: string | undefined; id?: number | undefined; is_read?: boolean | undefined; time?: string | undefined; user_id?: string | undefined; }): unknown {
          throw new Error('Function not implemented.');
        }
      });
      await ChatController.getChat();
    } catch (err) {
      console.log('Ошибка отправки сообщения: ', err);
    }
  }
    // Фото уже попадает в массив сокет сообщений(осталось прочитать его)
    static async sendPhoto(data: WSMessage) {
    try {
      console.log(data)
      data = { ...data, type: 'file' };
      await ChatWS.sendWS(data);
      await ChatWS.sendWS({
        content: '0',
        type: 'get old',
        map: function (_arg0: (message: WSMessage) => { name: string | undefined; content: string; type?: string | undefined; chat_id?: number | undefined; file?: string | undefined; id?: number | undefined; is_read?: boolean | undefined; time?: string | undefined; user_id?: string | undefined; }): unknown {
          throw new Error('Function not implemented.');
        }
      });
      await ChatController.getChat();
    } catch (err) {
      console.log('Ошибка отправки сообщения: ', err);
    }
  }

  static async closeWS() {
    try {
      await ChatWS.closeWS();
    } catch (err) {
      console.log('Ошибка закрытия WebSocket-соединения: ', err);
    }
  }
}
