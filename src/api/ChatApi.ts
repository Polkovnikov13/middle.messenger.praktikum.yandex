import { API } from "./api";

export interface IMessage{
    avatar: string | null,
    created_by: number,
    title: string,
    token?: string,
    id: number,
    unread_count: number;
}

export interface UsersData{
    users: number[],
    chatId: number
}

class ChatApi extends API {
    constructor(){
    super("/chats");
    }

    async getChat(){
        return this.http.get<IMessage>('/');    
    }

    async createChat(string: string){
        return this.http.post('/',{ "title" : string })
    }

    async deleteChat(id: number){
        return this.http.delete('/', { "chatId": id });
  }

    async getFiles(id: number){
        return this.http.get(`/${id}/files`)
    }

    async addUsers(data: UsersData) {
        return this.http.put(`/users`,  data );
  }

    async deleteUsers(data: UsersData) {
        return this.http.delete('/users', data);
    }

     async chatAvatar(data:FormData) {
        return this.http.put('/avatar', data);
    }

    async getIdsChats(chatId:number){
        return this.http.get(`/${chatId}/users`)
    }

    async getConnectWsToken(chatId:number){
        return this.http.post(`/token/${chatId}/`)
    }



}


export default new ChatApi();
