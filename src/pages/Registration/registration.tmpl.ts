export const tmpl = `
<div class="registration-container">Регистрация
<form onsubmit="event.preventDefault();">
  {{{inputEmail}}}
  {{{inputLogin}}}
  {{{inputName}}}
  {{{inputSecondName}}}
  {{{inputPhone}}}
  {{{inputPassword}}}
  {{{inputConfirmPassword}}}
  <div class="registration-link">
    {{{MainButton}}}
  </div>
</form>
</div>
`
