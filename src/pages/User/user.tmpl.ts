export const tmpl = `
<div class="user-profile">
        {{{avaAvatar}}}
  <div class="user-name">Иван</div>
  <div class="user-details">
    <div class="user-detail">
      <div class="detail-label">Почта</div>
      <div class="detail-value">artem@yandex.ru</div>
    </div>
    <div class="user-detail">
      <div class="detail-label">Логин</div>
      <div class="detail-value">Логин</div>
    </div>
    <div class="user-detail">
      <div class="detail-label">Имя</div>
      <div class="detail-value">Иван</div>
    </div>
    <div class="user-detail">
      <div class="detail-label">Фамилия</div>
      <div class="detail-value">Иванов</div>
    </div>
    <div class="user-detail">
      <div class="detail-label">Имя в чате</div>
      <div class="detail-value">Иван</div>
    </div>
    <div class="user-detail">
      <div class="detail-label">Телефон</div>
      <div class="detail-value">+799972223331</div>
    </div>
  </div>
  <div class="user-actions">
    <div class="edit-data">{{{editUserMainLink}}}</div>
    <div class="change-password">{{{editUserPasswordLink}}}</div>
    <div class="logout">{{{exitLink}}}</div>
  </div>
</div>
`;