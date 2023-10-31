import { API } from "./api";

export interface ISignupData {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
}
export interface ISigninData {
  login: string,
  password: string
}

export interface IUser {
  id: number,
  first_name: string,
  second_name: string,
  display_name: string,
  phone: string,
  login: string,
  avatar: string,
  email: string
}

class AuthApi extends API {
   constructor(){
   super('/auth');
    }

    async signup(data:ISignupData) {
     return this.http.post('/signup', data)
    }

    async signin(data:ISigninData) {
    return this.http.post('/signin', data)  
    }

    async logout(){
     return this.http.post('/logout')  
    }

    async getUser(){
    return this.http.get<IUser>('/user')
    }
}


export default new AuthApi();
