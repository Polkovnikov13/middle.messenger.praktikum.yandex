import UserApi, { UserEdit, UserEditPassword, UserFindById, } from "../api/UserApi";
import { store } from "../core/Store";
import router from '../core/Router'

export class UserController {

    static async editData(data: UserEdit){
        try {
            const user = await UserApi.editData(data);
            console.log(user,'UserController')
            store.set('user', user);
            router.go('/user')
        } catch (err) {
            console.log(err, 'UserController error');  
        }
    }

    static async editPassword(data: UserEditPassword){
        try {
            const password = await UserApi.editPassword(data)
            console.log(password,'editPassword')
            router.go('/user')
        } catch (err) {
            console.log(err, 'editPassword error');  
        }
    }

    static async editAvatar(data:FormData){
    try {
        const user = await UserApi.editAvatar(data);
        console.log(user, "editAvatar")
        store.set('user', user);
   } catch (err) {
            console.log(err, 'editAvatar error');  
        }
    }

      static async getUserById(id:number){
    try {
        const user = await UserApi.getUserById(id);
        console.log(user, "getUserById")
   } catch (err) {
            console.log(err, 'getUserById error');  
        }
    }

      static async getUserByLogin(login:UserFindById): Promise<T>{
    try {
        const user = await UserApi.getUserByLogin(login);
        console.log(user, "getUserByLogin")
        return user;
   } catch (err) {
            console.log(err, 'getUserById error');  
        }
    }

}
