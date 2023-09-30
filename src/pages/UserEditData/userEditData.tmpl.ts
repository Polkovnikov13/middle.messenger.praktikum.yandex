export const tmpl = `
<div class="user-profile">
  <img src="https://sneg.top/uploads/posts/2023-06/1687806511_sneg-top-p-avatarka-zaglushka-pinterest-3.png" class="user-avatar" alt="no pic">
  <div class="user-details">
    <div class="user-detail">
      <div class="detail-label">Почта</div>
      {{{inputEmail}}}
    </div>
    <div class="user-detail">
      <div class="detail-label">Логин</div>
       {{{inputLogin}}}
    </div>
    <div class="user-detail">
      <div class="detail-label">Имя</div>
     {{{inputName}}}
    </div>
    <div class="user-detail">
      <div class="detail-label">Фамилия</div>
      {{{inputSecondName}}}
    </div>
    <div class="user-detail">
      <div class="detail-label">Имя в чате</div>
      {{{inputDisplayName}}}
    </div>
    <div class="user-detail">
      <div class="detail-label">Телефон</div>
        {{{inputPhone}}}
    </div>
  </div>
  <div class="user-detail-button">
  {{{saveButton}}}
  </div>
</div>
`;