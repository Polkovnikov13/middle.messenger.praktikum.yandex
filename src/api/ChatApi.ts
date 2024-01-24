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

export interface ChatsImages{
    id : number,
    filename?: string,
    created_by: number,
    user_id?: number,
    upload_date?: string,
    path?: string
}

class ChatApi extends API {
    constructor(){
    super("/");
    }

    async getChat(){
        return this.http.get<IMessage>('chats/');    
    }

    async createChat(string: string){
        return this.http.post('chats/',{ "title" : string })
    }

    async deleteChat(id: number){
        return this.http.delete('chats/', { "chatId": id });
  }

    async getFiles(id: number){
        return this.http.get(`chats/${id}/files`)
    }

    async addUsers(data: UsersData) {
        return this.http.put(`chats/users`,  data );
  }

    async deleteUsers(data: UsersData) {
        return this.http.delete('chats/users', data);
    }

     async chatAvatar(data:FormData) {
        return this.http.put('chats/avatar', data);
    }

    async addPhoto(data:FormData) {
        return this.http.post<ChatsImages>('resources', data);
    }

    async getIdsChats(chatId:number){
        return this.http.get(`chats/${chatId}/users`)
    }

    async getConnectWsToken(chatId:number){
        return this.http.post(`chats/token/${chatId}/`)
    }
}


export default new ChatApi();
