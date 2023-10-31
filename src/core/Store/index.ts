import { IUser } from "../../api/AuthApi";
import { EventBus } from "../EventBus";
import { set } from "../../utils";
import Block from "../Block";
import { IMessage } from "../../api/ChatApi";

export interface IState {
    user?: IUser;
    messages?: IMessage[]
}


enum StoreEvents {
Update = "Update"
}

class Store extends EventBus {
    state : IState = {}

    constructor(){
    super();


    }

    getState(): IState{
    console.log("getState",this.state);
    return this.state;
    }

    set(path:string,value:unknown){
        set(this.state,path,value);

        this.emit(StoreEvents.Update, this.getState())
    }
}

const store = new Store()

export const withStore = (mapStateToProps : (data: IState) => any)=> {
 return (Component: typeof Block) => {
    return class extends Component {
        constructor(tagName: string, props:any){
            super(tagName,{...props,...mapStateToProps(store.getState())});

            store.on(StoreEvents.Update, ()=> {
            const newProps = mapStateToProps(store.getState());

            this.setProps(newProps);
            })
        }
    }
  }
};


export {store}
