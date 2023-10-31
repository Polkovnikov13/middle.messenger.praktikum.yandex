import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Message } from '../../components/Message';
import { ChatController } from '../../controllers/ChatController';
import Block from '../../core/Block';
import { IState, store, withStore } from '../../core/Store';
import './chat.scss';
import { tmpl } from './chat.tmpl';

export class BaseChat extends Block {
    constructor() {
        super('div',  mapStateToProps(store.getState()))
        ChatController.getChat()
    }

    init() {
    this.children.inputCreateChat = new Input({
      class:'chat-message-input-up',
      name: 'lenta-message',
      type: 'text',
      placeholder: 'Введите название нового чата...',
  //     events: {
  //     focus: () => { console.log(this.children.inputCreateChat.takeValue); },
  // }, 
    })

    this.children.createMessageButtonButton = new Button({
    type: 'submit',
    label: 'Создать',
    class: 'chat-send-button-up',
      events: {
      focus: () => { console.log(this.children.inputCreateChat.takeValue); },
      click: () => { this.createChatValidation(); }
  }, 
})

    this.children.inputDialog = new Input({
      class:'chat-message-input',
      name: 'lenta-message',
      type: 'text',
      placeholder: 'Поиск по названию чата...',
      events: {
      focus: () => { console.log(this.children.inputDialog.takeValue); },
  }, 
})
    this.children.inputMessage = new Input({
      class:'chat-message-input',
      name: 'message',
      type: 'text',
      placeholder: 'Сообщение...',
      events: {
      focus: () => { console.log(this.children.inputMessage.isValidMessage); },
      blur: () => { this.handleMessageValidation(); }
  }, 
})
    this.children.userAvatar = new Avatar({
    imageName: "https://i.pinimg.com/originals/01/4e/f2/014ef2f860e8e56b27d4a3267e0a193a.jpg" ,
    imageText: 'no photo',
    imageClass: 'chat-chat-img'
})
    this.children.MessageButton = new Button({
    type: 'button',
    label: 'Отправить',
    class: 'chat-send-button',
    events: { click: () => console.log('Отправилось!') },
})
    this.children.messageI = new Message({
    class: "chat-message-item chat-message-received",
    text: "User 1: Hi!",
    })
    this.children.messageAnswer = new Message({
    class: "chat-message-item chat-message-sent",
    text: "User 1: Hello!",
    })
    }

    createChatValidation(){
      ChatController.createChat(this.children.inputCreateChat.takeValue) 
    }
    handleMessageValidation() {
    // GET CHATS!!!
    ChatController.getChat()
    //CREATE CHATS!!!
    //ChatController.createChat('For Delete and Add Chat')
    // Delete chat
    //ChatController.deleteChat(31842)
    //ChatController.deleteChat(31870)  
    // Get Files
    //ChatController.getFiles(31798)
    
    // AddUsers
    // const formData = {
    //   "users": [1347900],
    //   "chatId": 31823
    // };
    // ChatController.addUsers(formData)
    //ChatController.deleteUsers(formData)

    const errorMessage = document.getElementById('chat-message-error');
        if (!this.children.inputMessage.isValidMessage) {
        if (errorMessage) { 
      errorMessage.classList.remove('visible'); 
      // eslint-disable-next-line max-len
      errorMessage.textContent = 'Сообщение не должно быть пустым!Введите текст';
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.add('hidden');
    }
        }
         console.log('!!!!!!!!!!!!!!!', this.props);
    }

    componentDidMount(): void {
    ChatController.getChat()
  }

    render() {
        return this.compile(tmpl, this.props);
    }
}

const mapStateToProps = (state: IState) => ({
  messages: state.messages
})

export const Chat = withStore(mapStateToProps)(BaseChat)

