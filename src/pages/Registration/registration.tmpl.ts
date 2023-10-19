export const tmpl = `
<div class="registration-container">Регистрация
<form onsubmit="event.preventDefault();">
  {{{inputEmail}}}
  <span id="error-message-email"></span>
  {{{inputLogin}}}
   <span id="reg-error-message-login"></span>
  {{{inputName}}}
  <span id="error-message-name"></span>
  {{{inputSecondName}}}
  <span id="error-message-second-name"></span>
  {{{inputPhone}}}
   <span id="error-message-phone"></span>
  {{{inputPassword}}}
  <span id="reg-error-message-password"></span>
  {{{inputConfirmPassword}}}
    <span id="error-message-password-confirm"></span>
  <div class="registration-link">
    {{{MainButton}}}
  </div>
</form>
</div>
`
