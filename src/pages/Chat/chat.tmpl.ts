import Handlebars from 'handlebars';

Handlebars.registerHelper('formatTime', function (dateTime) {
    const date = new Date(dateTime);
    const utcDate = new Date(date.toUTCString());
    const hours = String(utcDate.getUTCHours()).padStart(2, '0');
    const minutes = String(utcDate.getUTCMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
});

export const tmpl = `
<div class="chat-container">
    <div class="chat-chats">
        <div class="home-user-link"> 
            {{{userPageLink}}}
        </div>
        <div class="chat-message-input">
            {{{inputDialog}}}
        </div>
        <div class="chat-message-input">
            {{{inputCreateChat}}}
            {{{createMessageButtonButton}}}
        </div>
        {{#each messages}}
            <div class="chat-chat" data-message-id="{{id}}">
                <img src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}" class='chat-chat-img' alt='no photo'/>
                <div class="chat-info">
                    <div class="chat-user">{{title}}</div>
                    <div class="chat-message">{{last_message.content}}</div>
                </div>
                <div class="chat-time">
                    <div class="chat-time">{{formatTime last_message.time}}</div>
                    <button class="chat-delete" data-message-id="{{id}}">Удалить</button>
                </div>
            </div>
        {{/each}}
    </div>
    <div class="chat-messages">
    <div class="delete-main-word">Выберите чат  </div>
        <div class="chat-message-list">
          <div class="button-container button-container-hidden">
          {{{inputAddUser}}}
    {{{addUserButton}}}
    {{{inputDeleteUser}}}
    {{{deleteUserButton}}}
</div>

            <div class="chat-message-item chat-message-received chat-message-item-hidden" data-message-id="0">
    {{text}}
</div>
            {{{messageAnswer}}}
        </div>
        <span id="chat-message-error"></span>
        <div class="chat-message-input">
            {{{inputMessage}}}
            {{{MessageButton}}}
        </div>
    </div>
</div>
`
