import ChatApi, { UsersData } from "../api/ChatApi";
import { WSMessage } from "../api/ChatWS";
import { store } from "../core/Store";
import { ChatWSController } from "./ChatWSController";


export class ChatController {

   static async getChat(){
        // eslint-disable-next-line no-useless-catch
        try { 
          const messages = await ChatApi.getChat();
          store.set('messages', messages);
        } catch (err) {
           console.log(err, 'ChatApi error');
        }
    }

   static async createChat(NameOfChat: string){
        try { 
          const answer = await ChatApi.createChat(NameOfChat);
          console.log(answer);
          ChatApi.chatAvatar
        } catch (err) {
          console.log(err,'ChatApi error');  
        }
    }

    static async deleteChat(id: number){
        try { 
          const answer = await ChatApi.deleteChat(id);
          console.log(answer);
        } catch (err) {
          console.log(err,'ChatApi error');  
        }
    }

    static async getFiles(id:number){
      try {
        await ChatApi.getFiles(id);
      } catch (err) {
        console.log(err)
      }
    }  
      
    static async addUsers(data: UsersData){
      try {
        const answer = await ChatApi.addUsers(data);
        console.log(answer,"getFiles");
      } catch (err) {
        console.log(err)
      }
    }

      static async deleteUsers(data: UsersData){
      try {
        const answer = await ChatApi.deleteUsers(data);
        console.log(answer)
      } catch (err) {
        console.log(err)
      }
    } 

      static async getIdsChat(chatId:number){
      try {
        const res = await ChatApi.getIdsChats(chatId);
        console.log(res)
        store.set('xFiles', res)
        } catch (err) {
          console.log(err,'getIdsChat')
        }
    }

      static async chatAvatar(data:FormData){
      try {
        const chatAva = await ChatApi.chatAvatar(data);
        console.log('chatAva',chatAva)
        await ChatController.getChat()
   } catch (err) {
            console.log(err, 'editAvatar error');  
        }
    }

      static async addPhoto(data:FormData){
      try {
        const images = await ChatApi.addPhoto(data);
        console.log('================================================================')
        await console.log('images!!!',images)
        await ChatWSController.sendPhoto({
          content: String(images.id),
          // eslint-disable-next-line max-len
          map: function (_arg0: (message: WSMessage) => { name: string | undefined; content: string; type?: string | undefined; chat_id?: number | undefined; file?: string | undefined; id?: number | undefined; is_read?: boolean | undefined; time?: string | undefined; user_id?: string | undefined; }): unknown {
            throw new Error("Function not implemented.");
          }
        })
        await ChatController.getChat()
   } catch (err) {
            console.log(err, 'addPhoto error');  
        }
    }

      static async getWsToken(chatId:number){
      try {
       const { token } = (await ChatApi.getConnectWsToken(chatId)) as unknown as {
        token: string;
      };
      ChatWSController.openWS(chatId, token);
      } catch (err) {
        console.log('Error TOKEN',err)
      }

      


      }
}
