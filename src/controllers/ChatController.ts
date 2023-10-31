import ChatApi, { UsersData } from "../api/ChatApi";
import { store } from "../core/Store";


export class ChatController {

   static async getChat(){
        // eslint-disable-next-line no-useless-catch
        try { 
          // console.log(data)
          const messages = await ChatApi.getChat();
          store.set('messages', messages);
          console.log(messages,"answer");
        } catch (err) {
           throw err;
        }
    }

   static async createChat(NameOfChat: string){
        try { 
          const answer = await ChatApi.createChat(NameOfChat);
          console.log(answer,"answer createChat");
        } catch (err) {
          console.log(err,'ChatApi error');  
        }
    }

    static async deleteChat(id: number){
        try { 
          const answer = await ChatApi.deleteChat(id);
          console.log(answer,"answer deleteChat");
        } catch (err) {
          console.log(err,'ChatApi error');  
        }
    }

    static async getFiles(id:number){
      try {
        const answer = await ChatApi.getFiles(id);
        console.log(answer,"getFiles");
      } catch (err) {
        console.log(err)
      }
    }  
      
    static async addUsers(data: UsersData){
      try {
      console.log('data==>',data)
        const answer = await ChatApi.addUsers(data);
        console.log(answer,"getFiles");
      } catch (err) {
        console.log(err)
      }
    }

      static async deleteUsers(data: UsersData){
      try {
      console.log('data==>',data)
        const answer = await ChatApi.deleteUsers(data);
        console.log(answer,"getFiles");
      } catch (err) {
        console.log(err)
      }
    }
    

}
