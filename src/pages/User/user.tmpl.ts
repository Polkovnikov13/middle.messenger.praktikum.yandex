export const tmpl = `
<div class="user-profile">
        {{{avaAvatar}}}
        {{{inputAvatar}}}
  <div class="user-name">{{display_name}}</div>
  <div class="user-details">
    <div class="user-detail">
      <div class="detail-label">Почта</div>
      <div class="detail-value">{{email}}</div>
    </div>
    <div class="user-detail">
      <div class="detail-label">Логин</div>
      <div class="detail-value">{{login}}</div>
    </div>
    <div class="user-detail">
      <div class="detail-label">Имя</div>
      <div class="detail-value">{{first_name}}</div>
    </div>
    <div class="user-detail">
      <div class="detail-label">Фамилия</div>
      <div class="detail-value">{{second_name}}</div>
    </div>
    <div class="user-detail">
      <div class="detail-label">Имя в чате</div>
      <div class="detail-value">{{display_name}}</div>
    </div>
    <div class="user-detail">
      <div class="detail-label">Телефон</div>
      <div class="detail-value">{{phone}}</div>
    </div>
  </div>
  <div class="user-actions">
    <div class="edit-data">{{{editUserMainLink}}}</div>
    <div class="change-password">{{{editUserPasswordLink}}}</div>
    <div class="logout">{{{exitButton}}}</div>
  </div>
</div>
`

