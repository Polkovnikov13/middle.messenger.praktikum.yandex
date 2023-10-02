export const tmpl = `
<div class="user-profile">
  <form onsubmit="">
     {{{avaAvatar}}}
  <div class="user-details">
    <div class="user-detail">
      <div class="detail-label">Старый пароль</div>
      {{{inputOldPassword}}}
    </div>
    <div class="user-detail">
      <div class="detail-label">Новый пароль</div>
      {{{inputNewPassword}}}
    </div>
    <div class="user-detail">
      <div class="detail-label">Повторите новый пароль</div>
      {{{inputNewRepeatPassword}}}
    </div>
  </div>
  <div class="user-detail-button">
  {{{saveButton}}}
  </div>
</form>
</div>
`;
