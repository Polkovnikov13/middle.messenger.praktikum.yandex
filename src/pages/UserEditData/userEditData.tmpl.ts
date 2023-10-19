export const tmpl = `
<div class="user-profile">
 <form onsubmit="event.preventDefault();">
      {{{avaAvatar}}} 
  <div class="user-details">
    <div class="user-detail">
      <div class="detail-label">Почта</div>
      {{{inputEmail}}}
    </div>
     <span id="error-email"></span>
    <div class="user-detail">
      <div class="detail-label">Логин</div>
       {{{inputLogin}}}
    </div>
      <span id="error-login"></span>
    <div class="user-detail">
      <div class="detail-label">Имя</div>
     {{{inputName}}}
    </div>
     <span id="error-name"></span>
    <div class="user-detail">
      <div class="detail-label">Фамилия</div>
      {{{inputSecondName}}}
    </div>
     <span id="error-second-name"></span>
    <div class="user-detail">
      <div class="detail-label">Имя в чате</div>
      {{{inputDisplayName}}}
    </div>
    <div class="user-detail">
      <div class="detail-label">Телефон</div>
        {{{inputPhone}}}
    </div>
    <span id="error-phone"></span>
  </div>
  <div class="user-detail-button">
  {{{saveButton}}}
  </div>
</form>
 </div>
 `
