export const tmpl = `
<div class="chat-container">
    <div class="chat-chats">
        <div class="chat-message-input">
            {{{inputDialog}}}
        </div>
        <div class="chat-message-input">
            {{{inputCreateChat}}}
            {{{createMessageButtonButton}}}
        </div>
      {{#each messages}}
<div class="chat-chat">
  <img src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}" class='chat-chat-img' alt='no photo'/>
  <div class="chat-info">
    <div class="chat-user">{{created_by}}</div>
    <div class="chat-message">{{last_message.content}}</div>
  </div>
  <button class="delete-chat-button">Удалить</button>
</div>
{{/each}}
    </div>

    <div class="chat-messages">
        <div class="chat-message-list">
            {{{messageI}}}
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
