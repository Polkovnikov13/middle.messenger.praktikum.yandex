export const tmpl = `
<div class="chat-container">
    <div class="chat-chats">
     <div class="chat-message-input">
           {{{inputDialog}}}
        </div>
        <div class="chat-chat">
            {{{userAvatar}}}
            <div class="chat-info">
                <div class="chat-user">User 1</div>
                <div class="chat-message">Last message from User 1</div>
            </div>
        </div>
        <div class="chat-chat">
            {{{userAvatar2}}}
            <div class="chat-info">
                <div class="chat-user">User 2</div>
                <div class="chat-message">Last message from User 2</div>
            </div>
        </div>       
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
