import UserApi, { UserEdit, UserEditPassword, UserFindById, } from "../api/UserApi";
import { store } from "../core/Store";
import router from '../core/Router'
import { IUser } from "../api/AuthApi";

export class UserController {

    static async editData(data: UserEdit){
        try {
            const user = await UserApi.editData(data);
            store.set('user', user);
            router.go('/settings')
        } catch (err) {
            console.log(err, 'UserController error');  
        }
    }

    static async editPassword(data: UserEditPassword){
        try {
            await UserApi.editPassword(data)
            router.go('/settings')
        } catch (err) {
            console.log(err, 'editPassword error');  
        }
    }

    static async editAvatar(data:FormData){
    try {
        const user = await UserApi.editAvatar(data);
        store.set('user', user);
   } catch (err) {
            console.log(err, 'editAvatar error');  
        }
    }

      static async getUserById(id:number){
    try {
        const user = await UserApi.getUserById(id);
        console.log('USER',user);
   } catch (err) {
            console.log(err, 'getUserById error');  
        }
    }

static async getUserByLogin(login: UserFindById): Promise<IUser[] | null> {
  try {
    const user = await UserApi.getUserByLogin(login);
    return user;
  } catch (err) {
    console.log(err, 'getUserByLogin error');
    return null;
  }
}


}
