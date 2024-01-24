/* eslint-disable max-len */
import { WSMessage } from '../../api/ChatWS';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';
import { Message } from '../../components/Message';
import { ChatController } from '../../controllers/ChatController';
import { ChatWSController } from '../../controllers/ChatWSController';
import { UserController } from '../../controllers/UserController';
import Block from '../../core/Block';
import { IState, store, withStore } from '../../core/Store';
import './chat.scss';
import { tmpl } from './chat.tmpl';


export class BaseChat extends Block {
  constructor() {
    super('div',  mapStateToProps(store.getState()))
    ChatController.getChat()
    this.state = {
      chatSelected: false,
      selectedMessageId: null
    };
  }

    init() {
    this.children.inputCreateChat = new Input({
      class:'chat-message-input-up',
      name: 'lenta-message',
      type: 'text',
      placeholder: 'Введите название нового чата...',
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
this.children.addUserButton = new Button({
  type: 'button',
  label: 'Добавить пользователя',
  class: 'add-button',
  events: {
    click: () => { 
      if (this.props.mesId) {
        this.handleAddUser(this.props.mesId); 
      } else {
        console.log('No selected message id');
      }
    },
  }, 
})

    this.children.deleteUserButton = new Button({
    type: 'button',
    label: 'Удалить пользователя',
    class: 'delete-button',
      events: {
      click: () => { this.handleDeleteUser(this.props.mesId); },
  }, 
})
    this.children.inputAddUser = new Input({
      class:'chat-message-input',
      name: 'lenta-message',
      type: 'text',
      placeholder: 'Логин чтобы добавить пользователя...',
      events: {
      change: () => { console.log(this.children.inputAddUser.takeValue); },
  }, 
})
    this.children.inputDeleteUser = new Input({
      class:'chat-message-input',
      name: 'lenta-message',
      type: 'text',
      value:"",
      placeholder: 'Логин чтобы удалить пользователя...',
      events: {
      change: () => { console.log(this.children.inputDeleteUser.takeValue); },
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
    this.children.userPageLink = new Link({
      to: '/settings',
      text: 'Вернуться на страницу пользователя',
  });
    this.children.messageAnswer = new Message({
    class: "chat-message-item chat-message-sent",
    text: "User 1: Hello!",
    })
    this.children.inputChangeAvatar = new Input({
    placeholder: 'Картинка чата',
    name: 'avatar',
    type: 'file',
    class: 'detail-value',
    events: {
        change: (event) => { this.changeAvatar(event); }
    },
  });
    this.children.inputAddPhotoInChats = new Input({
    placeholder: 'Вставить фото',
    name: 'avatar',
    type: 'file',
    class: 'detail-value',
    events: {
        change: (event) => { this.addPhotoToChat(event); }
    },
  });
    this.children.messageI = new Message({
    class: "chat-message-item chat-message-received",
    text: "User 1: Hello!",
    })
    }
    
    async createChatValidation(){
     await ChatController.createChat(this.children.inputCreateChat.takeValue) 
     await ChatController.getChat()
     this.children.inputCreateChat.clearInput()
    }

async handleAddUser(messageId:any) {
  messageId = this.props.mesId
  console.log("handleAddUser called with messageId:", messageId);
  const formData = {
    login: this.children.inputAddUser.takeValue
  };
  const res = await UserController.getUserByLogin(formData);
  console.log(res);
  if (res) { 
    ChatController.addUsers({ users: [res[0].id], chatId: messageId });
  } else {
    console.log('res is null');
  }
  // Clear the inputAddUser field
  this.children.inputAddUser.clearInput();
  console.log("this.selectedMessageId after handleAddUser:", this.selectedMessageId);
}

async handleDeleteUser(messageId:any){
messageId = this.props.mesId
  console.log("handleDeleteUser called with messageId:", this.props.mesId);
  const formData = {
    login: this.children.inputDeleteUser.takeValue
  };
  const res = await UserController.getUserByLogin(formData);
  if (res) { // Проверка, что res не равно nulls
    ChatController.deleteUsers({"users":[res[0].id],chatId:messageId});
  } else {
    // Обработка случая, когда res равно null
    console.log('res is null');
  }
  this.children.inputDeleteUser.clearInput();
}

    changeAvatar(e:Event) {
    const inputElement = e.target as HTMLInputElement;
    if (inputElement.files) {
        const formData = new FormData();
        const file = inputElement.files[0]
        formData.append('avatar', file);
        const res = this.props.mesId
        formData.append('chatId', String(res));
        ChatController.chatAvatar(formData);
    }
    setTimeout(() => {
    inputElement.value = '';
    this.children.inputChangeAvatar.setProps({ placeholder: 'Выберите файл' });
    },2000)
}
   //Фото уже попадает в массив сокет сообщений(осталось прочитать его)
    async addPhotoToChat(e:Event) {
    const inputElement = e.target as HTMLInputElement;
     if (inputElement.files) {
        const formData = new FormData();
        const file = inputElement.files[0];
        formData.append('resource', file);
        await ChatController.addPhoto(formData) 
     }
}

handleMessageValidation() {
    // GET CHATS!!!
    ChatController.getChat();
    const errorMessage = document.getElementById('chat-message-error');
    const messageContent = this.children.inputMessage.takeValue.trim(); // Получаем текст сообщения и удаляем пробелы с обеих сторон
    console.log(messageContent)
    if (!this.children.inputMessage.isValidMessage || messageContent === '') {
        if (errorMessage) { 
            errorMessage.classList.remove('visible'); 
            errorMessage.textContent = 'Сообщение не должно быть пустым! Введите текст';
        }
    } else {
        if (errorMessage) {
            errorMessage.classList.add('hidden');
        }

        // Проверяем, что сообщение не состоит только из пробелов
        if (messageContent !== '') {
            //Чтобы текст вставлялся
            ChatWSController.sendMessage({
              content: messageContent,
              map: function (_arg0: (message: WSMessage) => { name: string | undefined; content: string; type?: string | undefined; chat_id?: number | undefined; file?: string | undefined; id?: number | undefined; is_read?: boolean | undefined; time?: string | undefined; user_id?: string | undefined; }): unknown {
                throw new Error('Function not implemented.');
              }
            });  
            this.children.inputMessage.clearInput();
        }
    }
}


handleDeleteClick(messageId: any) {
    // Удалите чат
    console.log(messageId, '<=====messageId=====|');
    ChatController.deleteChat(messageId);
    // Обновите интерфейс
    store.set('messages', this.props.messages.filter((chat: any) => chat.id !== Number(messageId)));
    // Опционально: обновите ваш шаблон, чтобы удалить соответствующий элемент
    const chatElement = document.querySelector(`[data-message-id="${messageId}"]`);
    if (chatElement) {
        chatElement.remove();
    }
}


 handleChatClick(messageId: any) {
    console.log("handleChatClick called with messageId:", messageId);
    const chat = this.props.messages.find((chat: any) => chat.id === Number(messageId));
    
    store.set('mesId',messageId)
    const usersArray = ChatController.getIdsChat(messageId)
    console.log(usersArray)
    ChatController.getWsToken(messageId)
    
    const messageIElement = document.querySelector('.chat-message-item.chat-message-received') as HTMLElement;
    const buttonContainer = document.querySelector('.button-container') as HTMLElement;
    const deleteMainWordElement = document.querySelector('.delete-main-word') as HTMLElement;

    if (messageIElement && buttonContainer && deleteMainWordElement) {
        if (chat && chat.last_message) {
            const userLogin = chat.last_message.user ? chat.last_message.user.login : 'Unknown User';
            const content = chat.last_message.content || 'No message content';
            
         
            messageIElement.removeAttribute('data-message-id');
            messageIElement.setAttribute('data-message-id', messageId);
            messageIElement.classList.remove('chat-message-item-hidden');
            messageIElement.textContent = `${userLogin} : ${content}`;

            buttonContainer.classList.remove('button-container-hidden');
            deleteMainWordElement.style.display = 'none';
            this.selectedMessageId = messageId;
           
        } else {
            console.log('No valid chat or message:', chat);

            messageIElement.removeAttribute('data-message-id');
            messageIElement.setAttribute('data-message-id', messageId);
            messageIElement.classList.remove('chat-message-item-hidden');
            messageIElement.textContent = 'No message available for this chat.';

            buttonContainer.classList.remove('button-container-hidden');
            deleteMainWordElement.style.display = 'none';
            this.selectedMessageId = messageId;
           
        }
    }
       
}
    componentDidMount(): void {
    ChatController.getChat()
  }

render() {
        const template = this.compile(tmpl, this.props);
        const chatElements = template.querySelectorAll('.chat-chat');
        const chatDelete = template.querySelectorAll('.chat-delete');
        chatDelete.forEach((chatElement) => {
            const messageId = chatElement.getAttribute('data-message-id');
            chatElement.addEventListener('click', () => this.handleDeleteClick(messageId)); 
        });
        chatElements.forEach((chatElement) => {
            const messageId = chatElement.getAttribute('data-message-id');
            chatElement.addEventListener('click', () => this.handleChatClick(messageId));
        });
        return template;
    }

}

const mapStateToProps = (state: IState) => ({
  messages: state.messages,
  wsMessage: state.wsMessage ? state.wsMessage.map((message: WSMessage) => {
    const foundUser = state.xFiles?.find((user:any) => user.id === message.user_id);
    const name = foundUser ? foundUser.login : "Фиксик";
    const isSentMessage = message.user_id === state.user?.id; // Проверка, отправлено ли сообщение текущим пользователем
    return { ...message, name, isSentMessage };
  }) : [],
  mesId: state.mesId,
  xFiles: state.xFiles,
});


export const Chat = withStore(mapStateToProps)(BaseChat)

