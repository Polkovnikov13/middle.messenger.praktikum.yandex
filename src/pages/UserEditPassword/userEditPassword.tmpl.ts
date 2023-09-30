export const tmpl = `
<div class="user-profile">
  <img src="https://sneg.top/uploads/posts/2023-06/1687806511_sneg-top-p-avatarka-zaglushka-pinterest-3.png" class="user-avatar" alt="no pic">
 
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
</div>
`;