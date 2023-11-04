import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';
import { Message } from '../../components/Message';
import { ChatController } from '../../controllers/ChatController';
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
      click: () => { this.handleAddUser(this.selectedMessageId); },
  }, 
})
    this.children.deleteUserButton = new Button({
    type: 'button',
    label: 'Удалить пользователя',
    class: 'delete-button',
      events: {
      click: () => { this.handleDeleteUser(this.selectedMessageId); },
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
      to: '/user',
      text: 'Вернуться на страницу пользователя',
  });
    // this.children.messageAnswer = new Message({
    // class: "chat-message-item chat-message-sent",
    // text: "User 1: Hello!",
    // })
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

async handleAddUser(messageId: any) {
  console.log('00000000');
  console.log(messageId);
  console.log('00000000');
  const formData = {
    login: this.children.inputAddUser.takeValue
  };
  console.log(formData);
  const res = await UserController.getUserByLogin(formData);
  if (res) { 
    console.log(res[0].id, '!!!');
    ChatController.addUsers({ users: [res[0].id], chatId: messageId });
  } else {
    console.log('res is null');
  }

  // Clear the inputAddUser field
  this.children.inputAddUser.clearInput();
}


async handleDeleteUser(messageId: any){
  console.log('00000000');
  console.log(messageId);
  console.log('00000000');
  const formData = {
    login: this.children.inputDeleteUser.takeValue
  };
  console.log(formData);
  const res = await UserController.getUserByLogin(formData);

  if (res) { // Проверка, что res не равно null
    console.log(res[0].id, '!!!');
    ChatController.deleteUsers({"users":[res[0].id],chatId:messageId});
  } else {
    // Обработка случая, когда res равно null
    console.log('res is null');
  }

  this.children.inputDeleteUser.clearInput();
}


    handleMessageValidation() {
    // GET CHATS!!!
    ChatController.getChat()
    const errorMessage = document.getElementById('chat-message-error');
        if (!this.children.inputMessage.isValidMessage) {
        if (errorMessage) { 
      errorMessage.classList.remove('visible'); 
      errorMessage.textContent = 'Сообщение не должно быть пустым!Введите текст';
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.add('hidden');
    }
        }
         console.log('!!!!!!!!!!!!!!!', this.selectedMessageId);    
         
    }

    handleDeleteClick(messageId: any) {
    // Удалите чат
    ChatController.deleteChat(messageId);
    // Опционально: обновите интерфейс, чтобы удалить чат из списка
    this.props.messages = this.props.messages.filter((chat: any) => chat.id !== Number(messageId));
    // Опционально: обновите ваш шаблон, чтобы удалить соответствующий элемент
    const chatElement = document.querySelector(`[data-message-id="${messageId}"]`);
    if (chatElement) {
        chatElement.remove();
    }
}


handleChatClick(messageId: any) {
    const chat = this.props.messages.find((chat: any) => chat.id === Number(messageId));
    console.log(chat);
    const messageIElement = document.querySelector('.chat-message-item.chat-message-received') as HTMLElement;
    const buttonContainer = document.querySelector('.button-container') as HTMLElement;
    const deleteMainWordElement = document.querySelector('.delete-main-word') as HTMLElement;

    if (messageIElement && buttonContainer && deleteMainWordElement) {
        if (chat) {
            // Если чат выбран, обновляем сообщение и показываем кнопки
            messageIElement.textContent = `${chat.last_message.user.login} : ${chat.last_message.content}`;
            messageIElement.removeAttribute('data-message-id');
            messageIElement.setAttribute('data-message-id', messageId);
            messageIElement.classList.remove('chat-message-item-hidden');

            // Показываем кнопки
            buttonContainer.classList.remove('button-container-hidden');
            
            // Скрываем 'delete-main-word' элемент
            deleteMainWordElement.style.display = 'none';

            this.selectedMessageId = messageId;
        } else {
            // Если чат не выбран, скрываем кнопки и показываем 'delete-main-word' элемент
            messageIElement.textContent = 'No message available for this chat.';
            buttonContainer.classList.add('button-container-hidden');
            deleteMainWordElement.style.display = 'block';
        }
    }
    // console.log(this.props,"this.props.")
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
  messages: state.messages
})

export const Chat = withStore(mapStateToProps)(BaseChat)

