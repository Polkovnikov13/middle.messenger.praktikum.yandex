import { IUser } from "./AuthApi";
import { API } from "./api";

export interface UserEdit {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

export interface UserEditPassword {
  oldPassword: string,
  newPassword: string,
}

export interface UserFindById {
  login: string,
}


export class UserApi extends API{
    constructor(){
    super('/user')
    }

    async editData(data:UserEdit){
        return this.http.put('/profile',data)
    }

    async editPassword(data:UserEditPassword){
        return this.http.put('/password',data)
    }

    async editAvatar(data:FormData){
         return this.http.put('/profile/avatar', data);
    }

    async getUserById(id:number){
         return this.http.get(`/${id}`);
    }

    async getUserByLogin(login:UserFindById):Promise<IUser[] | null> {
          return this.http.post('/search', login);
    }

}

export default new UserApi();
