import Handlebars from 'handlebars';
import { RESOURSES_URL } from '../../core/HTTPTransport';

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
         {{#if avatar}}
       <img src="${RESOURSES_URL}{{avatar}}" class='chat-chat-img' alt='no photo'/>
       {{else}}
      <img src="../../assets/avatars/avatar.jpg" class='chat-chat-img' alt='no photo'/>
      {{/if}}
        <div class="chat-info">
          <div class="chat-user">{{{title}}}</div>
          
          {{#if last_message}}
            {{#each last_message.messages}}
              <div class="chat-message">{{{content}}}</div>
            {{/each}}
          {{else}}
            <div class="chat-message">No messages available</div>
          {{/if}}
        </div>
        <div class="chat-time">
          {{#if last_message.time}}
            <div class="chat-time">{{formatTime last_message.time}}</div>
          {{/if}}
          <button class="chat-delete" data-message-id="{{id}}">Удалить</button>
        </div>
      </div>
    {{/each}}
  </div>

  <div class="chat-messages">
    <div class="chat-message-list">
      <div class="button-container">
        <div class="user-list">
          {{#each xFiles}}
            <div class="user-item">{{login}}</div>
          {{/each}}
        </div>

        {{#if mesId}}
          <!-- Секция, которая отображается, если mesId существует -->
          {{{inputChangeAvatar}}}
          {{{inputAddUser}}}  
          {{{addUserButton}}}
          {{{inputDeleteUser}}}
          {{{deleteUserButton}}}
        {{else}}
          <div class="delete-main-word">Выберите чат</div>
        {{/if}}
      </div>

      {{#each wsMessage}}
       {{#if file.path}}
          <img src="${RESOURSES_URL}{{{file.path}}}" class='chat-image' alt='no photo'/>
        {{else}}
        <div class="chat-message-item {{#if isSentMessage}}chat-message-sent{{else}}chat-message-received{{/if}}">
          {{{name}}}
          : 
          {{{content}}}
        </div>
         {{/if}}
      {{/each}}

      {{{messageAnswer2}}}
    </div>
    <div class="user-list">
      {{#each usersArray}}
        <div class="user-item">{{login}}</div>
      {{/each}}
    </div>

    {{#if selectedMessageId}}
      <div class="delete-main-word">Выберите чат</div>
    {{/if}}

    <span id="chat-message-error" class="chat-message-error"></span>
    <div class="chat-message-input">
      {{{inputMessage}}}
      {{{inputAddPhotoInChats}}}
      {{{MessageButton}}}
    </div>
  </div>
</div>
`

