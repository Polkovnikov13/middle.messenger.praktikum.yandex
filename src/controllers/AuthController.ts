import AuthApi, {ISignupData,ISigninData} from "../api/AuthApi";
import { store } from "../core/Store";
import router from '../core/Router'

export class AuthContoller {
    static async fetchUser(){
    // eslint-disable-next-line no-useless-catch
    try {
       const user = await AuthApi.getUser();
    //    console.log(user);
        store.set('user', user);
    } catch (err) {
        throw err;
    }
    }

    static async signin(data:ISigninData){
    try {
       await AuthApi.signin(data)
       await this.fetchUser();
        console.log('Зашли!')
        router.go('/messenger')
    } catch (err) {
         console.log(err, 'signIN error'); 
    }
    }

    static async signup(data: ISignupData ){
    try {
       await AuthApi.signup(data) 
       await this.fetchUser();

       router.go('/messenger')
    } catch (err) {
         console.log(err, 'signUP error'); 
    }
    }

    static async logout(){
    try {
        await AuthApi.logout()
        store.set('user',undefined)
        router.go('/')
        console.log('Вышли!')
   } catch (err) {
        console.log(err, 'logout error');
    }
    }
}
