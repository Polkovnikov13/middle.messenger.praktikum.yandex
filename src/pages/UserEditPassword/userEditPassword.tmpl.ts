export const tmpl = `
<div class="user-profile">
  <form onsubmit="event.preventDefault();">
     {{{avaAvatar}}}
  <div class="user-details">
    <div class="user-detail">
      <div class="detail-label">Старый пароль</div>
      {{{inputOldPassword}}}
    </div>
    <span id="error-message-Oldpassword"></span>
    <div class="user-detail">
      <div class="detail-label">Новый пароль</div>
      {{{inputNewPassword}}}
    </div>
    <span id="error-message-Newpassword"></span>
    <div class="user-detail spaced-input">
      <div class="detail-label">Повторите новый пароль</div>
      {{{inputNewRepeatPassword}}}
    </div>
     <span id="error-message-NewRepeatpassword"></span>
  </div>
  <div class="user-detail-button">
    {{{saveButton}}}
  </div>
</form>
</div>
`;

